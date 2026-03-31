import type { Metadata } from "next";
import Link from "next/link";
import {
  absoluteUrl,
  getDefaultShareImagePath,
  getSiteOrigin,
} from "@/lib/site";
import { clipMetaDescription } from "@/lib/seo";
import { Suspense } from "react";
import {
  getServerNavCategoryLinks,
  getServerProducts,
  getServerShopCategoryFilters,
} from "@/lib/catalog-server";
import { ShopShellClient } from "./ShopShellClient";

const shopDescRaw =
  "Browse Artzen — wall art, Islamic calligraphy, gifts, decor, and more. Cash on Delivery across Pakistan.";
const shopDesc = clipMetaDescription(shopDescRaw);
const origin = getSiteOrigin();
const shopOg = absoluteUrl(getDefaultShareImagePath());

export const metadata: Metadata = {
  title: "Shop all products",
  description: shopDesc,
  alternates: { canonical: `${origin}/shop` },
  openGraph: {
    title: "Shop all products",
    description: shopDesc,
    url: `${origin}/shop`,
    images: [{ url: shopOg, alt: "Artzen shop" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop all products",
    description: shopDesc,
    images: [shopOg],
  },
};

export default async function ShopPage() {
  const products = await getServerProducts();
  const count = products.length;
  const categoryLinks = await getServerNavCategoryLinks();
  const categoryFilters = await getServerShopCategoryFilters();

  return (
    <div className="min-h-screen bg-cream-deep">
      <Suspense
        fallback={
          <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16">
            <h1 className="font-[var(--font-cormorant)] text-4xl font-semibold text-[var(--dark)]">
              Shop all products
            </h1>
            <p className="mt-3 max-w-2xl font-[var(--font-dm-sans)] text-[15px] text-muted">
              Browse wall art, calligraphy, gifts, and decor. Artzen delivers
              across Pakistan with Cash on Delivery.
            </p>
            <p className="mt-3 font-[var(--font-dm-sans)] text-sm text-[var(--dark)]/70">
              {count}+ products available.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {categoryLinks.slice(0, 10).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-black/[0.12] bg-white px-4 py-2 text-[13px] text-[var(--dark)] no-underline"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </section>
        }
      >
        <ShopShellClient
          products={products}
          productCount={count}
          categoryLinks={categoryLinks}
          categoryFilters={categoryFilters}
        />
      </Suspense>
    </div>
  );
}
