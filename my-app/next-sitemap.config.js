/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://vedahousing.com',
    generateRobotsTxt: false, // We already have a custom robots.js in Next.js App Router
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/admin', '/admin/*'],
    additionalPaths: async (config) => [
        await config.transform(config, '/'),
        await config.transform(config, '/properties'),
    ],
};
