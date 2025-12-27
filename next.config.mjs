/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  optimizeFonts: true,
  async headers() {
    return [
      {
        // CSS files - force revalidation but allow caching
        source: '/_next/static/css/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // JS files - force revalidation but allow caching
        source: '/_next/static/chunks/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // HTML pages - no cache
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
    ]
  },
  webpack: (config, { dev }) => {
    if (!dev) {
      config.output.filename = 'static/chunks/[name].[contenthash].js'
      config.output.chunkFilename = 'static/chunks/[name].[contenthash].js'
    }
    return config
  },
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
}

export default nextConfig
