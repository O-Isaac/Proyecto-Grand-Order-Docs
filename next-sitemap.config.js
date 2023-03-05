/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.VERCEL_URL && process.env.VERCEL_ENV !== "production"
    ? `https://${process.env.VERCEL_URL}`
    : "https://proyectograndorder.es",
  generateRobotsTxt: true,
};
