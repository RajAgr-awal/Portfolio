import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  // Static export for GitHub Pages, dynamic for Vercel
  ...(isGithubPages && {
    output: "export",
    basePath: "/Portfolio",
    assetPrefix: "/Portfolio/",
  }),

  images: {
    // GitHub Pages doesn't support Next.js image optimization
    ...(isGithubPages && { unoptimized: true }),

    // Allow images from common CDNs
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

export default nextConfig;
