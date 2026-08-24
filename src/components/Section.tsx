import type { ReactNode } from 'react';

import { cn } from '@/lib/cn';

type SectionProps = {
  children: ReactNode;
  title?: string;
  delay?: number;
  className?: string;
};

export default function Section({
  children,
  title,
  delay = 0,
  className,
}: SectionProps) {
  return (
    <section
      className={cn(
        'section-enter flex flex-col gap-3 rounded-card border border-border bg-surface p-[clamp(0.9rem,2.5vw,1.5rem)] shadow-[0_8px_32px_hsla(229,84%,5%,0.06)] backdrop-blur-md max-[480px]:rounded-card-sm',
        className,
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      {title ? <h2 className="text-primary">{title}</h2> : null}
      <div className="flex min-w-0 flex-col gap-3 [&_li::marker]:text-accent [&_ul]:flex [&_ul]:list-disc [&_ul]:flex-col [&_ul]:gap-2 [&_ul]:pl-[clamp(0.85rem,3vw,1.1rem)]">
        {children}
      </div>
    </section>
  );
}
