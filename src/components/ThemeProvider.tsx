'use client';

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
} from 'react';

import {
  applyTheme,
  readTheme,
  type Theme,
  THEME_STORAGE_KEY,
} from '@/lib/theme';

const THEME_CHANGE = 'theme-change';

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

function subscribeTheme(onChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)');
  const onMediaChange = () => onChange();

  media.addEventListener('change', onMediaChange);
  window.addEventListener('storage', onChange);
  window.addEventListener(THEME_CHANGE, onChange);
  queueMicrotask(onChange);

  return () => {
    media.removeEventListener('change', onMediaChange);
    window.removeEventListener('storage', onChange);
    window.removeEventListener(THEME_CHANGE, onChange);
  };
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = useSyncExternalStore<Theme>(subscribeTheme, readTheme, () => 'light');

  useLayoutEffect(() => {
    window.dispatchEvent(new Event(THEME_CHANGE));
  }, []);

  const setTheme = useCallback((next: Theme) => {
    applyTheme(next);
    localStorage.setItem(THEME_STORAGE_KEY, next);
    window.dispatchEvent(new Event(THEME_CHANGE));
  }, []);

  const value = useMemo(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
