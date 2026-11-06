// Product categories are a fixed list shared with the API (dns.be src/products/categories.ts)
export type CategorySlug =
  | 'fertilizers'
  | 'fungicides'
  | 'insecticides'
  | 'agricultural-tools'
  | 'animal-products'
  | 'other';

export const categories: { slug: CategorySlug; name: string; badge: string }[] = [
  { slug: 'fertilizers', name: 'Fertilizers', badge: 'FERTILIZER' },
  { slug: 'fungicides', name: 'Fungicides', badge: 'FUNGICIDE' },
  { slug: 'insecticides', name: 'Insecticides', badge: 'INSECTICIDE' },
  { slug: 'agricultural-tools', name: 'Agricultural Tools', badge: 'TOOL' },
  { slug: 'animal-products', name: 'Animal Products', badge: 'ANIMAL' },
  { slug: 'other', name: 'Other', badge: 'OTHER' },
];

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  size: string;
  inStock: boolean;
  featured: boolean;
  images: string[];
  description: string;
};

export const PAGE_SIZE = 12;

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);
