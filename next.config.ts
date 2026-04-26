import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages fallback,
  // Remove this if deploying to Vercel (Vercel handles this automatically)
  // output: "export",

  images: {
    // Allow images from the repo itself and common CDNs
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
