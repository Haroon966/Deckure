import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  getCollection,
  getProductsByCollection,
  collections,
} from "@/lib/data";
import { ProductCard } from "@/components/ProductCard";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) return { title: "Collection | Deckure" };
  return {
    title: `${collection.name} | Islamic Wall Art Pakistan | Deckure`,
    description:
      collection.description +
      " Premium Islamic wall art and MDF calligraphy. Cash on Delivery across Pakistan.",
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();

  const products = getProductsByCollection(slug);

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <nav className="mb-6 text-sm text-forest/70" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-forest">
          Home
        </Link>
        <span className="mx-2">/</span>
        <span className="text-forest">{collection.name}</span>
      </nav>
      <h1 className="font-serif text-3xl font-bold text-forest">
        {collection.name}
      </h1>
      <p className="mt-2 max-w-2xl text-forest/80">
        {collection.description} Explore our handcrafted Islamic wall art and
        MDF calligraphy. Each piece is made with care for your home. We deliver
        across Pakistan with Cash on Delivery.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
