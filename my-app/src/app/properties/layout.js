export const metadata = {
    title: "Flats & Property in Varanasi – Buy, Rent, Sell | Vedahousing",
    description:
        "Browse verified flats, apartments, and houses for sale or rent in Varanasi. 2BHK, 3BHK, independent houses – trusted Varanasi property dealer with zero hidden charges.",
    keywords: [
        "flat for sale Varanasi",
        "flat on rent Varanasi",
        "property in Varanasi",
        "property dealer Varanasi",
        "property consultant Varanasi",
        "2BHK flat Varanasi",
        "3BHK flat Varanasi",
        "apartment Varanasi",
        "house for sale Varanasi",
        "real estate Varanasi",
        "Varanasi real estate agent",
        "vedahousing properties",
        "flats Varanasi",
        "buy flat Varanasi",
        "rent flat Varanasi",
    ],
    alternates: {
        canonical: "https://vedahousing.com/properties",
    },
    openGraph: {
        type: "website",
        locale: "en_IN",
        url: "https://vedahousing.com/properties",
        siteName: "Vedahousing",
        title: "Flats & Property in Varanasi – Buy, Rent, Sell | Vedahousing",
        description:
            "Verified 2BHK, 3BHK flats and houses for sale or rent in Varanasi. Zero hidden charges — book tours in one tap.",
    },
    twitter: {
        card: "summary_large_image",
        title: "Flats & Property in Varanasi | Vedahousing",
        description:
            "Find verified flats and houses in Varanasi. Zero hidden charges. Book tours instantly.",
    },
};

export default function PropertiesLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Flats & Properties for Sale or Rent in Varanasi",
        description:
            "Verified flats, apartments, and houses available for sale or rent in Varanasi, Uttar Pradesh, India.",
        url: "https://vedahousing.com/properties",
        provider: {
            "@type": "RealEstateAgent",
            name: "Vedahousing",
            url: "https://vedahousing.com",
            telephone: "+919455664970",
            address: {
                "@type": "PostalAddress",
                addressLocality: "Varanasi",
                addressRegion: "Uttar Pradesh",
                addressCountry: "IN",
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}
