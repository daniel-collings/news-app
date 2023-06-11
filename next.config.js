/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*/',
            destination: 'https://v3-api.newscatcherapi.com/api/:path*/', // Matched parameters can be used in the destination
          },
        ]
      }
}

module.exports = nextConfig
