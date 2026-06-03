import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Phone, Clock, MapPin, CheckCircle, ChevronRight, Star, Shield, Zap } from 'lucide-react';
import FAQSection from '@/components/FAQSection';
import Breadcrumb from '@/components/Breadcrumb';
import { buildServiceSchema, buildBreadcrumbSchema, buildSpeakableSchema } from '@/lib/schema';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_PHONE_HREF, BUSINESS_WEBSITE } from '@/lib/constants';
import {
  ALL_SERVICE_SLUGS,
  ALL_LOCATION_SLUGS,
  SERVICE_DATA,
  LOCATION_DATA,
  getServiceData,
  getLocationData,
  getAllServiceLocationParams,
  getOtherServices,
  getNearbyLocations,
  buildServiceLocationTitle,
  buildServiceLocationDescription,
  buildLocationFAQs,
  type ServiceSlug,
  type LocationSlug,
} from '@/lib/seo-data';

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return getAllServiceLocationParams();
}

// ─── Metadata ─────────────────────────────────────────────────────────────────

export async function generateMetadata({
  params,
}: {
  params: { service: string; location: string };
}): Promise<Metadata> {
  const serviceData = SERVICE_DATA[params.service as ServiceSlug];
  const locationData = LOCATION_DATA[params.location as LocationSlug];
  if (!serviceData || !locationData) return {};

  const title = buildServiceLocationTitle(serviceData, locationData);
  const description = buildServiceLocationDescription(serviceData, locationData);
  const canonical = `${BUSINESS_WEBSITE}/services/${params.service}/${params.location}`;

  return {
    title,
    description,
    keywords: [
      ...serviceData.entityKeywords.slice(0, 8),
      `${serviceData.name} ${locationData.name}`,
      `${serviceData.name} ${locationData.name} IN`,
      `locksmith ${locationData.name} Indiana`,
      `${locationData.name} locksmith`,
    ],
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title,
      description,
    },
    other: {
      'geo.region': 'US-IN',
      'geo.placename': `${locationData.name}, ${locationData.stateShort}`,
      'geo.position': '40.4865;-86.1336',
      'ICBM': '40.4865, -86.1336',
    },
  };
}

// ─── Page component ───────────────────────────────────────────────────────────

