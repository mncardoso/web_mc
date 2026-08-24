'use client';

import { useTheme } from '@/components/ThemeProvider';
import {
  segmentedButtonState,
  segmentedControlClass,
} from '@/lib/ui';

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden className="shrink-0">
      <circle cx="12" cy="12" r="4.25" fill="none" stroke="currentColor" strokeWidth="1.75" />
      <g stroke="currentColor" strokeWidth="1.75" strokeLinecap="round">
        <line x1="12" y1="2.5" x2="12" y2="5.5" />
        <line x1="12" y1="18.5" x2="12" y2="21.5" />
        <line x1="2.5" y1="12" x2="5.5" y2="12" />
        <line x1="18.5" y1="12" x2="21.5" y2="12" />
        <line x1="4.6" y1="4.6" x2="6.7" y2="6.7" />
        <line x1="17.3" y1="17.3" x2="19.4" y2="19.4" />
        <line x1="4.6" y1="19.4" x2="6.7" y2="17.3" />
        <line x1="17.3" y1="6.7" x2="19.4" y2="4.6" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden className="shrink-0">
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

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={segmentedControlClass} role="group" aria-label="Theme">
      <button
        type="button"
        className={segmentedButtonState(theme === 'light')}
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        aria-label="Light mode"
        title="Light mode"
      >
        <SunIcon />
      </button>
      <button
        type="button"
        className={segmentedButtonState(theme === 'dark')}
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        aria-label="Dark mode"
        title="Dark mode"
      >
        <MoonIcon />
      </button>
    </div>
  );
}
