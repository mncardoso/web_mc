import type { Metadata } from 'next';

import { M_PLUS_1p } from 'next/font/google';

import './globals.css';

import Menu from '@/components/Menu';
import { Wave } from '@/components/Wave';

const mPlus = M_PLUS_1p({
  weight: ['500', '800'],
  style: ['normal'],
  subsets: [],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Miguel Cardoso',
  description: 'Miguel Cardoso - Experienced front-end software engineer',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={mPlus.className}>
        <main className="page-container">
          <Menu />
          <div className="main-container">{children}</div>
        </main>
        <Wave />
      </body>
    </html>
  );
}
