import Link from "next/link";
import { ProductCard } from "@/components/ProductCard";
import { CategoryGrid } from "@/components/CategoryGrid";
import {
  collections,
  getFeaturedProducts,
} from "@/lib/data";

export default function Home() {
  const featured = getFeaturedProducts();

  return (
    <div>
      <section className="relative overflow-hidden border-b border-amber-900/10 bg-gradient-to-b from-forest/5 to-cream">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
          <h1 className="font-serif text-4xl font-bold tracking-tight text-forest sm:text-5xl">
            Premium Islamic Wall Art
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-forest/80">
            Handcrafted MDF wood calligraphy and home decor for your space.
            Elegant, meaningful, delivered across Pakistan with{" "}
            <strong>Cash on Delivery</strong>.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/collections/islamic-calligraphy"
              className="inline-flex items-center rounded-md bg-forest px-5 py-2.5 text-sm font-medium text-cream transition hover:bg-forest/90"
            >
              Shop Calligraphy
            </Link>
            <Link
              href="/collections/mdf-wall-art"
              className="inline-flex items-center rounded-md border border-forest/30 bg-white px-5 py-2.5 text-sm font-medium text-forest transition hover:bg-forest/5"
            >
              View Wall Art
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold text-forest">
          Featured Pieces
        </h2>
        <p className="mt-1 text-forest/70">
          Handpicked Islamic calligraphy and MDF wall art for your home.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="border-y border-amber-900/10 bg-white py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-2xl font-semibold text-forest">
            Why Deckure
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="font-medium text-forest">Cash on Delivery</p>
              <p className="mt-1 text-sm text-forest/70">
                Pay when you receive. No advance payment required.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest">Ships Across Pakistan</p>
              <p className="mt-1 text-sm text-forest/70">
                We deliver to all major cities. Safe packaging.
              </p>
            </div>
            <div>
              <p className="font-medium text-forest">Quality Guarantee</p>
              <p className="mt-1 text-sm text-forest/70">
                Premium MDF, hand-finished. Elegant and lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <h2 className="font-serif text-2xl font-semibold text-forest">
          Shop by Category
        </h2>
        <p className="mt-1 text-forest/70">
          Islamic calligraphy, MDF wall art, and home decor.
        </p>
        <div className="mt-8">
          <CategoryGrid collections={collections} />
        </div>
      </section>

      <section className="border-t border-amber-900/10 bg-forest/5 py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-semibold text-forest">
            Ready to bring barakah home?
          </h2>
          <p className="mt-2 text-forest/80">
            Browse our collection or get in touch on WhatsApp.
          </p>
          <Link
            href="/collections/islamic-calligraphy"
            className="mt-6 inline-block rounded-md bg-forest px-6 py-3 text-sm font-medium text-cream transition hover:bg-forest/90"
          >
            View All Collections
          </Link>
        </div>
      </section>
    </div>
  );
}
