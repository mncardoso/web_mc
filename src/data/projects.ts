/**
 * Structural project data (locale-independent).
 * Copy lives in src/i18n/{en,ja}.ts
 */
export const projectMeta = [
  {
    slug: 'securecell',
    href: '/work/securecell',
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Quasar', 'Vitest'],
    featured: true,
    japanRelevant: true,
  },
  {
    slug: 'little-emperors',
    href: '/work/little-emperors',
    stack: ['React', 'React Native', 'Next.js', 'MJML', 'Laravel'],
    links: [{ labelKey: 'website' as const, href: 'https://littleemperors.com/' }],
    featured: true,
    japanRelevant: true,
  },
  {
    slug: 'freelance-2024',
    href: '/work/freelance-2024',
    stack: ['React', 'Next.js', 'Node.js'],
    featured: false,
    japanRelevant: true,
  },
  {
    slug: 'freelance-2020',
    href: '/work/freelance-2020',
    stack: ['Next.js', 'React', 'Angular', 'PHP', 'Python'],
    featured: false,
    japanRelevant: false,
  },
  {
    slug: 'covid-dashboard',
    href: '/work/covid-dashboard',
    stack: ['React', 'D3.js'],
    links: [
      { labelKey: 'liveDemo' as const, href: 'https://covid.miguel-cardoso.com/' },
      {
        labelKey: 'github' as const,
        href: 'https://github.com/mncardoso/covid19_dashboard',
      },
    ],
    featured: false,
    japanRelevant: false,
  },
  {
    slug: 'explorer',
    href: '/work/explorer',
    stack: ['Adobe XD', 'Prototyping'],
    image: 'https://s3.eu-north-1.amazonaws.com/web.mc/assets.explorer/design.png',
    links: [
      { labelKey: 'openApp' as const, href: 'https://explorer.miguel-cardoso.com/' },
      {
        labelKey: 'caseStudy' as const,
        href: 'https://explorer.miguel-cardoso.com/CaseStudy',
      },
    ],
    featured: false,
    japanRelevant: false,
  },
] as const;

export const designMeta = [
  {
    slug: 'rustic-house',
    href: '/design/rustic-house',
    image: 'https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/rustic.svg',
    width: 382,
    height: 434,
  },
  {
    slug: 'exponential-e',
    href: '/design/exponential-e',
    image:
      'https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/exponential_e_logo.svg',
    width: 382,
    height: 88,
  },
  {
    slug: 'other',
    href: '/design/other',
  },
] as const;

export type DesignSlug = 'rusticHouse' | 'exponentialE' | 'other';

export const designSlugMap: Record<string, DesignSlug> = {
  'rustic-house': 'rusticHouse',
  'exponential-e': 'exponentialE',
  other: 'other',
};

export const experienceOrder = [
  'securecell',
  'freelance-2024',
  'little-emperors',
  'freelance-2020',
  'exponential-e',
] as const;

export type ExperienceSlug = (typeof experienceOrder)[number];
