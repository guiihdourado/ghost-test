/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/docs',
        destination: 'https://docs.sorteio.com/'
      },
      {
        source: "/docs/(.*?)([.]\\w{2,5})(\\?[^/]+)?",
        destination: "https://docs.sorteio.com/$1$2$3"
      },
      {
        source: "/docs/([\\S\\s]+)",
        destination: "https://docs.sorteio.com/$1/"
      },
    ]
  }
}

module.exports = nextConfig
