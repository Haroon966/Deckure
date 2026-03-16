export interface Collection {
  slug: string;
  name: string;
  description: string;
  image?: string;
  productIds: string[];
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  image: string;
  images?: string[];
  collectionSlug: string;
  material?: string;
  dimensions?: string;
}

export const collections: Collection[] = [
  {
    slug: "islamic-calligraphy",
    name: "Islamic Calligraphy",
    description: "Handcrafted Islamic calligraphy in premium MDF wood.",
    productIds: ["allah-name-mdf", "bismillah-wall-art", "ayatul-kursi-wood"],
  },
  {
    slug: "mdf-wall-art",
    name: "MDF Wall Art",
    description: "Premium MDF wood wall art for your home.",
    productIds: ["allah-name-mdf", "bismillah-wall-art", "loh-e-qurani", "ayatul-kursi-wood"],
  },
  {
    slug: "home-decor",
    name: "Home Decor",
    description: "Elegant Islamic home decor to elevate your space.",
    productIds: ["allah-name-mdf", "bismillah-wall-art", "loh-e-qurani"],
  },
];

export const products: Product[] = [
  {
    id: "allah-name-mdf",
    slug: "allah-name-mdf-wood-16x16",
    name: "Allah Name Islamic Calligraphy Wall Art",
    description: "Premium MDF wood calligraphy featuring the name of Allah. Hand-finished, ready to hang.",
    longDescription: "Bring barakah into your home with this beautifully crafted Allah name wall art. Made from premium MDF wood, each piece is hand-finished with care. Ideal for living rooms, bedrooms, or entrance halls. Available in gold and antique finishes. Size 16\" x 16\", ready to hang with hardware included. Ships across Pakistan with Cash on Delivery.",
    price: 4999,
    image: "/images/placeholder.svg",
    collectionSlug: "islamic-calligraphy",
    material: "MDF Wood",
    dimensions: "16\" x 16\"",
  },
  {
    id: "bismillah-wall-art",
    slug: "bismillah-wall-art-mdf",
    name: "Bismillah Islamic Wall Art",
    description: "Bismillah calligraphy in MDF wood. Elegant and timeless.",
    longDescription: "Start every space with barakah. This Bismillah wall art is crafted in premium MDF with a choice of gold or silver finish. Perfect for above doorways, dining areas, or as a centrepiece. 300–400 words of unique content for SEO: Islamic wall art Pakistan, MDF calligraphy, home decor. Handcrafted in Pakistan, delivered nationwide with COD.",
    price: 3499,
    image: "/images/placeholder.svg",
    collectionSlug: "islamic-calligraphy",
    material: "MDF Wood",
    dimensions: "12\" x 24\"",
  },
  {
    id: "ayatul-kursi-wood",
    slug: "ayatul-kursi-wood-calligraphy",
    name: "Ayatul Kursi Wood Calligraphy",
    description: "Ayatul Kursi in premium wooden calligraphy. Protection and beauty.",
    longDescription: "Ayatul Kursi in elegant MDF wood calligraphy. A cherished verse for protection and barakah in the home. Our craftsmen ensure every detail is precise. Suitable for main walls, above the bed, or in the masjid room. Islamic wall art Pakistan, wooden Ayatul Kursi, MDF calligraphy. Cash on Delivery available across Pakistan.",
    price: 7499,
    image: "/images/placeholder.svg",
    collectionSlug: "mdf-wall-art",
    material: "MDF Wood",
    dimensions: "24\" x 24\"",
  },
  {
    id: "loh-e-qurani",
    slug: "loh-e-qurani-ayat-calligraphy",
    name: "Loh-e-Qurani Ayat Calligraphy",
    description: "Loh-e-Qurani design in premium MDF. A statement piece for your wall.",
    longDescription: "Loh-e-Qurani Ayat calligraphy in premium MDF wood. A striking piece that combines tradition with modern craftsmanship. Ideal for feature walls and living spaces. Islamic home decor Pakistan, Loh e Qurani wall decor, MDF wall art. Hand-finished, ready to hang. We deliver nationwide with Cash on Delivery.",
    price: 8999,
    image: "/images/placeholder.svg",
    collectionSlug: "mdf-wall-art",
    material: "MDF Wood",
    dimensions: "20\" x 30\"",
  },
];

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getProductsByCollection(collectionSlug: string): Product[] {
  return products.filter((p) => p.collectionSlug === collectionSlug);
}

export function getFeaturedProducts(): Product[] {
  return [products[0], products[1], products[2]];
}
