import type { MetadataRoute } from 'next';

import { projects } from '@/data/projects';
import { profile } from '@/data/profile';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = profile.siteUrl;
  const staticPaths = ['', '/work', '/about', '/contact', '/design', '/privacy'];

  return [
    ...staticPaths.map((path) => ({
      url: `${base}${path}`,
      lastModified: new Date(),
    })),
    ...projects.map((project) => ({
      url: `${base}/${project.kind === 'design' ? 'design' : 'work'}/${project.slug}`,
      lastModified: new Date(),
    })),
  ];
}
