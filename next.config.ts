import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "img.clerk.com",
      "images.clerk.dev",
      "gvezskrfxkmxxisxeewu.supabase.co",
    ],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb', 
    },
  },
};

export default nextConfig;
