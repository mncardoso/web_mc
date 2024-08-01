/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['s3.eu-north-1.amazonaws.com'],
    path: '/_next/image',
  },
};

export default nextConfig;
