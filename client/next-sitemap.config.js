/** @type {import('next-sitemap').Config} */
module.exports = {
    siteUrl: 'https://langfordcollege.com',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'daily',
    priority: 0.7,
    transform: async (config, path) => {
        return {
            loc: path, // resolved url
            changefreq: config.changefreq,
            priority: config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
        };
    },
};