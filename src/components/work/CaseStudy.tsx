'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useLocale } from '@/components/LocaleProvider';
import { ProjectMedia } from '@/components/work/ProjectMedia';
import type { Project } from '@/data/projects';
import { localizeProject } from '@/i18n/content';

type Props = {
  project: Project;
};

type LightboxFrame = { src: string; alt: string };

export function CaseStudy({ project }: Props) {
  const { locale, dict } = useLocale();
  const copy = localizeProject(project, locale);
  const backHref = copy.kind === 'design' ? '/design' : '/work';
  const backLabel =
    copy.kind === 'design' ? dict.caseStudy.allDesign : dict.common.allWork;
  const kindLabel =
    copy.kind === 'design'
      ? dict.caseStudy.design
      : dict.caseStudy.engineering;
  const gallery = copy.gallery ?? [];
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [frame, setFrame] = useState<LightboxFrame | null>(null);

  function openLightbox(next: LightboxFrame) {
    setFrame(next);
    dialogRef.current?.showModal();
  }

  function closeLightbox() {
    dialogRef.current?.close();
  }

  return (
    <article className="case">
      <p className="eyebrow">
        {kindLabel} · {copy.period}
      </p>
      <h1 className="case__title">{copy.title}</h1>
      <p className="case__role">{copy.role}</p>
      <p className="lede">{copy.hook}</p>

      <div className="case__hero">
        <ProjectMedia src={copy.hero} alt={copy.title} tall priority />
      </div>

      <div className="case__grid">
        <section>
          <h2 className="section-label">{dict.caseStudy.story}</h2>
          {copy.story.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="copy">
              {paragraph}
            </p>
          ))}
        </section>

        <aside className="case__aside">
          <h2 className="section-label">{dict.caseStudy.outcomes}</h2>
          <ul className="list">
            {copy.outcomes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <h2 className="section-label">{dict.caseStudy.stack}</h2>
          <p className="stack-line">{copy.stack.join(' · ')}</p>
          {copy.links?.length ? (
            <>
              <h2 className="section-label">{dict.caseStudy.links}</h2>
              <ul className="case__links">
                {copy.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          ) : null}
        </aside>
      </div>

      {gallery.length > 0 ? (
        <section className="case__gallery" aria-label={dict.caseStudy.gallery}>
          <h2 className="section-label">{dict.caseStudy.visuals}</h2>
          <div className="case__gallery-grid">
            {gallery.map((src, i) => {
              const alt = `${copy.title} · ${dict.caseStudy.frame} ${i + 1}`;
              return (
                <button
                  key={src}
                  type="button"
                  className="case__gallery-open"
                  onClick={() => openLightbox({ src, alt })}
                  aria-label={`${dict.caseStudy.expand}: ${alt}`}
                >
                  <ProjectMedia src={src} alt={alt} fit="contain" />
                </button>
              );
            })}
          </div>
        </section>
      ) : null}

      <dialog
        ref={dialogRef}
        className="lightbox"
        onClose={() => setFrame(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) closeLightbox();
        }}
      >
        <form method="dialog" className="lightbox__bar">
          <button type="submit" className="lightbox__close">
            {dict.caseStudy.close}
          </button>
        </form>
        {frame ? (
          <div className="lightbox__stage media-ph--contain">
            <Image
              className="lightbox__img"
              src={frame.src}
              alt={frame.alt}
              fill
              sizes="100vw"
              priority
            />
          </div>
        ) : null}
      </dialog>

      <p className="case__back">
        <Link href={backHref}>{backLabel}</Link>
      </p>
    </article>
  );
}
