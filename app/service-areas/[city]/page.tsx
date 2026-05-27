import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Phone, MapPin, CheckCircle, Clock, Car, Home, Building2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE, BUSINESS_YEARS_EXPERIENCE, BUSINESS_CITY } from '@/lib/constants';
import { getCityBySlug, ALL_CITY_SLUGS, type City } from '@/lib/cities';
import { buildServiceSchema } from '@/lib/schema';

interface PageProps {
  params: { city: string };
}

export async function generateStaticParams() {
  return ALL_CITY_SLUGS.map((slug) => ({ city: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city);
  if (!city) return {};

  return {
    title: `Locksmith ${city.name}, ${city.stateShort} | Fast Response | (765) 434-1881`,
    description: `Professional locksmith serving ${city.name}, ${city.state}. Car lockouts, home lockouts, key programming, lock rekeying. Serving ${city.name} from our ${BUSINESS_CITY} base — call (765) 434-1881.`,
    alternates: { canonical: `${BUSINESS_WEBSITE}/service-areas/${params.city}` },
    openGraph: {
      title: `Locksmith ${city.name}, ${city.stateShort} | Affordable Locksmith`,
      description: `Mobile locksmith serving ${city.name}, ${city.state}. Fast response, honest pricing, 24/7 emergency service.`,
    },
  };
}

function CityFAQs(city: City) {
  return [
    {
      question: `Do you provide locksmith service in ${city.name}, ${city.stateShort}?`,
      answer: `Yes! We regularly serve ${city.name} and surrounding ${city.county} from our ${BUSINESS_CITY}, Indiana base. Response times to ${city.name} are typically 30–50 minutes depending on traffic and distance.`,
    },
    {
      question: `How much does a locksmith cost in ${city.name}, Indiana?`,
      answer: `Our pricing in ${city.name} is the same as our Kokomo rates — lockouts start at $45, rekeying from $25/lock, and key programming from $65. A small travel fee may apply depending on location. All pricing confirmed before we dispatch.`,
    },
    {
      question: `Is there a 24/7 emergency locksmith that serves ${city.name}?`,
      answer: `Yes. While our base is in Kokomo, we respond to emergencies in ${city.name} around the clock. Call (765) 434-1881 any time and we\'ll provide an honest arrival estimate for your ${city.name} location.`,
    },
    {
      question: `Can you program transponder keys in ${city.name}, IN?`,
      answer: `Absolutely. We bring our key programming equipment directly to your location in ${city.name}. No need to tow your vehicle or drive to a shop — we handle key cutting and programming on-site.`,
    },
  ];
}

export default function CityServicePage({ params }: PageProps) {
  const city = getCityBySlug(params.city);
  if (!city) notFound();

  const schema = buildServiceSchema({
    name: `Locksmith Services — ${city.name}, ${city.state}`,
    description: `Mobile locksmith services in ${city.name}, ${city.state}. Car lockouts, home lockouts, rekeying, and key programming. Serving from ${BUSINESS_CITY} base.`,
    url: `${BUSINESS_WEBSITE}/service-areas/${params.city}`,
  });

  const faqs = CityFAQs(city);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

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
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
                Locksmith in {city.name}, {city.state}
              </h1>
              <p className="text-blue-100 text-lg mb-6">
                Professional mobile locksmith serving {city.name} and surrounding {city.county}. We dispatch directly from {BUSINESS_CITY} — car lockouts, home lockouts, key programming, and more.
              </p>
              <p className="text-blue-200 text-sm mb-8">
                <strong className="text-white">{city.description}</strong> Population ~{city.population.toLocaleString()}.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-10 py-4 phone-pulse inline-flex">
                  <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 space-y-3">
              <h3 className="font-bold text-white text-lg mb-4">Locksmith Services in {city.name}</h3>
              {[
                'Car lockout service',
                'Home lockout service',
                'Lock rekeying & installation',
                'Transponder key programming',
                'Key fob replacement & programming',
                'Deadbolt installation & upgrade',
                'Smart lock installation',
                'Safe opening & combination change',
                'Commercial locksmith services',
                '24/7 emergency locksmith response',
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
              <p className="text-slate-600 mb-5 leading-relaxed">
                As {BUSINESS_CITY}&apos;s most experienced locksmith with {BUSINESS_YEARS_EXPERIENCE}+ years of service, we regularly travel to {city.name} and throughout {city.county} to help residents and businesses with their lock and key needs.
              </p>
              <p className="text-slate-600 mb-5 leading-relaxed">
                Our mobile service means we bring all the tools and equipment directly to your location in {city.name} — whether you&apos;re locked out of your car, need your home rekeyed, or require commercial security upgrades. No shop visit required.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                When you call us from {city.name}, we&apos;ll give you an honest arrival estimate (~{city.distanceMiles + 10}–{city.distanceMiles + 20} minutes from dispatch depending on traffic) and confirm pricing before heading out.
              </p>
              <div className="space-y-2.5">
                {[
                  `${BUSINESS_YEARS_EXPERIENCE}+ years serving north-central Indiana`,
                  `Regularly dispatching to ${city.name} and ${city.county}`,
                  'All services available at your location',
                  'Upfront pricing with no hidden travel fees',
                  '24/7 emergency response including to remote areas',
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
                  <h3 className="font-bold text-slate-900 mb-3">Landmarks in {city.name} We Know</h3>
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

      {/* Service type tiles */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title mb-3 text-center">
            What Locksmith Help Do You Need in {city.name}?
          </h2>
          <p className="text-center text-slate-600 mb-10">
            Click to learn about each service type, then call us to get help today.
          </p>
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Car, title: 'Car Lockout', subtitle: 'Key in car, lost keys, key programming', href: '/services/automotive-locksmith' },
              { icon: Home, title: 'Home Lockout', subtitle: 'Locked out, rekeying, lock installation', href: '/services/residential-locksmith' },
              { icon: Building2, title: 'Business', subtitle: 'Access control, master keys, lockouts', href: '/services/commercial-locksmith' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link key={item.title} href={item.href} className="card p-6 text-center group hover:border-blue-200 hover:shadow-lg transition-all">
                  <div className="bg-blue-100 text-blue-600 rounded-xl p-4 w-fit mx-auto mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1 group-hover:text-blue-600">{item.title}</h3>
                  <p className="text-slate-500 text-sm mb-3">{item.subtitle}</p>
                  <span className="inline-flex items-center gap-1 text-blue-600 text-sm font-semibold">
                    Learn More <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title={`Locksmith ${city.name}, ${city.stateShort} — FAQs`} />

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
        </div>
      </section>
    </>
  );
}
