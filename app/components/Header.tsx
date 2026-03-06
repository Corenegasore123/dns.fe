'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { User, Phone, Clock, Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact', href: '/contact' },
];

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar with business hours */}
      <div
        className="bg-[#EDECE9] overflow-hidden transition-all duration-300"
        style={{
          maxHeight: '100px',
          paddingTop: scrolled ? '4px' : '8px',
          paddingBottom: scrolled ? '4px' : '8px',
        }}
      >
        <div className={`max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center transition-all duration-300 gap-2 ${scrolled ? 'text-[10px] sm:text-xs' : 'text-[10px] sm:text-xs md:text-sm'}`}>
          <div className="flex items-center gap-2 text-center sm:text-left">
            <Clock className={`text-[var(--color-primary-green)] flex-shrink-0 transition-all duration-300 ${scrolled ? 'w-3.5 h-3.5' : 'w-3 h-3 sm:w-4 h-4'}`} />
            <span className='text-[#797979] font-medium'>Sun - Thur: 7:30 - 19:30, Fri: 7:30 - 16:00, Saturday - CLOSED</span>
          </div>
          <div className="flex items-center gap-2 text-black cursor-pointer hover:opacity-80 font-bold">
            <User className={`transition-all duration-300 ${scrolled ? 'w-3.5 h-3.5' : 'w-3 h-3 sm:w-4 h-4'}`} />
            <span>Admin Login</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="text-[var(--color-primary-green)] text-2xl font-bold leading-tight">
              DUHINGENEZA<br />SHOP
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`transition-colors font-medium ${
                      isActive
                        ? 'text-[#2D5F4D] active-nav-link'
                        : 'text-gray-600 hover:text-gray-800'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Call button - desktop */}
            <a
              href="tel:0783345370"
              className="hidden md:flex items-center gap-3 px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity text-white"
              style={{ backgroundColor: 'var(--color-primary-yellow)' }}
            >
              <Phone className="w-5 h-5" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm">Call Anytime</span>
                <span className="font-bold text-base">0783345370</span>
              </div>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileMenuOpen ? '400px' : '0px',
            opacity: mobileMenuOpen ? 1 : 0,
          }}
        >
          <div className="max-w-7xl mx-auto px-4 pb-4 border-t border-gray-100">
            <nav className="flex flex-col space-y-1 pt-3">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`py-2.5 px-3 rounded-lg transition-colors font-medium ${
                      isActive
                        ? 'text-[#2D5F4D] bg-green-50'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
            <a
              href="tel:0783345370"
              className="mt-3 flex items-center justify-center gap-3 px-5 py-3 rounded-sm hover:opacity-90 transition-opacity text-white w-full"
              style={{ backgroundColor: 'var(--color-primary-yellow)' }}
            >
              <Phone className="w-5 h-5" />
              <div className="flex flex-col leading-tight">
                <span className="text-sm">Call Anytime</span>
                <span className="font-bold text-base">0783345370</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
