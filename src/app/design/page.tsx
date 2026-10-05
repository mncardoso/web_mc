import type { Metadata } from 'next';

import { DesignView } from '@/components/pages/DesignView';

export const metadata: Metadata = {
  title: 'Design',
  description: 'Brand and visual background — Casa Rústica, Exponential-e.',
  alternates: { canonical: '/design' },
};

export default function DesignPage() {
  return <DesignView />;
}
