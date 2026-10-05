import Script from 'next/script';

import { profile } from '@/data/profile';

const DEFAULT_SCRIPT = 'https://cloud.umami.is/script.js';

/**
 * Optional Umami — set NEXT_PUBLIC_UMAMI_WEBSITE_ID.
 * Optional NEXT_PUBLIC_UMAMI_SCRIPT_URL for self-host (default: Umami Cloud).
 */
export function Analytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  if (!websiteId) return null;

  const src = process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL || DEFAULT_SCRIPT;
  const host = new URL(profile.siteUrl).hostname;

  return (
    <Script
      defer
      src={src}
      data-website-id={websiteId}
      data-domains={`${host},www.${host}`}
      strategy="afterInteractive"
    />
  );
}
