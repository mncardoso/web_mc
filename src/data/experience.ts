export type ExperienceItem = {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  progression?: string;
  summary: string;
  bullets: string[];
  stack: string[];
};

/** Recruiter-facing roles only — trimmed for About. */
export const experience: ExperienceItem[] = [
  {
    id: 'securecell',
    role: 'Lead Frontend Software Engineer',
    company: 'Securecell AG',
    location: 'Lisbon',
    period: 'Dec 2024 – Present',
    progression:
      'Frontend Developer → Scrum Master → Lead FE + 3 reports',
    summary:
      'Lead frontend for an all-in-one bioreactor — dashboards, configuration, and data-driven UI for bioprocess teams.',
    bullets: [
      'Promoted to Lead with 3 direct reports',
      '~80% automated coverage on the device UI (Vitest)',
      'Scrum Master for a 13-person cross-functional team',
    ],
    stack: ['Vue 3', 'TypeScript', 'Pinia', 'Quasar', 'Vitest'],
  },
  {
    id: 'little-emperors',
    role: 'Software Engineer',
    company: 'Little Emperors & Co',
    location: 'Remote',
    period: 'Sep 2022 – Jan 2024',
    summary:
      'Production features across React web, React Native, Next.js, and email systems.',
    bullets: [
      'Shipped across three client-facing products',
      'Led company-wide accessibility practices',
      'Built a shared email design/implementation system',
    ],
    stack: ['React', 'React Native', 'Next.js', 'MJML'],
  },
  {
    id: 'freelance',
    role: 'Software Engineer',
    company: 'Freelance',
    location: 'Remote',
    period: '2020 – 2024',
    summary:
      'NDA client delivery across housing, travel, cosmetics, and pharmaceutical data.',
    bullets: [
      'End-to-end delivery from workshops to ship',
      'Performance and structure improvements on legacy codebases',
    ],
    stack: ['React', 'Next.js', 'TypeScript', 'Node.js'],
  },
];
