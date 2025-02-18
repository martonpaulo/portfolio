import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    reactCompiler: true,
  },
  /* config options here */
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
