'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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

  // Close the mobile menu when the viewport grows past the md breakpoint
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const close = () => mq.matches && setMobileMenuOpen(false);
    mq.addEventListener('change', close);
    return () => mq.removeEventListener('change', close);
  }, []);

  return (
    // Sticky (not fixed) so the header always reserves its own height, whatever it wraps to
    <header className="sticky top-0 z-50">
      {/* Top bar with business hours */}
      <div
        className={`bg-[#EDECE9] transition-all duration-300 ${scrolled ? 'py-1' : 'py-1.5 sm:py-2'}`}
      >
        <div className="site-container flex justify-center sm:justify-between items-center gap-4 text-[0.6875rem] sm:text-xs md:text-sm">
          <div className="flex items-center gap-2 min-w-0">
            <Clock className="text-[var(--color-primary-green)] flex-shrink-0 w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <span className="text-[#797979] font-medium truncate">
              <span className="sm:hidden">Sun–Thu 7:30–19:30 · Fri 7:30–16:00 · Sat closed</span>
              <span className="hidden sm:inline">Sun - Thur: 7:30 - 19:30, Fri: 7:30 - 16:00, Saturday - CLOSED</span>
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-black cursor-pointer hover:opacity-80 font-bold flex-shrink-0">
            <User className="w-4 h-4" />
            <span>Admin Login</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className={`bg-white transition-shadow duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
        <div className="site-container py-2.5 sm:py-3">
          <div className="flex justify-between items-center gap-4">
            {/* Logo */}
            <Link href="/" className="text-[var(--color-primary-green)] text-lg sm:text-2xl font-bold leading-tight flex-shrink-0">
              DUHINGENEZA<br />SHOP
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-5 lg:gap-8">
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

            {/* Call button - desktop (label only from lg, where there is room) */}
            <a
              href="tel:0783345370"
              className="hidden md:flex items-center gap-2 lg:gap-3 px-4 lg:px-5 py-2.5 rounded-sm hover:opacity-90 transition-opacity text-white flex-shrink-0"
              style={{ backgroundColor: 'var(--color-primary-yellow)' }}
            >
              <Phone className="w-5 h-5" />
              <div className="flex flex-col leading-tight">
                <span className="hidden lg:block text-sm">Call Anytime</span>
                <span className="font-bold text-base">0783345370</span>
              </div>
            </a>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 -mr-2 text-gray-700 hover:text-gray-900 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300"
          style={{
            maxHeight: mobileMenuOpen ? '480px' : '0px',
            opacity: mobileMenuOpen ? 1 : 0,
          }}
        >
          <div className="site-container pb-4 border-t border-gray-100">
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
              <span className="sm:hidden flex items-center gap-2 py-2.5 px-3 rounded-lg font-bold text-black cursor-pointer hover:bg-gray-50">
                <User className="w-4 h-4" />
                Admin Login
              </span>
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
