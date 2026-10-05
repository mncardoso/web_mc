import { ProjectCard } from '@/components/work/ProjectCard';
import type { Project } from '@/data/projects';

type Props = {
  projects: Project[];
};

export function ProjectGrid({ projects }: Props) {
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
