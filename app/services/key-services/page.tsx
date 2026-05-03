import type { Metadata } from 'next';
import { Phone, Key, Cpu, Zap, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE } from '@/lib/constants';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Key Services Kokomo IN | Key Cutting, Transponder Keys, Key Fobs | (765) 434-1881',
  description:
    'Professional key services in Kokomo, Indiana. Key cutting, transponder key programming, key fob replacement, high-security key duplication. Affordable pricing. Call (765) 434-1881.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/services/key-services` },
};

const keyServices = [
  { icon: Key, title: 'Key Cutting & Duplication', desc: 'Accurate key cutting for residential, commercial, and automotive keys. Standard, high-security, and laser-cut profiles.' },
  { icon: Cpu, title: 'Transponder Key Programming', desc: 'Electronic transponder key cutting and programming for most car makes and models — at a fraction of dealership cost.' },
  { icon: Zap, title: 'Key Fob Programming', desc: 'Lost or broken remote? We program OEM and aftermarket key fobs for virtually any vehicle on the road.' },
  { icon: Key, title: 'High-Security Key Cutting', desc: 'Restricted keyway, Medeco, Mul-T-Lock, and ASSA Abloy high-security key cutting with proper authorization.' },
  { icon: Key, title: 'Master Key Creation', desc: 'Master keys for residential and commercial properties. We design and implement master key hierarchies.' },
  { icon: Key, title: 'Key Extraction', desc: 'Key broken inside a lock? We extract broken key fragments and replace the key without lock damage.' },
];

const faqs = [
  { question: 'Can you make a car key from just the VIN number?', answer: 'Yes! For most vehicles, we can generate a key code from your VIN and proof of ownership, then cut and program a new transponder key on the spot. This works for most domestic and import vehicles.' },
  { question: 'How much does transponder key programming cost?', answer: 'Transponder key programming typically costs $75–$150 depending on the vehicle. This is 40–60% less than dealership pricing for the same quality key.' },
  { question: 'Do you program key fobs for all car brands?', answer: 'We program key fobs for most major brands including Ford, GM, Chrysler, Toyota, Honda, Hyundai, Kia, BMW, Mercedes, Audi, and many more. Call us with your make, model, and year for confirmation.' },
  { question: 'Can you copy a key that says "Do Not Duplicate"?', answer: 'For standard keys, we follow industry ethics and duplicate only with proper authorization. True high-security keys with patented keyways require proof of authorization and cannot be duplicated without factory authorization.' },
  { question: 'How long does key programming take on-site?', answer: 'Most key programming is completed in 30–60 minutes on site at your location. We bring our equipment to you — no need to tow your vehicle anywhere.' },
];

export default function KeyServicesPage() {
  const schema = buildServiceSchema({
    name: 'Key Services Kokomo, IN — Cutting, Programming & Duplication',
    description: 'Professional key services in Kokomo, Indiana — key cutting, transponder key programming, key fob replacement, and high-security key duplication.',
    url: `${BUSINESS_WEBSITE}/services/key-services`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: 'Key Services', href: '/services/key-services' }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Key className="h-4 w-4" />
              Key Services — Kokomo, IN
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Key Cutting & Programming Services in Kokomo, Indiana
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              From basic key duplication to advanced transponder key programming and fob replacement — we handle every key service on-site, at your location, at a fraction of dealer pricing.
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
            <h2 className="section-title">Our Key Services</h2>
            <p className="section-subtitle mx-auto mt-4">Every key service you need — residential, automotive, and commercial.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="card p-6">
                  <div className="bg-amber-100 text-amber-700 rounded-xl p-3 w-fit mb-4">
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

      <section className="bg-amber-50 section-pad border-y border-amber-100">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="section-title mb-4">Save 40–60% vs. Dealership Key Programming</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Car dealerships charge a significant premium for key programming — often $200–$400 for a single transponder key. As a local locksmith with specialized programming equipment, we provide the same quality programming at 40–60% lower cost, on-site at your location.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  'Programming for most makes & models — domestic and import',
                  'OEM-quality transponder chips used',
                  'Key cutting and programming in one visit',
                  'Fully mobile — we come to your location',
                  'Same-day service available',
                  'Verified by test-driving before we leave',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h3 className="font-bold text-slate-900 text-lg mb-4">Key Service Pricing</h3>
              <div className="space-y-3">
                {[
                  { service: 'Basic Key Copy', price: 'From $5' },
                  { service: 'High-Security Key Copy', price: 'From $25' },
                  { service: 'Transponder Key (cut & program)', price: 'From $75' },
                  { service: 'Key Fob Programming', price: 'From $65' },
                  { service: 'Laser-Cut Key', price: 'From $85' },
                  { service: 'Broken Key Extraction', price: 'From $45' },
                  { service: 'Master Key Creation', price: 'From $35' },
                ].map((item) => (
                  <div key={item.service} className="flex justify-between py-2.5 border-b border-slate-100 last:border-0">
                    <span className="text-slate-600 text-sm">{item.service}</span>
                    <span className="font-semibold text-slate-900 text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
              <a href={BUSINESS_PHONE_HREF} className="btn-accent w-full justify-center mt-5">
                <Phone className="h-4 w-4" /> Get Exact Pricing
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Key Service FAQs" />
    </>
  );
}
