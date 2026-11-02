import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Self-contained server bundle in .next/standalone, used by the Docker image
  output: "standalone",
};

export default nextConfig;
