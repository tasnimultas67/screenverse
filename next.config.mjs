/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "goldendiscs.ie",
      },
      {
        protocol: "https",
        hostname: "yts.mx",
      },
    ],
  },
};

export default nextConfig;
