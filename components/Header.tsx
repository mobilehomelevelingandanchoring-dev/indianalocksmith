'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Menu, X, ChevronDown, Lock } from 'lucide-react';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_CITY, BUSINESS_STATE_SHORT } from '@/lib/constants';

const serviceLinks = [
  { href: '/services/automotive-locksmith', label: 'Automotive Locksmith' },
  { href: '/services/residential-locksmith', label: 'Residential Locksmith' },
  { href: '/services/commercial-locksmith', label: 'Commercial Locksmith' },
  { href: '/services/emergency-locksmith', label: 'Emergency Locksmith' },
  { href: '/services/key-services', label: 'Key Services' },
  { href: '/services/safe-services', label: 'Safe & Vault Services' },
];

const navLinks = [
  { href: '/services', label: 'Services', children: serviceLinks },
  { href: '/service-areas', label: 'Service Areas', children: null },
  { href: '/about', label: 'About', children: null },
  { href: '/blog', label: 'Blog', children: null },
  { href: '/contact', label: 'Contact', children: null },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg' : 'bg-white/98 backdrop-blur-sm'
      }`}
    >
      {/* Top emergency bar */}
      <div className="bg-blue-900 text-white py-1.5 text-center text-xs sm:text-sm">
        <span className="hidden sm:inline">24/7 Emergency Locksmith in Kokomo, IN — </span>
        <span className="sm:hidden">Emergency? </span>
        <a
          href={BUSINESS_PHONE_HREF}
          className="font-black underline underline-offset-2 hover:text-amber-300 transition-colors"
        >
          {BUSINESS_PHONE_DISPLAY}
        </a>
      </div>

      {/* Main navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Affordable Locksmith Home">
            <div className="bg-blue-600 text-white p-2 rounded-lg shadow-sm">
              <Lock className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="font-black text-slate-900 text-base sm:text-lg">Affordable Locksmith</div>
              <div className="text-xs text-slate-500 font-medium">
                {BUSINESS_CITY}, {BUSINESS_STATE_SHORT} — Since 1985
              </div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.children && setServicesOpen(true)}
                onMouseLeave={() => link.children && setServicesOpen(false)}
              >
                {link.children ? (
                  <button className="flex items-center gap-1 px-3 py-2 text-slate-700 hover:text-blue-600 font-medium text-sm rounded-md hover:bg-slate-50 transition-colors">
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="px-3 py-2 text-slate-700 hover:text-blue-600 font-medium text-sm rounded-md hover:bg-slate-50 transition-colors block"
                  >
                    {link.label}
                  </Link>
                )}

                {link.children && servicesOpen && (
                  <div className="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-slate-100 z-50 py-1">
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors first:rounded-t-xl last:rounded-b-xl"
                      >
                        {child.label}
                      </Link>
                    ))}
                    <div className="border-t border-slate-100 mt-1 pt-1">
                      <Link
                        href="/services"
                        className="block px-4 py-2.5 text-sm font-semibold text-blue-600 hover:bg-blue-50 rounded-b-xl transition-colors"
                      >
                        View All Services →
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors"
            >
              Free Quote
            </Link>
            <a
              href={BUSINESS_PHONE_HREF}
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-5 py-2.5 rounded-lg transition-colors shadow-sm phone-pulse"
            >
              <Phone className="h-4 w-4" />
              <span>{BUSINESS_PHONE_DISPLAY}</span>
            </a>
          </div>

          {/* Mobile: phone + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS_PHONE_HREF}
              className="flex items-center gap-1.5 bg-amber-500 text-white font-bold px-3 py-2 rounded-lg text-sm"
              aria-label="Call now"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-md transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {mobileServicesOpen && (
              <div className="pl-4 space-y-0.5">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 text-sm text-slate-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
            {[
              { href: '/service-areas', label: 'Service Areas' },
              { href: '/about', label: 'About Us' },
              { href: '/blog', label: 'Blog' },
              { href: '/contact', label: 'Contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-slate-700 font-medium rounded-lg hover:bg-slate-50"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100">
              <a
                href={BUSINESS_PHONE_HREF}
                className="flex items-center justify-center gap-2 bg-amber-500 text-white font-bold px-5 py-3 rounded-lg w-full"
              >
                <Phone className="h-5 w-5" />
                Call {BUSINESS_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
