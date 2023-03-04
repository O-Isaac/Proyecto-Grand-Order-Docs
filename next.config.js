const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

module.exports = withNextra({
   redirects: function () {
       return [ {
          source: '/descarga',
          destination: '/instalar',
          permanent: true,
        },
        {
          source: '/descarga-v2',
          destination: '/instalar',
          permanent: true,
        }]
   } 
})


