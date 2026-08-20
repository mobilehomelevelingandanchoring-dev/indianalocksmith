import type { Metadata } from 'next';
import { Phone, Shield, Clock, CheckCircle, ArrowRight, Car, Home, Building2, Key } from 'lucide-react';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import StatsSection from '@/components/StatsSection';
import TrustBadges from '@/components/TrustBadges';
import ProcessSection from '@/components/ProcessSection';
import ServiceAreaSection from '@/components/ServiceAreaSection';
import Testimonials from '@/components/Testimonials';
import FAQSection from '@/components/FAQSection';
import MapEmbed from '@/components/MapEmbed';
import { FAQ_HOME, BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_YEARS_EXPERIENCE, BUSINESS_WEBSITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Locksmith Kokomo Indiana | Affordable Locksmith | 24/7 Emergency | (917) 203-4678',
  description:
    'Looking for a locksmith in Kokomo Indiana? Affordable Locksmith has served Kokomo, IN since 1985 — 39+ years of trusted, owner-operated service. 24/7 emergency lockouts, car key programming, rekeying & more. Call (917) 203-4678 for fast same-day service.',
  alternates: {
    canonical: BUSINESS_WEBSITE,
  },
  openGraph: {
    title: 'Locksmith Kokomo Indiana | 24/7 Emergency Service | (917) 203-4678',
    description:
      'Trusted locksmiths in Kokomo Indiana with 39+ years of experience. Fast response, affordable pricing, owner-operated. Serving all of Howard County 24/7.',
    url: BUSINESS_WEBSITE,
  },
};

const quickServices = [
  {
    icon: Car,
    title: 'Car Lockout',
    desc: 'Locked keys in your vehicle? We\'ll have you back in minutes.',
    href: '/services/automotive-locksmith',
    color: 'bg-blue-600',
  },
  {
    icon: Home,
    title: 'Home Lockout',
    desc: 'Locked out of your house? Fast, damage-free entry service.',
    href: '/services/residential-locksmith',
    color: 'bg-green-600',
  },
  {
    icon: Building2,
    title: 'Business Lockout',
    desc: 'Commercial lockout or need a master key system? We handle it.',
    href: '/services/commercial-locksmith',
    color: 'bg-purple-600',
  },
  {
    icon: Key,
    title: 'Key Programming',
    desc: 'Transponder keys, key fobs, and duplicates cut on site.',
    href: '/services/key-services',
    color: 'bg-amber-600',
  },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Quick service icons */}
      <section className="bg-blue-50 border-b border-blue-100 py-10">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {quickServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={svc.href}
                  href={svc.href}
                  className="bg-white rounded-xl p-5 flex flex-col items-center text-center hover:shadow-card hover:scale-[1.02] transition-all duration-200 group"
                >
                  <div className={`${svc.color} text-white rounded-xl p-3 mb-3 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">{svc.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed hidden sm:block">{svc.desc}</p>
                  <span className="text-blue-600 text-xs font-semibold mt-2 flex items-center gap-1">
                    Learn More <ArrowRight className="h-3 w-3" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <StatsSection />

      <ServicesGrid />

      {/* Why Choose Us */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Shield className="h-4 w-4" />
                Why Kokomo Trusts Affordable Locksmith
              </div>
              <h2 className="section-title mb-6">
                {BUSINESS_YEARS_EXPERIENCE}+ Years Protecting Kokomo Homes, Cars & Businesses
              </h2>
              <p className="text-slate-600 leading-relaxed mb-6">
                Since 1985, Affordable Locksmith has been the name Howard County residents call when they need a locksmith they can trust. As an owner-operated business, every job is personal — your satisfaction directly reflects on us and our family name.
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                We don&apos;t use subcontractors or call centers. When you call us, you reach a real person who knows Kokomo, knows locks, and will be at your door fast. Our pricing is upfront and fair — no bait-and-switch, no hidden fees, no surprises.
              </p>

              <div className="space-y-3">
                {[
                  'Direct owner involvement on every job',
                  'No subcontractors — our own trusted technicians',
                  'Upfront pricing confirmed before we start',
                  'Fully mobile — we come to you anywhere in Howard County',
                  'Emergency line answered 24/7, 365 days a year',
                  'Serving Kokomo & surrounding communities since 1985',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link href="/about" className="btn-primary">
                  Learn Our Story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="space-y-5">
              {/* Emergency CTA card */}
              <div className="bg-red-600 text-white rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-white/20 rounded-full p-2">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-lg">24/7 Emergency Locksmith</h3>
                </div>
                <p className="text-red-100 text-sm mb-4">
                  Locked out of your car, home, or office? Our emergency line is answered around the clock — including holidays and weekends.
                </p>
                <a
                  href={BUSINESS_PHONE_HREF}
                  className="flex items-center justify-center gap-2 bg-white text-red-600 font-black py-3 rounded-xl hover:bg-red-50 transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  Call {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>

              {/* Pricing card */}
              <div className="card p-6">
                <h3 className="font-bold text-slate-900 text-lg mb-3">Transparent Pricing</h3>
                <div className="space-y-3">
                  {[
                    { service: 'Car Lockout', price: 'Starting at $45' },
                    { service: 'Home Lockout', price: 'Starting at $45' },
                    { service: 'Lock Rekeying (per lock)', price: 'Starting at $25' },
                    { service: 'Key Fob Programming', price: 'Starting at $65' },
                    { service: 'Transponder Key', price: 'Starting at $75' },
                    { service: 'Lock Installation', price: 'Starting at $85' },
                  ].map((item) => (
                    <div key={item.service} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                      <span className="text-slate-600 text-sm">{item.service}</span>
                      <span className="font-semibold text-slate-900 text-sm">{item.price}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-500 mt-3">
                  * Exact price confirmed before work begins. No hidden fees ever.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges />
      <ProcessSection />
      <Testimonials />
      <ServiceAreaSection />
      <MapEmbed />

      <FAQSection
        faqs={FAQ_HOME}
        title="Frequently Asked Questions — Locksmith Kokomo, IN"
        subtitle="Answers to the most common questions about our locksmith services in Kokomo and Howard County."
      />

      {/* Final CTA */}
      <section className="section-pad bg-hero-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Need a Locksmith in Kokomo Right Now?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            Don&apos;t wait. Whether it&apos;s an emergency at 3 AM or a scheduled lock upgrade, Affordable Locksmith is ready to help. One call is all it takes.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={BUSINESS_PHONE_HREF}
              className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-black px-10 py-4 rounded-xl text-xl transition-colors shadow-xl phone-pulse"
            >
              <Phone className="h-6 w-6" />
              {BUSINESS_PHONE_DISPLAY}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:bg-white/10"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
