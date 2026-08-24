/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.eu-north-1.amazonaws.com',
        pathname: '/web.mc/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/little-emperors',
        destination: '/work/little-emperors',
        permanent: true,
      },
      {
        source: '/covid',
        destination: '/work/covid-dashboard',
        permanent: true,
      },
      {
        source: '/explorer',
        destination: '/work/explorer',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
