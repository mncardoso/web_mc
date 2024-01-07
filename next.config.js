await import('./src/env.js');

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    domains: ['s3.eu-north-1.amazonaws.com'],
  },
};

export default config;
