import type { Metadata } from 'next';
import { Phone, AlertCircle, Clock, Car, Home, Building2, CheckCircle, Shield } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE } from '@/lib/constants';
import { buildServiceSchema, buildBreadcrumbSchema, buildSpeakableSchema } from '@/lib/schema';
import ServiceLocationLinks from '@/components/ServiceLocationLinks';

export const metadata: Metadata = {
  title: '24 Hour Locksmith Kokomo Indiana | Emergency Locksmith 24/7 | (917) 203-4678',
  description:
    'Need a 24 hour locksmith in Kokomo Indiana? Affordable Locksmith answers every call — car lockouts, home lockouts, business lockouts, 15–30 minute response throughout Howard County. Call (917) 203-4678 now.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/services/emergency-locksmith` },
  openGraph: {
    title: '24 Hour Locksmith Kokomo Indiana | Emergency Locksmith 24/7 | (917) 203-4678',
    description: 'True 24 hour locksmith in Kokomo Indiana — immediate response for car lockouts, home lockouts, and business lockouts throughout Howard County.',
  },
};

const emergencyTypes = [
  { icon: Car, title: 'Emergency Car Lockout', desc: 'Locked keys in your car? We get you back on the road in minutes.', bg: 'bg-blue-100', color: 'text-blue-700' },
  { icon: Home, title: 'Emergency Home Lockout', desc: 'Locked out of your house? We provide fast, damage-free entry.', bg: 'bg-green-100', color: 'text-green-700' },
  { icon: Building2, title: 'Emergency Business Lockout', desc: 'Can\'t access your commercial property? We respond immediately.', bg: 'bg-purple-100', color: 'text-purple-700' },
  { icon: Shield, title: 'Post Break-In Repair', desc: 'Forced entry damaged your locks? We repair or replace same day.', bg: 'bg-red-100', color: 'text-red-700' },
  { icon: AlertCircle, title: 'Lost or Stolen Keys', desc: 'Keys lost or stolen? Urgent rekey or replacement to secure your property.', bg: 'bg-amber-100', color: 'text-amber-700' },
  { icon: Clock, title: 'Broken Key Extraction', desc: 'Key snapped inside your lock? We extract it and get you moving.', bg: 'bg-teal-100', color: 'text-teal-700' },
];

const faqs = [
  { question: 'How fast can an emergency locksmith arrive in Kokomo?', answer: 'Our average emergency response time in Kokomo is 15–30 minutes. We\'re locally based and familiar with all of Howard County, so we reach you quickly regardless of location.' },
  { question: 'Is there an extra charge for 24/7 emergency locksmith service?', answer: 'We have transparent pricing for all hours. While after-hours calls may include a modest fee, we always confirm the total price before dispatching. No surprise bills.' },
  { question: 'What should I do while waiting for an emergency locksmith at night?', answer: 'Stay in a safe, well-lit area. If near a 24-hour business, wait inside. Let someone know your location. If you feel unsafe, call 911 in addition to calling us. Never attempt DIY entry — you could damage your car or lock.' },
  { question: 'Can you help if I\'m locked out on a holiday?', answer: 'Yes — every day of the year, including all holidays. We know lockouts don\'t respect the calendar, so we maintain full 24/7 coverage 365 days a year.' },
  { question: 'Do you cover areas outside of Kokomo for emergencies?', answer: 'Yes. We cover all of Howard County and surrounding areas including Greentown, Russiaville, Tipton, Logansport, Peru, and more. Some remote areas may have slightly longer response times.' },
];

