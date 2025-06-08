import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL('https://files.catbox.moe/**')
    ]
  }
};

export default nextConfig;
