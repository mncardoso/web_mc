import { assetPng } from '@/lib/assets';

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  kind: 'engineering' | 'design';
  title: string;
  role: string;
  period: string;
  hook: string;
  story: string[];
  outcomes: string[];
  stack: string[];
  featured?: boolean;
  /** Card / grid image */
  cover: string;
  /** Case study lead image */
  hero: string;
  /** Extra case study frames */
  gallery?: string[];
  links?: ProjectLink[];
};

export const projects: Project[] = [
  {
    slug: 'securecell',
    kind: 'engineering',
    title: 'Securecell',
    role: 'Lead Frontend',
    period: '2024 – Present',
    hook: 'Bioreactor product UI — dense data, high trust, ~80% test coverage.',
    story: [
      'Securecell builds an all-in-one bioreactor for cell cultivation. Operators need interfaces that stay clear when the process gets complex: configuration, monitoring, and decision support.',
      'I lead the frontend — architecture, delivery standards, and the people side (Scrum Master for 13, line manager for 3). The brief is reliable interaction under real lab constraints.',
    ],
    outcomes: [
      '~80% automated coverage on the device UI',
      'Promoted to Lead with 3 direct reports',
      'Facilitating a 13-person cross-functional team',
    ],
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Quasar', 'Vitest'],
    featured: true,
    cover: assetPng('securecell-cover'),
    hero: assetPng('securecell-cover'),
    gallery: [assetPng('securecell-frame-1')],
  },
  {
    slug: 'little-emperors',
    kind: 'engineering',
    title: 'Little Emperors',
    role: 'Software Engineer',
    period: '2022 – 2024',
    hook: 'Web + mobile across three products, plus email systems and accessibility.',
    story: [
      'Luxury travel membership products need polish across web, mobile, and email. I shipped production features in React, React Native, and Next.js, and helped marketing move faster with a shared email system.',
      'I also drove company-wide accessibility: documentation, screen-reader training, and engineering defaults that stuck.',
    ],
    outcomes: [
      'Shipped across three client-facing products',
      'Faster campaigns via shared email system',
      'Org-wide accessibility practices',
    ],
    stack: ['React', 'React Native', 'Next.js', 'MJML'],
    featured: true,
    cover: assetPng('little-emperors-cover'),
    hero: assetPng('little-emperors-hero'),
    gallery: [
      assetPng('little-emperors-frame-1'),
      assetPng('little-emperors-frame-2'),
    ],
    links: [{ label: 'Company site', href: 'https://littleemperors.com/' }],
  },
  {
    slug: 'explorer',
    kind: 'engineering',
    title: 'Explorer',
    role: 'Product design',
    period: '2022',
    hook: 'Travel discovery concept — Adobe XD Mastered winner (Adobe UK).',
    story: [
      'A competition brief to prove end-to-end product thinking: flows, UI, and a case study. The prototype still shows interaction design chops that pair with engineering leadership.',
    ],
    outcomes: ['Adobe XD Mastered winner (Adobe UK)'],
    stack: ['Adobe XD', 'Prototyping', 'UI design'],
    featured: true,
    cover: assetPng('explorer-cover'),
    hero: assetPng('explorer-hero'),
    gallery: [assetPng('explorer-frame-1')],
    links: [
      { label: 'Prototype', href: 'https://explorer.miguel-cardoso.com/' },
      {
        label: 'Case study',
        href: 'https://explorer.miguel-cardoso.com/CaseStudy',
      },
    ],
  },
  {
    slug: 'covid-dashboard',
    kind: 'engineering',
    title: 'COVID vaccination dashboard',
    role: 'Personal project',
    period: '2021',
    hook: 'Country comparison charts with React + D3 and public data.',
    story: [
      'A small dashboard on Our World in Data to compare vaccination progress across countries — still a clean proof of data-viz craft.',
    ],
    outcomes: ['Live demo online', 'Public GitHub repo'],
    stack: ['React', 'D3.js'],
    cover: assetPng('covid-dashboard-cover'),
    hero: assetPng('covid-dashboard-hero'),
    links: [
      { label: 'Live demo', href: 'https://covid.miguel-cardoso.com/' },
      {
        label: 'GitHub',
        href: 'https://github.com/mncardoso/covid19_dashboard',
      },
    ],
  },
  {
    slug: 'casa-rustica',
    kind: 'design',
    title: 'Casa Rústica',
    role: 'Brand & photography',
    period: 'Freelance',
    hook: 'Full identity for a rural lodging business — logo, stationery, photography.',
    story: [
      'Identity built as a stampable mark inspired by the house itself, plus on-location photography for booking and social surfaces.',
    ],
    outcomes: ['Logo, stationery, and photo set delivered'],
    stack: ['Brand', 'Logo', 'Photography'],
    cover: assetPng('casa-rustica-cover'),
    hero: assetPng('casa-rustica-hero'),
    gallery: [
      assetPng('casa-rustica-frame-1'),
      assetPng('casa-rustica-frame-2'),
      assetPng('casa-rustica-frame-3'),
    ],
  },
  {
    slug: 'exponential-e',
    kind: 'design',
    title: 'Exponential-e',
    role: 'Graphic / motion',
    period: '2019 – 2020',
    hook: 'Video, print, and social for a UK managed services company.',
    story: [
      'In-house design in London: thought-leadership video with department leaders, print systems, social assets, and accessible labelling for an internal retail space.',
    ],
    outcomes: [
      'Video series for sales enablement',
      'Accessible labelling for visually impaired users',
    ],
    stack: ['Video', 'Print', 'Social'],
    cover: assetPng('exponential-e-cover'),
    hero: assetPng('exponential-e-hero'),
    gallery: [
      assetPng('exponential-e-frame-1'),
      assetPng('exponential-e-frame-2'),
      assetPng('exponential-e-frame-3'),
    ],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function engineeringProjects() {
  return projects.filter((p) => p.kind === 'engineering');
}

export function designProjects() {
  return projects.filter((p) => p.kind === 'design');
}

export function featuredProjects() {
  return projects.filter((p) => p.featured);
}
