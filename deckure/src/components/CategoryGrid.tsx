import Link from "next/link";
import type { Collection } from "@/lib/data";

export function CategoryGrid({ collections }: { collections: Collection[] }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {collections.map((collection) => (
        <Link
          key={collection.slug}
          href={`/collections/${collection.slug}`}
          className="group flex flex-col overflow-hidden rounded-lg border border-amber-900/10 bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <h3 className="font-serif text-xl font-semibold text-forest group-hover:text-forest/90">
            {collection.name}
          </h3>
          <p className="mt-2 flex-1 text-sm text-forest/70">
            {collection.description}
          </p>
          <span className="mt-4 text-sm font-medium text-gold">
            Shop {collection.name} →
          </span>
        </Link>
      ))}
    </div>
  );
}
