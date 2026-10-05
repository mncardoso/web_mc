'use client';

import Link from 'next/link';

import { PageFrame } from '@/components/PageFrame';
import { useLocale } from '@/components/LocaleProvider';
import { resumeUrl } from '@/data/profile';
import {
  getAwards,
  getEducation,
  getExperience,
  getSkillGroups,
} from '@/i18n/content';

export function AboutView() {
  const { locale, dict } = useLocale();
  const jobs = getExperience(locale);
  const skills = getSkillGroups(locale);
  const edu = getEducation(locale);
  const awardList = getAwards(locale);

  return (
    <PageFrame>
      <header className="page-intro">
        <p className="eyebrow">{dict.about.eyebrow}</p>
        <h1 className="page-title">{dict.about.title}</h1>
        {dict.about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)} className="copy">
            {paragraph}
          </p>
        ))}
      </header>

      <section className="block" id="japan" aria-labelledby="japan-heading">
        <h2 id="japan-heading" className="section-title">
          {dict.about.japanTitle}
        </h2>
        <p className="copy">{dict.about.japanIntro}</p>
        <dl className="facts">
          {dict.about.japanFacts.map((fact) => (
            <div key={fact.label} className="facts__row">
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="block" id="experience" aria-labelledby="exp-heading">
        <h2 id="exp-heading" className="section-title">
          {dict.about.experienceTitle}
        </h2>
        <div className="jobs">
          {jobs.map((job) => (
            <article key={job.id} className="job">
              <div className="job__head">
                <h3 className="job__role">{job.role}</h3>
                <p className="job__period">{job.period}</p>
              </div>
              <p className="job__meta">
                {job.company} · {job.location}
              </p>
              {job.progression ? (
                <p className="job__progression">{job.progression}</p>
              ) : null}
              <p className="job__summary">{job.summary}</p>
              <ul className="list">
                {job.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
              <p className="stack-line">{job.stack.join(' · ')}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="skills-heading">
        <h2 id="skills-heading" className="section-title">
          {dict.about.skillsTitle}
        </h2>
        <div className="skills">
          {skills.map((group) => (
            <div key={group.id}>
              <p className="skills__label">{group.label}</p>
              <ul className="skills__tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="block" aria-labelledby="edu-heading">
        <h2 id="edu-heading" className="section-title">
          {dict.about.eduTitle}
        </h2>
        <ul className="edu">
          {edu.map((item) => (
            <li key={`${item.year}-${item.credential}`}>
              <span className="edu__year">{item.year}</span>
              <span>
                {item.credential}
                <span className="edu__school"> — {item.institution}</span>
              </span>
            </li>
          ))}
        </ul>
        <ul className="list" style={{ marginTop: '1rem' }}>
          {awardList.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="cta-row" style={{ marginTop: '2rem' }}>
        <Link className="btn btn--primary" href="/contact">
          {dict.common.contact}
        </Link>
        <Link className="btn" href="/work">
          {dict.common.work}
        </Link>
        <Link className="btn" href="/design">
          {dict.common.design}
        </Link>
        <a
          className="btn"
          href={resumeUrl(locale)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {dict.common.resume}
        </a>
      </div>
    </PageFrame>
  );
}
