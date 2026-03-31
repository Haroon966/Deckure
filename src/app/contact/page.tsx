import type { Metadata } from "next";
import { absoluteUrl, getDefaultShareImagePath, getSiteOrigin } from "@/lib/site";

const origin = getSiteOrigin();
const description =
  "Get in touch with Artzen for orders, support, and custom requests. Reach us on WhatsApp from anywhere in Pakistan.";
const pageUrl = `${origin}/contact`;
const ogImage = absoluteUrl(getDefaultShareImagePath());

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Contact | Artzen",
    description,
    url: pageUrl,
    images: [{ url: ogImage, alt: "Contact Artzen" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Artzen",
    description,
    images: [ogImage],
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6">
      <h1 className="font-serif text-3xl font-bold text-forest">Contact Us</h1>
      <p className="mt-4 text-forest/80">
        We would love to hear from you. For orders, questions, or custom
        requests, reach out on WhatsApp or email.
      </p>
      <div className="mt-8 space-y-6">
        <div>
          <h2 className="font-serif text-xl font-semibold text-forest">
            WhatsApp
          </h2>
          <a
            href="https://wa.me/923001234567"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-block font-medium text-gold hover:underline"
          >
            +92 300 1234567
          </a>
        </div>
        <div>
          <h2 className="font-serif text-xl font-semibold text-forest">
            Location
          </h2>
          <p className="mt-2 text-forest/80">Pakistan</p>
        </div>
      </div>
    </div>
  );
}
