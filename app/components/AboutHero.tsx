import React from 'react';

const AboutHero = () => {
  return (
    <section className="max-w-7xl mx-auto mb-12 sm:mb-16 lg:mb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[54rem] mx-auto text-center">
        <p className="text-[0.75rem] sm:text-[0.8125rem] font-bold tracking-widest uppercase text-[#47A15E] mb-4 sm:mb-6">
          About Us
        </p>
        <h1 className="text-[2rem] sm:text-4xl md:text-[3.25rem] font-semibold text-[#181E27] leading-[1.15] mb-6 sm:mb-8 tracking-tight text-balance">
          Innovating the Future of<br className="hidden sm:block" />{' '}
          Rwandan Agriculture
        </h1>
        <p className="text-[0.9375rem] sm:text-base md:text-lg text-[#3C465F] font-medium max-w-[48rem] mx-auto leading-relaxed">
          At Duhingeneza Shop, we are dedicated to transforming agriculture through innovation and excellence, providing farmers with the tools they need for a sustainable future.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
