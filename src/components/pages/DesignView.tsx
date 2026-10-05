'use client';

import { PageFrame } from '@/components/PageFrame';
import { useLocale } from '@/components/LocaleProvider';
import { ProjectGrid } from '@/components/work/ProjectGrid';
import { designProjects } from '@/data/projects';

export function DesignView() {
  const { dict } = useLocale();

  return (
    <PageFrame>
      <header className="page-intro">
        <p className="eyebrow">{dict.design.eyebrow}</p>
        <h1 className="page-title">{dict.design.title}</h1>
        <p className="lede">{dict.design.lede}</p>
      </header>
      <ProjectGrid projects={designProjects()} />
    </PageFrame>
  );
}
