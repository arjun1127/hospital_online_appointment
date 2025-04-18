import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // your existing config
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint:{
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
