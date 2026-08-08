import type { Metadata } from 'next';
import { Phone, Building2, Key, Shield, CheckCircle, Fingerprint, Lock } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE, BUSINESS_YEARS_EXPERIENCE } from '@/lib/constants';
import { buildServiceSchema, buildBreadcrumbSchema, buildSpeakableSchema } from '@/lib/schema';
import ServiceLocationLinks from '@/components/ServiceLocationLinks';

export const metadata: Metadata = {
  title: 'Commercial Locksmith Kokomo IN | Access Control, Master Keys | (575) 573-2625',
  description:
    'Commercial locksmith services in Kokomo, Indiana. Access control systems, master key systems, panic bars, high-security locks, and business lockouts. Call (575) 573-2625.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/services/commercial-locksmith` },
};

const commercialServices = [
  { icon: Key, title: 'Master Key Systems', desc: 'Hierarchical key systems that let the right people access the right areas — from individual employees to management to ownership.' },
  { icon: Fingerprint, title: 'Access Control Systems', desc: 'Keypad, card reader, and biometric entry systems that eliminate traditional keys and provide detailed access logs.' },
  { icon: Shield, title: 'High-Security Locks', desc: 'Medeco, Mul-T-Lock, and ASSA Abloy locks that resist picking, bumping, and drilling — rated for commercial applications.' },
  { icon: Lock, title: 'Panic Bar Installation', desc: 'ADA-compliant exit devices (crash bars) required for commercial occupancies. Rim, mortise, and vertical rod devices installed.' },
  { icon: Building2, title: 'Commercial Lockouts', desc: 'Locked out of your business? We respond to commercial lockouts 24/7 and get your doors open without damage.' },
  { icon: Key, title: 'Commercial Rekeying', desc: 'Employee left? Security concern? Rekey your commercial property quickly to prevent unauthorized access.' },
];

const faqs = [
  { question: 'Do you install access control systems in Kokomo?', answer: 'Yes! We install keypad entry, card reader, and biometric (fingerprint) access control systems for commercial properties throughout Kokomo and Howard County. Systems start around $300–$500 per door installed.' },
  { question: 'What is a master key system?', answer: 'A master key system allows multiple locks to be operated by different keys with a hierarchy — individual employees have keys that only open their assigned areas, while managers have master keys that open multiple areas, and owners have grand master keys.' },
  { question: 'How much does commercial locksmith service cost?', answer: 'Commercial service costs vary significantly by project scope. Simple lockouts start at $65, rekeying starts at $35/lock, and access control systems are quoted individually. We always provide a written quote before starting work.' },
  { question: 'Are you available 24/7 for commercial emergencies?', answer: 'Yes. Business lockouts, break-in repairs, and emergency lock changes don\'t wait for business hours. We respond 24/7 for commercial clients throughout Howard County.' },
  { question: 'What commercial properties do you service?', answer: 'We serve retail stores, offices, warehouses, medical facilities, restaurants, hotels, schools, churches, apartment complexes, and any other commercial property in Kokomo and the surrounding area.' },
];

export default function CommercialLocksmithPage() {
  const pageUrl = `${BUSINESS_WEBSITE}/services/commercial-locksmith`;
  const schema = buildServiceSchema({
    name: 'Commercial Locksmith Services Kokomo, IN',
    description: 'Commercial locksmith services in Kokomo, Indiana — access control systems, master key systems, panic bars, high-security locks, and business lockouts.',
    url: pageUrl,
    serviceType: 'Commercial Locksmith',
    priceRange: 'Commercial lockouts from $85 · Master key systems from $300 · Access control from $150/door',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_WEBSITE },
    { name: 'Services', url: `${BUSINESS_WEBSITE}/services` },
    { name: 'Commercial Locksmith', url: pageUrl },
  ]);
  const speakableSchema = buildSpeakableSchema(pageUrl);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: 'Commercial Locksmith', href: '/services/commercial-locksmith' }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 text-purple-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Building2 className="h-4 w-4" />
              Commercial Locksmith — Kokomo, IN
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Commercial Locksmith Services for Kokomo Businesses
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Protect your business with professional commercial locksmith services. Access control, master key systems, panic bars, high-security locks, and 24/7 emergency service for all Howard County businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-8 py-3">
                <Phone className="h-5 w-5" /> Call {BUSINESS_PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-outline py-3 px-8 text-lg">Request Commercial Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Commercial Security Solutions</h2>
            <p className="section-subtitle mx-auto mt-4">
              Comprehensive commercial locksmith services for businesses of all sizes in Kokomo and Howard County.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commercialServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="card p-6">
                  <div className="bg-purple-100 text-purple-700 rounded-xl p-3 w-fit mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{svc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-custom max-w-4xl">
          <h2 className="section-title mb-5">Why Kokomo Businesses Trust Us</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            With {BUSINESS_YEARS_EXPERIENCE}+ years serving commercial clients in Kokomo and Howard County, we understand what local businesses need. We&apos;ve designed master key systems for hotels, installed access control in medical offices, and handled emergency lockouts for everything from small boutiques to large warehouses. Every commercial job gets the same attention to detail and honest pricing.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              `${BUSINESS_YEARS_EXPERIENCE}+ years of commercial locksmith experience`,
              'Free security assessment for commercial clients',
              'Licensed for commercial lock work in Indiana',
              'Access control from $300/door installed',
              'Master key systems designed & documented',
              'ADA-compliant panic bar installation',
              '24/7 emergency commercial lockout service',
              'Ongoing maintenance contracts available',
            ].map((point) => (
              <div key={point} className="flex items-center gap-2 text-sm">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-slate-700">{point}</span>
              </div>
            ))}
          </div>
          <a href={BUSINESS_PHONE_HREF} className="btn-primary text-lg px-10 py-4 inline-flex">
            <Phone className="h-5 w-5" /> Schedule Free Business Security Assessment
          </a>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Commercial Locksmith FAQs" />
      <ServiceLocationLinks serviceSlug="commercial-locksmith" serviceName="Commercial Locksmith" />

      <section className="section-pad bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black mb-4">Protect Your Kokomo Business Today</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">
            From a single lock rekey to a complete access control system, we handle it all. Call for a free commercial security quote.
          </p>
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-12 py-4 inline-flex">
            <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
