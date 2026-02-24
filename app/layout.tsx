import type { Metadata } from "next";
import { EB_Garamond, Manrope, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ebGaramond = EB_Garamond({
  variable: "--font-eb-garamond",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bilskidental.com"),
  title: {
    default: "Bilski Dental & CARE Esthetics | Independence, OH",
    template: "%s | Bilski Dental",
  },
  description:
    "Bilski Dental & CARE Esthetics offers comprehensive cosmetic and general dentistry in Independence, OH. Home of the Bilski Smile — serving Northeast Ohio for 100+ years.",
  keywords: [
    "dentist Independence OH",
    "cosmetic dentistry Cleveland",
    "dental veneers Ohio",
    "Invisalign Independence",
    "dental implants Cleveland",
    "teeth whitening Ohio",
    "Bilski Dental",
    "CARE Esthetics",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bilskidental.com",
    siteName: "Bilski Dental & CARE Esthetics",
    title: "Bilski Dental & CARE Esthetics | Independence, OH",
    description:
      "Comprehensive cosmetic and general dentistry in Independence, OH. Home of the Bilski Smile.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bilski Dental & CARE Esthetics",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bilski Dental & CARE Esthetics",
    description:
      "Comprehensive cosmetic and general dentistry in Independence, OH.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://bilskidental.com",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: "Bilski Dental Group",
  image: "https://bilskidental.com/logo.png",
  url: "https://bilskidental.com",
  telephone: "+12163696403",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6527 Brecksville Road, Suite B",
    addressLocality: "Independence",
    addressRegion: "OH",
    postalCode: "44131",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday"],
      opens: "08:30",
      closes: "13:30",
    },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${ebGaramond.variable} ${manrope.variable} ${montserrat.variable}`}
    >
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
        <a href="#main-content" className="skip-nav">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
