import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { PageFrame } from '@/components/PageFrame';
import { CaseStudy } from '@/components/work/CaseStudy';
import { designProjects, getProject } from '@/data/projects';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return designProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.kind !== 'design') return {};
  return {
    title: project.title,
    description: project.hook,
    alternates: { canonical: `/design/${slug}` },
  };
}

export default async function DesignCasePage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project || project.kind !== 'design') notFound();

  return (
    <PageFrame>
      <CaseStudy project={project} />
    </PageFrame>
  );
}
