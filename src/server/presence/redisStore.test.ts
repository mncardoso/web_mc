import { describe, expect, it, vi } from 'vitest';

import { PRESENCE_CONFIG } from '@/features/presence/protocol';
import { createRedisPresenceStore } from '@/server/presence/redisStore';

function createFakeRedis() {
  const hash = new Map<string, string>();

  return {
    hash,
    hset: vi.fn(async (_key: string, fields: Record<string, unknown>) => {
      for (const [id, value] of Object.entries(fields)) {
        hash.set(
          id,
          typeof value === 'string' ? value : JSON.stringify(value),
        );
      }
      return hash.size;
    }),
    hgetall: vi.fn(async () => {
      const out: Record<string, unknown> = {};
      for (const [id, value] of hash) {
        try {
          out[id] = JSON.parse(value) as unknown;
        } catch {
          out[id] = value;
        }
      }
      return out;
    }),
    hdel: vi.fn(async (_key: string, ...ids: string[]) => {
      for (const id of ids) hash.delete(id);
      return ids.length;
    }),
    del: vi.fn(async () => {
      hash.clear();
      return 1;
    }),
  };
}

describe('redis presence store', () => {
  it('shares peers across store instances using the same redis', async () => {
    const redis = createFakeRedis();
    const a = createRedisPresenceStore(PRESENCE_CONFIG, redis as never);
    const b = createRedisPresenceStore(PRESENCE_CONFIG, redis as never);

    await a.upsert({ id: 'visitor-a', x: 0.2, y: 0.3 }, 1_000);
    await b.upsert({ id: 'visitor-b', x: 0.7, y: 0.8 }, 1_000);

    const snap = await a.snapshot('visitor-a', 1_000);
    expect(snap.mode).toBe('dots');
    if (snap.mode !== 'dots') return;
    expect(snap.peers.map((p) => p.id)).toEqual(['visitor-b']);
    expect(snap.active).toBe(2);
  });

  it('prunes stale hash fields', async () => {
    const redis = createFakeRedis();
    const store = createRedisPresenceStore(
      { ...PRESENCE_CONFIG, ttlMs: 1_000 },
      redis as never,
    );

    await store.upsert({ id: 'old', x: 0.5, y: 0.5 }, 0);
    expect(await store.size(2_000)).toBe(0);
    expect(redis.hdel).toHaveBeenCalled();
  });
});
