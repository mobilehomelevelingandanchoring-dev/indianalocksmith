import type { Metadata } from 'next';
import { Phone, Award, Users, Heart, Shield, CheckCircle, Star, MapPin } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import Testimonials from '@/components/Testimonials';
import {
  BUSINESS_PHONE_HREF,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_WEBSITE,
  BUSINESS_YEARS_EXPERIENCE,
  BUSINESS_ESTABLISHED,
  BUSINESS_CITY,
  BUSINESS_STATE,
  BUSINESS_RATING,
  BUSINESS_REVIEW_COUNT,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: `Affordable Locksmith Kokomo Indiana | About Us | Since ${BUSINESS_ESTABLISHED}`,
  description: `Affordable Locksmith Kokomo Indiana — owner-operated since ${BUSINESS_ESTABLISHED}. ${BUSINESS_YEARS_EXPERIENCE}+ years as Kokomo's most trusted locksmith. Honest pricing, no subcontractors, and real community commitment. Learn our story.`,
  alternates: { canonical: `${BUSINESS_WEBSITE}/about` },
};

const milestones = [
  { year: '1985', event: 'Founded as a one-man locksmith operation in Kokomo, Indiana' },
  { year: '1990', event: 'Expanded to full automotive key programming services' },
  { year: '1998', event: 'Began offering commercial access control installation' },
  { year: '2005', event: 'Added advanced safe & vault services to our offerings' },
  { year: '2012', event: 'Adopted professional transponder key and smart lock systems' },
  { year: '2020', event: 'Reached 10,000+ successfully completed jobs in Howard County' },
  { year: '2024', event: `Now: ${BUSINESS_YEARS_EXPERIENCE}+ years — still owner-operated, still community-focused` },
];

const values = [
  { icon: Shield, title: 'Integrity First', desc: 'We quote honest prices before every job. What we say is what you pay — no hidden fees, ever.' },
  { icon: Heart, title: 'Community Roots', desc: 'Kokomo is our home. We\'ve lived here, raised families here, and served our neighbors for nearly four decades.' },
  { icon: Award, title: 'Genuine Expertise', desc: 'Not just years, but depth. We\'ve seen and solved nearly every lock and key challenge imaginable.' },
  { icon: Users, title: 'Personal Service', desc: 'Owner-operated means you deal with us — not subcontractors, not call centers, not strangers.' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'About', href: '/about' }]} />
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-4">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
                Kokomo&apos;s Trusted Locksmith Since {BUSINESS_ESTABLISHED}
              </h1>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                Affordable Locksmith is a family-owned, owner-operated locksmith business that has been serving the residents and businesses of Kokomo, Indiana and Howard County for over {BUSINESS_YEARS_EXPERIENCE} years. We built our reputation one honest job at a time.
              </p>
              <div className="flex items-center gap-3 mb-8">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-blue-100">{BUSINESS_RATING}/5 — {BUSINESS_REVIEW_COUNT}+ Reviews</span>
              </div>
              <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-8 py-3">
                <Phone className="h-5 w-5" /> Call {BUSINESS_PHONE_DISPLAY}
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: `${BUSINESS_YEARS_EXPERIENCE}+`, label: 'Years in Business', icon: Award },
                { value: '15,000+', label: 'Jobs Completed', icon: CheckCircle },
                { value: '4.9★', label: 'Average Rating', icon: Star },
                { value: '100%', label: 'Owner-Operated', icon: Users },
              ].map((stat) => {
                const Icon = stat.icon;
                return (
                  <div key={stat.label} className="bg-white/10 rounded-2xl p-5 text-center">
                    <Icon className="h-7 w-7 text-amber-400 mx-auto mb-2" />
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="section-title mb-6">Our Story</h2>
          <div className="prose prose-lg text-slate-600 space-y-5">
            <p>
              Affordable Locksmith was founded in Kokomo, Indiana in {BUSINESS_ESTABLISHED} with a simple mission: provide professional locksmith services at prices that real Kokomo families and businesses could afford. Nearly four decades later, that mission hasn&apos;t changed.
            </p>
            <p>
              What started as a one-man operation has grown into Howard County&apos;s most trusted locksmith service — but we&apos;ve kept it owner-operated throughout. That means when you call us, you&apos;re talking to the owner. When we show up at your door, you&apos;re meeting the person whose name is on the truck. We have a stake in your satisfaction that no national chain can match.
            </p>
            <p>
              Over {BUSINESS_YEARS_EXPERIENCE}+ years, we&apos;ve seen the lock industry transform dramatically — from simple pin-tumbler locks to transponder chips, smart locks, and biometric systems. We&apos;ve invested in training and equipment to stay ahead of every technological shift, so our customers always get modern solutions, not outdated techniques.
            </p>
            <p>
              We&apos;ve answered thousands of 2 AM emergency calls from Kokomo residents locked out of their homes. We&apos;ve helped businesses secure their operations after break-ins. We&apos;ve saved drivers from having to tow their vehicles across town for key programming. And we&apos;ve done it all with the same commitment: honest work, honest pricing, and respect for the trust our community places in us.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">What We Stand For</h2>
            <p className="section-subtitle mx-auto mt-4">The principles that have guided Affordable Locksmith for nearly four decades.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="card p-6 text-center">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{val.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="section-title mb-10 text-center">Our History in Kokomo</h2>
          <div className="relative">
            <div className="absolute left-16 top-0 bottom-0 w-0.5 bg-slate-200" />
            <div className="space-y-6">
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-6">
                  <div className="bg-blue-600 text-white rounded-xl px-3 py-1.5 text-sm font-black shrink-0 w-14 text-center z-10 relative">
                    {m.year}
                  </div>
                  <div className="card p-4 flex-1">
                    <p className="text-slate-700 text-sm leading-relaxed">{m.event}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service area highlight */}
      <section className="section-pad bg-blue-50 border-y border-blue-100">
        <div className="container-custom text-center max-w-2xl">
          <MapPin className="h-10 w-10 text-blue-600 mx-auto mb-4" />
          <h2 className="section-title mb-4">Proudly Serving {BUSINESS_CITY} & Howard County</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            We live and work here. Kokomo isn&apos;t just our service area — it&apos;s our community. We know the neighborhoods, the roads, and the people. That local knowledge translates to faster response, better service, and a genuine investment in keeping our neighbors safe.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/service-areas" className="btn-primary">View Our Service Area</Link>
            <a href={BUSINESS_PHONE_HREF} className="btn-accent">
              <Phone className="h-4 w-4" /> {BUSINESS_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
