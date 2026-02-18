import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Disable turbopack for build - it's only supported in dev
  experimental: {
    turbopack: false,
  },
};

export default nextConfig;