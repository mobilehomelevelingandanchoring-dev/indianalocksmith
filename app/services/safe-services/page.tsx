import type { Metadata } from 'next';
import { Phone, Shield, Lock, Key, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE, BUSINESS_YEARS_EXPERIENCE } from '@/lib/constants';
import { buildServiceSchema, buildBreadcrumbSchema, buildSpeakableSchema } from '@/lib/schema';
import ServiceLocationLinks from '@/components/ServiceLocationLinks';

export const metadata: Metadata = {
  title: 'Safe & Vault Services Kokomo IN | Safe Opening, Combination Change | (917) 203-4678',
  description:
    'Professional safe and vault services in Kokomo, Indiana. Safe opening without damage, combination changes, digital lock reset, vault repair. Call (917) 203-4678.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/services/safe-services` },
};

const safeServices = [
  { icon: Lock, title: 'Safe Opening', desc: 'Forgotten combination? Broken lock? We open most safe brands without damage using manipulation techniques refined over decades.' },
  { icon: Key, title: 'Combination Change', desc: 'Change your safe\'s combination for security or after a personnel change. We change dial and electronic combinations on most safe models.' },
  { icon: Shield, title: 'Vault Services', desc: 'Commercial and residential vault opening, maintenance, repair, and relocking. We work with bank-grade vault doors.' },
  { icon: Lock, title: 'Digital Lock Reset', desc: 'Electronic safe lock not responding? Forgot the code? We diagnose and reset digital/electronic safe locks.' },
  { icon: Shield, title: 'Safe Repair', desc: 'Damaged locking mechanism, worn dial, or broken handle? We repair most safe types on-site.' },
  { icon: Key, title: 'Antique Safe Service', desc: 'Old combination safes and antique locks require specialized techniques. We have the experience to handle vintage safes carefully.' },
];

const faqs = [
  { question: 'Can you open my safe without the combination?', answer: 'In most cases, yes. We use professional manipulation techniques to open safes without the combination — without drilling or damage. Some rare safes may require drilling as a last resort, which we always discuss with you first.' },
  { question: 'How much does it cost to open a safe in Kokomo?', answer: 'Safe opening costs typically range from $75–$250 depending on the safe type and complexity. We always provide an estimate before starting. High-security or larger vault openings may cost more.' },
  { question: 'Can you change the combination on any safe?', answer: 'We can change combinations on most major safe brands. Some older or unusual models may have limitations. Call us with your safe make and model for confirmation.' },
  { question: 'Do you work on gun safes?', answer: 'Yes! Gun safe opening and combination changes are among our most common safe service requests. We handle most major gun safe brands including Liberty, Stack-On, Fort Knox, and others.' },
  { question: 'Can you open a safe without damaging it?', answer: 'Our goal is always non-destructive opening. In the vast majority of cases, we can open safes without any damage using professional manipulation or other non-destructive methods. Drilling is only used as a last resort on safes that cannot be opened otherwise.' },
];

export default function SafeServicesPage() {
  const pageUrl = `${BUSINESS_WEBSITE}/services/safe-services`;
  const schema = buildServiceSchema({
    name: 'Safe & Vault Services Kokomo, IN',
    description: 'Professional safe and vault services in Kokomo, Indiana — safe opening, combination changes, digital lock reset, vault repair, and antique safe service.',
    url: pageUrl,
    serviceType: 'Safe & Vault Services',
    priceRange: 'Safe opening from $150 · Combination change from $75 · Digital lock reset from $50',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_WEBSITE },
    { name: 'Services', url: `${BUSINESS_WEBSITE}/services` },
    { name: 'Safe & Vault Services', url: pageUrl },
  ]);
  const speakableSchema = buildSpeakableSchema(pageUrl);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: 'Safe Services', href: '/services/safe-services' }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Shield className="h-4 w-4" />
              Safe & Vault Services — Kokomo, IN
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Safe Opening & Vault Services in Kokomo, Indiana
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Forgotten combination, broken lock, or lost key to your safe? With {BUSINESS_YEARS_EXPERIENCE}+ years of experience, we open most safes and vaults without damage using professional manipulation techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-8 py-3">
                <Phone className="h-5 w-5" /> Call {BUSINESS_PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-outline py-3 px-8 text-lg">Get a Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Safe & Vault Services We Provide</h2>
            <p className="section-subtitle mx-auto mt-4">From forgotten combinations to complete vault services — handled with expertise and care.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {safeServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="card p-6">
                  <div className="bg-blue-100 text-blue-700 rounded-xl p-3 w-fit mb-4">
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
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-5">Expert Safe Work Requires Experience</h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                Safe work is one of the most specialized areas of locksmithing. It requires deep knowledge of safe manufacturers, mechanisms, and manipulation techniques that only come from years of hands-on experience. With {BUSINESS_YEARS_EXPERIENCE}+ years in the field, we&apos;ve opened hundreds of safes — from small home models to commercial vault doors.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Our first priority is always non-destructive opening. Drilling a safe is a last resort, and we will always discuss your options before proceeding with any method that could affect the safe&apos;s integrity.
              </p>
              <div className="space-y-2.5">
                {[
                  'Non-destructive opening in most cases',
                  'No damage to safe contents',
                  'Combination re-set after opening',
                  'Most major brands: Sentry, Liberty, Winchester, etc.',
                  'Gun safes, wall safes, floor safes, vault doors',
                  'Residential and commercial vault service',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Safe Service Pricing</h3>
              <div className="space-y-3">
                {[
                  { service: 'Safe Opening (standard)', price: 'From $75' },
                  { service: 'Safe Opening (high-security)', price: 'From $150' },
                  { service: 'Combination Change', price: 'From $65' },
                  { service: 'Digital Lock Reset', price: 'From $75' },
                  { service: 'Safe Repair', price: 'Quote Required' },
                  { service: 'Vault Door Service', price: 'Quote Required' },
                ].map((item) => (
                  <div key={item.service} className="flex justify-between py-2.5 border-b border-slate-100 last:border-0">
                    <span className="text-slate-600 text-sm">{item.service}</span>
                    <span className="font-semibold text-slate-900 text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">
                All prices confirmed before work begins. Non-destructive methods used whenever possible.
              </p>
              <a href={BUSINESS_PHONE_HREF} className="btn-primary w-full justify-center mt-5">
                <Phone className="h-4 w-4" /> Call for Safe Service
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Safe Service FAQs" />
      <ServiceLocationLinks serviceSlug="safe-services" serviceName="Safe & Vault Services" />
    </>
  );
}
