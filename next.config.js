/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true
    },
    async rewrites() {
        return [
          {
            source: '/api/:path*/',
            destination: 'https://api.newscatcherapi.com/v2/:path*/', // Matched parameters can be used in the destination
          },
        ]
      }
}

module.exports = nextConfig
