'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import type { ReactNode } from 'react';

import { useLocale } from '@/components/LocaleProvider';
import { SiteNav } from '@/components/SiteNav';
import { TelemetryHud } from '@/components/hud/TelemetryHud';
import { PresenceMinimap } from '@/components/presence/PresenceMinimap';
import { useLocalCursor } from '@/features/presence/useLocalCursor';
import { usePresence } from '@/features/presence/usePresence';

const WaveScene = dynamic(
  () => import('@/components/wave/WaveScene').then((m) => m.WaveScene),
  {
    ssr: false,
    loading: () => (
      <div className="wave-host wave-host--pending" aria-hidden="true" />
    ),
  },
);

type Props = {
  children: ReactNode;
};

/**
 * Fixed stage (wave + ghost telemetry) never remounts on route change.
 * Desktop: minimap fixed top-right. Mobile: minimap in scroll flow.
 */
export function SiteShell({ children }: Props) {
  const { dict } = useLocale();
  const { point, userAgent } = useLocalCursor();
  const { snapshot } = usePresence(point);

  return (
    <div className="experience">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div className="experience__stage" aria-hidden="true">
        <WaveScene />
        <div className="experience__veil" />
        <TelemetryHud userAgent={userAgent} point={point} />
      </div>

      <div className="experience__hud">
        <PresenceMinimap
          className="minimap--fixed"
          snapshot={snapshot}
          self={point}
        />
      </div>

      <SiteNav />

      <main id="main" className="experience__scroll">
        <div className="experience__minimap-flow">
          <PresenceMinimap
            className="minimap--flow"
            snapshot={snapshot}
            self={point}
          />
        </div>
        {children}
        <footer className="site-foot">
          <Link href="/privacy">{dict.common.privacy}</Link>
        </footer>
      </main>
    </div>
  );
}
