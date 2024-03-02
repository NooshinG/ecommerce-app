/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      // {
      //   protocol: "https",
      //   hostname: "cdn.stocksnap.io",
      //   port: "",
      //   // pathname: '/account123/**',
      // },
      // {
      //   protocol: "https",
      //   hostname: "drive.google.com",
      //   port: "",
      //   // pathname: '/account123/**',
      // },
      // {
      //   protocol: "https",
      //   hostname: "drive.usercontent.google.com",
      //   port: "",
      //   // pathname: '/account123/**',
      // },
    ],
  },
};

module.exports = nextConfig;
