import type { Metadata, Viewport } from 'next';

import { M_PLUS_1p } from 'next/font/google';

import './globals.css';

import Header from '@/components/Header';
import { LocaleProvider } from '@/components/LocaleProvider';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Wave } from '@/components/Wave';
import { appInitScript } from '@/lib/app-init-script';

const mPlus = M_PLUS_1p({
  weight: ['400', '500', '800'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: {
    default: 'Miguel Cardoso — Lead Frontend Engineer · Relocating to Japan',
    template: '%s · Miguel Cardoso',
  },
  description:
    'Lead frontend engineer relocating to Japan. Vue 3, TypeScript, React — bioreactor SaaS lead, Scrum Master (13), 3 direct reports. Visa sponsorship required. Tokyo preferred.',
  keywords: [
    'Lead Frontend Engineer',
    'Japan',
    'Vue 3',
    'TypeScript',
    'React',
    'Engineering Lead',
    'Visa sponsorship',
    'Tokyo',
  ],
  openGraph: {
    title: 'Miguel Cardoso — Lead Frontend Engineer · Relocating to Japan',
    description:
      'Lead frontend engineer relocating to Japan. Vue 3, TypeScript, bioreactor UI lead.',
    url: 'https://miguel-cardoso.com',
    siteName: 'Miguel Cardoso',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: appInitScript }} />
      </head>
      <body className={mPlus.className} suppressHydrationWarning>
        <LocaleProvider>
          <ThemeProvider>
            <Header />
            <main className="site-main">{children}</main>
            <Wave />
          </ThemeProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
