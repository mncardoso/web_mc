'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import LanguageToggle from '@/components/LanguageToggle';
import { useLocale } from '@/components/LocaleProvider';
import ThemeToggle from '@/components/ThemeToggle';
import { cn } from '@/lib/cn';
import { navLinkActiveClass, navLinkClass } from '@/lib/ui';

const navItems = [
  { key: 'home' as const, url: '/' },
  { key: 'about' as const, url: '/about' },
  { key: 'work' as const, url: '/work' },
  { key: 'design' as const, url: '/design' },
];

export default function Header() {
  const pathname = usePathname();
  const { dict } = useLocale();
  const year = new Date().getFullYear();

  return (
    <header className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-surface-strong pt-[env(safe-area-inset-top,0px)] backdrop-blur-[14px]">
      <div className="mx-auto flex w-full max-w-[var(--width-content)] flex-col gap-2 px-[var(--spacing-page)] py-3 md:grid md:grid-cols-[auto_1fr_auto] md:items-center md:gap-x-4 md:gap-y-0 max-[480px]:py-2.5">
        {/* Row 1 mobile: brand + toggles | Desktop: brand only in col 1 */}
        <div className="flex items-center justify-between gap-3 md:contents">
          <Link
            href="/"
            className="inline-flex min-w-0 items-center gap-2 text-[clamp(0.85rem,2vw,0.95rem)] font-extrabold text-primary no-underline hover:text-primary md:col-start-1 md:row-start-1"
          >
            <Image src="/logo.svg" alt="Miguel Cardoso" width={36} height={36} />
            <span className="truncate max-[480px]:hidden">Miguel Cardoso</span>
          </Link>

          <div className="flex shrink-0 items-center gap-1.5 md:col-start-3 md:row-start-1 md:justify-self-end max-[360px]:gap-1">
            <LanguageToggle />
            <ThemeToggle />
            <small className="hidden whitespace-nowrap text-[0.72rem] text-secondary xl:inline">
              v6.0 · {year}
            </small>
          </div>
        </div>

        {/* Row 2 mobile / col 2 desktop: nav */}
        <nav
          className="min-w-0 md:col-start-2 md:row-start-1 md:justify-self-center max-md:overflow-x-auto max-md:[-webkit-overflow-scrolling:touch] max-md:[scrollbar-width:none] max-md:[&::-webkit-scrollbar]:hidden"
          aria-label="Main"
        >
          <ul className="flex flex-wrap justify-center gap-1.5 max-md:w-max max-md:min-w-full max-md:flex-nowrap max-md:justify-start max-md:pb-0.5">
            {navItems.map((item) => {
              const isActive =
                item.url === '/'
                  ? pathname === '/'
                  : pathname.startsWith(item.url);

              return (
                <li key={item.url}>
                  <Link
                    href={item.url}
                    className={cn(
                      navLinkClass,
                      isActive && navLinkActiveClass,
                      isActive && 'nav-link-active',
                    )}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {dict.nav[item.key]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
