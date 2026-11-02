'use client';

import React, { useState } from 'react';
import Image from 'next/image';

type ProductGalleryProps = {
  images: string[];
  name: string;
};

// Thumbnails in a column beside the main image from sm up; in a row under it on phones
const ProductGallery = ({ images, name }: ProductGalleryProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">
      {images.length > 1 && (
        <div className="flex sm:flex-col gap-2 sm:gap-3 overflow-x-auto scrollbar-hide sm:overflow-visible flex-shrink-0">
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Show image ${i + 1} of ${name}`}
              aria-pressed={i === active}
              className={`relative w-16 sm:w-20 aspect-square overflow-hidden rounded-md flex-shrink-0 border-2 transition-colors ${
                i === active ? 'border-[#47A15E]' : 'border-transparent hover:border-gray-300'
              }`}
            >
              <Image src={src} alt="" fill className="object-cover" sizes="5rem" />
            </button>
          ))}
        </div>
      )}
      <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={images[active]}
          alt={name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 45vw"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
