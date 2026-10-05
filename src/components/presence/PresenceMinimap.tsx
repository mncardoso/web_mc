'use client';

import { cellCenter } from '@/features/presence/protocol';
import type { NormPoint, PresenceSnapshot } from '@/features/presence/types';

type Props = {
  snapshot: PresenceSnapshot;
  self: NormPoint;
  className?: string;
};

export function PresenceMinimap({ snapshot, self, className }: Props) {
  const active = snapshot.active;
  const modeLabel =
    snapshot.mode === 'heatmap' ? 'heatmap, dense room' : 'dots, live';
  const classes = className ? `minimap ${className}` : 'minimap';

  return (
    <aside
      className={classes}
      aria-label={`Visitor presence map, ${active.toLocaleString()} online, ${modeLabel}`}
    >
      <header className="minimap__head">
        <span>presence</span>
        <span aria-hidden="true">{active.toLocaleString()} online</span>
      </header>
      <div className="minimap__stage" aria-hidden="true">
        {snapshot.mode === 'dots'
          ? snapshot.peers.map((peer) => (
              <span
                key={peer.id}
                className="minimap__dot minimap__dot--peer"
                style={{
                  left: `${peer.x * 100}%`,
                  top: `${peer.y * 100}%`,
                }}
              />
            ))
          : snapshot.cells.map((cell) => (
              <span
                key={`${cell.gx}:${cell.gy}`}
                className="minimap__heat"
                style={{
                  left: `${cellCenter(cell.gx, snapshot.gridSize) * 100}%`,
                  top: `${cellCenter(cell.gy, snapshot.gridSize) * 100}%`,
                  opacity: Math.min(1, 0.25 + cell.n * 0.08),
                  transform: `translate(-50%, -50%) scale(${1 + Math.min(2, cell.n * 0.15)})`,
                }}
              />
            ))}
        <span
          className="minimap__dot minimap__dot--self"
          style={{ left: `${self.x * 100}%`, top: `${self.y * 100}%` }}
        />
      </div>
      <p className="minimap__mode" aria-hidden="true">
        {snapshot.mode === 'heatmap' ? 'heatmap · dense' : 'dots · live'}
      </p>
    </aside>
  );
}
