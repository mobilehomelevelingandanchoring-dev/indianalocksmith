import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { ALL_LOCATION_SLUGS, LOCATION_DATA } from '@/lib/seo-data';

interface Props {
  serviceSlug: string;
  serviceName: string;
}

export default function ServiceLocationLinks({ serviceSlug, serviceName }: Props) {
  return (
    <section className="section-pad bg-slate-50 border-t border-slate-100">
      <div className="container-custom">
        <h2 className="section-title mb-2 text-center">
          {serviceName} — Indiana Locations We Serve
        </h2>
        <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
          Click your city for local response times, pricing, and service details specific to your area.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {ALL_LOCATION_SLUGS.map((locationSlug) => {
            const loc = LOCATION_DATA[locationSlug];
            return (
              <Link
                key={locationSlug}
                href={`/services/${serviceSlug}/${locationSlug}`}
                className="card p-3.5 flex items-center gap-2.5 hover:border-blue-200 hover:bg-blue-50/40 transition-all group"
              >
                <MapPin className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-500 shrink-0" />
                <div className="min-w-0">
                  <p className="font-semibold text-slate-800 text-sm group-hover:text-blue-600 leading-tight truncate">
                    {loc.name}, {loc.stateShort}
                  </p>
                  <p className="text-xs text-slate-400 truncate">{loc.county}</p>
                </div>
                <ArrowRight className="h-3 w-3 text-slate-300 group-hover:text-blue-500 ml-auto shrink-0" />
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
