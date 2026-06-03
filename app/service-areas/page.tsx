import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Clock, ArrowRight } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE } from '@/lib/constants';
import { CITIES } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Locksmith Service Areas Indiana | 120+ Cities Served | (855) 633-0750',
  description:
    'Affordable Locksmith serves Kokomo, Indiana and 120+ surrounding communities statewide — Hamilton County, Hendricks County, Johnson County, Lake County, Marion County (Indianapolis), and Southern Indiana. Mobile locksmith, no tow-in required. Call (855) 633-0750.',
  keywords: [
    'locksmith service areas Indiana', 'mobile locksmith Indiana', 'locksmith near me Indiana',
    'Howard County locksmith', 'Hamilton County locksmith', 'Marion County locksmith',
    'Lake County locksmith Indiana', 'Clark County locksmith Indiana',
  ],
  alternates: { canonical: `${BUSINESS_WEBSITE}/service-areas` },
  openGraph: {
    title: 'Locksmith Service Areas — 120+ Indiana Cities | Affordable Locksmith',
    description: 'Mobile locksmith serving 120+ Indiana cities from Kokomo. Car lockouts, home lockouts, key programming, 24/7 emergency service statewide.',
    url: `${BUSINESS_WEBSITE}/service-areas`,
    type: 'website',
  },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Service Areas', href: '/service-areas' }]} />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Locksmith Service Areas — 120+ Indiana Cities
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              We&apos;re a fully mobile locksmith service. We come directly to you — home, car, or business — anywhere in Kokomo, Howard County, and across Indiana including Indianapolis, Hamilton County, Lake County, and Southern Indiana.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-8 py-3">
                <Phone className="h-5 w-5" /> {BUSINESS_PHONE_DISPLAY}
              </a>
              <div className="flex items-center gap-2 text-blue-200 text-sm">
                <Clock className="h-4 w-4" />
                <span>24/7 Emergency Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary areas */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <h2 className="section-title mb-3">Primary Service Areas</h2>
          <p className="text-slate-600 mb-8">Our base of operations. We respond fastest to calls in these areas.</p>
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <Link
              href="/service-areas/kokomo-in"
              className="card p-6 group hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-600 text-white rounded-xl p-3 shrink-0 group-hover:bg-blue-700 transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">
                    Kokomo, Indiana
                  </h3>
                  <p className="text-slate-500 text-sm mb-3">Howard County Seat • Primary Service Area</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Our home base. We serve every neighborhood in Kokomo — North Side, South Side, East Side, downtown, and all surrounding areas. Fastest response times in the city.
                  </p>
                  <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm mt-3">
                    Kokomo Locksmith Info <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>

            <Link
              href="/service-areas/howard-county"
              className="card p-6 group hover:border-blue-300 hover:shadow-lg transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-800 text-white rounded-xl p-3 shrink-0 group-hover:bg-blue-900 transition-colors">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-xl mb-1 group-hover:text-blue-600 transition-colors">
                    Howard County, Indiana
                  </h3>
                  <p className="text-slate-500 text-sm mb-3">Full County Coverage</p>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    We serve the entire county — Kokomo, Greentown, Russiaville, Oakford, Sycamore, and every rural community within Howard County boundaries.
                  </p>
                  <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm mt-3">
                    Howard County Coverage <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <h2 className="section-title mb-3">All Indiana Cities & Communities We Serve</h2>
          <p className="text-slate-600 mb-8">We regularly serve all of these communities. Response times vary by distance — click any city for specific timing and service details.</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="card p-4 group hover:border-blue-200 hover:bg-blue-50/30 transition-all"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <MapPin className="h-4 w-4 text-slate-400 group-hover:text-blue-500 shrink-0" />
                  <span className="font-semibold text-slate-800 text-sm group-hover:text-blue-600">
                    {city.name}, {city.stateShort}
                  </span>
                </div>
                <div className="text-xs text-slate-500 pl-6">{city.county}</div>
                <div className="text-xs text-slate-400 pl-6">~{city.distanceMiles} mi from Kokomo</div>
                <div className="flex items-center gap-1 text-blue-600 text-xs font-semibold mt-2 pl-6">
                  View Details <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Not in list? */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom text-center max-w-2xl">
          <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h2 className="section-title mb-4">Not Sure If We Cover Your Area?</h2>
          <p className="text-slate-600 mb-6">
            If your city isn&apos;t listed, call us anyway. We regularly travel beyond our listed service area for non-emergency jobs, and always for emergency calls when possible. The worst we can say is we&apos;ll give you an honest arrival estimate.
          </p>
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-10 py-4 inline-flex">
            <Phone className="h-5 w-5" /> Call {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
