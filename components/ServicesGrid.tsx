import Link from 'next/link';
import { Car, Home, Building2, AlertCircle, Key, Shield, ArrowRight } from 'lucide-react';
import { SERVICES } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  Car,
  Home,
  Building2,
  AlertCircle,
  Key,
  Shield,
};

interface ServicesGridProps {
  showAll?: boolean;
  highlight?: string;
}

export default function ServicesGrid({ showAll = false, highlight }: ServicesGridProps) {
  const services = showAll ? SERVICES : SERVICES;

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Key className="h-4 w-4" />
            Complete Locksmith Services
          </div>
          <h2 className="section-title">Everything You Need, One Local Expert</h2>
          <p className="section-subtitle mx-auto mt-4">
            From emergency car lockouts to commercial access control, we handle it all. One call covers automotive, residential, commercial, and specialty lock services in Kokomo and Howard County.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            const isHighlighted = highlight === service.slug;

            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={`card p-6 group hover:border-blue-200 hover:shadow-lg transition-all duration-300 ${isHighlighted ? 'border-blue-300 bg-blue-50/50 ring-2 ring-blue-500/20' : ''}`}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-blue-600 text-white rounded-xl p-3 shrink-0 group-hover:bg-blue-700 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg leading-tight group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>

                <ul className="space-y-1.5 mb-5">
                  {service.items.slice(0, 4).map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                  {service.items.length > 4 && (
                    <li className="text-sm text-blue-600 font-medium pl-3.5">
                      +{service.items.length - 4} more services
                    </li>
                  )}
                </ul>

                <div className="flex items-center gap-1.5 text-blue-600 font-semibold text-sm group-hover:gap-2.5 transition-all">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
