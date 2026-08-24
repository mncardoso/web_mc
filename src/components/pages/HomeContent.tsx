'use client';

import ActionBar from '@/components/ActionBar';
import CardGrid from '@/components/CardGrid';
import JapanBanner from '@/components/JapanBanner';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';
import ProjectCard from '@/components/ProjectCard';
import Section from '@/components/Section';
import { projectMeta } from '@/data/projects';
import { site } from '@/data/site';

export default function HomeContent() {
  const { dict } = useLocale();
  const { profile, pages, common } = dict;

  const featured = projectMeta.filter((p) => p.featured);

  return (
    <PageShell>
      <PageHeader
        eyebrow={profile.relocation}
        title={site.name}
        subtitle={profile.title}
        meta={`${profile.location} ${pages.home.metaSuffix} · ${profile.japan.visa}`}
      >
        <p>{profile.summary}</p>
        <p>{profile.securecellSummary}</p>
      </PageHeader>

      <JapanBanner />

      <Section title={pages.home.featuredWork} delay={100}>
        <CardGrid>
          {featured.map((item) => {
            const copy = dict.projects[item.slug];
            return (
              <ProjectCard
                key={item.slug}
                title={copy.title}
                summary={copy.summary}
                href={item.href}
                meta={`${copy.role} · ${copy.period}`}
                stack={item.stack}
                image={'image' in item ? item.image : undefined}
              />
            );
          })}
        </CardGrid>
      </Section>

      <ActionBar
        actions={[
          { label: common.fullProfile, href: '/about', variant: 'primary' },
          { label: common.allWork, href: '/work' },
          { label: common.email, href: `mailto:${site.email}`, external: true },
          { label: common.linkedin, href: site.linkedin, external: true },
          { label: common.resume, href: site.resumeUrl, external: true },
        ]}
      />
    </PageShell>
  );
}
