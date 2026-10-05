'use client';

import { PageFrame } from '@/components/PageFrame';
import { useLocale } from '@/components/LocaleProvider';
import { profile, resumeUrl } from '@/data/profile';

export function ContactView() {
  const { locale, dict } = useLocale();

  return (
    <PageFrame>
      <section className="contact" aria-labelledby="contact-heading">
        <p className="eyebrow">{dict.contact.eyebrow}</p>
        <h1 id="contact-heading" className="page-title">
          {dict.contact.title}
        </h1>
        <p className="lede">{dict.contact.lede}</p>
        <div className="cta-row">
          <a className="btn btn--primary" href={`mailto:${profile.email}`}>
            {dict.common.email}
          </a>
          <a
            className="btn"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.common.linkedin}
          </a>
          <a
            className="btn"
            href={resumeUrl(locale)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {dict.common.resume}
          </a>
        </div>
        <p className="contact__email">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
      </section>
    </PageFrame>
  );
}
