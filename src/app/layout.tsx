import type { Metadata, Viewport } from 'next';
import { JetBrains_Mono, M_PLUS_Rounded_1c } from 'next/font/google';
import Script from 'next/script';

import { Analytics } from '@/components/Analytics';
import { AppProviders } from '@/components/AppProviders';
import { ErrorMonitoring } from '@/components/ErrorMonitoring';
import { JsonLd } from '@/components/JsonLd';
import { SiteShell } from '@/components/SiteShell';
import { profile } from '@/data/profile';
import { appInitScript } from '@/lib/app-init-script';

import './globals.css';

/** Latin self-host via next/font. JP glyphs load from Google CSS (same family fallback). */
const mPlus = M_PLUS_Rounded_1c({
  weight: ['400', '500', '700', '800'],
  style: ['normal'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-display',
  preload: true,
});

/** Secondary / terminal UI face. */
const jetBrains = JetBrains_Mono({
  weight: ['400', '500'],
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-mono',
  preload: false,
});

const ogTitle = `${profile.name} — ${profile.title}`;
const ogDescription = profile.headline;
const ogImage = {
  url: `${profile.siteUrl}/og`,
  secureUrl: `${profile.siteUrl}/og`,
  width: 1200,
  height: 630,
  alt: ogTitle,
  type: 'image/png' as const,
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  colorScheme: 'dark light',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f8fafc' },
    { media: '(prefers-color-scheme: dark)', color: '#020617' },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} — Lead Frontend · Japan`,
    template: `%s · ${profile.name}`,
  },
  description: `${profile.headline} Design-trained TypeScript lead for Tokyo product teams.`,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
  publisher: profile.name,
  category: 'technology',
  keywords: [
    'Lead Frontend Engineer',
    'Japan',
    'Tokyo',
    'Vue 3',
    'TypeScript',
    'React',
    'Visa sponsorship',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  appleWebApp: {
    capable: true,
    title: profile.name,
    statusBarStyle: 'black-translucent',
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  other: {
    'text-scale': 'scale',
    referrer: 'strict-origin-when-cross-origin',
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: profile.siteUrl,
    siteName: profile.name,
    type: 'website',
    locale: 'en_US',
    images: [ogImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: ogTitle,
    description: ogDescription,
    images: {
      url: ogImage.url,
      alt: ogImage.alt,
      width: ogImage.width,
      height: ogImage.height,
      type: ogImage.type,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${mPlus.variable} ${jetBrains.variable} ${mPlus.className}`}
      suppressHydrationWarning
    >
      <body className={jetBrains.className} suppressHydrationWarning>
        <Script id="app-init" strategy="beforeInteractive">
          {appInitScript}
        </Script>
        <JsonLd />
        <AppProviders>
          <SiteShell>{children}</SiteShell>
          <ErrorMonitoring />
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}
