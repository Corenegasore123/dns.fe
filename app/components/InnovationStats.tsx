import React from 'react';
import { ArrowRight } from 'lucide-react';

const stats = [
  {
    value: '99.9%',
    label: 'Customer Satisfaction Rate',
    description:
      'We take pride in delivering exceptional service and top-quality agricultural products that consistently exceed our customers\u2019 expectations.',
  },
  {
    value: '15+',
    label: 'Years of Experience',
    description:
      'With over two decades in the agricultural industry, we bring deep expertise and trusted partnerships to every farmer we serve.',
  },
  {
    value: '10K',
    label: 'Farmers Around the Country',
    description:
      'Our commitment to sustainable farming has empowered over 10,000 farmers across the country, helping them achieve higher yields and better livelihoods.',
  },
];

const InnovationStats = () => {
  return (
    <section className="bg-white py-8 lg:py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 mb-16 sm:mb-20">
          {/* Left - Heading */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight text-[#1a1a1a]">
              Innovating the Future
              <br />
              of{' '}
              <span className="text-[var(--color-primary-green)]">
                Agriculture
              </span>
            </h2>
          </div>

          {/* Right - Description + Link */}
          <div className="flex flex-col justify-center">
            <p className="text-[#0A0A0A] text-sm sm:text-base leading-relaxed mb-4">
              At Duhingeneza Shop, we are dedicated to transforming agriculture through innovation and excellence. By providing farmers with access to premium seeds, advanced fertilizers, and cutting-edge equipment, we help build a more productive and sustainable future for communities everywhere.
            </p>
            <p className="text-[#555] text-sm sm:text-base leading-relaxed mb-6">
              Our mission goes beyond selling products — we partner with farmers at every stage of their journey, offering expert agronomic advice and hands-on support that drives real results in the field.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-sm sm:text-base font-semibold text-[#1a1a1a] hover:text-[var(--color-primary-green)] transition-colors group"
            >
              Learn More
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-12 sm:mb-16" />

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8 lg:gap-16">
          {stats.map((stat) => (
            <div key={stat.value}>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0A0A0A] mb-2">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base font-semibold tracking-tight text-[#0A0A0A] mb-3">
                {stat.label}
              </p>
              <p className="text-[#555] text-xs sm:text-sm leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InnovationStats;
