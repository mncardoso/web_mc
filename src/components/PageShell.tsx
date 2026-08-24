import type { ReactNode } from 'react';

export default function PageShell({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-(--spacing-section)">{children}</div>;
}
