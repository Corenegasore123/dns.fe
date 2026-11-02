import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getCategory, type Product } from '../data/products';

type ProductCardProps = {
  product: Product;
  sizes: string;
  className?: string;
};

// The card sizes its contents from its own width (@container queries), so the same card works in the
// home carousel, the 2-4 column products grid and the related products row.
const ProductCard = ({ product, sizes, className = '' }: ProductCardProps) => {
  return (
    <Link href={`/products/${product.slug}`} className={`@container group relative flex flex-col ${className}`}>
      {/* Large Image — takes up most of the card */}
      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition-transform duration-700"
          sizes={sizes}
        />

        {/* Category badge — top left */}
        <div className="absolute top-2 left-2 @3xs:top-3 @3xs:left-3 @xs:top-4 @xs:left-4">
          <span className="bg-[#47A15E] text-white text-[0.625rem] @3xs:text-[0.6875rem] font-bold px-2.5 py-1 @3xs:px-3 @3xs:py-1.5 rounded-full shadow-sm">
            {getCategory(product.category)?.badge}
          </span>
        </div>

        {/* Stock badge — top right (hidden on the narrowest cards) */}
        <div className="absolute top-2 right-2 @3xs:top-3 @3xs:right-3 @xs:top-4 @xs:right-4 hidden @[12.5rem]:block">
          <span className="bg-white/95 text-[#1a1a1a] text-[0.6875rem] font-semibold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
            {product.inStock ? (
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 relative">
                <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
              </span>
            ) : (
              <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
            )}
            {product.inStock ? 'In stock' : 'Out of stock'}
          </span>
        </div>

        {/* Metadata strip — bottom of image with backdrop blur */}
        <div className="absolute bottom-2 left-2 right-2 @3xs:bottom-3 @3xs:left-3 @3xs:right-3 @xs:bottom-4 @xs:left-4 @xs:right-4 p-2.5 @3xs:p-3 @xs:p-4 gap-2 @xs:gap-3 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 shadow-lg flex items-center justify-between transition-all duration-300 group-hover:bg-white/30 group-hover:border-white/40">
          <div className="min-w-0">
            <h3 className="text-white text-[0.8125rem] @3xs:text-base @xs:text-lg font-bold mb-1 leading-tight drop-shadow-md break-words">
              {product.name}
            </h3>
            <p className="text-white/90 text-xs @3xs:text-sm font-medium drop-shadow-sm">{product.size}</p>
          </div>

          {/* Arrow CTA (decorative: the whole card is the link) */}
          <span
            aria-hidden="true"
            className="hidden @[12.5rem]:flex w-9 h-9 @xs:w-10 @xs:h-10 @sm:w-12 @sm:h-12 rounded-full items-center justify-center bg-white text-[#47A15E] shadow-md transition-all duration-300 flex-shrink-0"
          >
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
