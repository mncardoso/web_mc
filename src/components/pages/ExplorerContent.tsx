'use client';

import Image from 'next/image';

import ActionBar from '@/components/ActionBar';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';

export default function ExplorerContent() {
  const { dict } = useLocale();
  const { pages, common } = dict;
  const copy = pages.explorer;

  return (
    <PageShell>
      <PageHeader
        eyebrow={common.work}
        title={copy.title}
        meta={copy.meta}
        subtitle={copy.subtitle}
      />

      <Section title={copy.concept} delay={60}>
        <p>{copy.body}</p>
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.mc/assets.explorer/design.png"
          alt={copy.title}
          className="h-auto w-full rounded-card-sm border border-border"
          width={1285}
          height={723}
        />
      </Section>

      <ActionBar
        actions={[
          { label: common.allWork, href: '/work' },
          {
            label: common.openApp,
            href: 'https://explorer.miguel-cardoso.com/',
            external: true,
            variant: 'primary',
          },
          {
            label: common.caseStudy,
            href: 'https://explorer.miguel-cardoso.com/CaseStudy',
            external: true,
          },
        ]}
      />
    </PageShell>
  );
}
