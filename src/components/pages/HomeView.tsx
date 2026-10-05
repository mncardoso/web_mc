'use client';

import Link from 'next/link';

import { useLocale } from '@/components/LocaleProvider';
import { SiteLogo } from '@/components/SiteLogo';
import { ProjectGrid } from '@/components/work/ProjectGrid';
import { featuredProjects } from '@/data/projects';
import { profile, resumeUrl } from '@/data/profile';

export function HomeView() {
  const { locale, dict } = useLocale();
  const featured = featuredProjects();

  return (
    <div className="home">
      <section className="home__hero">
        <p className="eyebrow">{dict.home.relocation}</p>
        <div className="home__brand-row">
          <SiteLogo size={72} className="home__logo" />
          <h1 className="home__brand">{profile.name}</h1>
        </div>
        <p className="home__title">{dict.home.title}</p>
        <p className="home__headline">{dict.home.headline}</p>
        <p className="lede home__pitch">{dict.home.pitch}</p>
        <div className="cta-row">
          <Link className="btn btn--primary" href="/work">
            {dict.common.seeWork}
          </Link>
          <Link className="btn" href="/contact">
            {dict.common.contact}
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
      </section>

      <section className="home__featured" aria-labelledby="featured-heading">
        <div className="home__featured-head">
          <div>
            <p className="eyebrow">{dict.home.featuredEyebrow}</p>
            <h2 id="featured-heading" className="section-title">
              {dict.home.featuredTitle}
            </h2>
          </div>
          <Link className="text-link" href="/work">
            {dict.common.allWork}
          </Link>
        </div>
        <ProjectGrid projects={featured} />
      </section>
    </div>
  );
}
