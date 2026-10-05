'use client';

import { PageFrame } from '@/components/PageFrame';
import { useLocale } from '@/components/LocaleProvider';
import { ProjectGrid } from '@/components/work/ProjectGrid';
import { engineeringProjects } from '@/data/projects';

export function WorkView() {
  const { dict } = useLocale();

  return (
    <PageFrame>
      <header className="page-intro">
        <p className="eyebrow">{dict.work.eyebrow}</p>
        <h1 className="page-title">{dict.work.title}</h1>
        <p className="lede">{dict.work.lede}</p>
      </header>
      <ProjectGrid projects={engineeringProjects()} />
    </PageFrame>
  );
}
