import React from 'react';

const AboutStory = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start pb-2 px-4 sm:px-6 lg:px-8">
      {/* Left Column - Text */}
      <div className="text-[#3C465F] space-y-7 text-[16px] leading-[1.7] lg:pr-10 pt-4">
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

      {/* Right Column - Images Composition */}
      <div className="relative h-[480px] md:h-[520px] w-full mt-12 lg:mt-0 lg:pl-4">
        {/* Rose Card - Top Right (Background) */}
        <div className="absolute top-0 right-0 w-[58%] z-0 text-right">
          <div className="relative w-full aspect-square overflow-hidden rounded-[2px] bg-slate-50 border border-slate-100">
            <img
              src="/images/about/rose.jpeg"
              alt="Rose MUKAHAKIZIMANA"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="pt-5 pb-2">
            <h3 className="text-[#101828] text-[15px] font-bold leading-tight uppercase tracking-tight">
              Rose<br />
              MUKAHAKIZIMANA
            </h3>
            <p className="text-slate-500 text-[12px] font-bold mt-1.5 uppercase tracking-wider">Co-Owner</p>
          </div>
        </div>

        {/* Eugene Card - Bottom Left (Foreground) - Overlapping by 20% */}
        <div className="absolute top-[15%] left-0 w-[58%] z-10 text-left">
          <div className="relative w-full aspect-square overflow-hidden rounded-[2px] bg-white border border-slate-100 shadow-sm">
            <img
              src="/images/about/eugene.jpeg"
              alt="Eugene MUNYANEZA"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="pt-6 pb-2">
            <h3 className="text-[#101828] font-bold text-[15px] md:text-[17px] leading-tight uppercase tracking-tight">
              Eugene MUNYANEZA
            </h3>
            <p className="text-slate-500 text-[12px] font-bold mt-1.5 uppercase tracking-wider">Owner</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
