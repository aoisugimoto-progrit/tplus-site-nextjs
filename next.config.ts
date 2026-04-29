import type { NextConfig } from "next";

// Vercelかどうかを判定
const isVercel = process.env.VERCEL === '1';

const nextConfig: NextConfig = {
  // Vercelでは動的ビルド、GitHub Pagesでは静的エクスポート
  output: isVercel ? undefined : 'export',
  // VercelではbasePathなし、GitHub Pagesでは/tplus-site-nextjs
  basePath: isVercel ? '' : '/tplus-site-nextjs',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