export default function ServiceLocationPage({
  params,
}: {
  params: { service: string; location: string };
}) {
  const serviceData = getServiceData(params.service as ServiceSlug);
  const locationData = getLocationData(params.location as LocationSlug);

  if (!serviceData || !locationData) notFound();

  const pageUrl = `${BUSINESS_WEBSITE}/services/${params.service}/${params.location}`;
  const faqs = buildLocationFAQs(serviceData, locationData);
  const otherServices = getOtherServices(params.service as ServiceSlug);
  const nearbyLocations = getNearbyLocations(params.location as LocationSlug, 5);

  // Schema
  const serviceSchema = buildServiceSchema({
    name: `${serviceData.name} in ${locationData.name}, ${locationData.stateShort}`,
    description: buildServiceLocationDescription(serviceData, locationData),
    url: pageUrl,
    cityName: locationData.name,
    stateName: locationData.state,
    county: locationData.county,
    serviceType: serviceData.name,
    priceRange: serviceData.paaQuestions[1]?.answer.split('.')[0] ?? 'Call for upfront pricing',
  });
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: 'Home', url: BUSINESS_WEBSITE },
    { name: 'Services', url: `${BUSINESS_WEBSITE}/services` },
    { name: serviceData.name, url: `${BUSINESS_WEBSITE}/services/${params.service}` },
    { name: locationData.name, url: pageUrl },
  ]);
  const speakableSchema = buildSpeakableSchema(pageUrl);

  const isEmergency = params.service === 'emergency-locksmith';

  return (
    <>
      {/* Schema injection — FAQPage is handled by <FAQSection> to avoid duplication */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* Emergency top bar */}
      {isEmergency && (
        <div className="bg-red-600 text-white text-center text-sm py-2 px-4 font-semibold">
          🚨 24/7 Emergency Locksmith — Call Now:{' '}
          <a href={BUSINESS_PHONE_HREF} className="underline font-bold">{BUSINESS_PHONE_DISPLAY}</a>
        </div>
      )}

      <div className="bg-gray-50 min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="container-custom py-3">
            <Breadcrumb
              items={[
                { name: 'Services', href: '/services' },
                { name: serviceData.name, href: `/services/${params.service}` },
                { name: locationData.name },
              ]}
            />
          </div>
        </div>

        {/* Hero */}
        <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white section-pad">
          <div className="container-custom">
            <div className="max-w-3xl">
              {isEmergency && (
                <div className="inline-flex items-center gap-2 bg-red-600 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                  </span>
                  Available Right Now — 24/7
                </div>
              )}

              {/* Speakable summary — also targeted by Speakable schema */}
              <p className="speakable-summary text-primary-200 text-sm font-medium uppercase tracking-wide mb-2">
                {locationData.county} · {locationData.state} · {locationData.responseTime} Response
              </p>

              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
                {serviceData.name} in{' '}
                <span className="text-accent-400">{locationData.name}</span>
                {', '}
                {locationData.stateShort}
              </h1>

              <p className="speakable-summary text-lg text-primary-100 mb-8 max-w-2xl">
                {serviceData.shortDescription}{' '}
                {locationData.distanceMiles
                  ? `Serving ${locationData.name} from our Kokomo base — ${locationData.distanceMiles} miles away.`
                  : `Based in ${locationData.name} and serving all of ${locationData.county}.`}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={BUSINESS_PHONE_HREF}
                  className="btn-accent text-center text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
                >
                  <Phone className="w-5 h-5" />
                  Call {BUSINESS_PHONE_DISPLAY}
                </a>
                <Link
                  href="/contact"
                  className="btn-outline text-white border-white hover:bg-white hover:text-primary-900 text-center text-lg px-8 py-4 inline-flex items-center justify-center gap-2"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats bar */}
        <div className="bg-white border-b border-gray-200">
          <div className="container-custom py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              {[
                { icon: Clock, label: 'Response Time', value: locationData.responseTime },
                { icon: MapPin, label: 'Serving', value: locationData.name },
                { icon: Star, label: 'Rating', value: '4.9 / 5.0' },
                { icon: Shield, label: 'Experience', value: '39+ Years' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex flex-col items-center">
                  <Icon className="w-5 h-5 text-primary-600 mb-1" />
                  <span className="text-xs text-gray-500 uppercase tracking-wide">{label}</span>
                  <span className="font-bold text-gray-900">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Answer — featured-snippet bait + Speakable target */}
        <div className="container-custom pt-8 pb-0">
          <div className="quick-answer bg-amber-50 border-l-4 border-amber-500 rounded-r-xl p-5">
            <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1.5">Quick Answer</p>
            <p className="speakable-summary text-slate-800 text-base leading-snug">
              <strong>{serviceData.name}</strong> in <strong>{locationData.name}, {locationData.stateShort}</strong>: {serviceData.shortDescription.split('.')[0]}
              {locationData.distanceMiles
                ? `. We dispatch from Kokomo — ${locationData.distanceMiles} miles from ${locationData.name}, typical arrival ${locationData.responseTime}.`
                : `. Based in ${locationData.name} and serving all of ${locationData.county}, response in ${locationData.responseTime}.`}
              {' '}Call{' '}
              <a href={BUSINESS_PHONE_HREF} className="text-amber-700 font-bold hover:underline">{BUSINESS_PHONE_DISPLAY}</a>
              {' '}— available 24/7.
            </p>
          </div>
        </div>

        <div className="container-custom py-12 space-y-16">

          {/* Features grid */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {serviceData.name} Services in {locationData.name}
            </h2>
            <p className="text-gray-600 mb-8">
              Everything included in our {locationData.name}{' '}
              {serviceData.name.toLowerCase()} service — performed by licensed, insured technicians.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.features.map((feature) => (
                <div key={feature.title} className="card p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{feature.title}</h3>
                      <p className="text-sm text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* City context */}
          <section className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Serving {locationData.name},{' '}
                {locationData.isCounty ? locationData.state : locationData.county}
              </h2>
              <p className="text-gray-600 mb-4">
                {locationData.description}{' '}
                {locationData.distanceMiles
                  ? `We dispatch to ${locationData.name} from Kokomo — just ${locationData.distanceMiles} miles away — and typically arrive in ${locationData.responseTime}.`
                  : `As your local ${locationData.county} locksmith, we provide fast same-area response throughout ${locationData.name}.`}
              </p>

              {locationData.landmarks.length > 0 && (
                <>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Areas near us in {locationData.name}:</p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {locationData.landmarks.slice(0, 4).map((lm) => (
                      <li key={lm} className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-primary-500 flex-shrink-0" />
                        {lm}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            <div className="bg-primary-900 text-white rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap className="w-5 h-5 text-accent-400" />
                <span className="font-bold text-lg">Call for {locationData.name}</span>
              </div>
              <p className="text-primary-200 text-sm mb-4">
                Licensed, insured, and locally trusted. One call connects you to a live technician — no hold music,
                no call centers, no bots.
              </p>
              <a
                href={BUSINESS_PHONE_HREF}
                className="btn-accent w-full text-center py-3 text-lg font-bold flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                {BUSINESS_PHONE_DISPLAY}
              </a>
              <p className="text-center text-primary-300 text-xs mt-3">
                Available 24/7 · {locationData.responseTime} to {locationData.name}
              </p>
            </div>
          </section>

          {/* Process steps */}
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              How Our {locationData.name} {serviceData.name} Service Works
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {serviceData.processSteps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-primary-600 text-white font-bold flex items-center justify-center mb-3 flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-sm text-gray-700">{step}</p>
                  {i < serviceData.processSteps.length - 1 && (
                    <ChevronRight className="hidden lg:block absolute right-0 top-5 w-4 h-4 text-gray-300" />
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Entity keywords — semantic section for NLP/AIO */}
          <section className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              {serviceData.name} in {locationData.name} — What We Cover
            </h2>
            <div className="flex flex-wrap gap-2">
              {[...serviceData.entityKeywords, ...serviceData.semanticVariants].map((kw) => (
                <span
                  key={kw}
                  className="text-xs bg-white border border-blue-200 text-blue-800 px-3 py-1 rounded-full"
                >
                  {kw}
                </span>
              ))}
            </div>
          </section>

          {/* FAQs */}
          <section>
            <FAQSection
              title={`${serviceData.name} in ${locationData.name} — Common Questions`}
              subtitle={`Answers to the most frequently asked questions about ${serviceData.name.toLowerCase()} service in ${locationData.name}, Indiana.`}
              faqs={faqs}
            />
          </section>

          {/* Internal linking — other services in this location */}
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              More Locksmith Services in {locationData.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherServices.map((slug) => {
                const s = SERVICE_DATA[slug];
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}/${params.location}`}
                    className="card p-4 flex items-center gap-3 hover:border-primary-300 hover:shadow-md transition-all group"
                  >
                    <CheckCircle className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-primary-700 text-sm">
                        {s.name}
                      </p>
                      <p className="text-xs text-gray-500">in {locationData.name}</p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-primary-600" />
                  </Link>
                );
              })}
            </div>
          </section>

          {/* Internal linking — this service in nearby cities */}
          {nearbyLocations.length > 0 && (
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-6">
                {serviceData.name} in Nearby Cities
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {nearbyLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    href={`/services/${params.service}/${loc.slug}`}
                    className="card p-4 flex items-center gap-3 hover:border-primary-300 hover:shadow-md transition-all group"
                  >
                    <MapPin className="w-4 h-4 text-primary-600 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-gray-900 group-hover:text-primary-700 text-sm">
                        {serviceData.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {loc.name}, {loc.stateShort}
                        {loc.distanceMiles ? ` · ${loc.distanceMiles}mi` : ''}
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-gray-400 ml-auto group-hover:text-primary-600" />
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Final CTA */}
          <section className="bg-gradient-to-r from-primary-800 to-primary-900 rounded-2xl text-white p-8 text-center">
            <h2 className="text-2xl font-bold mb-2">
              Need {serviceData.name} in {locationData.name}?
            </h2>
            <p className="text-primary-200 mb-6">
              Licensed · Insured · 39+ Years Experience · {locationData.responseTime} Response
            </p>
            <a
              href={BUSINESS_PHONE_HREF}
              className="btn-accent text-lg px-10 py-4 inline-flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Call {BUSINESS_PHONE_DISPLAY}
            </a>
          </section>

        </div>
      </div>
    </>
  );
}
