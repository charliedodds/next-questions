/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: 'www.medexpress.co.uk',
      },
    ],
  },
}

export default nextConfig
