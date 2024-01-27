/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ipfs.skatehive.app",
      },
    ],
  },
}

export default nextConfig
