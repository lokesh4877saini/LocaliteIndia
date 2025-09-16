import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localiteindia.com',
        pathname: '/images/**',
      },
      {
        "protocol":"https",
        "hostname":"picsum.photos",
      },
      {
        "protocol":"https",
        "hostname":"cdn.dummyjson.com",
      }
    ],
  },
};

export default nextConfig;
