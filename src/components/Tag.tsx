import type { ReactNode } from 'react';

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-accent-soft px-2.5 py-1 text-[clamp(0.75rem,2vw,0.82rem)] leading-snug font-medium text-primary">
      {children}
    </span>
  );
}
