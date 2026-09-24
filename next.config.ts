import type { NextConfig } from 'next';

const isExport = process.env.NEXT_OUTPUT === 'export' || process.env.STATIC_EXPORT === 'true';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: isExport ? 'export' : undefined,
  trailingSlash: isExport ? true : false,
  images: {
    unoptimized: isExport ? true : undefined,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  ...(isExport
    ? {}
    : {
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
      }),
};

export default nextConfig;
