/** @type {import("prettier").Config} */
const config = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  embeddedSingleQuote: true,
  htmlWhitespaceSensitivity: 'css',
  indentSchema: false,
  pluginSearchDirs: false,
  plugins: ['prettier-plugin-css-order'],
  printWidth: 120,
  semi: true,
  singleLineLinkTags: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
};

export default config;
