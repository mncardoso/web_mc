'use client';

import Link from 'next/link';

import { useLocale } from '@/components/LocaleProvider';
import { ProjectMedia } from '@/components/work/ProjectMedia';
import type { Project } from '@/data/projects';
import { localizeProject } from '@/i18n/content';

type Props = {
  project: Project;
};

export function ProjectCard({ project }: Props) {
  const { locale } = useLocale();
  const copy = localizeProject(project, locale);
  const href =
    copy.kind === 'design'
      ? `/design/${copy.slug}`
      : `/work/${copy.slug}`;

  return (
    <Link className="project-card" href={href}>
      <div className="project-card__media">
        <ProjectMedia src={copy.cover} alt={copy.title} />
      </div>
      <div className="project-card__body">
        <p className="project-card__meta">
          {copy.role} · {copy.period}
        </p>
        <h3 className="project-card__title">{copy.title}</h3>
        <p className="project-card__hook">{copy.hook}</p>
        <p className="project-card__stack">
          {copy.stack.slice(0, 4).join(' · ')}
        </p>
      </div>
    </Link>
  );
}
