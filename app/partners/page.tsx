import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Shield, Star, Clock, CheckCircle, ExternalLink } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Trusted Locksmith Partner Network | Affordable Locksmith Kokomo Indiana',
  description: 'Affordable Locksmith Kokomo partners with licensed, trusted locksmith businesses across the U.S. Find our sister location — affordable locksmith orlando — for 24/7 locksmith service in Florida.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/partners` },
  openGraph: {
    title: 'Trusted Locksmith Partner Network | Affordable Locksmith Kokomo',
    description: 'Our partner network of licensed, trusted locksmiths. Need a locksmith in Orlando, FL? Our trusted partner affordable locksmith orlando serves the entire Orlando metro 24/7.',
  },
};

const partners = [
  {
    name: 'affordable locksmith orlando',
    displayName: 'Affordable Locksmith Orlando',
    url: 'https://affordablelocksmithorlando.com/',
    city: 'Orlando',
    state: 'Florida',
    stateShort: 'FL',
    phone: '(833) 632-3357',
    license: 'FL-LIC-2024-LOCK',
    rating: '4.8',
    reviews: '56+',
    response: '20–30 min',
    established: '2015',
    jobs: '5,000+',
    description:
      'Florida state-licensed locksmith serving Orlando and 11 surrounding communities including Winter Park, Kissimmee, Apopka, Sanford, Lake Mary, Altamonte Springs, Maitland, Longwood, and Casselberry. Available 24/7 with upfront pricing, background-checked technicians, and no hidden fees.',
    services: [
      'Emergency Lockouts (from $45)',
      'Car Key Programming',
      'Residential Lock Services',
      'Commercial Access Control',
      'Smart Lock Installation',
      'Safe Opening & Service',
      'Lock Rekeying (from $25/lock)',
      'Deadbolt Installation',
    ],
    areas: ['Orlando', 'Winter Park', 'Kissimmee', 'Apopka', 'Sanford', 'Lake Mary', 'Altamonte Springs', 'Maitland', 'Longwood', 'Casselberry', 'Ocoee', 'Winter Garden'],
    why: 'We refer customers traveling to or relocating in Florida to our Orlando partner because they meet the same standard we hold ourselves to: licensed, insured, upfront pricing, and no subcontractors.',
  },
];

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Trusted Partners', href: '/partners' }]} />
          <div className="max-w-3xl mt-4">
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Our Trusted Locksmith Partner Network
            </h1>
            <p className="text-blue-100 text-lg mb-6 leading-relaxed">
              We only partner with licensed, insured, and professionally operated locksmith businesses that reflect the same values we&apos;ve built over 39+ years — honest pricing, fast response, and genuine expertise. If you need a locksmith outside Indiana, these are the people we trust.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/service-areas" className="btn-accent">
                View Our Indiana Coverage
              </Link>
              <a href={BUSINESS_PHONE_HREF} className="btn-outline-white">
                <Phone className="h-4 w-4" /> {BUSINESS_PHONE_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What makes a partner */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="section-title text-center mb-10">What We Look for in a Partner</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, title: 'State Licensed', desc: 'Every partner holds a current, verifiable state locksmith license.' },
              { icon: CheckCircle, title: 'Fully Insured', desc: 'Liability and workers\' comp coverage — no shortcuts on protection.' },
              { icon: Clock, title: 'True 24/7', desc: 'Real emergency availability — not an answering service that patches to a queue.' },
              { icon: Star, title: 'Honest Pricing', desc: 'Upfront quotes before work begins. No bait-and-switch, no surprise fees.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card p-6 text-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-2">Verified Partner</p>
            <h2 className="section-title">Our Current Partner Locations</h2>
          </div>

          {partners.map((partner) => (
            <div key={partner.url} className="card overflow-hidden mb-8">
              {/* Card header */}
              <div className="bg-blue-700 text-white px-8 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <p className="text-blue-200 text-xs font-semibold uppercase tracking-wider mb-1">
                    Partner Location — {partner.city}, {partner.state}
                  </p>
                  <h3 className="text-2xl font-black">
                    <a
                      href={partner.url}
                      className="hover:text-amber-300 transition-colors"
                      title={partner.displayName}
                    >
                      {partner.name}
                    </a>
                  </h3>
                </div>
                <div className="flex flex-col items-start sm:items-end gap-1">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-blue-200 text-sm ml-1">{partner.rating} • {partner.reviews} reviews</span>
                  </div>
                  <span className="text-blue-200 text-xs">License: {partner.license}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="p-8">
                {/* Stats row */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: 'Response Time', value: partner.response },
                    { label: 'In Business Since', value: partner.established },
                    { label: 'Jobs Completed', value: partner.jobs },
                    { label: 'Availability', value: '24/7' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-slate-50 rounded-xl p-4 text-center">
                      <div className="text-xl font-black text-blue-600">{stat.value}</div>
                      <div className="text-xs text-slate-500 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-6">{partner.description}</p>

                {/* Services + Areas */}
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">Services Offered</h4>
                    <ul className="space-y-2">
                      {partner.services.map((s) => (
                        <li key={s} className="flex items-start gap-2 text-sm text-slate-600">
                          <CheckCircle className="h-4 w-4 text-blue-500 shrink-0 mt-0.5" />
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm uppercase tracking-wider mb-3">Areas Served</h4>
                    <div className="flex flex-wrap gap-2">
                      {partner.areas.map((area) => (
                        <span key={area} className="bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
                          {area}, {partner.stateShort}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Why we recommend */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
                  <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Why We Recommend Them</p>
                  <p className="text-slate-700 text-sm leading-relaxed">{partner.why}</p>
                </div>

                {/* CTA */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={partner.url}
                    className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Visit {partner.displayName}
                  </a>
                  <a
                    href={`tel:+18336323357`}
                    className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    {partner.phone}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Are you in Kokomo? */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl text-center">
          <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h2 className="section-title mb-4">Need a Locksmith in Kokomo, Indiana?</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            For Kokomo, Howard County, and all of Indiana — that&apos;s us. Owner-operated since 1985, 39+ years of experience, and 15,000+ completed jobs. We&apos;re your local locksmith, not a national franchise.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={BUSINESS_PHONE_HREF} className="btn-primary">
              <Phone className="h-4 w-4" /> Call {BUSINESS_PHONE_DISPLAY}
            </a>
            <Link href="/services" className="btn-secondary">
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