export default function EmergencyLocksmithPage() {
  const pageUrl = `${BUSINESS_WEBSITE}/services/emergency-locksmith`;
  const schema = buildServiceSchema({
    name: 'Emergency Locksmith Service Kokomo, IN — 24/7',
    description: '24/7 emergency locksmith service in Kokomo, Indiana. Fast 15-30 minute response for car lockouts, home lockouts, and business lockouts throughout Howard County.',
    url: pageUrl,
    serviceType: 'Emergency Locksmith',
    priceRange: 'Car lockouts from $65 · Home lockouts from $75 · Commercial lockouts from $85',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_WEBSITE },
    { name: 'Services', url: `${BUSINESS_WEBSITE}/services` },
    { name: 'Emergency Locksmith', url: pageUrl },
  ]);
  const speakableSchema = buildSpeakableSchema(pageUrl);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* Emergency-specific hero — red accent */}
      <section className="bg-gradient-to-br from-slate-900 via-red-950 to-red-900 text-white py-16 lg:py-24">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: 'Emergency Locksmith', href: '/services/emergency-locksmith' }]} />
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/30 text-red-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 animate-pulse">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-ping" />
                Available Right Now — 24/7 Emergency Service
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
                24 Hour Emergency Locksmith in Kokomo, Indiana
              </h1>
              <p className="text-red-100 text-lg mb-6">
                Locked out? Don&apos;t wait. Call us now and we&apos;ll be at your location in Kokomo or Howard County in 15–30 minutes — any hour, any day of the year.
              </p>
              <a
                href={BUSINESS_PHONE_HREF}
                className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-black px-10 py-5 rounded-xl text-2xl transition-colors shadow-2xl phone-pulse mb-6"
              >
                <Phone className="h-7 w-7" />
                {BUSINESS_PHONE_DISPLAY}
              </a>
              <p className="text-red-200 text-sm">
                Real person answers — no hold music, no automated systems, no call centers.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Average Response Time', value: '15–30 Minutes' },
                { label: 'Service Hours', value: '24/7 — Every Day' },
                { label: 'Years Serving Kokomo', value: '39+ Years' },
                { label: 'Emergency Jobs Completed', value: '10,000+' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 flex justify-between items-center">
                  <span className="text-red-100 text-sm">{stat.label}</span>
                  <span className="text-white font-black text-lg">{stat.value}</span>
                </div>
              ))}
              <div className="bg-amber-500 rounded-xl px-6 py-4 text-center">
                <div className="text-white font-black text-xl">No Extra Charge for</div>
                <div className="text-amber-100 text-sm">Nights, Weekends & Holidays</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Emergency Locksmith Services We Handle</h2>
            <p className="section-subtitle mx-auto mt-4">Every type of lockout and lock emergency covered, 24 hours a day.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyTypes.map((type) => {
              const Icon = type.icon;
              return (
                <div key={type.title} className="card p-6 hover:shadow-lg transition-shadow">
                  <div className={`${type.bg} ${type.color} rounded-xl p-3 w-fit mb-4`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{type.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{type.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="section-title mb-4">What to Expect When You Call</h2>
          <p className="text-slate-600 mb-10 leading-relaxed">Calling us during an emergency is simple and reassuring. Here&apos;s exactly what happens.</p>
          <div className="grid sm:grid-cols-2 gap-4 text-left mb-10">
            {[
              { step: '1', text: 'Real person answers immediately — no hold, no voicemail' },
              { step: '2', text: 'We confirm your location and describe the situation' },
              { step: '3', text: 'Honest arrival time estimate given (usually 15-30 min)' },
              { step: '4', text: 'Price confirmed before we dispatch — no surprises' },
              { step: '5', text: 'Technician arrives with full professional equipment' },
              { step: '6', text: 'Problem solved fast — you\'re back to normal' },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-3 bg-white rounded-xl p-4 shadow-sm">
                <div className="bg-blue-600 text-white rounded-full w-7 h-7 flex items-center justify-center font-bold text-sm shrink-0">
                  {item.step}
                </div>
                <span className="text-slate-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
          <a href={BUSINESS_PHONE_HREF} className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 rounded-xl text-xl transition-colors shadow-lg phone-pulse">
            <Phone className="h-6 w-6" /> Call Emergency Line: {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Emergency Locksmith FAQs — Kokomo, IN" />
      <ServiceLocationLinks serviceSlug="emergency-locksmith" serviceName="Emergency Locksmith" />
    </>
  );
}
