/** Normalized viewport coords. Origin: top-left. Range: [0, 1]. */
export type NormPoint = {
  x: number;
  y: number;
};

export type PeerCursor = {
  id: string;
  x: number;
  y: number;
  /** Unix ms when last seen */
  t: number;
};

/** Quantized density cell for heatmap mode (1B-user path). */
export type HeatCell = {
  /** Grid column [0, gridSize) */
  gx: number;
  /** Grid row [0, gridSize) */
  gy: number;
  /** Visitors in this cell (capped / sampled upstream) */
  n: number;
};

export type PresenceSnapshot =
  | {
      mode: 'dots';
      peers: PeerCursor[];
      active: number;
      gridSize: number;
    }
  | {
      mode: 'heatmap';
      cells: HeatCell[];
      active: number;
      gridSize: number;
    };

export type PresenceUpdate = {
  id: string;
  x: number;
  y: number;
};

export type PresenceConfig = {
  /** Client → server update interval */
  publishMs: number;
  /** Client poll interval for snapshots */
  pollMs: number;
  /** Drop peers quieter than this */
  ttlMs: number;
  /** Quantization grid (payload stays O(grid²) in heatmap mode) */
  gridSize: number;
  /** Above this, API returns heatmap instead of individual dots */
  heatmapThreshold: number;
  /** Soft cap on dots returned even below threshold */
  maxDots: number;
};
