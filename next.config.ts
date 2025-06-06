import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://cdn.buymeacoffee.com/**"),
      new URL("https://developer.apple.com/assets/**"),
      new URL("https://play.google.com/**"),
    ],
  },
};

export default nextConfig;
