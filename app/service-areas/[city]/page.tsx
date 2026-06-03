import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Phone, MapPin, CheckCircle, Clock, Car, Home, Building2, Key, Shield, ArrowRight, Star } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import {
  BUSINESS_PHONE_HREF,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_WEBSITE,
  BUSINESS_YEARS_EXPERIENCE,
  BUSINESS_CITY,
  BUSINESS_NAME,
} from '@/lib/constants';
import { getCityBySlug, ALL_CITY_SLUGS, type City } from '@/lib/cities';
import {
  buildServiceSchema,
  buildBreadcrumbSchema,
  buildSpeakableSchema,
  buildWebPageSchema,
} from '@/lib/schema';
import { ALL_LOCATION_SLUGS } from '@/lib/seo-data';

interface PageProps {
  params: { city: string };
}

export async function generateStaticParams() {
  return ALL_CITY_SLUGS.map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  const title = `Locksmith ${city.name}, ${city.stateShort} | Mobile Locksmith 24/7 | (855) 633-0750`;
  const description = `Looking for a locksmith in ${city.name}, ${city.state}? Affordable Locksmith dispatches from Kokomo — ${city.distanceMiles} miles away, ~${city.distanceMiles + 10}–${city.distanceMiles + 25} min response. Car lockouts, home lockouts, key programming, 24/7 emergency. Call (855) 633-0750.`;
  const canonical = `${BUSINESS_WEBSITE}/service-areas/${params.city}`;

  return {
    title,
    description,
    keywords: [
      `locksmith ${city.name}`,
      `locksmith ${city.name} Indiana`,
      `locksmith ${city.name} ${city.stateShort}`,
      `${city.name} locksmith`,
      `locksmith near me ${city.name}`,
      `emergency locksmith ${city.name}`,
      `24 hour locksmith ${city.name}`,
      `car lockout ${city.name}`,
      `home lockout ${city.name}`,
      `key programming ${city.name}`,
      `lock rekeying ${city.name}`,
      `locksmith ${city.county}`,
      `affordable locksmith ${city.name} IN`,
      `mobile locksmith ${city.name}`,
    ],
    alternates: { canonical },
    openGraph: {
      title: `Locksmith ${city.name}, ${city.stateShort} | Affordable Locksmith`,
      description: `Mobile locksmith serving ${city.name}, ${city.state}. Fast response, honest pricing, 24/7 emergency service. Call (855) 633-0750.`,
      url: canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    other: {
      'geo.region': 'US-IN',
      'geo.placename': `${city.name}, ${city.stateShort}`,
      'geo.position': '40.4865;-86.1336',
      'ICBM': '40.4865, -86.1336',
    },
  };
}

function buildCityFAQs(city: City) {
  const arrivalMin = city.distanceMiles + 10;
  const arrivalMax = city.distanceMiles + 25;
  return [
    {
      question: `Who is the best locksmith in ${city.name}, Indiana?`,
      answer: `Affordable Locksmith is a trusted mobile locksmith serving ${city.name} and surrounding ${city.county}. Based in Kokomo, Indiana with ${BUSINESS_YEARS_EXPERIENCE}+ years of experience, we provide car lockouts, home lockouts, key programming, rekeying, and 24/7 emergency locksmith service to ${city.name} residents and businesses. Call (855) 633-0750 any time.`,
    },
    {
      question: `How fast can a locksmith arrive in ${city.name}, ${city.stateShort}?`,
      answer: `From our Kokomo base, we typically reach ${city.name} in approximately ${arrivalMin}–${arrivalMax} minutes — depending on traffic and your exact location in ${city.county}. We dispatch immediately upon your call, 24 hours a day, 7 days a week. For emergency calls, we prioritize the fastest route.`,
    },
    {
      question: `How much does locksmith service cost in ${city.name}, Indiana?`,
      answer: `Locksmith pricing in ${city.name} mirrors our standard Kokomo rates: car lockouts from $65, home lockouts from $75, lock rekeying from $25 per lock, and transponder key programming from $80. A small travel fee may apply depending on distance. We confirm all pricing before dispatching — no surprise charges on arrival.`,
    },
    {
      question: `Is there a 24/7 emergency locksmith available in ${city.name}?`,
      answer: `Yes. Affordable Locksmith responds to emergencies in ${city.name} around the clock — including late nights, weekends, and holidays. Call (855) 633-0750 any time. We give you an honest arrival estimate (typically ${arrivalMin}–${arrivalMax} minutes) and confirm pricing before dispatching.`,
    },
    {
      question: `Can a locksmith program a car key in ${city.name}, IN?`,
      answer: `Yes. We bring professional key-cutting and transponder programming equipment directly to your location in ${city.name}. We service most domestic and imported vehicles — Toyota, Honda, Ford, GM, Chrysler, BMW, Mercedes, and more. No tow-in required. Key programming typically takes 20–45 minutes on-site.`,
    },
    {
      question: `Should I rekey my locks after moving to a new home in ${city.name}?`,
      answer: `Yes — rekeying is strongly recommended after moving into any home in ${city.name}. Previous owners, contractors, or real estate agents may still have working keys. Rekeying costs $25–$50 per lock versus $80–$150 for full lock replacement, and achieves the same security result: all previous keys stop working immediately.`,
    },
    {
      question: `Does Affordable Locksmith serve all of ${city.county}?`,
      answer: `Yes. While our dispatch base is in Kokomo, we regularly serve all of ${city.county} including ${city.name} and surrounding communities. Call (855) 633-0750 — we confirm we can reach you and provide an honest arrival estimate before you commit to anything.`,
    },
  ];
}

const CITY_ENTITY_SERVICES = [
  { slug: 'automotive-locksmith', icon: Car, label: 'Automotive Locksmith', desc: 'Car lockouts, key fob programming, transponder keys, ignition repair' },
  { slug: 'residential-locksmith', icon: Home, label: 'Residential Locksmith', desc: 'Home lockouts, rekeying, deadbolt installation, smart lock setup' },
  { slug: 'commercial-locksmith', icon: Building2, label: 'Commercial Locksmith', desc: 'Master key systems, access control, panic bars, business lockouts' },
  { slug: 'emergency-locksmith', icon: Clock, label: '24/7 Emergency Locksmith', desc: 'Immediate response for lockouts and urgent lock failures any time' },
  { slug: 'key-services', icon: Key, label: 'Key Services', desc: 'Key cutting, duplication, transponder programming, broken key extraction' },
  { slug: 'safe-services', icon: Shield, label: 'Safe & Vault Services', desc: 'Safe opening, combination changes, digital lock reset, gun safe service' },
];

export default function CityServicePage({ params }: PageProps) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const pageUrl = `${BUSINESS_WEBSITE}/service-areas/${params.city}`;
  const faqs = buildCityFAQs(city);
  const hasLocationPage = (ALL_LOCATION_SLUGS as string[]).includes(params.city);

  const serviceSchema = buildServiceSchema({
    name: `Locksmith Services in ${city.name}, ${city.state}`,
    description: `Mobile locksmith services in ${city.name}, ${city.state}. Car lockouts, home lockouts, rekeying, key programming, and 24/7 emergency service. Serving from Kokomo base.`,
    url: pageUrl,
    cityName: city.name,
    stateName: city.state,
    county: city.county,
    serviceType: 'Locksmith',
    priceRange: 'Lockouts from $65 · Rekeying from $25/lock · Key programming from $80',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_WEBSITE },
    { name: 'Service Areas', url: `${BUSINESS_WEBSITE}/service-areas` },
    { name: `${city.name}, ${city.stateShort}`, url: pageUrl },
  ]);
  const speakableSchema = buildSpeakableSchema(pageUrl);
  const webPageSchema = buildWebPageSchema({
    title: `Locksmith ${city.name}, ${city.stateShort} | ${BUSINESS_NAME}`,
    description: `Mobile locksmith serving ${city.name}, ${city.state} — car lockouts, home lockouts, key programming, rekeying, and 24/7 emergency service.`,
    url: pageUrl,
    dateModified: '2025-06-01',
  });

  const entityKeywords = [
    `locksmith ${city.name}`, `locksmith ${city.name} IN`, `${city.name} locksmith`,
    `locksmith near me ${city.name}`, `car lockout ${city.name}`, `home lockout ${city.name}`,
    `emergency locksmith ${city.name}`, `24 hour locksmith ${city.name}`,
    `key programming ${city.name}`, `lock rekeying ${city.name}`,
    `deadbolt installation ${city.name}`, `transponder key ${city.name}`,
    `safe opening ${city.name}`, `locksmith ${city.county}`,
    `mobile locksmith ${city.stateShort}`, `affordable locksmith ${city.name}`,
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[
            { name: 'Service Areas', href: '/service-areas' },
            { name: `${city.name}, ${city.stateShort}`, href: `/service-areas/${city.slug}` },
          ]} />
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <MapPin className="h-4 w-4" />
                {city.county} — ~{city.distanceMiles} miles from {BUSINESS_CITY}
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-4">
                Locksmith in {city.name}, {city.state}
              </h1>

              {/* Quick Answer — targeted by Speakable schema and featured snippet optimization */}
              <div className="quick-answer bg-white/10 border border-white/20 rounded-xl p-4 mb-5">
                <p className="text-xs font-bold text-amber-300 uppercase tracking-wide mb-1.5">Quick Answer</p>
                <p className="speakable-summary text-blue-50 text-sm leading-relaxed">
                  <strong className="text-white">{BUSINESS_NAME}</strong> serves {city.name}, {city.stateShort} with car lockouts, home lockouts, key programming, rekeying, and 24/7 emergency locksmith service. We dispatch from Kokomo — {city.distanceMiles} miles away, typically {city.distanceMiles + 10}–{city.distanceMiles + 25} minutes to {city.name}. Call <a href={BUSINESS_PHONE_HREF} className="text-amber-300 font-bold hover:underline">{BUSINESS_PHONE_DISPLAY}</a>.
                </p>
              </div>

              <p className="speakable-summary text-blue-200 text-sm mb-6">
                <strong className="text-white">{city.description}</strong> Population ~{city.population.toLocaleString()}.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-10 py-4 phone-pulse inline-flex">
                  <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex items-center gap-4 mt-5">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map(i => <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />)}
                  <span className="text-blue-200 text-xs ml-1">4.9/5 · 247+ Reviews</span>
                </div>
                <span className="text-blue-300 text-xs">· Licensed & Insured</span>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 space-y-3">
              <h3 className="font-bold text-white text-lg mb-4">Locksmith Services in {city.name}</h3>
              {[
                'Car lockout service', 'Home lockout service',
                'Lock rekeying & installation', 'Transponder key programming',
                'Key fob replacement & programming', 'Deadbolt installation & upgrade',
                'Smart lock installation', 'Safe opening & combination change',
                'Commercial locksmith services', '24/7 emergency locksmith response',
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 py-1 border-b border-white/10 last:border-0">
                  <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                  <span className="text-blue-100 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About serving this city */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="section-title mb-5">
                Serving {city.name}, {city.stateShort} from Kokomo
              </h2>
              <p className="speakable-summary text-slate-600 mb-5 leading-relaxed">
                As {BUSINESS_CITY}&apos;s most experienced locksmith with {BUSINESS_YEARS_EXPERIENCE}+ years of service, we regularly travel to {city.name} and throughout {city.county} to help residents and businesses with their lock and key needs.
              </p>
              <p className="text-slate-600 mb-5 leading-relaxed">
                Our mobile service means we bring all the tools and equipment directly to your location in {city.name} — whether you&apos;re locked out of your car, need your home rekeyed, or require commercial security upgrades. No shop visit required.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                When you call us from {city.name}, we&apos;ll give you an honest arrival estimate (~{city.distanceMiles + 10}–{city.distanceMiles + 25} minutes from dispatch) and confirm all pricing before heading out. What we quote is what you pay — no hidden fees.
              </p>
              <div className="space-y-2.5">
                {[
                  `${BUSINESS_YEARS_EXPERIENCE}+ years serving north-central Indiana`,
                  `Regularly dispatching to ${city.name} and ${city.county}`,
                  'All services performed at your location',
                  'Upfront pricing with no hidden travel fees',
                  '24/7 emergency response including nights and weekends',
                  'Licensed, bonded, and insured in Indiana',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-blue-100 text-blue-600 rounded-lg p-2">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Estimated Response Time to {city.name}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Standard call (business hours)</span>
                    <span className="font-bold text-slate-900">{city.distanceMiles + 5}–{city.distanceMiles + 20} min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Emergency call (any hour)</span>
                    <span className="font-bold text-slate-900">{city.distanceMiles + 10}–{city.distanceMiles + 25} min</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Distance from Kokomo base</span>
                    <span className="font-bold text-slate-900">~{city.distanceMiles} miles</span>
                  </div>
                </div>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-amber-100 text-amber-600 rounded-lg p-2">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="font-bold text-slate-900">Call for {city.name} Service</h3>
                </div>
                <a href={BUSINESS_PHONE_HREF} className="btn-accent w-full justify-center">
                  <Phone className="h-4 w-4" /> {BUSINESS_PHONE_DISPLAY}
                </a>
                <p className="text-xs text-slate-500 mt-2 text-center">
                  24/7 available — price confirmed before dispatch
                </p>
              </div>

              {city.landmarks && city.landmarks.length > 0 && (
                <div className="card p-5">
                  <h3 className="font-bold text-slate-900 mb-3">Landmarks in {city.name} We Serve</h3>
                  <div className="space-y-1.5">
                    {city.landmarks.map((lm) => (
                      <div key={lm} className="flex items-center gap-2 text-sm text-slate-600">
                        <MapPin className="h-3.5 w-3.5 text-slate-400 shrink-0" />
                        {lm}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* All locksmith services in this city */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title mb-3 text-center">
            Locksmith Services Available in {city.name}
          </h2>
          <p className="text-center text-slate-600 mb-10 max-w-2xl mx-auto">
            Every service we offer in Kokomo is available in {city.name} — we bring full equipment directly to you.
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CITY_ENTITY_SERVICES.map(({ slug, icon: Icon, label, desc }) => (
              <Link
                key={slug}
                href={
                  hasLocationPage
                    ? `/services/${slug}/${params.city}`
                    : `/services/${slug}`
                }
                className="card p-6 group hover:border-blue-200 hover:shadow-lg transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 text-blue-600 rounded-xl p-3 flex-shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">{label}</h3>
                    <p className="text-slate-500 text-sm mb-2">{desc}</p>
                    <span className="inline-flex items-center gap-1 text-blue-600 text-xs font-semibold">
                      Learn More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Entity keywords — semantic signal for NLP / AI Overview */}
      <section className="bg-white py-8 border-t border-slate-100">
        <div className="container-custom">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
            Locksmith Services &amp; Coverage in {city.name}
          </p>
          <div className="flex flex-wrap gap-2">
            {entityKeywords.map((kw) => (
              <span
                key={kw}
                className="text-xs bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 rounded-full"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`Locksmith ${city.name}, ${city.stateShort} — Frequently Asked Questions`} subtitle={`Common questions about locksmith service in ${city.name} and ${city.county}.`} />

      <section className="section-pad bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black mb-4">
            Need a Locksmith in {city.name}, {city.stateShort}?
          </h2>
          <p className="text-blue-200 mb-6 max-w-lg mx-auto">
            Call us now — we dispatch from {BUSINESS_CITY} and serve {city.name} with the same honest, professional service we&apos;ve provided for {BUSINESS_YEARS_EXPERIENCE}+ years.
          </p>
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-12 py-4 inline-flex phone-pulse">
            <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
          </a>
          <p className="text-blue-400 text-sm mt-4">
            Licensed · Insured · {BUSINESS_YEARS_EXPERIENCE}+ Years Experience · {city.distanceMiles + 10}–{city.distanceMiles + 25} min to {city.name}
          </p>
        </div>
      </section>
    </>
  );
}
