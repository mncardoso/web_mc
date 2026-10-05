import type { Locale } from './locales';

const en = {
  nav: {
    work: 'Work',
    about: 'About',
    contact: 'Contact',
  },
  common: {
    email: 'Email',
    linkedin: 'LinkedIn',
    resume: 'CV PDF',
    seeWork: 'See work',
    contact: 'Contact',
    home: 'Home',
    allWork: 'All work →',
    work: 'Work',
    design: 'Design background',
    privacy: 'Privacy',
    language: 'Language',
    theme: 'Theme',
    themeLight: 'Light mode',
    themeDark: 'Dark mode',
  },
  home: {
    relocation: 'Open to Japan · Visa sponsorship required',
    title: 'Lead Frontend Engineer',
    headline: 'Relocating to Japan. Looking for a lead frontend seat.',
    pitch:
      'I lead product UI end to end — architecture, delivery, and the people who ship it. Design-trained, TypeScript-fluent, ready for Tokyo.',
    featuredEyebrow: 'Selected work',
    featuredTitle: 'Recent proof',
  },
  about: {
    eyebrow: 'About',
    title: 'Lead frontend · relocating to Japan',
    paragraphs: [
      'I am a lead frontend engineer with a design career behind me. That mix shows up in how products feel and in how teams ship: clear interfaces, solid TypeScript, and standards that hold under pressure.',
      'At Securecell I lead the bioreactor product UI — dense, high-stakes interfaces for cell cultivation — while managing three engineers and facilitating a 13-person cross-functional team as Scrum Master.',
    ],
    japanTitle: 'Japan move',
    japanIntro:
      'Preparing to live and work in Japan — English-friendly product teams, visa sponsorship, Tokyo first.',
    japanFacts: [
      { label: 'Target role', value: 'Lead Frontend / Eng Lead' },
      { label: 'City', value: 'Tokyo preferred · Osaka OK' },
      { label: 'Visa', value: 'Sponsorship required' },
      { label: 'Notice', value: '1–2 months' },
      { label: 'Japanese', value: 'N4 target · Dec 2026' },
      { label: 'Work language', value: 'English native' },
    ],
    experienceTitle: 'Experience',
    skillsTitle: 'Skills',
    eduTitle: 'Education & awards',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Let’s talk Japan roles',
    lede:
      'Hiring for lead frontend or eng lead in Tokyo or Osaka? Email is fastest. Employer sponsorship required. Available in 1–2 months.',
  },
  work: {
    eyebrow: 'Work',
    title: 'Selected engineering',
    lede: 'Production UI across bioprocess SaaS, product web/mobile, and data-heavy interfaces.',
  },
  design: {
    eyebrow: 'Design',
    title: 'Design background',
    lede: 'Identity and product design work before engineering.',
  },
  privacy: {
    eyebrow: 'Privacy',
    title: 'What this site stores',
    lede: 'Short notice — no accounts, no marketing cookies.',
    items: [
      'Theme and language preferences stay in your browser (localStorage).',
      'An anonymous session id and normalized cursor position are sent to /api/presence so the shared minimap works. Peers expire after a few seconds.',
      'Your user agent is shown only in the on-page telemetry HUD. It is not sent to the presence API.',
      'If analytics is enabled on the host (Umami), page views are counted without cookies or personal identifiers.',
      'If error reporting is enabled, anonymous client error messages may be sent to a webhook (no cookies).',
    ],
    note: 'Questions: email m.n.cardoso@me.com.',
  },
  notFound: {
    eyebrow: '404',
    title: 'Page not found',
    lede: 'That route is gone or never existed. Try home, work, or contact.',
  },
  caseStudy: {
    engineering: 'Engineering',
    design: 'Design',
    story: 'Story',
    outcomes: 'Outcomes',
    stack: 'Stack',
    links: 'Links',
    visuals: 'Visuals',
    gallery: 'Gallery',
    allDesign: 'All design →',
    frame: 'frame',
    expand: 'Open larger',
    close: 'Close',
  },
} as const;

