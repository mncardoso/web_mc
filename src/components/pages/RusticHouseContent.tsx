'use client';

import Image from 'next/image';

import ActionBar from '@/components/ActionBar';
import { useLocale } from '@/components/LocaleProvider';
import PageHeader from '@/components/PageHeader';
import PageShell from '@/components/PageShell';
import PictureGallery from '@/components/PictureGallery';
import Section from '@/components/Section';

const imageClass =
  'h-auto w-full rounded-card-sm border border-border';

export default function RusticHouseContent() {
  const { dict } = useLocale();
  const copy = dict.design.rusticHouse;
  const { common } = dict;

  return (
    <PageShell>
      <PageHeader
        eyebrow={common.design}
        title={copy.title}
        subtitle={copy.subtitle}
      />

      <Section title={copy.sections.briefing} delay={40}>
        <p>{copy.briefing}</p>
      </Section>

      <Section title={copy.sections.logoReq} delay={80}>
        <p>{copy.logoReq}</p>
      </Section>

      <Section title={copy.sections.moodBoard} delay={120}>
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/mood_board.png"
          alt={copy.sections.moodBoard}
          className={imageClass}
          width={888}
          height={606}
        />
      </Section>

      <Section title={copy.sections.process} delay={160}>
        <p>{copy.process}</p>
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/process.png"
          alt={copy.sections.process}
          className={imageClass}
          width={1192}
          height={731}
        />
      </Section>

      <Section title={copy.sections.stationery} delay={200}>
        <Image
          src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/stationary.png"
          alt={copy.sections.stationery}
          className={imageClass}
          width={1286}
          height={804}
        />
      </Section>

      <Section title={copy.sections.pictures} delay={240}>
        <p>{copy.pictures}</p>
        <PictureGallery>
          {Array.from({ length: 20 }, (_, i) => {
            const num = String(i + 1).padStart(3, '0');
            return (
              <Image
                key={num}
                src={`https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/photos/${num}.png`}
                alt={`${copy.title} ${i + 1}`}
                width={161}
                height={109}
              />
            );
          })}
        </PictureGallery>
      </Section>

      <Section title={copy.sections.online} delay={280}>
        <div className="flex justify-center [&_img]:h-auto [&_img]:w-full [&_img]:max-w-[420px] [&_img]:rounded-card-sm [&_img]:border [&_img]:border-border">
          <Image
            src="https://s3.eu-north-1.amazonaws.com/web.mc/assets/rustic.house/online.png"
            alt={copy.sections.online}
            width={1056}
            height={2008}
          />
        </div>
      </Section>

      <Section title={copy.sections.result} delay={320}>
        <p>{copy.result}</p>
        <blockquote className="border-l-[3px] border-accent pl-4 text-secondary italic">
          {copy.quote}
        </blockquote>
      </Section>

      <ActionBar actions={[{ label: common.allDesign, href: '/design' }]} />
    </PageShell>
  );
}
