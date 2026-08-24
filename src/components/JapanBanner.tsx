'use client';

import Section from '@/components/Section';
import Tag from '@/components/Tag';
import { useLocale } from '@/components/LocaleProvider';

export default function JapanBanner() {
  const { dict } = useLocale();
  const { profile } = dict;

  return (
    <Section
      title={profile.japan.bannerTitle}
      delay={40}
      className="border-accent bg-linear-to-br from-surface-strong to-accent-soft"
    >
      <p className="text-[clamp(0.95rem,2.5vw,1.02rem)] leading-relaxed font-medium">
        {profile.pitch}
      </p>
      <dl className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,160px),1fr))] gap-3 max-[480px]:grid-cols-2 max-[360px]:grid-cols-1">
        <div className="flex min-w-0 flex-col gap-0.5">
          <dt className="text-[0.72rem] font-medium tracking-wider text-accent uppercase">
            {profile.japan.labels.role}
          </dt>
          <dd className="text-[clamp(0.875rem,2vw,0.92rem)] leading-snug">{profile.japan.role}</dd>
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <dt className="text-[0.72rem] font-medium tracking-wider text-accent uppercase">
            {profile.japan.labels.location}
          </dt>
          <dd className="text-[clamp(0.875rem,2vw,0.92rem)] leading-snug">{profile.japan.cities}</dd>
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <dt className="text-[0.72rem] font-medium tracking-wider text-accent uppercase">
            {profile.japan.labels.visa}
          </dt>
          <dd className="text-[clamp(0.875rem,2vw,0.92rem)] leading-snug">{profile.japan.visa}</dd>
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <dt className="text-[0.72rem] font-medium tracking-wider text-accent uppercase">
            {profile.japan.labels.notice}
          </dt>
          <dd className="text-[clamp(0.875rem,2vw,0.92rem)] leading-snug">{profile.japan.notice}</dd>
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <dt className="text-[0.72rem] font-medium tracking-wider text-accent uppercase">
            {profile.japan.labels.japanese}
          </dt>
          <dd className="text-[clamp(0.875rem,2vw,0.92rem)] leading-snug">{profile.japan.japanese}</dd>
        </div>
        <div className="flex min-w-0 flex-col gap-0.5">
          <dt className="text-[0.72rem] font-medium tracking-wider text-accent uppercase">
            {profile.japan.labels.workLanguage}
          </dt>
          <dd className="text-[clamp(0.875rem,2vw,0.92rem)] leading-snug">
            {profile.japan.workLanguage}
          </dd>
        </div>
      </dl>
      <div className="flex flex-wrap gap-1.5">
        {profile.japan.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </Section>
  );
}
