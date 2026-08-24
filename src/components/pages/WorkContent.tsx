'use client';

import JapanBanner from '@/components/JapanBanner';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';
import ProjectCard from '@/components/ProjectCard';
import { projectMeta } from '@/data/projects';

export default function WorkContent() {
  const { dict } = useLocale();
  const { pages } = dict;

  const primary = projectMeta.filter((p) => p.japanRelevant);
  const portfolio = projectMeta.filter((p) => !p.japanRelevant);

  return (
    <PageShell>
      <PageHeader
        eyebrow={pages.work.eyebrow}
        title={pages.work.title}
        subtitle={pages.work.subtitle}
      />

      <JapanBanner />

      <section className="flex flex-col gap-3">
        <h2 className="pl-1 text-[0.8rem] tracking-widest text-accent uppercase">
          {pages.work.primary}
        </h2>
        <div className="flex flex-col gap-(--spacing-section)">
          {primary.map((item, index) => {
            const copy = dict.projects[item.slug];
            return (
              <div
                key={item.slug}
                className="section-enter"
                style={{ animationDelay: `${index * 60}ms` }}
              >
                <ProjectCard
                  title={copy.title}
                  summary={copy.summary}
                  href={item.href}
                  meta={`${copy.role} · ${copy.period}`}
                  stack={item.stack}
                  image={'image' in item ? item.image : undefined}
                />
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="pl-1 text-[0.8rem] tracking-widest text-accent uppercase">
          {pages.work.portfolio}
        </h2>
        <div className="flex flex-col gap-(--spacing-section)">
          {portfolio.map((item, index) => {
            const copy = dict.projects[item.slug];
            return (
              <div
                key={item.slug}
                className="section-enter"
                style={{ animationDelay: `${(index + 3) * 60}ms` }}
              >
                <ProjectCard
                  title={copy.title}
                  summary={copy.summary}
                  href={item.href}
                  meta={`${copy.role} · ${copy.period}`}
                  stack={item.stack}
                  image={'image' in item ? item.image : undefined}
                />
              </div>
            );
          })}
        </div>
      </section>
    </PageShell>
  );
}
