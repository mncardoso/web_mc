import type { Metadata } from 'next';

import { HomeView } from '@/components/pages/HomeView';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return <HomeView />;
}
