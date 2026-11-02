// Placeholder catalogue until the products API (dns.be) exists. Replace with API calls later.

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
  slug: string;
  name: string;
  category: CategorySlug;
  size: string;
  inStock: boolean;
  featured?: boolean;
  images: string[];
  description: string;
};

const categoryImage: Partial<Record<CategorySlug, string>> = {
  fertilizers: '/images/home/fertilizers.jpeg',
  fungicides: '/images/home/fungicides.jpeg',
  insecticides: '/images/home/insecticides.jpeg',
};

const categoryDescription: Partial<Record<CategorySlug, string>> = {
  fertilizers:
    'replenishes the nutrients your soil needs for strong roots, healthy foliage and higher yields. Apply at planting and as a top dressing following the recommended rates for your crop, and ask our agronomists for a soil-specific plan.',
  fungicides:
    'protects your crops against fungal diseases such as blight, mildew and leaf spot. Use it preventively before the wet season or at the first signs of infection, following the label rates and pre-harvest interval.',
  insecticides:
    'gives fast, reliable control of chewing and sucking pests including aphids, caterpillars and whiteflies. Spray evenly on affected plants, wear protective equipment, and respect the pre-harvest interval on the label.',
};

// [name, category, size, inStock, featured]
const seed: [string, CategorySlug, string, boolean, boolean?][] = [
  ['Alphacypermax', 'insecticides', '1L', true, true],
  ['Dudu', 'insecticides', '500ml', true, true],
  ['Rocket', 'insecticides', '1L', true, true],
  ['Lambda Super', 'insecticides', '250ml', true, true],
  ['Cypermethrin 10 EC', 'insecticides', '1L', true],
  ['Imidacloprid 200 SL', 'insecticides', '500ml', false],
  ['Dimethoate 40 EC', 'insecticides', '1L', true],
  ['Abamectin 1.8 EC', 'insecticides', '250ml', true],
  ['Ridomil Gold', 'fungicides', '1kg', true],
  ['Mupazeb', 'fungicides', '1kg', true],
  ['Mancozeb 80 WP', 'fungicides', '1kg', true],
  ['Copper Oxychloride', 'fungicides', '500g', true],
  ['Victory 72 WP', 'fungicides', '1kg', false],
  ['Tebuconazole 250 EW', 'fungicides', '500ml', true],
  ['Azoxystrobin Plus', 'fungicides', '250ml', true],
  ['Metalaxyl MZ', 'fungicides', '1kg', true],
  ['NPK 17-17-17', 'fertilizers', '50kg', true],
  ['DAP', 'fertilizers', '50kg', true],
  ['Urea 46%', 'fertilizers', '50kg', true],
  ['NPK 20-10-10', 'fertilizers', '50kg', true],
  ['CAN 27%', 'fertilizers', '50kg', false],
  ['Foliar Feed Plus', 'fertilizers', '1L', true],
  ['Organic Compost', 'fertilizers', '25kg', true],
  ['Agricultural Lime', 'fertilizers', '50kg', true],
];

const toSlug = (name: string) =>
  name.toLowerCase().replace(/%/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const products: Product[] = seed.map(([name, category, size, inStock, featured]) => {
  const image = categoryImage[category] ?? '/images/home/hero.png';
  return {
    slug: toSlug(name),
    name,
    category,
    size,
    inStock,
    featured,
    // Placeholder gallery: the same photo repeated, as in the design, until real product photos exist
    images: [image, image, image, image],
    description: `${name} ${categoryDescription[category] ?? 'is available at all our branches.'}`,
  };
});

export const PAGE_SIZE = 12;

export const getCategory = (slug: string) => categories.find((c) => c.slug === slug);

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export function filterProducts({ category, q }: { category?: string; q?: string }) {
  const query = q?.trim().toLowerCase();
  return products.filter(
    (p) =>
      (!category || category === 'all' || p.category === category) &&
      (!query || p.name.toLowerCase().includes(query)),
  );
}

export function getRelated(product: Product, limit: number) {
  return products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, limit);
}
