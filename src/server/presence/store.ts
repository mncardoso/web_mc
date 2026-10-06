import { createMemoryPresenceStore, type PresenceStore } from './shared';
import { createRedisPresenceStore } from './redisStore';

export { createMemoryPresenceStore, type PresenceStore } from './shared';

export type PresenceBackend = 'redis' | 'memory';

function hasUpstashEnv() {
  const url = process.env.UPSTASH_REDIS_REST_URL?.trim().replace(
    /^["']|["']$/g,
    '',
  );
  const token = process.env.UPSTASH_REDIS_REST_TOKEN?.trim().replace(
    /^["']|["']$/g,
    '',
  );
  return Boolean(url && token);
}

/** Redis only in production (or PRESENCE_REDIS=1) so local/dev does not burn Upstash quota. */
function shouldUseRedis() {
  if (!hasUpstashEnv()) return false;
  if (process.env.PRESENCE_REDIS === '1') return true;
  return process.env.NODE_ENV === 'production';
}

const globalForPresence = globalThis as typeof globalThis & {
  __presenceStore?: PresenceStore;
  __presenceBackend?: PresenceBackend;
};

export function createPresenceStore(): PresenceStore {
  if (shouldUseRedis()) {
    return createRedisPresenceStore();
  }
  return createMemoryPresenceStore();
}

export function getPresenceBackend(): PresenceBackend {
  return shouldUseRedis() ? 'redis' : 'memory';
}

export function getPresenceStore(): PresenceStore {
  if (!globalForPresence.__presenceStore) {
    const backend = getPresenceBackend();
    if (backend === 'memory' && process.env.NODE_ENV === 'production') {
      console.error(
        '[presence] UPSTASH_REDIS_REST_URL/TOKEN missing — peers cannot sync across Netlify isolates',
      );
    }
    globalForPresence.__presenceBackend = backend;
    globalForPresence.__presenceStore = createPresenceStore();
  }
  return globalForPresence.__presenceStore;
}
