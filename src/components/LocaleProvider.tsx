'use client';

import {
  createContext,
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useSyncExternalStore,
} from 'react';

import { getDictionary, type Dictionary } from '@/i18n';
import {
  applyLocale,
  LOCALE_STORAGE_KEY,
  readLocale,
  type Locale,
} from '@/i18n/locales';

const LOCALE_CHANGE = 'locale-change';

type LocaleContextValue = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (locale: Locale) => void;
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

function subscribeLocale(onChange: () => void) {
  window.addEventListener('storage', onChange);
  window.addEventListener(LOCALE_CHANGE, onChange);
  queueMicrotask(onChange);

  return () => {
    window.removeEventListener('storage', onChange);
    window.removeEventListener(LOCALE_CHANGE, onChange);
  };
}

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useSyncExternalStore<Locale>(subscribeLocale, readLocale, () => 'en');

  useLayoutEffect(() => {
    window.dispatchEvent(new Event(LOCALE_CHANGE));
  }, []);

  const setLocale = useCallback((next: Locale) => {
    applyLocale(next);
    localStorage.setItem(LOCALE_STORAGE_KEY, next);
    window.dispatchEvent(new Event(LOCALE_CHANGE));
  }, []);

  const dict = useMemo(() => getDictionary(locale), [locale]);

  const value = useMemo(
    () => ({ locale, dict, setLocale }),
    [locale, dict, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within LocaleProvider');
  }
  return context;
}
