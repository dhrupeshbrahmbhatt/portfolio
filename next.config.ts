import type { NextConfig } from 'next';

// GitHub Pages serves this repository at https://dhrupeshbrahmbhatt.github.io/portfolio/
// so every route and asset lives under /portfolio. Keep in sync with lib/site.ts.
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/portfolio',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
