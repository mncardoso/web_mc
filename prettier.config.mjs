// @ts-check
/** @type {import('prettier').Config & import('@ianvs/prettier-plugin-sort-imports').PrettierConfig & import('prettier-plugin-tailwindcss').options} */
const config = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  cssDeclarationSorterKeepOverrides: false,
  embeddedSingleQuote: true,
  htmlWhitespaceSensitivity: 'css',
  importOrder: [
    '<TYPES>',
    '<TYPES>^[.]',
    '',
    '<BUILT_IN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/components/(.*)$',
    '',
    '^@/layout/(.*)$',
    '^@/interface/(.*)$',
    '^@/styles/(.*)$',
    '',
    '^@/data/(.*)$',
    '',
    '^[../]',
    '^[./]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderTypeScriptVersion: '5.0.0',
  indentSchema: false,
  plugins: ['@ianvs/prettier-plugin-sort-imports', 'prettier-plugin-css-order', 'prettier-plugin-tailwindcss'],
  printWidth: 120,
  semi: true,
  singleLineLinkTags: false,
  singleQuote: true,
  tabWidth: 2,
  tailwindFunctions: ['clsx'],
  trailingComma: 'es5',
  useTabs: false,
};
export default config;
