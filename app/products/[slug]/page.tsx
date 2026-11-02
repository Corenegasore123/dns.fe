import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Phone } from 'lucide-react';
import ProductCard from '../../components/ProductCard';
import ProductGallery from '../../components/ProductGallery';
import { getCategory, getProduct, getRelated, products } from '../../data/products';

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const product = getProduct((await params).slug);
  return product
    ? { title: `${product.name} | Duhingeneza Shop`, description: product.description }
    : { title: 'Product not found | Duhingeneza Shop' };
}

export default async function ProductDetailsPage({ params }: { params: Params }) {
  const product = getProduct((await params).slug);
  if (!product) notFound();

  const category = getCategory(product.category)!;
  const related = getRelated(product, 5);

  return (
    <main className="bg-white py-6 sm:py-10 lg:py-12">
      <div className="site-container">
        <Link
          href="/products"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1a1a1a] hover:text-[#47A15E] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back To Products
        </Link>

        {/* Gallery + info */}
        <div className="mt-5 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-20 items-start">
          <ProductGallery images={product.images} name={product.name} />

          <div className="lg:pt-2">
            <Link
              href={`/products?category=${category.slug}`}
              className="text-xs sm:text-sm font-semibold text-[#47A15E] hover:underline"
            >
              {category.name}
            </Link>
            <h1 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-medium uppercase tracking-tight text-[#1a1a1a]">
              {product.name}
            </h1>
            <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
              <span>{product.size}</span>
              <span className="w-1 h-1 rounded-full bg-gray-300" />
              <span className={`flex items-center gap-1.5 ${product.inStock ? 'text-emerald-600' : 'text-red-600'}`}>
                <span className={`w-1.5 h-1.5 rounded-full ${product.inStock ? 'bg-emerald-500' : 'bg-red-500'}`} />
                {product.inStock ? 'In stock' : 'Out of stock'}
              </span>
            </div>
            <p className="mt-5 sm:mt-6 text-sm sm:text-[0.9375rem] leading-relaxed text-gray-600 max-w-xl">
              {product.description}
            </p>
            {/* No online checkout yet: ordering is by phone */}
            <a
              href="tel:0783345370"
              aria-label={`Call 0783345370 to order ${product.name}`}
              className="mt-7 sm:mt-8 inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-[#17643F] hover:bg-[#12502F] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider px-8 py-3.5 rounded-sm transition-colors"
            >
              <Phone className="w-4 h-4" />
              Order Product
            </a>
          </div>
        </div>

        {/* Related products — 4 below xl (2x2 / one row of 4), 5 in a row from xl */}
        {related.length > 0 && (
          <section className="mt-16 sm:mt-24 lg:mt-28">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-[#1a1a1a] mb-8 sm:mb-12">
              Related <span className="text-[var(--color-primary-yellow)]">Products</span>
            </h2>
            <div className="grid grid-cols-1 min-[22.5rem]:grid-cols-2 md:grid-cols-4 xl:grid-cols-5 max-xl:[&>a:nth-child(5)]:hidden gap-x-3 gap-y-4 sm:gap-5 lg:gap-6">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 20vw" />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
