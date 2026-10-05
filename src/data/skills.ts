export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};

/** Condensed for About — only what recruiters scan. */
export const skillGroups: SkillGroup[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    items: ['TypeScript', 'Vue 3', 'React', 'Next.js', 'React Native', 'Pinia'],
  },
  {
    id: 'quality',
    label: 'Quality & delivery',
    items: ['Vitest', 'Accessibility (WCAG)', 'CI/CD', 'Scrum Master', 'Line management'],
  },
  {
    id: 'design',
    label: 'Design background',
    items: ['Figma', 'UI systems', 'Brand', 'Prototyping'],
  },
];

export const education = [
  {
    year: '2022',
    credential: 'Front-End Engineer Career Path',
    institution: 'Codecademy',
  },
  {
    year: '2021',
    credential: 'Foundations of Programming',
    institution: 'Instituto Superior Técnico',
  },
  {
    year: '2013',
    credential: 'BA, Animation & Interactive Media',
    institution: 'Universidade Lusófona',
  },
] as const;

export const awards = [
  'Winner — Adobe XD Mastered (Adobe UK), 2022',
] as const;
