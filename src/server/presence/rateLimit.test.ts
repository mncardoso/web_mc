import { describe, expect, it } from 'vitest';

import { allowRequest, resetRateLimitBuckets } from './rateLimit';

describe('allowRequest', () => {
  it('allows up to the limit then blocks until the window resets', () => {
    resetRateLimitBuckets();
    const start = 1_000;

    expect(allowRequest('ip', 2, 1_000, start)).toBe(true);
    expect(allowRequest('ip', 2, 1_000, start + 1)).toBe(true);
    expect(allowRequest('ip', 2, 1_000, start + 2)).toBe(false);
    expect(allowRequest('ip', 2, 1_000, start + 1_000)).toBe(true);
  });
});
