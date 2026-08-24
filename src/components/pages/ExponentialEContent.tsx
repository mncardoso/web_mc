'use client';

import Image from 'next/image';

import ActionBar from '@/components/ActionBar';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';
import PictureGallery from '@/components/PictureGallery';
import Section from '@/components/Section';
import VideoGallery from '@/components/VideoGallery';

export default function ExponentialEContent() {
  const { dict } = useLocale();
  const copy = dict.design.exponentialE;
  const { common } = dict;
  const { sections } = copy;

  return (
    <PageShell>
      <PageHeader
        eyebrow={common.design}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <Section title={sections.videos} delay={40}>
        <VideoGallery>
          <div>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6595710526259625984?compact=1"
              allowFullScreen
              title="LinkedIn video 1"
            />
          </div>
          <div>
            <iframe
              src="https://www.youtube.com/embed/ozDSRZOZ9JY"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube video 1"
            />
          </div>
        </VideoGallery>
      </Section>

      <Section title={sections.motion} delay={80}>
        <VideoGallery>
          <div>
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6586974639623286784?compact=1"
              allowFullScreen
              title="LinkedIn motion 1"
            />
          </div>
        </VideoGallery>
      </Section>

      <Section title={sections.print} delay={120}>
        <PictureGallery>
          {['001', '002', '003'].map((id) => (
            <Image
              key={id}
              src={`https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/print/poster_${id}.jpg`}
              alt={`Poster ${id}`}
              width={1191}
              height={1684}
            />
          ))}
        </PictureGallery>
      </Section>

      <Section title={sections.graphic} delay={160}>
        <PictureGallery>
          {Array.from({ length: 6 }, (_, i) => {
            const id = String(i + 1).padStart(3, '0');
            return (
              <Image
                key={id}
                src={`https://s3.eu-north-1.amazonaws.com/web.mc/assets/exponential.e/social/${id}.jpg`}
                alt={`Social ${id}`}
                width={800}
                height={418}
              />
            );
          })}
        </PictureGallery>
      </Section>

      <ActionBar
        actions={[{ label: common.allDesign, href: '/design' }]}
      />
    </PageShell>
  );
}
