import type { Metadata } from 'next';
import Link from 'next/link';
import { Car, Home, Building2, AlertCircle, Key, Shield, ArrowRight, Phone, CheckCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE, BUSINESS_YEARS_EXPERIENCE } from '@/lib/constants';
import { SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Locksmith Services Kokomo IN | Automotive, Residential & Commercial',
  description:
    `Complete locksmith services in Kokomo, Indiana — automotive lockouts, residential locks, commercial security, emergency service, key programming, and safes. ${BUSINESS_YEARS_EXPERIENCE}+ years experience. Call (575) 573-2625.`,
  alternates: { canonical: `${BUSINESS_WEBSITE}/services` },
};

const iconMap: Record<string, React.ElementType> = { Car, Home, Building2, AlertCircle, Key, Shield };

const serviceFaqs = [
  {
    question: 'What locksmith services do you offer in Kokomo, IN?',
    answer: 'We offer a complete range of locksmith services including automotive lockouts, car key programming, transponder keys, residential lock installation and rekeying, commercial access control, master key systems, 24/7 emergency service, safe opening, and more.',
  },
  {
    question: 'Do you offer same-day locksmith service in Kokomo?',
    answer: 'Yes! Most of our services are available same-day or even within the hour. For emergencies, we typically arrive within 15–30 minutes anywhere in Kokomo or Howard County.',
  },
  {
    question: 'How much do locksmith services cost in Kokomo?',
    answer: 'Pricing varies by service. Car and home lockouts start at $45, rekeying starts at $25 per lock, and key programming starts at $65. We always confirm the final price before starting any work — no hidden fees.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed and carry general liability insurance. We have been providing professional locksmith services in Kokomo and Howard County since 1985.',
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }]} />
          <h1 className="text-4xl lg:text-5xl font-black text-white mt-4 mb-4">
            Complete Locksmith Services in Kokomo, IN
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mb-8">
            From emergency car lockouts to commercial access control — Affordable Locksmith provides every locksmith service you need, backed by {BUSINESS_YEARS_EXPERIENCE}+ years of local experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-8 py-3">
              <Phone className="h-5 w-5" />
              Call {BUSINESS_PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn-outline py-3 px-8 text-lg">
              Get a Free Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => {
              const Icon = iconMap[service.icon];
              return (
                <div key={service.slug} className="card p-6 group hover:border-blue-200 hover:shadow-lg transition-all duration-300">
                  <div className="bg-blue-600 text-white rounded-xl p-3 w-fit mb-4 group-hover:bg-blue-700 transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="font-bold text-slate-900 text-xl mb-2">{service.title}</h2>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                        <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:gap-2.5 transition-all"
                  >
                    Learn More <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h2 className="section-title mb-4">Kokomo&apos;s Most Trusted Locksmith</h2>
          <p className="text-slate-600 leading-relaxed mb-8">
            Since 1985, Affordable Locksmith has provided expert locksmith services throughout Kokomo and Howard County. We&apos;re owner-operated, fully insured, and committed to honest pricing and fast service on every single job.
          </p>
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-10 py-4">
            <Phone className="h-5 w-5" />
            Call {BUSINESS_PHONE_DISPLAY} — Available 24/7
          </a>
        </div>
      </section>

      <FAQSection faqs={serviceFaqs} title="Frequently Asked Questions About Our Services" />
    </>
  );
}
