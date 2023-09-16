/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  arrowParens: "avoid",
  bracketSpacing: true,
  embeddedSingleQuote: true,
  htmlWhitespaceSensitivity: "css",
  indentSchema: false,
  pluginSearchDirs: false,
  plugins: ["prettier-plugin-tailwindcss"],
  printWidth: 120,
  semi: true,
  singleLineLinkTags: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
};

export default config;
