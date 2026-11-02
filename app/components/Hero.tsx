'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    // Height: fill the screen below the sticky header (--header-h, globals.css); svh keeps mobile browser bars from cropping it
    <section className="relative h-[70svh] md:h-[calc(100svh-var(--header-h))] min-h-[420px] md:min-h-[560px] max-h-[960px] w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/home/hero.png"
          alt="Hero"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay - Darker on the left to match design */}
        <div className="absolute inset-0 bg-black/20 bg-gradient-to-r from-black/80 via-black/30 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
        <div className="max-w-4xl text-white pt-5">
          <p className="text-[10px] md:text-sm font-bold tracking-[0.3em] mb-4 uppercase">
            Welcome to Duhingeneza Shop
          </p>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold mb-4 sm:mb-6 leading-[0.85] relative z-10">
            <span className="relative inline-block z-20">
              YOUR
              {/* Yellow Spark/Explosion Icon - Matching the exact pattern in the image */}
              <div className="absolute top-[20%] left-[130%] md:left-[160%] w-0 h-0 z-[-1] pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] sm:w-[110px] sm:h-[110px]">
                  <svg width="100%" height="100%" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Top Left - Small */}
                    <path d="M 25 100 L 45 110 L 15 65 Z" fill="#F7C35F" />
                    {/* Top Middle - Medium */}
                    <path d="M 60 95 L 75 110 L 85 40 Z" fill="#F7C35F" />
                    {/* Right - Large Main */}
                    <path d="M 75 145 L 185 135 L 135 45 Z" fill="#F7C35F" />
                    {/* Bottom Right - Medium Thin */}
                    <path d="M 125 170 L 210 185 L 185 210 Z" fill="#F7C35F" />
                    {/* Bottom Center - Small */}
                    <path d="M 85 190 L 105 240 L 120 215 Z" fill="#F7C35F" />
                  </svg>
                </div>
              </div>
            </span>
            <br />
            <span className="relative inline-block mt-2 z-20">
              Farming Partner
            </span>
          </h1>

          <p className="text-xs sm:text-sm lg:text-base mb-6 sm:mb-8 text-white/90 max-w-xl leading-relaxed">
            Empowering farmers with premium seeds, fertilizers, modern equipment, and expert agronomic guidance — everything you need to cultivate success from the ground up.
          </p>

          <button className="bg-[#F7C35F] hover:bg-[#eab34c] text-white py-2.5 sm:py-3.5 px-8 sm:px-10 rounded-sm transition-all active:scale-95 shadow-xl text-sm sm:text-base md:text-lg">
            Discover More
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
