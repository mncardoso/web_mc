'use client';

import { localeLabels, locales } from '@/i18n/locales';

import { useLocale } from '@/components/LocaleProvider';
import {
  segmentedButtonState,
  segmentedControlClass,
} from '@/lib/ui';

export default function LanguageToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className={segmentedControlClass} role="group" aria-label="Language">
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          className={segmentedButtonState(locale === code)}
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
        >
          {localeLabels[code]}
        </button>
      ))}
    </div>
  );
}
