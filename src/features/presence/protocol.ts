import type { PresenceConfig } from './types';

/** Tunables live here — swap without touching transport or UI. */
export const PRESENCE_CONFIG: PresenceConfig = {
  publishMs: 250,
  pollMs: 800,
  ttlMs: 8_000,
  gridSize: 48,
  heatmapThreshold: 128,
  maxDots: 96,
};

export function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.min(1, Math.max(0, n));
}

export function quantize(n: number, gridSize: number): number {
  const q = Math.floor(clamp01(n) * gridSize);
  return Math.min(gridSize - 1, Math.max(0, q));
}

export function cellCenter(index: number, gridSize: number): number {
  return (index + 0.5) / gridSize;
}
