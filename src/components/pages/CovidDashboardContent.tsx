'use client';

import ActionBar from '@/components/ActionBar';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';

export default function CovidDashboardContent() {
  const { dict } = useLocale();
  const { pages, common } = dict;
  const copy = pages.covid;

  return (
    <PageShell>
      <PageHeader
        eyebrow={common.work}
        title={copy.title}
        meta={copy.meta}
        subtitle={copy.subtitle}
      />

      <Section title={copy.overview} delay={60}>
        <p>{copy.body1}</p>
        <p>{copy.body2}</p>
      </Section>

      <ActionBar
        actions={[
          { label: common.allWork, href: '/work' },
          {
            label: common.liveDemo,
            href: 'https://covid.miguel-cardoso.com/',
            external: true,
            variant: 'primary',
          },
          {
            label: common.github,
            href: 'https://github.com/mncardoso/covid19_dashboard',
            external: true,
          },
        ]}
      />
    </PageShell>
  );
}
