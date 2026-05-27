import type { Metadata } from 'next';
import { Phone, MapPin, CheckCircle, Clock } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE, BUSINESS_YEARS_EXPERIENCE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Howard County Locksmith | Full Coverage | Affordable Locksmith',
  description:
    'Locksmith services throughout Howard County, Indiana. Kokomo, Greentown, Russiaville, and all county communities. 24/7 emergency service. Call (765) 434-1881.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/service-areas/howard-county` },
};

const howardCitiesAndTowns = [
  'Kokomo', 'Greentown', 'Russiaville', 'Oakford', 'Sycamore',
  'Converse (partial)', 'Alto', 'New London', 'Cassville', 'Denver (partial)',
];

const faqs = [
  { question: 'Do you serve all of Howard County, Indiana?', answer: 'Yes! We cover the entire county — from Kokomo city limits through Greentown, Russiaville, and every rural community within Howard County. Our mobile service means we come to you wherever you are.' },
  { question: 'How long does it take to reach rural Howard County?', answer: 'Response times vary by location. For rural areas in Howard County, expect 30–45 minutes. We\'ll give you an honest time estimate when you call so you know exactly what to expect.' },
  { question: 'Do you charge extra for Howard County rural areas?', answer: 'Minor travel fees may apply for very remote locations, but we always disclose this when you call and confirm the total price before dispatching. No hidden fees ever.' },
  { question: 'What services are available throughout Howard County?', answer: 'All our services are available county-wide: car lockouts, home lockouts, rekeying, lock installation, key programming, commercial security, and 24/7 emergency service.' },
];

export default function HowardCountyPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Service Areas', href: '/service-areas' }, { name: 'Howard County', href: '/service-areas/howard-county' }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <MapPin className="h-4 w-4" />
              Full County Coverage
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Locksmith Services Throughout Howard County, Indiana
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              We are Howard County&apos;s most trusted local locksmith. From Kokomo to Greentown, Russiaville to the rural communities, we provide fast, professional locksmith service to every corner of the county — 24/7.
            </p>
            <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-10 py-4 inline-flex phone-pulse">
              <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title mb-5">Howard County Locksmith Service</h2>
              <p className="text-slate-600 mb-5 leading-relaxed">
                Howard County, Indiana is our home. For {BUSINESS_YEARS_EXPERIENCE}+ years, we have been the locksmith that Howard County residents and businesses trust. Whether you&apos;re in Kokomo&apos;s urban core or a rural property on the county&apos;s edge, we dispatch to you quickly.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Our mobile service model means we maintain no storefront — we come directly to your location with everything needed to resolve your lock and key situation on the spot. No towing, no waiting in a shop, no unnecessary delays.
              </p>
              <div className="space-y-3">
                {[
                  'Full Howard County coverage — urban and rural',
                  'Car lockouts anywhere in the county',
                  'Home lockouts including rural properties',
                  'Commercial security for county businesses',
                  '24/7 emergency dispatch throughout the county',
                  'Key programming and duplication on-site',
                  'Safe & vault services county-wide',
                  'Honest pricing with no rural surcharge surprises',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-xl mb-5">Howard County Communities We Serve</h3>
              <div className="grid grid-cols-2 gap-2.5">
                {howardCitiesAndTowns.map((place) => (
                  <div key={place} className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2.5 border border-slate-200">
                    <MapPin className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                    <span className="text-sm text-slate-700">{place}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-blue-50 rounded-xl p-5 border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="font-bold text-slate-900">Response Times</span>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-600">Kokomo city</span>
                    <span className="font-semibold text-slate-900">15–30 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Greentown / Russiaville</span>
                    <span className="font-semibold text-slate-900">20–35 min</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600">Rural Howard County</span>
                    <span className="font-semibold text-slate-900">30–50 min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Howard County Locksmith FAQs" />

      <section className="section-pad bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black mb-4">Locked Out Anywhere in Howard County?</h2>
          <p className="text-blue-200 mb-6 max-w-lg mx-auto">
            We&apos;ll come to you wherever you are in the county. Call now for immediate dispatch.
          </p>
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-12 py-4 inline-flex">
            <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </>
  );
}
