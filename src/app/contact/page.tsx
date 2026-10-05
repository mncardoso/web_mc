import type { Metadata } from 'next';

import { ContactView } from '@/components/pages/ContactView';
import { profile } from '@/data/profile';

export const metadata: Metadata = {
  title: 'Contact',
  description: `Contact ${profile.name} about Japan lead frontend roles.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return <ContactView />;
}
