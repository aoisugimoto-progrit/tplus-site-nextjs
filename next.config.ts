import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/tplus-site-nextjs',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
