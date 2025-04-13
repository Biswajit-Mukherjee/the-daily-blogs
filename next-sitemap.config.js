/** This is the cnofiguration file for sitemaps */

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: "https://www.the-daily-blogs.com" || "http://localhost:3000", // Your domain
  generateRobotsTxt: true, // Generate robots.txt file
  sitemapSize: 7000, // Split sitemap into multiple files if you have many URLs
  outDir: "./public", // The output directory for your sitemap files
  changefreq: "weekly",
  priority: 0.7,
  exclude: ["/server-sitemap.xml"], // If using server-side sitemaps
  transform: async (config, path) => {
    // Custom priority for specific pages
    const priorityMap = {
      "/": 1.0,
      "/about-us": 0.9,
      "/contact-us": 0.9,
      "/privacy-policy": 0.6,
      "/terms-and-conditions": 0.6,
      "/disclaimer": 0.6,
    };

    return {
      loc: path,
      changefreq: "weekly",
      priority: priorityMap[path] || 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
