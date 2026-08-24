import type { ReactNode } from 'react';

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  meta?: string;
  children?: ReactNode;
};

export default function PageHeader({
  eyebrow,
  title,
  subtitle,
  meta,
  children,
}: PageHeaderProps) {
  return (
    <header className="section-enter flex flex-col gap-2.5 rounded-card border border-border bg-surface-strong p-[clamp(1rem,3vw,2rem)] shadow-[0_12px_40px_hsla(229,84%,5%,0.08)] backdrop-blur-md max-[480px]:gap-2 max-[480px]:rounded-card-sm">
      {eyebrow ? (
        <p className="text-[clamp(0.72rem,1.5vw,0.8rem)] font-medium tracking-widest text-accent uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1>{title}</h1>
      {subtitle ? (
        <p className="max-w-[62ch] text-[clamp(1rem,2.5vw,1.1rem)] leading-relaxed text-secondary">
          {subtitle}
        </p>
      ) : null}
      {meta ? (
        <p className="text-[clamp(0.82rem,2vw,0.9rem)] leading-normal font-medium text-accent">
          {meta}
        </p>
      ) : null}
      {children}
    </header>
  );
}
