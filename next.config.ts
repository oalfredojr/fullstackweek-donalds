import type { NextConfig } from "next";

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};


const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [{ hostname: "u9a6wmr3as.ufs.sh" }],
  },
};

export default nextConfig;
