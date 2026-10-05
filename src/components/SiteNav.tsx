'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { LanguageToggle } from '@/components/LanguageToggle';
import { useLocale } from '@/components/LocaleProvider';
import { SiteLogo } from '@/components/SiteLogo';
import { ThemeToggle } from '@/components/ThemeToggle';
import { siteNav } from '@/data/nav';
import { profile } from '@/data/profile';

export function SiteNav() {
  const pathname = usePathname();
  const { dict } = useLocale();

  return (
    <header className="site-nav">
      <Link
        className="site-nav__brand"
        href="/"
        aria-label={`${profile.name} home`}
      >
        <SiteLogo size={30} className="site-nav__logo" />
        <span className="site-nav__brand-name">{profile.name}</span>
      </Link>

      <nav className="site-nav__links" aria-label="Primary">
        {siteNav.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? 'is-active' : undefined}
              aria-current={active ? 'page' : undefined}
            >
              {dict.nav[item.key]}
            </Link>
          );
        })}
      </nav>

      <div className="site-nav__controls">
        <LanguageToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
