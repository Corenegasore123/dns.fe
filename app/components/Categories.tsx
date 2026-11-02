import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const categories = [
  {
    name: 'Fertilizers',
    description:
      'Boost your crop yields with our premium range of organic and mineral fertilizers. Carefully formulated to replenish soil nutrients, our fertilizers support healthy plant growth from seedling to harvest — helping you get the most from every season.',
    image: '/images/home/fertilizers.jpeg',
    href: '/products',
  },
  {
    name: 'Insecticides',
    description:
      'Protect your crops from harmful pests with our advanced insecticide solutions. From contact sprays to systemic treatments, we offer effective, farm-safe products that safeguard your harvest without compromising soil health.',
    image: '/images/home/insecticides.jpeg',
    href: '/products',
  },
  {
    name: 'Fungicides',
    description:
      'Prevent and control fungal diseases that threaten your crops. Our fungicide range includes preventive and curative solutions, helping you maintain plant vitality and reduce post-harvest losses across all growing conditions.',
    image: '/images/home/fungicides.jpeg',
    href: '/products',
  },
];

const Categories = () => {
  return (
    <section className="bg-white py-8 lg:py-10">
      <div className="site-container">
        {/* Section Header */}
        <h2 className="text-4xl sm:text-5xl font-semibold tracking-tighter text-[var(--color-primary-yellow,#f5a623)] mb-12 sm:mb-16 tracking-tight">
          Categories
        </h2>

        {/* Category Cards — text/image rows up to xl; from xl, three side-by-side cards (image on top) fill wide screens */}
        <div className="flex flex-col xl:grid xl:grid-cols-3 xl:gap-10 2xl:gap-14">
          {categories.map((category) => (
            <div
              key={category.name}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto] xl:flex xl:flex-col gap-6 md:gap-10 lg:gap-16 xl:gap-6 items-center xl:items-stretch py-4 sm:py-5 lg:py-8 xl:py-0"
            >
              {/* Text Content — left in rows, below the image in cards */}
              <div className="flex flex-col justify-center max-w-2xl">
                <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-2xl 2xl:text-3xl font-bold text-[#1a1a1a] mb-4 tracking-tight">
                  {category.name}
                </h3>
                <p className="text-sm sm:text-[0.938rem] lg:text-base leading-relaxed text-[#555] mb-6">
                  {category.description}
                </p>
                <a
                  href={category.href}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#1a1a1a] w-fit transition-colors duration-300 hover:text-[var(--color-primary-green,#2e7d32)] group"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

              {/* Image — right in rows, on top in cards */}
              <div className="relative w-full md:w-[23.75rem] lg:w-[27.5rem] xl:w-full xl:order-first aspect-[4/3] overflow-hidden bg-gray-100 flex-shrink-0">
                <Image
                  src={category.image}
                  alt={category.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 33vw"
                />
              </div>
            </div>
          ))}
        </div>

        {/* View More Products */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-[#1a1a1a] text-white px-8 py-3.5 rounded-sm font-semibold transition-all duration-300 hover:bg-[var(--color-primary-green,#2e7d32)] hover:shadow-lg active:scale-95 group"
          >
            View More Categories
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Categories;
