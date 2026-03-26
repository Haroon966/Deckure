import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // Static export mode for CSR/static hosts. Use `npm run images:optimize` for local assets.
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.firebasestorage.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
