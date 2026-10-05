'use client';

import { useEffect, useEffectEvent, useState } from 'react';

import { PRESENCE_CONFIG } from '@/features/presence/protocol';
import type { NormPoint, PresenceSnapshot } from '@/features/presence/types';

function sessionId(): string {
  const key = 'mc.presence.id';
  try {
    const existing = localStorage.getItem(key);
    if (existing) return existing;
    const id = crypto.randomUUID();
    localStorage.setItem(key, id);
    return id;
  } catch {
    return crypto.randomUUID();
  }
}

function cadence() {
  const narrow = window.innerWidth < 768;
  const saveData = Boolean(
    (navigator as Navigator & { connection?: { saveData?: boolean } })
      .connection?.saveData,
  );
  const slow = narrow || saveData;
  return {
    publishMs: slow
      ? Math.max(PRESENCE_CONFIG.publishMs * 2, 220)
      : PRESENCE_CONFIG.publishMs,
    pollMs: slow
      ? Math.max(PRESENCE_CONFIG.pollMs * 2, 800)
      : PRESENCE_CONFIG.pollMs,
  };
}

const emptySnapshot: PresenceSnapshot = {
  mode: 'dots',
  peers: [],
  active: 1,
  gridSize: PRESENCE_CONFIG.gridSize,
};

export function usePresence(point: NormPoint) {
  const [snapshot, setSnapshot] = useState<PresenceSnapshot>(emptySnapshot);
  const getPoint = useEffectEvent(() => point);

  useEffect(() => {
    const id = sessionId();
    let cancelled = false;
    const { publishMs, pollMs } = cadence();

    const publish = async () => {
      if (document.hidden) return;
      const { x, y } = getPoint();
      try {
        await fetch('/api/presence', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id, x, y }),
          keepalive: true,
        });
      } catch {
        // Soft-fail: local HUD still works.
      }
    };

    const poll = async () => {
      if (document.hidden) return;
      try {
        const res = await fetch(
          `/api/presence?exclude=${encodeURIComponent(id)}`,
          { cache: 'no-store' },
        );
        if (!res.ok || cancelled) return;
        const data = (await res.json()) as PresenceSnapshot;
        if (!cancelled) setSnapshot(data);
      } catch {
        // Soft-fail.
      }
    };

    void publish();
    void poll();

    const publishTimer = window.setInterval(() => void publish(), publishMs);
    const pollTimer = window.setInterval(() => void poll(), pollMs);

    const onVisibility = () => {
      if (!document.hidden) {
        void publish();
        void poll();
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelled = true;
      window.clearInterval(publishTimer);
      window.clearInterval(pollTimer);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return { snapshot };
}
