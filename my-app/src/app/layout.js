import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://vedahousing.com"),
  title: {
    default: "Vedahousing – Buy, Rent & Design Homes in Varanasi",
    template: "%s | Vedahousing",
  },
  description:
    "Browse verified property listings in Varanasi. Buy or rent apartments, get interior design services, and book in-person or virtual tours. Zero hidden charges.",
  keywords: [
    "buy apartment Varanasi",
    "rent apartment Varanasi",
    "property in Varanasi",
    "interior design Varanasi",
    "real estate Varanasi",
    "vedahousing",
    "homes for sale Varanasi",
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
    images: [
      {
        url: "/cover-vedahousing.jpg",
        width: 1200,
        height: 630,
        alt: "Vedahousing – Smart Living in Varanasi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedahousing – Buy, Rent & Design Homes in Varanasi",
    description:
      "Browse verified property listings in Varanasi with zero hidden charges.",
    images: ["/cover-vedahousing.jpg"],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: "Vedahousing",
    url: "https://vedahousing.com",
    description:
      "Browse verified property listings in Varanasi. Buy or rent apartments, get interior design services, and book virtual or in-person tours.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Varanasi",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    telephone: "+919455664970",
    areaServed: "Varanasi",
  };

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
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
