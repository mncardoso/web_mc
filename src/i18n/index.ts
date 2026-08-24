import type { Locale } from '@/i18n/locales';

import { en } from './en';
import { ja } from './ja';

export const dictionaries = { en, ja } as const;

export type Dictionary = (typeof dictionaries)[Locale];

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
