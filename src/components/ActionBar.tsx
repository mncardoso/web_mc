import Link from 'next/link';

import { actionButtonClass } from '@/lib/ui';

export type Action = {
  label: string;
  href: string;
  external?: boolean;
  variant?: 'primary' | 'ghost';
};

export default function ActionBar({ actions }: { actions: Action[] }) {
  if (!actions.length) return null;

  return (
    <div
      className="section-enter flex flex-wrap gap-2 max-sm:justify-center sm:gap-2.5"
      style={{ animationDelay: '120ms' }}
    >
      {actions.map((action) => {
        const className = actionButtonClass(action.variant === 'primary' ? 'primary' : 'ghost');

        if (action.external) {
          return (
            <a
              key={action.href}
              href={action.href}
              className={className}
              data-action="button"
              target="_blank"
              rel="noopener noreferrer"
            >
              {action.label}
            </a>
          );
        }

        return (
          <Link key={action.href} href={action.href} className={className} data-action="button">
            {action.label}
          </Link>
        );
      })}
    </div>
  );
}
