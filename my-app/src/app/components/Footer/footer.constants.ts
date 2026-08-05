import { NavSection } from "./footer.type";

export const FOOTER_TAGLINE =
    "Transforming spaces and creating exceptional real estate experience since 2020.";

export const FOOTER_BOTTOM_META =
    "Varanasi's trusted property & interior design experts";

export const SERVICES_NAV: NavSection = {
    title: "Services",
    items: [
        { label: "Real Estate", href: "/properties" },
        {
            label: "Consulting",
            href: "https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20interior%20design%20services",
            isExternal: true,
        },
        {
            label: "Interior Design",
            href: "https://wa.me/919455664970?text=Hi%2C%20I%27m%20looking%20for%20property%20consulting%20in%20Varanasi",
            isExternal: true,
        },
        {
            label: "Architecture",
            href: "https://wa.me/919455664970?text=Hi%2C%20I%27m%20interested%20in%20Vedahousing%20services",
            isExternal: true,
        },
    ],
};

export const COMPANY_NAV: NavSection = {
    title: "Company",
    items: [
        { label: "Contact", href: "/contact" },
    ],
};

export const LEGAL_NAV: NavSection = {
    title: "Legal",
    items: [
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms of Services", href: "/terms-of-services" },
        { label: "Cookie Policy", href: "/cookie-policy" },
    ],
};

