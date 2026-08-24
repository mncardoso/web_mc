'use client';

import ActionBar from '@/components/ActionBar';
import JapanBanner from '@/components/JapanBanner';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';
import Section from '@/components/Section';
import Tag from '@/components/Tag';
import { experienceOrder } from '@/data/projects';
import { site } from '@/data/site';

export default function AboutContent() {
  const { dict } = useLocale();
  const { profile, pages, common } = dict;

  return (
    <PageShell>
      <PageHeader
        eyebrow={pages.about.eyebrow}
        title={pages.about.title}
        subtitle={pages.about.subtitle}
      />

      <JapanBanner />

      <Section title={pages.about.summary} delay={60}>
        <p>{profile.summary}</p>
        <p>{profile.securecellSummary}</p>
        <ul>
          {profile.highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <Section title={pages.about.skills} delay={100}>
        {profile.skillGroups.map((group) => (
          <div key={group.label} className="flex flex-col gap-2">
            <h3 className="text-[0.85rem] tracking-wide text-accent uppercase">{group.label}</h3>
            <div className="flex flex-wrap gap-1.5">
              {group.skills.map((skill) => (
                <Tag key={skill}>{skill}</Tag>
              ))}
            </div>
          </div>
        ))}
      </Section>

      <Section title={pages.about.experience} delay={140}>
        <div className="flex flex-col gap-4">
          {experienceOrder.map((slug) => {
            const job = dict.experience[slug];
            return (
              <article
                key={slug}
                className="flex flex-col gap-2 border-l-2 border-accent pl-[clamp(0.75rem,2.5vw,1rem)]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1 max-[480px]:flex-col max-[480px]:items-start max-[480px]:gap-0.5">
                  <h3 className="min-w-0 flex-[1_1_12rem]">{job.role}</h3>
                  <span className="text-[clamp(0.8rem,2vw,0.85rem)] whitespace-nowrap text-secondary max-[480px]:whitespace-normal">
                    {job.period}
                  </span>
                </div>
                <p className="text-[clamp(0.85rem,2vw,0.9rem)] font-medium text-secondary">
                  {job.company} · {job.location}
                </p>
                <p>{job.description}</p>
                <ul>
                  {job.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <p className="text-[clamp(0.8rem,2vw,0.85rem)] leading-snug text-accent">
                  {job.stack}
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section title={pages.about.education} delay={180}>
        <ul className="flex flex-col gap-2">
          {profile.education.map((item) => (
            <li key={`${item.year}-${item.school}`}>
              <strong>{item.year}</strong> — {item.credential}, {item.school}
            </li>
          ))}
        </ul>
      </Section>

      <Section title={pages.about.certifications} delay={200}>
        <ul>
          {profile.certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </Section>

      <ActionBar
        actions={[
          { label: common.viewWork, href: '/work', variant: 'primary' },
          { label: common.email, href: `mailto:${site.email}`, external: true },
          { label: common.linkedin, href: site.linkedin, external: true },
          { label: common.github, href: site.github, external: true },
          { label: common.resume, href: site.resumeUrl, external: true },
        ]}
      />
    </PageShell>
  );
}
