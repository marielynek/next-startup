/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "localhost",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
