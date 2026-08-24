'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useLocale } from '@/components/LocaleProvider';

type ProjectCardProps = {
  title: string;
  summary: string;
  href: string;
  meta?: string;
  stack?: readonly string[];
  image?: string;
};

export default function ProjectCard({
  title,
  summary,
  href,
  meta,
  stack,
  image,
}: ProjectCardProps) {
  const { dict } = useLocale();

  return (
    <Link
      href={href}
      className="flex h-full flex-col overflow-hidden rounded-card border border-border bg-surface text-primary transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-primary hover:shadow-[0_16px_40px_hsla(229,84%,5%,0.1)] focus-visible:-translate-y-0.5 focus-visible:border-accent focus-visible:shadow-[0_16px_40px_hsla(229,84%,5%,0.1)] max-[480px]:hover:translate-y-0 motion-reduce:hover:translate-y-0"
    >
      {image ? (
        <div className="aspect-video overflow-hidden border-b border-border bg-neutral-subtle">
          <Image
            src={image}
            alt=""
            className="h-full w-full object-cover"
            width={640}
            height={360}
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col gap-2 p-[clamp(0.9rem,2.5vw,1.1rem)]">
        {meta ? (
          <p className="text-[clamp(0.75rem,1.8vw,0.8rem)] leading-snug font-medium text-accent">
            {meta}
          </p>
        ) : null}
        <h3>{title}</h3>
        <p>{summary}</p>
        {stack?.length ? (
          <p className="text-[clamp(0.8rem,2vw,0.85rem)] leading-snug text-secondary">
            {stack.join(' · ')}
          </p>
        ) : null}
        <span className="mt-auto pt-1 text-[clamp(0.85rem,2vw,0.9rem)] font-medium text-accent">
          {dict.common.viewProject}
        </span>
      </div>
    </Link>
  );
}
