import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ['./styles'],
  },
  /* config options here */
  reactStrictMode: true,
};

export default nextConfig;
