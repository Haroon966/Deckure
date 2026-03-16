import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://deckure.com"),
  title: {
    default: "Deckure | Premium Islamic Wall Art & MDF Calligraphy | Pakistan",
    template: "%s | Deckure",
  },
  description:
    "Premium Islamic wall art, MDF wood calligraphy, and home decor in Pakistan. Handcrafted pieces. Cash on Delivery. Elegant, trustworthy, spiritual.",
  keywords: [
    "Islamic wall art Pakistan",
    "MDF calligraphy",
    "Islamic home decor",
    "wooden Ayatul Kursi",
    "Allah name wall art",
    "Loh e Qurani wall decor",
  ],
  openGraph: {
    siteName: "Deckure",
    locale: "en_PK",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Deckure",
  url: "https://deckure.com",
  logo: "https://deckure.com/logo.png",
  description:
    "Premium Islamic wall art, MDF wood calligraphy, and home decor in Pakistan.",
  areaServed: "PK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen bg-cream text-forest antialiased">
        <Header />
        <main className="min-h-[calc(100vh-8rem)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
