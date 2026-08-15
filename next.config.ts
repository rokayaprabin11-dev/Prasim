import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  allowedDevOrigins: ['192.168.1.80'],
   allowedDevOrigins: ['10.42.0.1'],
};

export default nextConfig;
