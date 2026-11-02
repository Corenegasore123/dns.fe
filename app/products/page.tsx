import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Search } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Pagination from '../components/Pagination';
import { categories, filterProducts, getCategory, PAGE_SIZE } from '../data/products';

export const metadata: Metadata = {
  title: 'Products | Duhingeneza Shop',
  description: 'Fertilizers, fungicides, insecticides and more from Duhingeneza Shop.',
};

type SearchParams = Promise<{ category?: string; q?: string; page?: string }>;

// Filters live in the URL (?category=&q=&page=) so results are shareable and rendered on the server
export default async function ProductsPage({ searchParams }: { searchParams: SearchParams }) {
  const { category: rawCategory = 'all', q = '', page: rawPage = '1' } = await searchParams;
  const category = getCategory(rawCategory) ? rawCategory : 'all';
  const results = filterProducts({ category, q });
  const totalPages = Math.max(1, Math.ceil(results.length / PAGE_SIZE));
  const page = Math.min(Math.max(1, Number(rawPage) || 1), totalPages);
  const pageItems = results.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const hrefFor = (next: { category?: string; page?: number }) => {
    const params = new URLSearchParams();
    const c = next.category ?? category;
    if (c !== 'all') params.set('category', c);
    if (q) params.set('q', q);
    if (next.page && next.page > 1) params.set('page', String(next.page));
    const qs = params.toString();
    return qs ? `/products?${qs}` : '/products';
  };

  const filterOptions = [{ slug: 'all', name: 'All' }, ...categories];
  const heading = category === 'all' ? 'All' : getCategory(category)!.name;

  return (
    <main className="bg-white py-8 sm:py-12 lg:py-16">
      <div className="site-container grid grid-cols-1 lg:grid-cols-[15rem_minmax(0,1fr)] xl:grid-cols-[17rem_minmax(0,1fr)] gap-6 lg:gap-10">
        {/* Categories — vertical list on desktop, horizontally scrollable row on smaller screens */}
        <aside className="min-w-0">
          <h2 className="text-xl sm:text-2xl font-bold text-[#47A15E] mb-4 lg:mb-6">Categories</h2>
          <nav
            aria-label="Product categories"
            className="flex lg:flex-col gap-2 lg:gap-3 overflow-x-auto scrollbar-hide -mx-[var(--gutter)] px-[var(--gutter)] lg:mx-0 lg:px-0 pb-1"
          >
            {filterOptions.map((option) => {
              const active = option.slug === category;
              return (
                <Link
                  key={option.slug}
                  href={hrefFor({ category: option.slug, page: 1 })}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center gap-3 flex-shrink-0 whitespace-nowrap rounded-md border px-4 py-2.5 lg:py-3 text-sm transition-colors ${
                    active ? 'border-[#47A15E] bg-green-50/60 text-[#1a1a1a] font-medium' : 'border-gray-200 text-gray-700 hover:border-gray-300'
                  }`}
                >
                  <span
                    className={`w-4 h-4 rounded-full border flex items-center justify-center flex-shrink-0 ${
                      active ? 'border-[#1a1a1a]' : 'border-gray-300'
                    }`}
                  >
                    {active && <span className="w-2 h-2 rounded-full bg-[#1a1a1a]" />}
                  </span>
                  {option.name}
                </Link>
              );
            })}
          </nav>
        </aside>

        {/* Search + results */}
        <section className="min-w-0">
          <form action="/products" role="search" className="relative mb-6 lg:mb-8">
            {category !== 'all' && <input type="hidden" name="category" value={category} />}
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
            <input
              type="search"
              name="q"
              defaultValue={q}
              placeholder="Search for products"
              aria-label="Search for products"
              className="w-full rounded-md bg-gray-100 border border-transparent pl-11 pr-4 py-3 text-sm text-[#1a1a1a] placeholder:text-gray-400 focus:outline-none focus:border-[#47A15E] focus:bg-white transition-colors"
            />
          </form>

          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-5 lg:mb-6">
            <h1 className="text-xl sm:text-2xl font-bold text-[#1a1a1a]">{heading}</h1>
            <p className="text-sm text-gray-500">
              {q ? <>{results.length} result{results.length === 1 ? '' : 's'} for &ldquo;{q}&rdquo;</> : <>{results.length} product{results.length === 1 ? '' : 's'}</>}
            </p>
          </div>

          {pageItems.length > 0 ? (
            <div className="grid grid-cols-1 min-[22.5rem]:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-x-3 gap-y-4 sm:gap-5 lg:gap-6">
              {pageItems.map((product) => (
                <ProductCard
                  key={product.slug}
                  product={product}
                  sizes="(max-width: 768px) 50vw, (max-width: 1536px) 30vw, 22vw"
                />
              ))}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-gray-200 py-16 px-6 text-center">
              <p className="font-semibold text-[#1a1a1a] mb-1">No products found</p>
              <p className="text-sm text-gray-500 mb-5">Try another category or search term.</p>
              <Link href="/products" className="text-sm font-semibold text-[#47A15E] hover:underline">
                View all products
              </Link>
            </div>
          )}

          <div className="mt-10 lg:mt-14">
            <Pagination page={page} totalPages={totalPages} hrefFor={(p) => hrefFor({ page: p })} />
          </div>
        </section>
      </div>
    </main>
  );
}
