import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["books.google.com"], // Google Books API の画像ホストを許可
  },
};

export default nextConfig;
