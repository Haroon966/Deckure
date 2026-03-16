import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/data";

function formatPrice(price: number) {
  return `Rs. ${price.toLocaleString("en-PK")}`;
}

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-lg border border-amber-900/10 bg-white shadow-sm transition hover:shadow-md"
    >
      <div className="relative aspect-square overflow-hidden bg-amber-50/50">
        <Image
          src={product.image}
          alt={product.name}
          width={400}
          height={400}
          className="object-cover transition group-hover:scale-105"
          unoptimized
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold text-forest line-clamp-2 group-hover:text-forest/90">
          {product.name}
        </h3>
        <p className="mt-1 text-sm text-forest/70 line-clamp-2">
          {product.description}
        </p>
        <p className="mt-2 font-semibold text-forest">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
}
