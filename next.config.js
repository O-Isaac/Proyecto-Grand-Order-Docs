const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx'
})

const isDev = process.env.NODE_ENV !== 'production'

const cspHeader = `
  default-src 'self';
  script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval'" : ''} https://pagead2.googlesyndication.com https://googleads.g.doubleclick.net https://www.googletagservices.com https://www.google.com https://www.gstatic.com https://fundingchoicesmessages.google.com https://va.vercel-scripts.com https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google;
  frame-src https://googleads.g.doubleclick.net https://tpc.googlesyndication.com https://www.google.com https://pagead2.googlesyndication.com;
  connect-src 'self' https://pagead2.googlesyndication.com https://securepubads.g.doubleclick.net https://ep1.adtrafficquality.google https://ep2.adtrafficquality.google https://va.vercel-scripts.com https://vitals.vercel-insights.com;
  img-src 'self' data: https://pagead2.googlesyndication.com https://www.gstatic.com https://opengraph.githubassets.com;
  style-src 'self' 'unsafe-inline';
  font-src 'self' data:;
`

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
   },
   async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ' ').trim(),
          },
        ],
      },
    ]
  },
})


