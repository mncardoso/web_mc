import { describe, expect, it } from 'vitest';

import { PRESENCE_CONFIG, clamp01, quantize } from '@/features/presence/protocol';
import { createMemoryPresenceStore } from '@/server/presence/store';

describe('protocol', () => {
  it('clamps to unit interval', () => {
    expect(clamp01(-1)).toBe(0);
    expect(clamp01(2)).toBe(1);
    expect(clamp01(0.4)).toBe(0.4);
  });

  it('quantizes into grid buckets', () => {
    expect(quantize(0, 10)).toBe(0);
    expect(quantize(0.99, 10)).toBe(9);
    expect(quantize(1, 10)).toBe(9);
  });
});

describe('memory presence store', () => {
  it('tracks peers and excludes self from dots', async () => {
    const store = createMemoryPresenceStore();
    await store.upsert({ id: 'a', x: 0.1, y: 0.2 }, 1_000);
    await store.upsert({ id: 'b', x: 0.8, y: 0.9 }, 1_000);

    const snap = await store.snapshot('a', 1_000);
    expect(snap.mode).toBe('dots');
    if (snap.mode !== 'dots') return;
    expect(snap.peers).toHaveLength(1);
    expect(snap.peers[0]?.id).toBe('b');
    expect(snap.active).toBe(2);
  });

  it('evicts stale peers by ttl', async () => {
    const store = createMemoryPresenceStore({
      ...PRESENCE_CONFIG,
      ttlMs: 1_000,
    });
    await store.upsert({ id: 'old', x: 0.5, y: 0.5 }, 0);
    expect(await store.size(2_000)).toBe(0);
  });

  it('switches to heatmap above threshold', async () => {
    const store = createMemoryPresenceStore({
      ...PRESENCE_CONFIG,
      heatmapThreshold: 3,
      maxDots: 2,
      gridSize: 8,
    });

    await store.upsert({ id: '1', x: 0.1, y: 0.1 }, 10);
    await store.upsert({ id: '2', x: 0.1, y: 0.1 }, 10);
    await store.upsert({ id: '3', x: 0.9, y: 0.9 }, 10);

    const snap = await store.snapshot(undefined, 10);
    expect(snap.mode).toBe('heatmap');
    if (snap.mode !== 'heatmap') return;
    expect(snap.cells.length).toBeGreaterThanOrEqual(2);
    expect(snap.active).toBe(3);
  });

  it('rejects empty ids', async () => {
    const store = createMemoryPresenceStore();
    await store.upsert({ id: '  ', x: 0.5, y: 0.5 }, 1);
    expect(await store.size(1)).toBe(0);
  });
});
