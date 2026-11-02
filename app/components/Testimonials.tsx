import React from 'react';
import { User } from 'lucide-react';

const testimonialsRow1 = [
  {
    id: 1,
    name: 'Marie Claire Uwamahoro',
    role: 'Commercial Farmer',
    text: 'Their plant growth regulators have been a game changer for my tomato farm. Flowering was more consistent, and the fruit set was excellent. I appreciate their fast delivery and technical support.',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    id: 2,
    name: 'Emmanuel Habimana',
    role: 'Maize Grower',
    text: 'The hybrid seeds I purchased here outperformed everything I\'ve planted in the last five years. Excellent germination rates and strong drought resistance during the dry spell. Highly recommended.',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    id: 3,
    name: 'Alice Mutoni',
    role: 'Local Farmer',
    text: 'Finding reliable pesticides was always a challenge until I started working with Duhingeneza. Their Dudu and Rocket products effectively protected my cabbage crop without the harsh chemical burn I\'ve seen with other brands.',
    color: 'bg-purple-100 text-purple-700',
  },
];

const testimonialsRow2 = [
  {
    id: 4,
    name: 'Fidele Nkurunziza',
    role: 'Farm Manager',
    text: 'The soil amendments we procured restored the pH balance of our critical fields perfectly. Their team didn\'t just sell us a product; they provided a comprehensive soil improvement plan that actually worked.',
    color: 'bg-rose-100 text-rose-700',
  },
  {
    id: 5,
    name: 'Beata Mukamana',
    role: 'Vegetable Farmer',
    text: 'I trust their Ridomil fungicide completely for my greenhouse crops. It offers preventive control that saves me hundreds of thousands of francs in potential losses every wet season.',
    color: 'bg-cyan-100 text-cyan-700',
  },
  {
    id: 6,
    name: 'Innocent Kamanzi',
    role: 'Farmer',
    text: 'We bought several manual sprayers and pruning equipment from their farm equipment section. The tools are durable, easy to maintain.',
    color: 'bg-orange-100 text-orange-700',
  },
];

type Testimonial = (typeof testimonialsRow1)[number];

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <div className="w-[280px] sm:w-[380px] p-5 sm:p-6 lg:p-8 bg-white rounded-2xl border border-gray-200 shadow-sm flex-shrink-0 mx-3 sm:mx-4 hover:shadow-md transition-shadow">
    <div className="flex items-center gap-4 mb-4 sm:mb-6">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${testimonial.color}`}>
        <User className="w-6 h-6" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 text-[15px] sm:text-base leading-tight">
          {testimonial.name}
        </h4>
        <p className="text-gray-500 text-xs sm:text-sm mt-1">{testimonial.role}</p>
      </div>
    </div>
    <p className="text-gray-600 text-[13px] sm:text-sm leading-relaxed italic">
      &ldquo;{testimonial.text}&rdquo;
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="bg-white pt-10 pb-16 lg:pt-12 lg:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 sm:mb-16 lg:mb-20">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-[#1a1a1a] mb-6 tracking-tight">
          What <span className="text-[var(--color-primary-yellow,#f5a623)]">Customers</span> Say
        </h2>
        <p className="text-[#777] text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Here&apos;s what farmers, cooperatives, and agribusiness leaders are saying about how our products and expertise have impacted their yields.
        </p>
      </div>

      <div className="relative flex flex-col gap-6 sm:gap-8 overflow-hidden group">
        {/* First Row - Scrolling Left */}
        <div className="flex w-max animate-scrollY">
          <div className="flex">
            {testimonialsRow1.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          {/* Duplicate for infinite loop */}
          <div className="flex">
            {testimonialsRow1.map((t) => (
              <TestimonialCard key={`${t.id}-dup`} testimonial={t} />
            ))}
          </div>
        </div>

        {/* Second Row - Scrolling Right (Reverse) */}
        <div className="flex w-max animate-scrollYReverse -ml-[100px]">
          <div className="flex">
            {testimonialsRow2.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
          {/* Duplicate for infinite loop */}
          <div className="flex">
            {testimonialsRow2.map((t) => (
              <TestimonialCard key={`${t.id}-dup`} testimonial={t} />
            ))}
          </div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes scrollY {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollYReverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scrollY {
          animation: scrollY 30s linear infinite;
        }
        .animate-scrollYReverse {
          animation: scrollYReverse 30s linear infinite;
        }
        .group:hover .animate-scrollY,
        .group:hover .animate-scrollYReverse {
          animation-play-state: paused;
        }
      `}} />
    </section>
  );
};

export default Testimonials;
