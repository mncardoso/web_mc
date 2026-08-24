export const locales = ['en', 'ja'] as const;
export type Locale = (typeof locales)[number];

export const LOCALE_STORAGE_KEY = 'locale';

export const localeLabels: Record<Locale, string> = {
  en: 'EN',
  ja: '日本語',
};

declare global {
  interface Window {
    __LOCALE__?: Locale;
  }
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function readLocale(): Locale {
  if (typeof document !== 'undefined') {
    const fromDom = document.documentElement.lang;
    if (fromDom && isLocale(fromDom)) return fromDom;
  }

  if (typeof window !== 'undefined' && window.__LOCALE__) {
    return window.__LOCALE__;
  }

  if (typeof window === 'undefined') return 'en';

  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return stored && isLocale(stored) ? stored : 'en';
}

export function applyLocale(locale: Locale) {
  if (typeof window !== 'undefined') {
    window.__LOCALE__ = locale;
  }

  if (typeof document !== 'undefined') {
    document.documentElement.lang = locale;
  }
}