const ja = {
  nav: {
    work: '実績',
    about: 'プロフィール',
    contact: '連絡先',
  },
  common: {
    email: 'メール',
    linkedin: 'LinkedIn',
    resume: '履歴書 PDF',
    seeWork: '実績を見る',
    contact: '連絡する',
    home: 'ホーム',
    allWork: '実績一覧 →',
    work: '実績',
    design: 'デザイン背景',
    privacy: 'プライバシー',
    language: '言語',
    theme: 'テーマ',
    themeLight: 'ライトモード',
    themeDark: 'ダークモード',
  },
  home: {
    relocation: '日本での就業希望 · 就労ビザ要スポンサー',
    title: 'リードフロントエンドエンジニア',
    headline: '日本へ移住予定。リードフロントエンドの席を探しています。',
    pitch:
      'プロダクトUIを設計からデリバリー、チームまで一気通貫でリードします。デザイン出身、TypeScriptに強く、東京での就業に向けて準備中です。',
    featuredEyebrow: 'セレクトワーク',
    featuredTitle: '最近の実績',
  },
  about: {
    eyebrow: 'プロフィール',
    title: 'リードフロントエンド · 日本移住希望',
    paragraphs: [
      'リードフロントエンドエンジニアで、その前はデザインのキャリアがあります。プロダクトの手触りと、チームの出し方の両方にその経験が出ます。明快なUI、堅実なTypeScript、プレッシャー下でも崩さない基準。',
      'Securecellでは細胞培養向けバイオリアクター製品UIをリードし、エンジニア3名をマネジメント、13名のクロスファンクショナルチームでスクラムマスターも務めています。',
    ],
    japanTitle: '日本への移住',
    japanIntro:
      '日本での生活と就業に向けて準備中です。英語で動けるプロダクトチーム、就労ビザスポンサー、東京優先。',
    japanFacts: [
      { label: '希望ポジション', value: 'リードフロントエンド / Eng Lead' },
      { label: '勤務地', value: '東京優先 · 大阪可' },
      { label: 'ビザ', value: '企業スポンサー必須' },
      { label: '入社可能', value: '1〜2ヶ月' },
      { label: '日本語', value: 'N4目標 · 2026年12月' },
      { label: '開発言語', value: '英語（ネイティブ）' },
    ],
    experienceTitle: '経歴',
    skillsTitle: 'スキル',
    eduTitle: '学歴・受賞',
  },
  contact: {
    eyebrow: '連絡先',
    title: '日本でのポジションについて話しましょう',
    lede:
      '東京・大阪でリードフロントエンド / エンジニアリングリードを募集中ですか？メールが一番早いです。就労ビザスポンサー必須。入社可能時期は1〜2ヶ月です。',
  },
  work: {
    eyebrow: '実績',
    title: 'エンジニアリング実績',
    lede: 'バイオプロセスSaaS、プロダクトWeb/モバイル、データ量の多いUIなど。',
  },
  design: {
    eyebrow: 'デザイン',
    title: 'デザイン背景',
    lede: 'エンジニアになる前のブランド・プロダクトデザイン。',
  },
  privacy: {
    eyebrow: 'プライバシー',
    title: 'このサイトが保存するもの',
    lede: '短い説明です。アカウントやマーケティング用Cookieはありません。',
    items: [
      'テーマと言語の設定はブラウザ内（localStorage）に保存されます。',
      '共有ミニマップのため、匿名のセッションIDと正規化したカーソル位置を /api/presence に送ります。ピアは数秒で期限切れになります。',
      'ユーザーエージェントは画面上のテレメトリHUDにのみ表示され、プレゼンスAPIには送られません。',
      'ホストで解析（Umami）が有効な場合、Cookieや個人識別子なしでページビューを集計します。',
      'エラー報告が有効な場合、匿名のクライアントエラーメッセージがWebhookへ送られることがあります（Cookieなし）。',
    ],
    note: '質問は m.n.cardoso@me.com まで。',
  },
  notFound: {
    eyebrow: '404',
    title: 'ページが見つかりません',
    lede: 'そのURLは削除されたか、存在しません。ホーム・実績・連絡先からどうぞ。',
  },
  caseStudy: {
    engineering: 'エンジニアリング',
    design: 'デザイン',
    story: 'ストーリー',
    outcomes: '成果',
    stack: 'スタック',
    links: 'リンク',
    visuals: 'ビジュアル',
    gallery: 'ギャラリー',
    allDesign: 'デザイン一覧 →',
    frame: 'フレーム',
    expand: '拡大表示',
    close: '閉じる',
  },
} as const;

export type Dictionary = {
  nav: { work: string; about: string; contact: string };
  common: {
    email: string;
    linkedin: string;
    resume: string;
    seeWork: string;
    contact: string;
    home: string;
    allWork: string;
    work: string;
    design: string;
    privacy: string;
    language: string;
    theme: string;
    themeLight: string;
    themeDark: string;
  };
  home: {
    relocation: string;
    title: string;
    headline: string;
    pitch: string;
    featuredEyebrow: string;
    featuredTitle: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
    japanTitle: string;
    japanIntro: string;
    japanFacts: readonly { label: string; value: string }[];
    experienceTitle: string;
    skillsTitle: string;
    eduTitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  work: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  design: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  privacy: {
    eyebrow: string;
    title: string;
    lede: string;
    items: readonly string[];
    note: string;
  };
  notFound: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  caseStudy: {
    engineering: string;
    design: string;
    story: string;
    outcomes: string;
    stack: string;
    links: string;
    visuals: string;
    gallery: string;
    allDesign: string;
    frame: string;
    expand: string;
    close: string;
  };
};

const dictionaries: Record<Locale, Dictionary> = {
  en,
  ja,
};

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.en;
}
