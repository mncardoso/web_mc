import { ASSET_BASE } from '@/lib/assets';
import type { Locale } from '@/i18n/locales';

/** Identity + contact — UI marketing copy lives in i18n/messages.ts */
export const profile = {
  name: 'Miguel Cardoso',
  title: 'Lead Frontend Engineer',
  siteUrl: 'https://miguel-cardoso.com',
  /** Used for SEO / OG / JSON-LD (EN). Keep in sync with messages.en.home */
  headline: 'Relocating to Japan. Looking for a lead frontend seat.',
  pitch:
    'I lead product UI end to end — architecture, delivery, and the people who ship it. Design-trained, TypeScript-fluent, ready for Tokyo.',
  email: 'm.n.cardoso@me.com',
  linkedin: 'https://www.linkedin.com/in/mncardoso/',
} as const;

/** Locale-matched CV on S3 (`MiguelCardoso_EN.pdf` / `MiguelCardoso_JP.pdf`). */
export function resumeUrl(locale: Locale) {
  return `${ASSET_BASE}/MiguelCardoso_${locale === 'ja' ? 'JP' : 'EN'}.pdf`;
}
