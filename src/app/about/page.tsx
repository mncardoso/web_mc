import type { Metadata } from 'next';

import { AboutView } from '@/components/pages/AboutView';

export const metadata: Metadata = {
  title: 'About',
  description: 'Lead frontend engineer relocating to Japan.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return <AboutView />;
}
