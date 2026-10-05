import { describe, expect, it } from 'vitest';

import { getProject } from '@/data/projects';
import { localizeProject } from '@/i18n/content';

describe('localizeProject', () => {
  it('returns Japanese copy for known slugs', () => {
    const project = getProject('securecell');
    expect(project).toBeTruthy();
    if (!project) return;
    const ja = localizeProject(project, 'ja');
    expect(ja.role).toBe('リードフロントエンド');
    expect(ja.hook).toContain('バイオリアクター');
    expect(localizeProject(project, 'en').role).toBe(project.role);
  });
});
