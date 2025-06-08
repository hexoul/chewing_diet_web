import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL("https://cdn.buymeacoffee.com/**")],
  },
};

export default nextConfig;
