import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/who-we-help/hvac',
        destination: '/industries/hvac',
        permanent: true,
      },
      {
        source: '/who-we-help/plumbing',
        destination: '/industries/plumbing',
        permanent: true,
      },
      {
        source: '/who-we-help/roofing',
        destination: '/industries/roofing',
        permanent: true,
      },
      {
        source: '/who-we-help/dental',
        destination: '/industries/dental',
        permanent: true,
      },
      {
        source: '/who-we-help/legal',
        destination: '/industries/law-firms',
        permanent: true,
      },
      {
        source: '/who-we-help/medspa',
        destination: '/industries/med-spa',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
