'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useLocale } from '@/components/LocaleProvider';

type DesignCardProps = {
  title: string;
  summary: string;
  href: string;
  image?: string;
  width?: number;
  height?: number;
};

export default function DesignCard({
  title,
  summary,
  href,
  image,
  width = 382,
  height = 200,
}: DesignCardProps) {
  const { dict } = useLocale();

  return (
    <Link
      href={href}
      className="grid items-center gap-3 rounded-card border border-border bg-surface p-[clamp(0.85rem,2.5vw,1rem)] text-primary transition-all duration-150 hover:-translate-y-0.5 hover:border-accent hover:text-primary hover:shadow-[0_12px_32px_hsla(229,84%,5%,0.08)] focus-visible:-translate-y-0.5 focus-visible:border-accent max-md:grid-cols-1 max-[480px]:hover:translate-y-0 motion-reduce:hover:translate-y-0 md:grid-cols-[minmax(100px,140px)_1fr]"
    >
      {image ? (
        <div className="flex min-h-[90px] items-center justify-center rounded-card-sm bg-neutral-subtle p-[clamp(0.5rem,2vw,0.75rem)] max-md:min-h-[110px]">
          <Image
            src={image}
            alt=""
            width={width}
            height={height}
            className="h-auto max-h-[90px] w-auto max-w-full object-contain max-md:max-h-20"
          />
        </div>
      ) : null}
      <div className="flex min-w-0 flex-col gap-1.5">
        <h3>{title}</h3>
        <p>{summary}</p>
        <span className="text-[clamp(0.85rem,2vw,0.9rem)] font-medium text-accent">
          {dict.common.viewCaseStudy}
        </span>
      </div>
    </Link>
  );
}
