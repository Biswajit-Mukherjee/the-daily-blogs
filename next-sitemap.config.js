/** This is the cnofiguration file for sitemaps */

/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://www.the-daily-blogs.com' || 'http://localhost:3000', // Your domain
  generateRobotsTxt: true, // Generates a robots.txt file
  sitemapSize: 7000, // Split sitemap into multiple files if you have many URLs
  outDir: "./public", // The output directory for your sitemap files
  // Additional options can be added here like exclude, transform, etc.
};
