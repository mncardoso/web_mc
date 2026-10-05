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
  redis = Redis.fromEnv(),
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
      await redis.hset(HASH_KEY, {
        [peer.id]: JSON.stringify(payload),
      });
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
