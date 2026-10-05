import type { Metadata } from 'next';

import { WorkView } from '@/components/pages/WorkView';

export const metadata: Metadata = {
  title: 'Work',
  description:
    'Engineering work — Securecell, Little Emperors, Explorer, and more.',
  alternates: { canonical: '/work' },
};

export default function WorkPage() {
  return <WorkView />;
}
