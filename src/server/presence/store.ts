import { createMemoryPresenceStore, type PresenceStore } from './shared';
import { createRedisPresenceStore } from './redisStore';

export { createMemoryPresenceStore, type PresenceStore } from './shared';

function hasUpstashEnv() {
  return Boolean(
    process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN,
  );
}

/** Redis only in production (or PRESENCE_REDIS=1) so local/dev does not burn Upstash quota. */
function shouldUseRedis() {
  if (!hasUpstashEnv()) return false;
  if (process.env.PRESENCE_REDIS === '1') return true;
  return process.env.NODE_ENV === 'production';
}

const globalForPresence = globalThis as typeof globalThis & {
  __presenceStore?: PresenceStore;
};

export function createPresenceStore(): PresenceStore {
  if (shouldUseRedis()) {
    return createRedisPresenceStore();
  }
  return createMemoryPresenceStore();
}

export function getPresenceStore(): PresenceStore {
  if (!globalForPresence.__presenceStore) {
    globalForPresence.__presenceStore = createPresenceStore();
  }
  return globalForPresence.__presenceStore;
}
