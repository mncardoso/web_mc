'use client';

import { useLocale } from '@/components/LocaleProvider';
import { localeLabels, locales } from '@/i18n';

export function LanguageToggle() {
  const { locale, setLocale, dict } = useLocale();

  return (
    <div className="seg" role="group" aria-label={dict.common.language}>
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className={locale === code ? 'seg__btn is-active' : 'seg__btn'}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
