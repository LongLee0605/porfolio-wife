import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1364, 1920, 2048],
    imageSizes: [64, 96, 128, 256, 384],
    qualities: [75, 85, 90, 95],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
