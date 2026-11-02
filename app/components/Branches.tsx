import React from 'react';
import Image from 'next/image';

const branches = [
  {
    id: 1,
    name: 'Musanze Branch (Main)',
    image: '/images/home/musanze.jpg',
  },
  {
    id: 2,
    name: 'Nyabugogo Branch',
    image: '/images/home/nyabugogo.jpeg',
  },
  {
    id: 3,
    name: 'Mahoko Branch',
    image: '/images/home/mahoko.jpeg',
  },
];

const Branches = () => {
  return (
    <section className="bg-white pt-10 pb-6 lg:pt-12 lg:pb-8">
      <div className="site-container">
        {/* Section Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-10 sm:mb-12 lg:mb-16 tracking-tight">
          Discover our <span className="text-[#47A15E]">Branches</span>
        </h2>

        {/* Branches Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {branches.map((branch) => (
            <div key={branch.id} className="flex flex-col gap-4">
              <div className="relative w-full aspect-[16/9] sm:aspect-[4/3] overflow-hidden bg-gray-100">
                <Image
                  src={branch.image}
                  alt={branch.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-base sm:text-lg font-medium text-[#1a1a1a]">
                {branch.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
