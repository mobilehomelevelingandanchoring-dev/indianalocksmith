import type { Metadata } from 'next';
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import ContactForm from '@/components/ContactForm';
import {
  BUSINESS_PHONE_HREF,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_EMAIL,
  BUSINESS_CITY,
  BUSINESS_STATE,
  BUSINESS_STATE_SHORT,
  BUSINESS_ZIP,
  BUSINESS_WEBSITE,
} from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Contact Affordable Locksmith Kokomo IN | (833) 632-3357 | Free Quote',
  description:
    'Contact Affordable Locksmith in Kokomo, Indiana. Call (833) 632-3357 for 24/7 emergency service or use our form for scheduled appointments and free quotes.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/contact` },
};

const contactMethods = [
  {
    icon: Phone,
    title: 'Call or Text',
    value: BUSINESS_PHONE_DISPLAY,
    detail: 'Available 24/7 for emergencies',
    href: BUSINESS_PHONE_HREF,
    color: 'bg-amber-100 text-amber-700',
    cta: 'Call Now',
    ctaClass: 'bg-amber-500 hover:bg-amber-600 text-white',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: BUSINESS_EMAIL,
    detail: 'We respond within 1–2 hours',
    href: `mailto:${BUSINESS_EMAIL}`,
    color: 'bg-blue-100 text-blue-700',
    cta: 'Send Email',
    ctaClass: 'bg-blue-600 hover:bg-blue-700 text-white',
  },
  {
    icon: MapPin,
    title: 'Our Location',
    value: `${BUSINESS_CITY}, ${BUSINESS_STATE_SHORT} ${BUSINESS_ZIP}`,
    detail: 'Mobile service — we come to you',
    href: `https://maps.google.com/?q=Kokomo+Indiana`,
    color: 'bg-green-100 text-green-700',
    cta: 'View Map',
    ctaClass: 'bg-green-600 hover:bg-green-700 text-white',
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Contact', href: '/contact' }]} />
          <div className="max-w-2xl mt-4">
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Contact Affordable Locksmith in Kokomo, IN
            </h1>
            <p className="text-blue-100 text-lg">
              Need a locksmith? Call us for immediate help, or use the form below to schedule a non-emergency appointment or request a free quote. We respond fast — always.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom">
          {/* Emergency call-out */}
          <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-5 mb-10 flex flex-col sm:flex-row items-center gap-4">
            <div className="bg-red-600 text-white rounded-xl p-3 shrink-0">
              <Phone className="h-6 w-6" />
            </div>
            <div className="text-center sm:text-left">
              <div className="font-black text-slate-900 text-lg">Locked Out? Emergency? Call Immediately.</div>
              <div className="text-slate-600 text-sm">Don&apos;t fill out a form — call us now for immediate 24/7 emergency service.</div>
            </div>
            <a
              href={BUSINESS_PHONE_HREF}
              className="bg-red-600 hover:bg-red-700 text-white font-black px-6 py-3 rounded-xl transition-colors shrink-0 text-lg"
            >
              {BUSINESS_PHONE_DISPLAY}
            </a>
          </div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact form */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-5 w-5 text-blue-600" />
                <h2 className="font-bold text-slate-900 text-xl">Send Us a Message</h2>
              </div>
              <ContactForm />
            </div>

            {/* Contact info sidebar */}
            <div className="lg:col-span-2 space-y-5">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <div key={method.title} className="card p-5">
                    <div className="flex items-start gap-4">
                      <div className={`${method.color} rounded-xl p-2.5 shrink-0`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-0.5">{method.title}</div>
                        <div className="font-bold text-slate-900 text-sm mb-0.5 truncate">{method.value}</div>
                        <div className="text-slate-500 text-xs mb-3">{method.detail}</div>
                        <a
                          href={method.href}
                          className={`inline-flex items-center gap-1.5 ${method.ctaClass} font-semibold px-4 py-1.5 rounded-lg text-sm transition-colors`}
                          target={method.href.startsWith('https://maps') ? '_blank' : undefined}
                          rel={method.href.startsWith('https://maps') ? 'noopener noreferrer' : undefined}
                        >
                          {method.cta}
                        </a>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Hours */}
              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <h3 className="font-bold text-slate-900">Service Hours</h3>
                </div>
                <div className="space-y-1.5">
                  {[
                    { days: 'Monday – Friday', hours: '7:00 AM – 8:00 PM' },
                    { days: 'Saturday', hours: '8:00 AM – 6:00 PM' },
                    { days: 'Sunday', hours: '9:00 AM – 5:00 PM' },
                  ].map((h) => (
                    <div key={h.days} className="flex justify-between text-sm">
                      <span className="text-slate-600">{h.days}</span>
                      <span className="font-medium text-slate-900">{h.hours}</span>
                    </div>
                  ))}
                  <div className="border-t border-slate-100 pt-2 mt-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-green-700 font-semibold text-sm">24/7 Emergency Line Always Open</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service area note */}
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <p className="text-sm text-slate-700">
                    <strong>Mobile Service:</strong> We come to you anywhere in Kokomo, Howard County, and surrounding cities. No need to travel to us!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
