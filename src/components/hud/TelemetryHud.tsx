'use client';

import type { NormPoint } from '@/features/presence/types';

type Props = {
  userAgent: string;
  point: NormPoint;
};

/** Ghost telemetry baked into the wave background — not a floating panel. */
export function TelemetryHud({ userAgent, point }: Props) {
  const x = Math.round(point.x * 1000) / 1000;
  const y = Math.round(point.y * 1000) / 1000;
  const ua =
    userAgent.length > 48 ? `${userAgent.slice(0, 45)}…` : userAgent || '…';

  return (
    <div className="telemetry">
      <p className="telemetry__label">telemetry</p>
      <p className="telemetry__ua">{ua}</p>
      <p className="telemetry__cursor">
        cursor <span>{x.toFixed(3)}</span> <span>{y.toFixed(3)}</span>
      </p>
    </div>
  );
}
