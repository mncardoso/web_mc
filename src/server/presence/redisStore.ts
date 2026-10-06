import { Redis } from '@upstash/redis';

import { PRESENCE_CONFIG } from '@/features/presence/protocol';
import type { PresenceConfig } from '@/features/presence/types';

import {
  buildPresenceSnapshot,
  normalizePresenceUpdate,
  type InternalPeer,
  type PresenceStore,
} from './shared';

const HASH_KEY = 'mc:presence:peers';

type PeerPayload = {
  x: number;
  y: number;
  t: number;
};

/** Trim — Netlify UI / .env often wrap values in quotes or trailing newlines. */
export function createUpstashRedisFromEnv(): Redis {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim().replace(/^["']|["']$/g, '');
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim().replace(
    /^["']|["']$/g,
    '',
  );
  if (!url || !token) {
    throw new Error('upstash_env_missing');
  }
  if (!/^https:\/\//i.test(url)) {
    throw new Error(
      'upstash_url_invalid: REST URL must start with https:// (not rediss://)',
    );
  }
  return new Redis({ url, token });
}

export function classifyPresenceStoreError(error: unknown): string {
  const msg = error instanceof Error ? error.message : String(error);
  const cause =
    error instanceof Error && error.cause instanceof Error
      ? error.cause.message
      : error instanceof Error && error.cause
        ? String(error.cause)
        : '';
  const text = `${msg} ${cause}`;

  if (/upstash_env_missing/i.test(text)) return 'redis_env';
  if (/upstash_url_invalid|invalid URL|starting with https/i.test(text)) {
    return 'redis_url';
  }
  if (/unauthoriz|forbidden|401|403|invalid token|WRONGPASS/i.test(text)) {
    return 'redis_auth';
  }
  if (/ENOTFOUND|ECONNREFUSED|ETIMEDOUT|fetch failed|network|DNS/i.test(text)) {
    return 'redis_network';
  }
  return 'redis_error';
}

/** Safe snippet for ops — never includes token. */
export function presenceErrorDetail(error: unknown): string {
  const msg = error instanceof Error ? error.message : String(error);
  const cause =
    error instanceof Error && error.cause instanceof Error
      ? error.cause.message
      : '';
  const host = (() => {
    try {
      const raw = process.env.UPSTASH_REDIS_REST_URL?.trim().replace(
        /^["']|["']$/g,
        '',
      );
      return raw ? new URL(raw).host : '';
    } catch {
      return 'unparseable-url';
    }
  })();
  return [host && `host=${host}`, msg, cause && `cause=${cause}`]
    .filter(Boolean)
    .join(' | ')
    .slice(0, 240);
}

function parsePeer(id: string, raw: unknown): InternalPeer | null {
  if (raw == null) return null;

  let data: PeerPayload | null = null;
  if (typeof raw === 'string') {
    try {
      data = JSON.parse(raw) as PeerPayload;
    } catch {
      return null;
    }
  } else if (typeof raw === 'object') {
    data = raw as PeerPayload;
  }

  if (
    !data ||
    typeof data.x !== 'number' ||
    typeof data.y !== 'number' ||
    typeof data.t !== 'number'
  ) {
    return null;
  }

  return { id, x: data.x, y: data.y, t: data.t };
}

/**
 * Shared presence across serverless isolates via Upstash Redis.
 * Requires UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN.
 */
export function createRedisPresenceStore(
  config: PresenceConfig = PRESENCE_CONFIG,
  redis: Redis = createUpstashRedisFromEnv(),
): PresenceStore {
  const pruneStale = async (
    entries: Record<string, unknown>,
    now: number,
  ): Promise<InternalPeer[]> => {
    const live: InternalPeer[] = [];
    const stale: string[] = [];

    for (const [id, raw] of Object.entries(entries)) {
      const peer = parsePeer(id, raw);
      if (!peer) {
        stale.push(id);
        continue;
      }
      if (now - peer.t > config.ttlMs) {
        stale.push(id);
        continue;
      }
      live.push(peer);
    }

    if (stale.length > 0) {
      await redis.hdel(HASH_KEY, ...stale);
    }

    return live;
  };

  return {
    async upsert(update, now = Date.now()) {
      const peer = normalizePresenceUpdate(update, now);
      if (!peer) return;

      const payload: PeerPayload = { x: peer.x, y: peer.y, t: peer.t };
      // Object form — Upstash JSON-encodes once.
      await redis.hset(HASH_KEY, { [peer.id]: payload });
    },

    async snapshot(excludeId, now = Date.now()) {
      const entries =
        (await redis.hgetall<Record<string, unknown>>(HASH_KEY)) ?? {};
      const live = await pruneStale(entries, now);
      return buildPresenceSnapshot(live, excludeId, config, now);
    },

    async size(now = Date.now()) {
      const entries =
        (await redis.hgetall<Record<string, unknown>>(HASH_KEY)) ?? {};
      const live = await pruneStale(entries, now);
      return live.length;
    },

    async clear() {
      await redis.del(HASH_KEY);
    },
  };
}
