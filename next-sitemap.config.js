// next-sitemap.config.js

/** @type {import('next-sitemap').IConfig} */

const config = {
  siteUrl: "https://www.tommybasham.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};

module.exports = config