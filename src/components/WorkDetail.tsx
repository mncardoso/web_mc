'use client';

import ActionBar from '@/components/ActionBar';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import type { ExperienceSlug } from '@/data/projects';

type WorkDetailProps = {
  slug: ExperienceSlug;
  links?: { labelKey: 'website' | 'liveDemo' | 'github' | 'openApp' | 'caseStudy'; href: string }[];
};

export default function WorkDetail({ slug, links = [] }: WorkDetailProps) {
  const { dict } = useLocale();
  const job = dict.experience[slug];
  const { pages, common } = dict;

  if (!job) return null;

  return (
    <PageShell>
      <PageHeader
        eyebrow={common.work}
        title={job.company}
        meta={`${job.role} · ${job.location} · ${job.period}`}
        subtitle={job.description}
      />

      {slug === 'securecell' && 'progression' in job && job.progression ? (
        <Section title={pages.workDetail.progression} delay={40}>
          <p>{job.progression}</p>
        </Section>
      ) : null}

      <Section title={pages.workDetail.contributions} delay={80}>
        <ul>
          {job.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <p>{job.stack}</p>
      </Section>

      <ActionBar
        actions={[
          { label: common.allWork, href: '/work' },
          ...links.map((link, index) => ({
            label: common[link.labelKey],
            href: link.href,
            external: true,
            variant: (index === 0 ? 'primary' : undefined) as 'primary' | undefined,
          })),
        ]}
      />
    </PageShell>
  );
}
