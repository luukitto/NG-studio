import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/components/LanguageProvider";
import {
  CONTACT,
  HERO_IMAGE,
  LOGO_IMAGE,
  OPENING_HOURS_SPEC,
  SITE,
} from "@/lib/constants";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "NB Beauty Studio – Beauty Salon in Tbilisi",
  description:
    "NB Beauty Studio is a premium beauty salon in Tbilisi offering makeup, lashes, brows, nails and more at ფარნავაზ მეფის 22.",
  metadataBase: new URL("https://nbbeautystudio.ge"),
  openGraph: {
    title: "NB Beauty Studio – Beauty Salon in Tbilisi",
    description:
      "Premium beauty studio in Tbilisi offering makeup, lashes, brows, nails and more.",
    siteName: "NB Beauty Studio",
    type: "website",
    images: [
      {
        url: HERO_IMAGE,
        width: 1200,
        height: 630,
        alt: "NB Beauty Studio",
      },
    ],
  },
  icons: {
    icon: LOGO_IMAGE,
    apple: LOGO_IMAGE,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const logoUrl = `https://nbbeautystudio.ge${LOGO_IMAGE}`;
  const heroUrl = `https://nbbeautystudio.ge${HERO_IMAGE}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: SITE.name,
    image: [heroUrl, logoUrl],
    logo: logoUrl,
    telephone: CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "ფარნავაზ მეფის 22",
      addressLocality: "Tbilisi",
      postalCode: "0159",
      addressCountry: "GE",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: 5.0,
      reviewCount: 1,
    },
    openingHoursSpecification: OPENING_HOURS_SPEC.map((item) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: item.dayOfWeek,
      opens: item.opens,
      closes: item.closes,
    })),
  };

  return (
    <html lang="en">
      <body className={`${dmSans.variable} bg-secondary font-sans text-dark`}>
        <LanguageProvider>
          <Navbar />
          <main className="min-h-screen bg-secondary">{children}</main>
          <Footer />
        </LanguageProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </body>
    </html>
  );
}
