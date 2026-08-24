'use client';

import ActionBar from '@/components/ActionBar';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';

export default function NotFound() {
  const { dict } = useLocale();
  const { pages, common } = dict;
  const copy = pages.notFound;

  return (
    <PageShell>
      <PageHeader
        eyebrow={copy.eyebrow}
        title={copy.title}
        subtitle={copy.subtitle}
      />
      <ActionBar actions={[{ label: common.backHome, href: '/' }]} />
    </PageShell>
  );
}
