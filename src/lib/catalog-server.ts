import type { Collection, Product, HeroStripItem } from "@/lib/data";
import { collections as staticCollections, products as staticProducts } from "@/lib/data";
import * as q from "@/lib/catalog-queries";

export const CATALOG_CACHE_TAG = "catalog";

export async function getCachedCatalog(): Promise<{
  products: Product[];
  collections: Collection[];
}> {
  return { products: staticProducts, collections: staticCollections };
}

export async function getServerProducts(): Promise<Product[]> {
  const { products } = await getCachedCatalog();
  return products;
}

export async function getServerCollections(): Promise<Collection[]> {
  const { collections } = await getCachedCatalog();
  return collections;
}

export async function getServerProductBySlug(slug: string): Promise<Product | undefined> {
  const { products } = await getCachedCatalog();
  return q.getProductBySlugFrom(products, slug);
}

export async function getServerCollection(slug: string): Promise<Collection | undefined> {
  const { collections } = await getCachedCatalog();
  return q.getCollectionFrom(collections, slug);
}

export async function getServerProductsByCollection(
  collectionSlug: string
): Promise<Product[]> {
  const { products, collections } = await getCachedCatalog();
  return q.getProductsByCollectionFrom(products, collections, collectionSlug);
}

export async function getServerFeaturedProducts(): Promise<Product[]> {
  const { products } = await getCachedCatalog();
  return q.getFeaturedProductsFrom(products);
}

export async function getServerHeroStripProducts(): Promise<HeroStripItem[]> {
  const { products } = await getCachedCatalog();
  return q.getHeroStripProductsFrom(products);
}

export async function getServerHomepageCollections(): Promise<Collection[]> {
  const { collections } = await getCachedCatalog();
  return q.getHomepageCollectionsFrom(collections);
}

export async function getServerNavCategoryLinks(): Promise<
  { href: string; label: string }[]
> {
  const { collections } = await getCachedCatalog();
  return q.getNavCategoryLinksFrom(collections);
}

export async function getServerShopCategoryFilters(): Promise<
  { slug: string | null; label: string }[]
> {
  const { collections } = await getCachedCatalog();
  return q.shopCategoryFiltersFrom(collections);
}

export async function getServerCollectionCoverImage(
  collection: Collection
): Promise<string | undefined> {
  const { products } = await getCachedCatalog();
  return q.getCollectionCoverImageFrom(products, collection);
}
