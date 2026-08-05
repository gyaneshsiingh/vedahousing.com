import { Inter } from "next/font/google";
import "./globals.css";

import { AuthProvider } from "@/context/AuthContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://vedahousing.com"),
  title: {
    default: "Vedahousing – Buy, Rent & Design Homes in Varanasi",
    template: "%s | Vedahousing",
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  description:
    "Browse verified property listings in Varanasi. Buy or rent apartments, get interior design services, and book in-person or virtual tours. Zero hidden charges.",
  keywords: [
    "flat for sale Varanasi",
    "flat on rent Varanasi",
    "buy flat Varanasi",
    "rent flat Varanasi",
    "2BHK flat Varanasi",
    "3BHK flat Varanasi",
    "property in Varanasi",
    "property dealer Varanasi",
    "property consultant Varanasi",
    "real estate Varanasi",
    "Varanasi real estate agent",
    "homes for sale Varanasi",
    "interior designer Varanasi",
    "interior design Varanasi",
    "interior decoration Varanasi",
    "consulting Varanasi",
    "architecture consulting Varanasi",
    "architecture consultant Varanasi",
    "home design consultant Varanasi",
    "vedahousing",
    "vedahousing Varanasi",
  ],
  authors: [{ name: "Vedahousing", url: "https://vedahousing.com" }],
  creator: "Vedahousing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "https://vedahousing.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://vedahousing.com",
    siteName: "Vedahousing",
    title: "Vedahousing – Buy, Rent & Design Homes in Varanasi",
    description:
      "Browse verified property listings in Varanasi. Buy or rent apartments, get interior design services, and book tours in just a few taps.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedahousing – Buy, Rent & Design Homes in Varanasi",
    description:
      "Browse verified property listings in Varanasi with zero hidden charges.",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["RealEstateAgent", "LocalBusiness"],
        "@id": "https://vedahousing.com/#organization",
        name: "Vedahousing",
        url: "https://vedahousing.com",
        description:
          "Vedahousing is a trusted Varanasi property dealer offering verified flats, apartments, and houses for sale or rent. We also provide premium interior design and architecture consulting services in Varanasi.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Varanasi",
          addressLocality: "Varanasi",
          addressRegion: "Uttar Pradesh",
          postalCode: "221001",
          addressCountry: "IN",
        },
        telephone: "+919455664970",
        areaServed: [
          { "@type": "City", name: "Varanasi" },
          { "@type": "State", name: "Uttar Pradesh" },
        ],
        priceRange: "₹₹",
        sameAs: ["https://vedahousing.com"],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Vedahousing Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Flats & Property in Varanasi",
                description:
                  "Verified flats, 2BHK, 3BHK apartments, and houses for sale or rent in Varanasi with zero hidden charges.",
                provider: { "@id": "https://vedahousing.com/#organization" },
                areaServed: "Varanasi",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Interior Design Services Varanasi",
                description:
                  "Professional interior designer in Varanasi offering modern home interiors, renovation, and decoration services.",
                provider: { "@id": "https://vedahousing.com/#organization" },
                areaServed: "Varanasi",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Architecture Consulting Varanasi",
                description:
                  "Expert architecture and property consulting services in Varanasi for residential and commercial projects.",
                provider: { "@id": "https://vedahousing.com/#organization" },
                areaServed: "Varanasi",
              },
            },
          ],
        },
      },
      {
        "@type": "WebSite",
        "@id": "https://vedahousing.com/#website",
        url: "https://vedahousing.com",
        name: "Vedahousing",
        description:
          "Vedahousing – Verified flats, property, interior design & consulting services in Varanasi.",
        publisher: { "@id": "https://vedahousing.com/#organization" },
        potentialAction: {
          "@type": "SearchAction",
          target: {
            "@type": "EntryPoint",
            urlTemplate:
              "https://vedahousing.com/properties?search={search_term_string}",
          },
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "FAQPage",
        "@id": "https://vedahousing.com/#faq",
        mainEntity: [
          {
            "@type": "Question",
            name: "Where can I find flats for sale or rent in Varanasi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Vedahousing lists verified 2BHK and 3BHK flats for sale and rent in Varanasi. Browse our property listings at vedahousing.com/properties.",
            },
          },
          {
            "@type": "Question",
            name: "Does Vedahousing offer interior design services in Varanasi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Vedahousing provides professional interior design and decoration services in Varanasi with modern designs tailored to your space.",
            },
          },
          {
            "@type": "Question",
            name: "Does Vedahousing provide property consulting in Varanasi?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Vedahousing offers architecture consulting and property advisory services in Varanasi for both residential and commercial projects.",
            },
          },
        ],
      },
    ],
  };

  return (
    <html lang="en">
      <body className={inter.variable}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
