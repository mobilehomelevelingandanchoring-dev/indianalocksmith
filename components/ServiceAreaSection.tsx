import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { CITIES } from '@/lib/cities';

export default function ServiceAreaSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <MapPin className="h-4 w-4" />
            Mobile Locksmith — We Come to You
          </div>
          <h2 className="section-title">Cities & Communities We Serve</h2>
          <p className="section-subtitle mx-auto mt-4">
            From Kokomo and Howard County to the surrounding cities and towns, Affordable Locksmith provides fast, professional service throughout north-central Indiana.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-8">
          <Link
            href="/service-areas/kokomo-in"
            className="card p-4 flex items-center gap-3 hover:border-blue-300 hover:bg-blue-50/50 transition-all group"
          >
            <div className="bg-blue-600 text-white rounded-full p-1.5 shrink-0">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold text-slate-900 text-sm group-hover:text-blue-600">Kokomo</div>
              <div className="text-xs text-slate-500">Primary Service Area</div>
            </div>
          </Link>

          <Link
            href="/service-areas/howard-county"
            className="card p-4 flex items-center gap-3 hover:border-blue-300 hover:bg-blue-50/50 transition-all group"
          >
            <div className="bg-blue-600 text-white rounded-full p-1.5 shrink-0">
              <MapPin className="h-4 w-4" />
            </div>
            <div>
              <div className="font-semibold text-slate-900 text-sm group-hover:text-blue-600">Howard County</div>
              <div className="text-xs text-slate-500">Full Coverage</div>
            </div>
          </Link>

          {CITIES.map((city) => (
            <Link
              key={city.slug}
              href={`/service-areas/${city.slug}`}
              className="card p-4 flex items-center gap-3 hover:border-slate-300 hover:bg-slate-50 transition-all group"
            >
              <div className="bg-slate-100 text-slate-500 rounded-full p-1.5 shrink-0 group-hover:bg-blue-100 group-hover:text-blue-600">
                <MapPin className="h-4 w-4" />
              </div>
              <div>
                <div className="font-medium text-slate-800 text-sm group-hover:text-blue-600">
                  {city.name}, {city.stateShort}
                </div>
                <div className="text-xs text-slate-500">~{city.distanceMiles} mi away</div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/service-areas"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
          >
            View all service areas <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
