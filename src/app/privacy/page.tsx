import type { Metadata } from 'next';

import { PrivacyView } from '@/components/pages/PrivacyView';

export const metadata: Metadata = {
  title: 'Privacy',
  description:
    'What this site stores: theme/language preferences, anonymous presence cursors, and optional analytics.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return <PrivacyView />;
}
