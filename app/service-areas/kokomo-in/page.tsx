import type { Metadata } from 'next';
import { Phone, MapPin, CheckCircle, Clock, Star, Car, Home, Building2 } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import Testimonials from '@/components/Testimonials';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE, BUSINESS_YEARS_EXPERIENCE } from '@/lib/constants';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Locksmith in Kokomo Indiana | Locksmiths Kokomo IN | (917) 203-4678',
  description:
    'Searching for locksmiths in Kokomo Indiana? Affordable Locksmith is Kokomo\'s #1 trusted locksmith — car lockouts, home lockouts, rekeying, transponder keys, commercial security, and 24/7 emergency service. Call (917) 203-4678.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/service-areas/kokomo-in` },
  openGraph: {
    title: 'Locksmith in Kokomo Indiana | Locksmiths Kokomo IN | (917) 203-4678',
    description: 'Trusted locksmiths in Kokomo, Indiana. 39+ years experience, 24/7 emergency service, upfront pricing. Call (917) 203-4678.',
  },
};

const kokomoNeighborhoods = [
  'North Kokomo', 'South Kokomo', 'East Side', 'West Side',
  'Downtown Kokomo', 'Highland Park', 'Western Avenue', 'Markland Avenue',
  'Boulevard Heights', 'Bon Air', 'Sycamore Hills', 'Kings Crossing',
];

const faqs = [
  { question: 'Who is the best locksmith in Kokomo, Indiana?', answer: 'Affordable Locksmith is widely considered Kokomo\'s most trusted locksmith. With 39+ years of local experience, owner-operated service, 4.9-star ratings from 247+ customers, and 24/7 availability, we\'ve earned our reputation serving Howard County families and businesses.' },
  { question: 'How quickly can a locksmith arrive in Kokomo?', answer: 'Our average response time within Kokomo city limits is 15–30 minutes. We\'re locally based and know every part of the city, so we reach you faster than national dispatch services.' },
  { question: 'What locksmith services are available in Kokomo, IN?', answer: 'We offer all locksmith services in Kokomo: car lockouts, home lockouts, business lockouts, lock rekeying and installation, transponder key programming, key fob replacement, safe opening, and commercial security systems.' },
  { question: 'Do you offer emergency locksmith service in Kokomo at night?', answer: 'Yes — 24 hours a day, 7 days a week, 365 days a year. Call (917) 203-4678 any time and a real person will answer and dispatch to you immediately.' },
  { question: 'Is there a locksmith near me in Kokomo, IN?', answer: 'Yes! Affordable Locksmith is based right here in Kokomo. We are the nearest local locksmith for most residents and businesses in Howard County, with faster response times than any out-of-town service.' },
];

export default function KokomoPage() {
  const schema = buildServiceSchema({
    name: 'Locksmith Services — Kokomo, Indiana',
    description: 'Professional locksmith services in Kokomo, Indiana. Car lockouts, home lockouts, rekeying, key programming, commercial security, and 24/7 emergency service.',
    url: `${BUSINESS_WEBSITE}/service-areas/kokomo-in`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Service Areas', href: '/service-areas' }, { name: 'Kokomo, IN', href: '/service-areas/kokomo-in' }]} />
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <MapPin className="h-4 w-4" />
                Primary Service Location
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
                Locksmith in Kokomo, Indiana
              </h1>
              <p className="text-blue-100 text-lg mb-6">
                Kokomo&apos;s most trusted local locksmith. {BUSINESS_YEARS_EXPERIENCE}+ years serving Howard County — car lockouts, home security, commercial locks, and 24/7 emergency service throughout the city.
              </p>
              <div className="flex items-center gap-2 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-blue-200 text-sm">Kokomo&apos;s #1 Rated Locksmith</span>
              </div>
              <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-10 py-4 inline-flex phone-pulse">
                <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
              </a>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="font-bold text-white text-lg mb-4">Why Kokomo Calls Us First</h3>
              {[
                `${BUSINESS_YEARS_EXPERIENCE}+ years serving Kokomo, IN`,
                'Locally based — 15-30 min response',
                'Owner-operated — accountable service',
                'All neighborhoods covered',
                '24/7 emergency availability',
                'Honest, upfront pricing',
                '4.9★ rating from 247+ reviews',
                'Licensed & fully insured',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 py-1.5 border-b border-white/10 last:border-0">
                  <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                  <span className="text-blue-100 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services in Kokomo */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Locksmith Services Available in Kokomo, IN</h2>
            <p className="section-subtitle mx-auto mt-4">Everything you need from a single local locksmith — residential, automotive, and commercial.</p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mb-8">
            {[
              { icon: Car, title: 'Automotive', href: '/services/automotive-locksmith', items: ['Car lockout', 'Key programming', 'Key fob replacement', 'Ignition repair'] },
              { icon: Home, title: 'Residential', href: '/services/residential-locksmith', items: ['Home lockout', 'Lock rekeying', 'Deadbolt installation', 'Smart locks'] },
              { icon: Building2, title: 'Commercial', href: '/services/commercial-locksmith', items: ['Business lockout', 'Access control', 'Master key systems', 'Panic bars'] },
            ].map((cat) => {
              const Icon = cat.icon;
              return (
                <Link key={cat.title} href={cat.href} className="card p-6 group hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="bg-blue-600 text-white rounded-xl p-3 w-fit mb-4 group-hover:bg-blue-700">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-3 group-hover:text-blue-600">{cat.title}</h3>
                  <ul className="space-y-1.5">
                    {cat.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Neighborhoods */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title mb-3">We Serve Every Kokomo Neighborhood</h2>
          <p className="text-slate-600 mb-8">From downtown to the suburbs, we cover all of Kokomo and respond fast to every area.</p>
          <div className="flex flex-wrap gap-3">
            {kokomoNeighborhoods.map((n) => (
              <div key={n} className="flex items-center gap-1.5 bg-white rounded-lg px-3 py-2 shadow-sm border border-slate-100 text-sm">
                <MapPin className="h-3.5 w-3.5 text-blue-500" />
                <span className="text-slate-700">{n}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">
            Don&apos;t see your neighborhood? <a href={BUSINESS_PHONE_HREF} className="text-blue-600 font-semibold">Call us</a> — we cover all of Kokomo.
          </p>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Locksmith Kokomo, IN — Frequently Asked Questions" />
      <Testimonials />

      <section className="section-pad bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black mb-4">Need a Locksmith in Kokomo, IN Right Now?</h2>
          <p className="text-blue-200 mb-6 max-w-lg mx-auto">One call and we&apos;re on our way. Kokomo&apos;s fastest locksmith response — day or night.</p>
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-12 py-4 inline-flex phone-pulse">
            <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
          </a>
          <div className="flex items-center justify-center gap-2 mt-4 text-blue-300 text-sm">
            <Clock className="h-4 w-4" />
            <span>Average 15–30 min response in Kokomo</span>
          </div>
        </div>
      </section>
    </>
  );
}
