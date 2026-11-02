'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const featuredProducts = products.filter((p) => p.featured);

const FeaturedProducts = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = current.clientWidth * 0.8; // Scroll by 80% of container width
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-white py-12 sm:py-20 lg:py-24">
      <div className="site-container">

        {/* Header Section — title and arrows share one row at every width */}
        <div className="flex flex-row justify-between items-end mb-8 sm:mb-12 lg:mb-16 gap-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a1a1a] tracking-tight">
            Featured <span className="text-[#47A15E]">Products</span>
          </h2>
          <div className="flex gap-2 sm:gap-4 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Previous products"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#47A15E] hover:text-[#47A15E] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Next products"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-[#47A15E] hover:text-[#47A15E] transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel-style Products Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 sm:gap-6 mb-12 sm:mb-20 pb-4 scrollbar-hide -mx-[var(--gutter)] px-[var(--gutter)] scroll-px-[var(--gutter)] sm:mx-0 sm:px-0 sm:scroll-px-0 scroll-smooth"
        >
          {/* Phones: ~80% wide so the next card peeks in; sm: 2 per view; lg: 3; xl: 4 (widths subtract the gap share) */}
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              className="w-[80%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] snap-start flex-shrink-0"
              sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
            />
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-3 bg-[#F3B749] hover:bg-[#dea436] text-white px-10 py-4 rounded-lg font-bold text-base transition-all duration-300 transform shadow-lg shadow-[#F3B749]/20 group"
          >
            All Products
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;