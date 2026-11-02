import React from 'react';
import Image from 'next/image';

const AboutStory = () => {
  return (
    <section className="pb-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
      {/* Left Column - Text */}
      <div className="text-[#3C465F] space-y-6 sm:space-y-7 text-[0.9375rem] sm:text-[1rem] leading-[1.7] lg:pr-10 lg:pt-4">
        <p>
          For over 15 years, Duhingeneza Shop has been a cornerstone of the agricultural community in Rwanda. Our journey began with a simple mission: to provide farmers with the high-quality tools and supplies they need to succeed in a changing climate.
        </p>
        <p>
          We specialize in premium fertilizers, seeds, and advanced crop protection solutions. By partnering with global leaders in agricultural science, we ensure that every product on our shelves meets the highest standards of efficacy and safety for our local environment.
        </p>
        <p>
          Today, we serve over 10,000 farmers across the country, providing not just products, but the expert agronomic advice and technical support that drives real results in the field. From family smallholders to large-scale producers, we are your trusted partner in growth.
        </p>
      </div>

      {/* Right Column - Overlapping portraits. Both cards share one grid cell, so the
          height follows the content at every width instead of a fixed pixel height. */}
      <div className="grid grid-cols-12 w-full max-w-2xl mx-auto lg:max-w-none lg:pl-4">
        {/* Rose Card - Top Right (Background) */}
        <div className="col-start-6 col-span-7 row-start-1 z-0 text-right">
          <div className="relative w-full aspect-square overflow-hidden rounded-[0.125rem] bg-slate-50 border border-slate-100">
            <Image
              src="/images/about/rose.jpeg"
              alt="Rose MUKAHAKIZIMANA"
              fill
              sizes="(max-width: 1024px) 60vw, 30vw"
              className="object-cover"
            />
          </div>
          <div className="pt-3 sm:pt-5 pb-2 pl-[30%]">
            <h3 className="text-[#101828] text-[0.8125rem] sm:text-[0.9375rem] font-bold leading-tight uppercase tracking-tight break-words">
              Rose<br />
              MUKAHAKIZIMANA
            </h3>
            <p className="text-slate-500 text-[0.6875rem] sm:text-[0.75rem] font-bold mt-1.5 uppercase tracking-wider">Co-Owner</p>
          </div>
        </div>

        {/* Eugene Card - Bottom Left (Foreground), starts ~1/3 down Rose's photo */}
        <div className="col-start-1 col-span-7 row-start-1 mt-[35%] z-10 text-left">
          <div className="relative w-full aspect-square overflow-hidden rounded-[0.125rem] bg-white border border-slate-100 shadow-sm">
            <Image
              src="/images/about/eugene.jpeg"
              alt="Eugene MUNYANEZA"
              fill
              sizes="(max-width: 1024px) 60vw, 30vw"
              className="object-cover"
            />
          </div>
          <div className="pt-4 sm:pt-6 pb-2">
            <h3 className="text-[#101828] font-bold text-[0.8125rem] sm:text-[0.9375rem] md:text-[1.0625rem] leading-tight uppercase tracking-tight">
              Eugene MUNYANEZA
            </h3>
            <p className="text-slate-500 text-[0.6875rem] sm:text-[0.75rem] font-bold mt-1.5 uppercase tracking-wider">Owner</p>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutStory;
