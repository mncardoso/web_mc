'use client';

import { PageFrame } from '@/components/PageFrame';
import { useLocale } from '@/components/LocaleProvider';

export function PrivacyView() {
  const { dict } = useLocale();

  return (
    <PageFrame>
      <section className="privacy" aria-labelledby="privacy-heading">
        <p className="eyebrow">{dict.privacy.eyebrow}</p>
        <h1 id="privacy-heading" className="page-title">
          {dict.privacy.title}
        </h1>
        <p className="lede">{dict.privacy.lede}</p>
        <ul className="privacy__list">
          {dict.privacy.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="privacy__note">{dict.privacy.note}</p>
      </section>
    </PageFrame>
  );
}
