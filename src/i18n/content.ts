import type { ExperienceItem } from '@/data/experience';
import { experience } from '@/data/experience';
import type { Project } from '@/data/projects';
import {
  awards,
  education,
  skillGroups,
  type SkillGroup,
} from '@/data/skills';
import type { Locale } from '@/i18n/locales';

type ProjectJa = {
  title?: string;
  role: string;
  period: string;
  hook: string;
  story: string[];
  outcomes: string[];
  linkLabels?: string[];
};

const projectsJa: Record<string, ProjectJa> = {
  securecell: {
    role: 'リードフロントエンド',
    period: '2024 – 現在',
    hook: 'バイオリアクター製品UI — 高密度データ、高い信頼性、自動テスト約80%。',
    story: [
      'Securecellは細胞培養向けのオールインワン・バイオリアクターを開発しています。設定・監視・意思決定支援など、工程が複雑でも読みやすいUIが求められます。',
      'フロントエンドをリードしています。アーキテクチャ、デリバリー基準、そして人材面（13名のスクラムマスター、3名のラインマネジメント）。現場のラボ制約の中でも信頼できる操作感が要件です。',
    ],
    outcomes: [
      'デバイスUIで自動テスト約80%',
      'リードへ昇格、直属3名',
      '13名のクロスファンクショナルチームをファシリテート',
    ],
  },
  'little-emperors': {
    role: 'ソフトウェアエンジニア',
    period: '2022 – 2024',
    hook: '3プロダクトのWeb/モバイルに加え、メール基盤とアクセシビリティ。',
    story: [
      '高級旅行メンバーシップではWeb・モバイル・メール全体の完成度が重要です。React / React Native / Next.jsで本番機能を出荷し、共有メール基盤でマーケの速度も上げました。',
      '全社のアクセシビリティも推進。ドキュメント、スクリーンリーダー研修、エンジニアリングのデフォルトとして定着させました。',
    ],
    outcomes: [
      '顧客向け3プロダクトへ機能出荷',
      '共有メール基盤でキャンペーン高速化',
      '組織全体のアクセシビリティ実践',
    ],
    linkLabels: ['コーポレートサイト'],
  },
  explorer: {
    role: 'プロダクトデザイン',
    period: '2022',
    hook: '旅行ディスカバリーのコンセプト — Adobe XD Mastered 受賞（Adobe UK）。',
    story: [
      'フロー・UI・ケーススタディまで一気通貫のプロダクト思考を示すコンペ課題。プロトタイプは、エンジニアリングリードと対になるインタラクションデザインの証明でもあります。',
    ],
    outcomes: ['Adobe XD Mastered 受賞（Adobe UK）'],
    linkLabels: ['プロトタイプ', 'ケーススタディ'],
  },
  'covid-dashboard': {
    title: 'COVIDワクチン接種ダッシュボード',
    role: '個人プロジェクト',
    period: '2021',
    hook: '公開データで国別比較チャート — React + D3。',
    story: [
      'Our World in Dataを使い、国ごとの接種進捗を比較する小さなダッシュボード。データビジュアルの手触りを示す作品として今も公開しています。',
    ],
    outcomes: ['ライブデモ公開中', 'GitHubで公開'],
    linkLabels: ['ライブデモ', 'GitHub'],
  },
  'casa-rustica': {
    role: 'ブランド & 写真',
    period: 'フリーランス',
    hook: '田舎の宿向けフルアイデンティティ — ロゴ、文具、写真。',
    story: [
      '建物自体をモチーフにしたスタンプ可能なマークを中心に、予約・SNS向けの現地写真まで含めたアイデンティティを制作しました。',
    ],
    outcomes: ['ロゴ・文具・写真セットを納品'],
  },
  'exponential-e': {
    role: 'グラフィック / モーション',
    period: '2019 – 2020',
    hook: '英国マネージドサービス企業向けの動画・印刷・ソーシャル。',
    story: [
      'ロンドン社内デザイン。部門リーダー出演のソートリーダーシップ動画、印刷システム、ソーシャル素材、社内リテール向けのアクセシブルな標識まで担当。',
    ],
    outcomes: [
      '営業向け動画シリーズ',
      '視覚障害のある利用者向けアクセシブル標識',
    ],
  },
};

const experienceJa: Record<string, Omit<ExperienceItem, 'id' | 'stack'>> = {
  securecell: {
    role: 'リードフロントエンドソフトウェアエンジニア',
    company: 'Securecell AG',
    location: 'リスボン',
    period: '2024年12月 – 現在',
    progression: 'フロントエンド → スクラムマスター → リードFE + 直属3名',
    summary:
      'オールインワン・バイオリアクターのフロントエンドをリード。ダッシュボード、設定、データ駆動UI。',
    bullets: [
      'リードへ昇格、直属3名',
      'デバイスUIで自動テスト約80%（Vitest）',
      '13名クロスファンクショナルチームのスクラムマスター',
    ],
  },
  'little-emperors': {
    role: 'ソフトウェアエンジニア',
    company: 'Little Emperors & Co',
    location: 'リモート',
    period: '2022年9月 – 2024年1月',
    summary:
      'React Web、React Native、Next.js、メール基盤など本番機能を横断して担当。',
    bullets: [
      '顧客向け3プロダクトへ出荷',
      '全社アクセシビリティ実践をリード',
      '共有メールデザイン/実装システムを構築',
    ],
  },
  freelance: {
    role: 'ソフトウェアエンジニア',
    company: 'フリーランス',
    location: 'リモート',
    period: '2020 – 2024',
    summary:
      '住宅・旅行・化粧品・製薬データなど、NDA下のクライアント案件をデリバリー。',
    bullets: [
      'ワークショップから出荷まで一気通貫',
      'レガシーコードの性能・構造改善',
    ],
  },
};

const skillLabelsJa: Record<string, string> = {
  frontend: 'フロントエンド',
  quality: '品質 & デリバリー',
  design: 'デザイン背景',
};

const educationJa = [
  {
    year: '2022',
    credential: 'Front-End Engineer Career Path',
    institution: 'Codecademy',
  },
  {
    year: '2021',
    credential: 'プログラミング基礎',
    institution: 'Instituto Superior Técnico',
  },
  {
    year: '2013',
    credential: '学士（アニメーション & インタラクティブメディア）',
    institution: 'Universidade Lusófona',
  },
] as const;

const awardsJa = ['Winner — Adobe XD Mastered（Adobe UK）、2022'] as const;

export function localizeProject(project: Project, locale: Locale): Project {
  if (locale !== 'ja') return project;
  const ja = projectsJa[project.slug];
  if (!ja) return project;
  return {
    ...project,
    title: ja.title ?? project.title,
    role: ja.role,
    period: ja.period,
    hook: ja.hook,
    story: ja.story,
    outcomes: ja.outcomes,
    links: project.links?.map((link, index) => ({
      ...link,
      label: ja.linkLabels?.[index] ?? link.label,
    })),
  };
}

export function getExperience(locale: Locale): ExperienceItem[] {
  if (locale !== 'ja') return experience;
  return experience.map((job) => {
    const ja = experienceJa[job.id];
    return ja ? { ...job, ...ja, stack: job.stack } : job;
  });
}

export function getSkillGroups(locale: Locale): SkillGroup[] {
  if (locale !== 'ja') return skillGroups;
  return skillGroups.map((group) => ({
    ...group,
    label: skillLabelsJa[group.id] ?? group.label,
  }));
}

export function getEducation(locale: Locale) {
  return locale === 'ja' ? educationJa : education;
}

export function getAwards(locale: Locale) {
  return locale === 'ja' ? awardsJa : awards;
}
