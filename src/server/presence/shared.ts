import { PRESENCE_CONFIG, clamp01, quantize } from '@/features/presence/protocol';
import type {
  HeatCell,
  PeerCursor,
  PresenceConfig,
  PresenceSnapshot,
  PresenceUpdate,
} from '@/features/presence/types';

export type PresenceStore = {
  upsert(update: PresenceUpdate, now?: number): Promise<void>;
  snapshot(excludeId?: string, now?: number): Promise<PresenceSnapshot>;
  size(now?: number): Promise<number>;
  clear(): Promise<void>;
};

export type InternalPeer = {
  id: string;
  x: number;
  y: number;
  t: number;
};

function toHeatmap(
  peers: Iterable<InternalPeer>,
  gridSize: number,
): HeatCell[] {
  const counts = new Map<string, HeatCell>();

  for (const peer of peers) {
    const gx = quantize(peer.x, gridSize);
    const gy = quantize(peer.y, gridSize);
    const key = `${gx}:${gy}`;
    const existing = counts.get(key);
    if (existing) {
      existing.n += 1;
    } else {
      counts.set(key, { gx, gy, n: 1 });
    }
  }

  return Array.from(counts.values());
}

function toDots(peers: PeerCursor[], maxDots: number): PeerCursor[] {
  if (peers.length <= maxDots) return peers;
  const step = peers.length / maxDots;
  const out: PeerCursor[] = [];
  for (let i = 0; i < maxDots; i++) {
    out.push(peers[Math.floor(i * step)]!);
  }
  return out;
}

/** Shared snapshot shaping for memory + Redis stores. */
export function buildPresenceSnapshot(
  peers: Iterable<InternalPeer>,
  excludeId: string | undefined,
  config: PresenceConfig,
  now = Date.now(),
): PresenceSnapshot {
  const live: PeerCursor[] = [];
  let selfPresent = false;

  for (const peer of peers) {
    if (now - peer.t > config.ttlMs) continue;
    if (excludeId && peer.id === excludeId) {
      selfPresent = true;
      continue;
    }
    live.push({ id: peer.id, x: peer.x, y: peer.y, t: peer.t });
  }

  const active = live.length + (selfPresent ? 1 : 0);

  if (live.length >= config.heatmapThreshold) {
    return {
      mode: 'heatmap',
      cells: toHeatmap(live, config.gridSize),
      active,
      gridSize: config.gridSize,
    };
  }

  return {
    mode: 'dots',
    peers: toDots(live, config.maxDots),
    active,
    gridSize: config.gridSize,
  };
}

export function normalizePresenceUpdate(
  update: PresenceUpdate,
  now = Date.now(),
): InternalPeer | null {
  const id = update.id?.trim();
  if (!id || id.length > 64) return null;
  return {
    id,
    x: clamp01(update.x),
    y: clamp01(update.y),
    t: now,
  };
}

export function createMemoryPresenceStore(
  config: PresenceConfig = PRESENCE_CONFIG,
): PresenceStore {
  const peers = new Map<string, InternalPeer>();

  const prune = (now: number) => {
    for (const [id, peer] of peers) {
      if (now - peer.t > config.ttlMs) peers.delete(id);
    }
  };

  return {
    async upsert(update, now = Date.now()) {
      const peer = normalizePresenceUpdate(update, now);
      if (!peer) return;
      peers.set(peer.id, peer);
    },

    async snapshot(excludeId, now = Date.now()) {
      prune(now);
      return buildPresenceSnapshot(peers.values(), excludeId, config, now);
    },

    async size(now = Date.now()) {
      prune(now);
      return peers.size;
    },

    async clear() {
      peers.clear();
    },
  };
}
