/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.eu-north-1.amazonaws.com',
        pathname: '/web.mc/assets/**',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/little-emperors', destination: '/work/little-emperors', permanent: true },
      { source: '/covid', destination: '/work/covid-dashboard', permanent: true },
      { source: '/explorer', destination: '/work/explorer', permanent: true },
      { source: '/design/rustic-house', destination: '/design/casa-rustica', permanent: true },
      { source: '/design/other', destination: '/design', permanent: true },
      { source: '/work/freelance-2020', destination: '/about', permanent: true },
      { source: '/work/freelance-2024', destination: '/about', permanent: true },
    ];
  },
  async headers() {
    const security = [
      { key: 'X-Frame-Options', value: 'DENY' },
      { key: 'X-Content-Type-Options', value: 'nosniff' },
      { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()',
      },
    ];

    // React/Turbopack need eval in dev — skip CSP locally.
    if (process.env.NODE_ENV !== 'production') {
      return [{ source: '/:path*', headers: security }];
    }

    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://cloud.umami.is",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      "img-src 'self' data: blob: https://s3.eu-north-1.amazonaws.com",
      "connect-src 'self' https://cloud.umami.is https://api-gateway.umami.dev https:",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ');

    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Content-Security-Policy', value: csp },
          ...security,
        ],
      },
    ];
  },
};

export default nextConfig;
