type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

/** Fixed window per key. // ponytail: process-local Map; Redis limiter if abuse spans isolates */
export function allowRequest(
  key: string,
  limit: number,
  windowMs: number,
  now = Date.now(),
): boolean {
  const bucket = buckets.get(key);
  if (!bucket || now >= bucket.resetAt) {
    buckets.set(key, { count: 1, resetAt: now + windowMs });
    return true;
  }
  if (bucket.count >= limit) return false;
  bucket.count += 1;
  return true;
}

/** Test helper — clears in-memory buckets. */
export function resetRateLimitBuckets() {
  buckets.clear();
}
