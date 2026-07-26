const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

const isDev = process.env.NODE_ENV !== 'production'


module.exports = withNextra({
   redirects: function () {
       return [{
          source: '/descarga',
          destination: '/instalar',
          permanent: true,
        },
        {
          source: '/descarga-v2',
          destination: '/instalar',
          permanent: true,
        }, 
        {
          source: '/instalar',
          destination: '/docs',
          permanent: true,
        }]
   }
})


