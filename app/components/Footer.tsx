import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-white pt-8 pb-8 border-t border-gray-200 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section - Links */}
        <div className="flex flex-col md:flex-row justify-between mb-24 lg:mb-32">
          {/* Brand Name on the left */}
          <div className="mb-12 md:mb-0 md:w-1/3">
            <h3 className="text-base sm:text-lg font-bold tracking-widest text-[#47A15E] uppercase">
              DUHINGENEZA SHOP
            </h3>
          </div>

          {/* Links Columns on the right */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 lg:gap-16 md:w-2/3">
            {/* Categories */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h4 className="font-semibold text-[#1a1a1a] text-sm">Categories</h4>
              <div className="flex flex-col gap-3">
                <Link href="/products" className="text-[13px] text-[#777] hover:text-[#1a1a1a] transition-colors">Fertilizers</Link>
                <Link href="/products" className="text-[13px] text-[#777] hover:text-[#1a1a1a] transition-colors">Fungicides</Link>
                <Link href="/products" className="text-[13px] text-[#777] hover:text-[#1a1a1a] transition-colors">Insecticides</Link>
                <Link href="/products" className="text-[13px] text-[#777] hover:text-[#1a1a1a] transition-colors">Others</Link>
              </div>
            </div>

            {/* Products */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h4 className="font-semibold text-[#1a1a1a] text-sm">Products</h4>
              <div className="flex flex-col gap-3">
                <p className="text-[13px] text-[#777] transition-colors">Dudu</p>
                <p className="text-[13px] text-[#777] transition-colors">Rocket</p>
                <p className="text-[13px] text-[#777] transition-colors">Ridomil</p>
                <p className="text-[13px] text-[#777] transition-colors">Mupazeb</p>
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h4 className="font-semibold text-[#1a1a1a] text-sm">Company</h4>
              <div className="flex flex-col gap-3">
                <Link href="/about" className="text-[13px] text-[#777] hover:text-[#1a1a1a] transition-colors">About</Link>
                <p className="text-[13px] text-[#777] transition-colors">Testimonials</p>
                <Link href="/contact" className="text-[13px] text-[#777] hover:text-[#1a1a1a] transition-colors">Contact Us</Link>
              </div>
            </div>

            {/* Branches */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h4 className="font-semibold text-[#1a1a1a] text-sm">Branches</h4>
              <div className="flex flex-col gap-3">
                <p className="text-[13px] text-[#777] transition-colors">Musanze</p>
                <p className="text-[13px] text-[#777] transition-colors">Nyabugogo</p>
                <p className="text-[13px] text-[#777] transition-colors">Mahoko</p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section - Copyright & Legal */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4 text-xs sm:text-sm text-[#777]">
          <p>Copyright © DuhingeNezaShop {new Date().getFullYear()}</p>
        </div>

        {/* Bottom Section - Huge Title, sized to the container width (cqw) so it always spans it edge to edge */}
        <div className="@container w-full text-center overflow-hidden flex justify-center items-end leading-[0.8] mb-4">
          <p aria-hidden="true" className="text-[10.4cqw] font-bold text-[#0A0A0A] tracking-tighter whitespace-nowrap select-none">
            DUHINGENEZA SHOP
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
