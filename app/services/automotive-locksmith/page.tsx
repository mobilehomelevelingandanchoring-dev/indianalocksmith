import type { Metadata } from 'next';
import { Phone, Car, Key, Settings, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE, BUSINESS_YEARS_EXPERIENCE } from '@/lib/constants';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Automotive Locksmith Kokomo IN | Car Lockout, Key Programming | (765) 434-1881',
  description:
    'Professional automotive locksmith in Kokomo, Indiana. Car lockouts, transponder key programming, key fob replacement, ignition repair. Fast 15-30 min response. Call (765) 434-1881.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/services/automotive-locksmith` },
  openGraph: {
    title: 'Automotive Locksmith Kokomo IN | Car Lockout & Key Programming',
    description: 'Expert car lockout and key programming services in Kokomo. Transponder keys, key fobs, ignition repair. 24/7 available.',
  },
};

const autoServices = [
  { title: 'Car Lockout Service', desc: 'Locked keys in your car? We use non-destructive professional tools to get you in without damage.', icon: Car },
  { title: 'Transponder Key Programming', desc: 'Factory-quality transponder key cutting and programming for most makes and models at a fraction of dealership cost.', icon: Key },
  { title: 'Key Fob Programming', desc: 'Lost or broken key fob? We program OEM and aftermarket key fobs for virtually any vehicle on the road.', icon: Zap },
  { title: 'Ignition Repair & Replacement', desc: 'Worn, damaged, or seized ignition? We repair and replace ignition cylinders on-site.', icon: Settings },
];

const faqs = [
  { question: 'How fast can you unlock my car in Kokomo?', answer: 'Our average response time for car lockouts in Kokomo is 15–30 minutes. We\'re locally based and familiar with every part of Howard County, so we reach you quickly.' },
  { question: 'Can you make a car key without the original?', answer: 'Yes! For most vehicles, we can cut and program a new key from your VIN number and proof of ownership. We have the equipment for transponder keys, high-security laser-cut keys, and key fobs.' },
  { question: 'Is it cheaper than going to the dealership?', answer: 'Almost always yes. Dealerships charge significant premiums for key programming. Our prices typically save customers 40–60% compared to dealer rates, with the same or better quality.' },
  { question: 'Will you damage my car when unlocking it?', answer: 'No. We use professional, non-destructive entry tools specifically designed for vehicle lockouts. We have successfully unlocked thousands of cars without causing a single scratch.' },
  { question: 'Do you unlock all types of vehicles?', answer: 'Yes — cars, trucks, SUVs, vans, motorcycles, and commercial vehicles. We work on all major makes and models, both domestic and import.' },
];

export default function AutomotiveLocksmithPage() {
  const schema = buildServiceSchema({
    name: 'Automotive Locksmith Services Kokomo, IN',
    description: 'Professional automotive locksmith services in Kokomo, Indiana including car lockouts, transponder key programming, key fob replacement, and ignition repair.',
    url: `${BUSINESS_WEBSITE}/services/automotive-locksmith`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: 'Automotive Locksmith', href: '/services/automotive-locksmith' }]} />
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Car className="h-4 w-4" />
                Automotive Locksmith — Kokomo, IN
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
                Car Lockout & Automotive Key Services in Kokomo
              </h1>
              <p className="text-blue-100 text-lg mb-6">
                Locked out of your car, need a new transponder key, or have an ignition problem? Our automotive locksmith arrives in 15–30 minutes, fully equipped to handle any vehicle on the road.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-8 py-3">
                  <Phone className="h-5 w-5" /> Call {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="font-bold text-white mb-4 text-lg">Our Automotive Services Include:</h3>
              {['Car Lockout Service', 'Transponder Key Programming', 'Key Fob Programming & Replacement', 'Ignition Repair & Replacement', 'Broken Key Extraction', 'Duplicate Car Keys', 'High-Security Laser-Cut Keys', 'Motorcycle Key Service', 'Keyless Entry System Repair', 'Emergency Car Key Replacement'].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1.5 border-b border-white/10 last:border-0">
                  <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                  <span className="text-blue-100 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Automotive Locksmith Services We Provide</h2>
            <p className="section-subtitle mx-auto mt-4">
              Every automotive lock and key situation covered — on-site, fast, and at honest prices.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {autoServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="card p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 text-blue-600 rounded-xl p-3 shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-lg mb-2">{svc.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-custom max-w-4xl">
          <h2 className="section-title mb-6">Why Choose Our Automotive Locksmith in Kokomo?</h2>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              `${BUSINESS_YEARS_EXPERIENCE}+ years of automotive locksmith experience`,
              'Equipped for all makes & models — domestic and import',
              'Key programming at 40–60% less than dealerships',
              'On-site service — no towing required',
              'Non-destructive entry tools — zero damage guarantee',
              '24/7 emergency car lockout coverage',
              'Upfront pricing before we start',
              'Howard County\'s most trusted automotive locksmith',
            ].map((point) => (
              <div key={point} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-500 shrink-0" />
                <span className="text-slate-700 text-sm">{point}</span>
              </div>
            ))}
          </div>
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-10 py-4 inline-flex">
            <Phone className="h-5 w-5" /> Call for Immediate Automotive Locksmith Help
          </a>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Automotive Locksmith FAQs — Kokomo, IN" />
      <Testimonials />

      <section className="section-pad bg-hero-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black mb-4">Locked Out of Your Car in Kokomo?</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">Call us now — we&apos;ll be there in 15–30 minutes, day or night, anywhere in Howard County.</p>
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-12 py-4 inline-flex phone-pulse">
            <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
