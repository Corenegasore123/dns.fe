'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'Alphacypermax',
    category: 'INSECTICIDE',
    stock: 'In stock',
    size: '1L',
    image: '/images/home/insecticides.jpeg',
  },
  {
    id: 2,
    name: 'Alphacypermax',
    category: 'INSECTICIDE',
    stock: 'In stock',
    size: '1L',
    image: '/images/home/insecticides.jpeg',
  },
  {
    id: 3,
    name: 'Alphacypermax',
    category: 'INSECTICIDE',
    stock: 'In stock',
    size: '1L',
    image: '/images/home/insecticides.jpeg',
  },
  {
    id: 4,
    name: 'Alphacypermax',
    category: 'INSECTICIDE',
    stock: 'In stock',
    size: '1L',
    image: '/images/home/insecticides.jpeg',
  },
];

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
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative flex flex-col cursor-pointer w-[80%] sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] xl:w-[calc(25%-1.125rem)] snap-start flex-shrink-0"
            >
              {/* Large Image — takes up most of the card */}
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />

                {/* Category badge — top left */}
                <div className="absolute top-4 left-4">
                  <span className="bg-[#47A15E] text-white text-[0.6875rem] font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>

                {/* Stock badge — top right */}
                <div className="absolute top-4 right-4">
                  <span className="bg-white/95 text-[#1a1a1a] text-[0.6875rem] font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 relative">
                      <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
                    </span>
                    {product.stock}
                  </span>
                </div>

                {/* Metadata strip — bottom of image with backdrop blur */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-4 gap-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-between transition-all duration-300 group-hover:bg-white/30 group-hover:border-white/40">
                  <div className="min-w-0">
                    <h3 className="text-white text-base sm:text-lg font-bold mb-1 leading-tight drop-shadow-md break-words">
                      {product.name}
                    </h3>
                    <p className="text-white/90 text-sm font-medium drop-shadow-sm">{product.size}</p>
                  </div>

                  {/* Arrow CTA */}
                  <button
                    aria-label={`View ${product.name}`}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-white text-[#47A15E] shadow-md transition-all duration-300 flex-shrink-0"
                  >
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-3 bg-[#F3B749] hover:bg-[#dea436] text-white px-10 py-4 rounded-lg font-bold text-base transition-all duration-300 transform shadow-lg shadow-[#F3B749]/20 group"
          >
            All Products
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;