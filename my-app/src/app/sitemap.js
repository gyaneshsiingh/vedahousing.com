export default function sitemap() {
    return [
        {
            url: "https://vedahousing.com",
            lastModified: new Date(),
            changeFrequency: "weekly",
            priority: 1.0,
        },
        {
            url: "https://vedahousing.com/properties",
            lastModified: new Date(),
            changeFrequency: "daily",
            priority: 0.9,
        },
    ];
}
