import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localiteindia.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localiteindia.com',
        pathname: '/images/**',
      },
      {
        "protocol":"https",
        "hostname":"picsum.photos",
      }
    ],
  },
};

export default nextConfig;
