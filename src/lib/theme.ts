export type Theme = 'light' | 'dark';

export const THEME_STORAGE_KEY = 'theme';

declare global {
  interface Window {
    __THEME__?: Theme;
  }
}

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function getStoredTheme(): Theme | null {
  if (typeof window === 'undefined') return null;
  const stored = localStorage.getItem(THEME_STORAGE_KEY);
  return stored === 'light' || stored === 'dark' ? stored : null;
}

export function readTheme(): Theme {
  if (typeof document !== 'undefined') {
    const fromDom = document.documentElement.getAttribute('data-theme');
    if (fromDom === 'light' || fromDom === 'dark') return fromDom;
  }

  if (typeof window !== 'undefined' && window.__THEME__) {
    return window.__THEME__;
  }

  return getStoredTheme() ?? getSystemTheme();
}

export function applyTheme(theme: Theme) {
  if (typeof window !== 'undefined') {
    window.__THEME__ = theme;
  }

  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme);
    document.documentElement.style.colorScheme = theme;
  }
}
