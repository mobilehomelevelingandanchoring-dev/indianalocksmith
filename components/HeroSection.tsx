import { Phone, CheckCircle, Star, Clock, MapPin } from 'lucide-react';
import Link from 'next/link';
import {
  BUSINESS_PHONE_HREF,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_YEARS_EXPERIENCE,
  BUSINESS_RATING,
  BUSINESS_REVIEW_COUNT,
  BUSINESS_CITY,
  BUSINESS_STATE,
} from '@/lib/constants';

interface HeroSectionProps {
  headline?: string;
  subheadline?: string;
  badge?: string;
}

export default function HeroSection({
  headline = `Kokomo's Most Trusted Locksmith — ${BUSINESS_YEARS_EXPERIENCE}+ Years of Experience`,
  subheadline = `Fast, affordable, owner-operated locksmith serving ${BUSINESS_CITY}, ${BUSINESS_STATE} and Howard County. Available 24/7 for emergencies.`,
  badge = '24/7 Emergency Service Available',
}: HeroSectionProps) {
  return (
    <section className="relative bg-hero-gradient text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      <div className="relative container-custom py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-red-600/80 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-6 animate-pulse-slow">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
              {badge}
            </div>

            {/* Headline */}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight text-shadow mb-6">
              {headline}
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-blue-100 leading-relaxed mb-8 max-w-lg">
              {subheadline}
            </p>

            {/* Rating */}
            <div className="flex items-center gap-3 mb-8">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span className="text-blue-100 text-sm font-medium">
                {BUSINESS_RATING}/5.0 — {BUSINESS_REVIEW_COUNT}+ Google Reviews
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href={BUSINESS_PHONE_HREF}
                className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-black px-8 py-4 rounded-xl text-lg transition-colors shadow-xl phone-pulse"
              >
                <Phone className="h-6 w-6" />
                Call {BUSINESS_PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white hover:bg-white/10 font-bold px-8 py-4 rounded-xl text-lg transition-all"
              >
                Get Free Quote
              </Link>
            </div>

            {/* Trust points */}
            <div className="grid grid-cols-2 gap-3">
              {[
                `${BUSINESS_YEARS_EXPERIENCE}+ Years Experience`,
                'Owner-Operated',
                'Fast 15–30 Min Response',
                'No Hidden Fees',
                'Licensed & Insured',
                'Serving All of Howard County',
              ].map((point) => (
                <div key={point} className="flex items-center gap-2 text-sm text-blue-100">
                  <CheckCircle className="h-4 w-4 text-green-400 shrink-0" />
                  {point}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Info card */}
          <div className="lg:pl-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6 lg:p-8">
              <h2 className="font-bold text-white text-xl mb-6">
                Get Help Now — Call or Request Service
              </h2>

              <div className="space-y-4 mb-6">
                <a
                  href={BUSINESS_PHONE_HREF}
                  className="flex items-center gap-4 bg-amber-500 hover:bg-amber-600 rounded-xl p-4 transition-colors group"
                >
                  <div className="bg-white/20 rounded-full p-2.5">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className="text-white font-black text-xl">{BUSINESS_PHONE_DISPLAY}</div>
                    <div className="text-amber-100 text-sm">Tap to Call — Immediate Answer</div>
                  </div>
                </a>

                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <Clock className="h-6 w-6 text-amber-400 mx-auto mb-1" />
                    <div className="text-white font-bold text-sm">15–30 Min</div>
                    <div className="text-blue-200 text-xs">Response Time</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4 text-center">
                    <MapPin className="h-6 w-6 text-amber-400 mx-auto mb-1" />
                    <div className="text-white font-bold text-sm">Mobile Service</div>
                    <div className="text-blue-200 text-xs">We Come to You</div>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Link
                  href="/contact"
                  className="block w-full border border-white/30 hover:bg-white/10 text-white font-semibold py-3 rounded-xl text-sm transition-colors"
                >
                  Schedule Non-Emergency Service
                </Link>
              </div>

              <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
                {[
                  { value: `${BUSINESS_YEARS_EXPERIENCE}+`, label: 'Yrs Exp' },
                  { value: '15K+', label: 'Jobs Done' },
                  { value: '4.9★', label: 'Rating' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-white font-black text-xl">{stat.value}</div>
                    <div className="text-blue-200 text-xs">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
