'use client';

import Image from 'next/image';

import ActionBar from '@/components/ActionBar';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';
import PictureGallery from '@/components/PictureGallery';
import Section from '@/components/Section';

export default function OtherDesignContent() {
  const { dict } = useLocale();
  const copy = dict.design.other;
  const { common } = dict;
  const { sections } = copy;

  return (
    <PageShell>
      <PageHeader
        eyebrow={common.design}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <Section title={sections.watch} delay={40}>
        <div className="flex justify-center [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-card-sm [&_img]:border [&_img]:border-border">
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/other/apple_watch.png"
            alt={sections.watch}
            width={272}
            height={340}
          />
        </div>
      </Section>

      <Section title={sections.innerShell} delay={80}>
        <div className="relative overflow-hidden rounded-card-sm border border-border pb-[56.25%] [&_iframe]:absolute [&_iframe]:inset-0 [&_iframe]:h-full [&_iframe]:w-full [&_iframe]:border-0">
          <iframe
            src="https://player.vimeo.com/video/71205214?h=73add8e450"
            width={640}
            height={267}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title={sections.innerShell}
          />
        </div>
      </Section>

      <Section title={sections.faceFilter} delay={120}>
        <div className="flex justify-center [&_img]:h-auto [&_img]:max-w-full [&_img]:rounded-card-sm [&_img]:border [&_img]:border-border">
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/other/insta.png"
            alt={sections.faceFilter}
            width={299}
            height={299}
          />
        </div>
        <ActionBar
          actions={[
            {
              label: common.tryOnInstagram,
              href: 'https://www.instagram.com/ar/251002266053231/',
              external: true,
            },
          ]}
        />
      </Section>

      <Section title={sections.blissPoint} delay={160}>
        <PictureGallery>
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/other/bliss_point_product.png"
            alt={sections.blissPoint}
            width={1080}
            height={1080}
          />
        </PictureGallery>
      </Section>

      <Section title={sections.audioTape} delay={200}>
        <PictureGallery>
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/other/audio_tape.png"
            alt={sections.audioTape}
            width={2692}
            height={2692}
          />
        </PictureGallery>
      </Section>

      <Section title={sections.waterBottle} delay={240}>
        <PictureGallery>
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/other/watter_bottle.png"
            alt={sections.waterBottle}
            width={5000}
            height={3334}
          />
        </PictureGallery>
      </Section>

      <ActionBar actions={[{ label: common.allDesign, href: '/design' }]} />
    </PageShell>
  );
}
