const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx',
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  }
})

module.exports = withNextra(
  module.exports = {
    async redirects() {
      return [
        {
          source: '/descarga',
          destination: '/instalar',
          permanent: true,
        },
        {
          source: '/descarga-v2',
          destination: '/instalar',
          permanent: true,
        },
      ]
    },
  }
)


