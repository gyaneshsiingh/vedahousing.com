export default function robots() {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
                disallow: ["/admin/", "/admin/dashboard/", "/admin/dashboard/upload/"],
            },
        ],
        sitemap: "https://vedahousing.com/sitemap.xml",
    };
}
