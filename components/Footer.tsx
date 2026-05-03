import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Lock, Star, Facebook, Twitter } from 'lucide-react';
import {
  BUSINESS_NAME,
  BUSINESS_PHONE_HREF,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_EMAIL,
  BUSINESS_CITY,
  BUSINESS_STATE,
  BUSINESS_STATE_SHORT,
  BUSINESS_ZIP,
  BUSINESS_YEARS_EXPERIENCE,
  BUSINESS_ESTABLISHED,
  BUSINESS_WEBSITE,
} from '@/lib/constants';
import { CITIES } from '@/lib/cities';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* CTA strip */}
      <div className="bg-blue-700 py-10">
        <div className="container-custom text-center">
          <h2 className="text-2xl lg:text-3xl font-black text-white mb-3">
            Need a Locksmith in Kokomo Right Now?
          </h2>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto">
            We&apos;re available 24/7 for emergency lockouts, key programming, lock installation, and more. Fast response, honest pricing, no surprises.
          </p>
          <a
            href={BUSINESS_PHONE_HREF}
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-black px-8 py-4 rounded-xl text-lg transition-colors shadow-lg phone-pulse"
          >
            <Phone className="h-5 w-5" />
            {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
      </div>

      {/* Main footer */}
      <div className="container-custom py-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-2.5 mb-4">
            <div className="bg-blue-600 text-white p-2 rounded-lg">
              <Lock className="h-5 w-5" />
            </div>
            <div>
              <div className="font-black text-white text-lg leading-tight">{BUSINESS_NAME}</div>
              <div className="text-xs text-slate-400">
                {BUSINESS_CITY}, {BUSINESS_STATE_SHORT}
              </div>
            </div>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed mb-4">
            Kokomo&apos;s trusted local locksmith since {BUSINESS_ESTABLISHED}. Owner-operated with {BUSINESS_YEARS_EXPERIENCE}+ years of experience serving Howard County and surrounding communities.
          </p>
          <div className="flex items-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-sm text-slate-400 ml-1">4.9/5 • 247+ Reviews</span>
          </div>
          <div className="flex gap-3">
            <a
              href="#"
              aria-label="Facebook"
              className="bg-slate-800 hover:bg-blue-600 text-slate-400 hover:text-white p-2 rounded-lg transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="bg-slate-800 hover:bg-blue-400 text-slate-400 hover:text-white p-2 rounded-lg transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Our Services</h3>
          <ul className="space-y-2">
            {[
              { href: '/services/automotive-locksmith', label: 'Automotive Locksmith' },
              { href: '/services/residential-locksmith', label: 'Residential Locksmith' },
              { href: '/services/commercial-locksmith', label: 'Commercial Locksmith' },
              { href: '/services/emergency-locksmith', label: 'Emergency Locksmith' },
              { href: '/services/key-services', label: 'Key Services' },
              { href: '/services/safe-services', label: 'Safe & Vault Services' },
              { href: '/services', label: 'All Services →' },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Service Areas */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Service Areas</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/service-areas/kokomo-in" className="text-sm text-slate-400 hover:text-white transition-colors">
                Kokomo, IN
              </Link>
            </li>
            <li>
              <Link href="/service-areas/howard-county" className="text-sm text-slate-400 hover:text-white transition-colors">
                Howard County
              </Link>
            </li>
            {CITIES.slice(0, 7).map((city) => (
              <li key={city.slug}>
                <Link
                  href={`/service-areas/${city.slug}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {city.name}, {city.stateShort}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/service-areas" className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                All Areas →
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact / NAP */}
        <div>
          <h3 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Contact Us</h3>
          <ul className="space-y-3">
            <li>
              <a
                href={BUSINESS_PHONE_HREF}
                className="flex items-start gap-2.5 text-sm group"
              >
                <Phone className="h-4 w-4 text-amber-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <div className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                    {BUSINESS_PHONE_DISPLAY}
                  </div>
                  <div className="text-slate-500 text-xs">24/7 Emergency Line</div>
                </div>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${BUSINESS_EMAIL}`}
                className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 text-slate-500 shrink-0" />
                {BUSINESS_EMAIL}
              </a>
            </li>
            <li className="flex items-start gap-2.5 text-sm text-slate-400">
              <MapPin className="h-4 w-4 text-slate-500 shrink-0 mt-0.5" />
              <span>
                {BUSINESS_CITY}, {BUSINESS_STATE} {BUSINESS_ZIP}
                <br />
                <span className="text-xs text-slate-500">Mobile Service — We Come to You</span>
              </span>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-slate-400">
              <Clock className="h-4 w-4 text-slate-500 shrink-0" />
              <span>
                <span className="text-white font-semibold">24/7</span> Emergency Available
              </span>
            </li>
          </ul>

          <div className="mt-5 space-y-2">
            {[
              { href: '/about', label: 'About Us' },
              { href: '/contact', label: 'Get a Free Quote' },
              { href: '/blog', label: 'Locksmith Blog' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-400 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom py-5 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-slate-500">
          <p>
            &copy; {year} {BUSINESS_NAME} — {BUSINESS_CITY}, {BUSINESS_STATE}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/sitemap.xml" className="hover:text-slate-300 transition-colors">Sitemap</Link>
            <span>Licensed & Insured Locksmith</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
