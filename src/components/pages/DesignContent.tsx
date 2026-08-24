'use client';

import DesignCard from '@/components/DesignCard';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';
import { designMeta, designSlugMap } from '@/data/projects';

export default function DesignContent() {
  const { dict } = useLocale();
  const { design } = dict;

  return (
    <PageShell>
      <PageHeader
        eyebrow={design.index.eyebrow}
        title={design.index.title}
        subtitle={design.index.subtitle}
      />

      <div className="flex flex-col gap-(--spacing-section)">
        {designMeta.map((item, index) => {
          const key = designSlugMap[item.slug];
          const cases = {
            rusticHouse: design.rusticHouse,
            exponentialE: design.exponentialE,
            other: design.other,
          } as const;
          const copy = cases[key];
          return (
            <div
              key={item.slug}
              className="section-enter"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <DesignCard
                title={copy.title}
                summary={copy.summary}
                href={item.href}
                image={'image' in item ? item.image : undefined}
                width={'width' in item ? item.width : undefined}
                height={'height' in item ? item.height : undefined}
              />
            </div>
          );
        })}
      </div>
    </PageShell>
  );
}
