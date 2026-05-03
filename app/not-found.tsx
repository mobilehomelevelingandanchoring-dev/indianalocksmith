import Link from 'next/link';
import { Phone, Home, ArrowRight, Lock } from 'lucide-react';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY } from '@/lib/constants';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
      <div className="container-custom py-20 text-center max-w-2xl">
        <div className="bg-blue-100 text-blue-600 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <Lock className="h-10 w-10" />
        </div>
        <h1 className="text-5xl font-black text-slate-900 mb-3">404</h1>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Page Not Found</h2>
        <p className="text-slate-600 mb-8 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist. But if you need a locksmith in Kokomo, Indiana — we&apos;re right here.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-8 py-3">
            <Phone className="h-5 w-5" /> Call {BUSINESS_PHONE_DISPLAY}
          </a>
          <Link href="/" className="btn-primary text-lg px-8 py-3">
            <Home className="h-5 w-5" /> Go Home
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          {[
            { href: '/services', label: 'All Services' },
            { href: '/service-areas', label: 'Service Areas' },
            { href: '/contact', label: 'Contact Us' },
            { href: '/blog', label: 'Blog' },
          ].map((link) => (
            <Link key={link.href} href={link.href} className="text-blue-600 hover:text-blue-700 flex items-center gap-1">
              {link.label} <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
