'use client';

import Link from 'next/link';

import { PageFrame } from '@/components/PageFrame';
import { useLocale } from '@/components/LocaleProvider';

export function NotFoundView() {
  const { dict } = useLocale();

  return (
    <PageFrame>
      <section className="contact" aria-labelledby="not-found-heading">
        <p className="eyebrow">{dict.notFound.eyebrow}</p>
        <h1 id="not-found-heading" className="page-title">
          {dict.notFound.title}
        </h1>
        <p className="lede">{dict.notFound.lede}</p>
        <div className="cta-row">
          <Link className="btn btn--primary" href="/">
            {dict.common.home}
          </Link>
          <Link className="btn" href="/work">
            {dict.common.work}
          </Link>
          <Link className="btn" href="/contact">
            {dict.common.contact}
          </Link>
        </div>
      </section>
    </PageFrame>
  );
}
