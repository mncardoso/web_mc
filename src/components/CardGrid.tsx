import type { ReactNode } from 'react';

export default function CardGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-(--spacing-section) max-[480px]:grid-cols-1">
      {children}
    </div>
  );
}
