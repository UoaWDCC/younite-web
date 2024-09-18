/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
  },
  images: {
    remotePatterns: [
      {
        // Development
        protocol: "http",
        hostname: "127.0.0.1",
      },
      {
        // Staging
        protocol: "https",
        hostname: "younite-storage-staging.fly.dev",
      },
      {
        // Production
        protocol: "https",
        hostname: "younite-storage.fly.dev",
      },
    ],
  },
};

module.exports = nextConfig;
