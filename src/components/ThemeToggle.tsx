'use client';

import { useTheme } from '@/components/ThemeProvider';
import { useLocale } from '@/components/LocaleProvider';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <g stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <line x1="12" y1="2.75" x2="12" y2="5.25" />
        <line x1="12" y1="18.75" x2="12" y2="21.25" />
        <line x1="2.75" y1="12" x2="5.25" y2="12" />
        <line x1="18.75" y1="12" x2="21.25" y2="12" />
        <line x1="4.8" y1="4.8" x2="6.6" y2="6.6" />
        <line x1="17.4" y1="17.4" x2="19.2" y2="19.2" />
        <line x1="4.8" y1="19.2" x2="6.6" y2="17.4" />
        <line x1="17.4" y1="6.6" x2="19.2" y2="4.8" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true">
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20 14.5A7.5 7.5 0 1 1 9.5 4 6.5 6.5 0 0 0 20 14.5Z"
      />
    </svg>
  );
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const { dict } = useLocale();

  return (
    <div className="seg" role="group" aria-label={dict.common.theme}>
      <button
        type="button"
        className={theme === 'light' ? 'seg__btn is-active' : 'seg__btn'}
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        aria-label={dict.common.themeLight}
        title={dict.common.themeLight}
      >
        <SunIcon />
      </button>
      <button
        type="button"
        className={theme === 'dark' ? 'seg__btn is-active' : 'seg__btn'}
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        aria-label={dict.common.themeDark}
        title={dict.common.themeDark}
      >
        <MoonIcon />
      </button>
    </div>
  );
}
