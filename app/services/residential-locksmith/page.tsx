import type { Metadata } from 'next';
import { Phone, Home, Key, Lock, Shield, CheckCircle, Smartphone } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import FAQSection from '@/components/FAQSection';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE, BUSINESS_YEARS_EXPERIENCE } from '@/lib/constants';
import { buildServiceSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Residential Locksmith Kokomo IN | Home Lockouts, Rekeying, Smart Locks | (575) 573-2625',
  description:
    'Residential locksmith services in Kokomo, Indiana. Home lockouts, lock installation, rekeying, deadbolts, smart locks. Licensed, insured, owner-operated. Call (575) 573-2625.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/services/residential-locksmith` },
};

const residentialServices = [
  { icon: Home, title: 'Home Lockout Service', desc: 'Locked out of your house? We get you back inside fast using non-destructive entry techniques — no damage to your door or lock.' },
  { icon: Key, title: 'Lock Rekeying', desc: 'Changed your locks recently? Rekeying is a cost-effective way to void old keys after moving in, changing tenants, or after a security concern.' },
  { icon: Lock, title: 'Lock Installation', desc: 'New construction, replacing old hardware, or upgrading security? We install deadbolts, knob locks, and high-security locks.' },
  { icon: Shield, title: 'Deadbolt Upgrade', desc: 'Grade 1 ANSI-certified deadbolts provide 3-10x more kick resistance than standard locks. We install and service the best brands.' },
  { icon: Smartphone, title: 'Smart Lock Installation', desc: 'Keyless convenience with smartphone control, activity logs, and auto-lock. We install and configure Schlage, August, Kwikset, and more.' },
  { icon: Key, title: 'Window & Sliding Door Locks', desc: 'Secure every entry point in your home. We repair and replace window locks, patio door locks, and sliding door security bars.' },
];

const faqs = [
  { question: 'What does a residential locksmith do?', answer: 'A residential locksmith specializes in home security and access — including home lockouts, lock installation and rekeying, smart lock setup, deadbolt upgrades, and security consultations for homeowners.' },
  { question: 'How much does it cost to rekey a house in Kokomo?', answer: 'Rekeying costs start at $25 per lock with a service call fee. A full house rekey of 5–6 locks is typically $100–$200 total. It\'s far less expensive than replacing locks and just as secure.' },
  { question: 'Should I rekey or replace my locks when I move?', answer: 'For most homeowners, rekeying is the smart choice. It costs less, takes less time, and renders all previous keys invalid. Replacement is recommended when locks are old, worn, or you want to upgrade security level.' },
  { question: 'Can you install smart locks in my Kokomo home?', answer: 'Yes! We install and configure all major smart lock brands including Schlage Encode, August Smart Lock Pro, and Kwikset Halo. We also help set up the app and program access codes.' },
  { question: 'What if I\'m locked out of my house at night?', answer: 'Call us any time at (575) 573-2625. We offer 24/7 emergency home lockout service in Kokomo and throughout Howard County. Average response time is 15–30 minutes.' },
];

export default function ResidentialLocksmithPage() {
  const schema = buildServiceSchema({
    name: 'Residential Locksmith Services Kokomo, IN',
    description: 'Residential locksmith services in Kokomo, Indiana — home lockouts, lock rekeying, deadbolt installation, smart lock setup, and home security consulting.',
    url: `${BUSINESS_WEBSITE}/services/residential-locksmith`,
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Services', href: '/services' }, { name: 'Residential Locksmith', href: '/services/residential-locksmith' }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 bg-green-500/20 text-green-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Home className="h-4 w-4" />
              Residential Locksmith — Kokomo, IN
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Residential Locksmith Services in Kokomo, Indiana
            </h1>
            <p className="text-blue-100 text-lg mb-8">
              Your home is your castle. We help protect it with professional lock installation, rekeying, smart lock upgrades, and emergency home lockout service — all backed by {BUSINESS_YEARS_EXPERIENCE}+ years of experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-8 py-3">
                <Phone className="h-5 w-5" /> Call {BUSINESS_PHONE_DISPLAY}
              </a>
              <Link href="/contact" className="btn-outline py-3 px-8 text-lg">Schedule a Visit</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title">Home Locksmith Services We Offer</h2>
            <p className="section-subtitle mx-auto mt-4">From emergency lockouts to smart home security upgrades, we handle every residential lock and key need.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {residentialServices.map((svc) => {
              const Icon = svc.icon;
              return (
                <div key={svc.title} className="card p-6">
                  <div className="bg-green-100 text-green-700 rounded-xl p-3 w-fit mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{svc.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{svc.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-pad bg-slate-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="section-title mb-5">Protecting Kokomo Homes Since 1985</h2>
              <p className="text-slate-600 mb-6 leading-relaxed">
                When you hire Affordable Locksmith for your home, you&apos;re getting an owner-operated professional who has protected thousands of Kokomo-area homes over nearly four decades. We know the neighborhoods, we know the common security vulnerabilities, and we know exactly how to address them.
              </p>
              <p className="text-slate-600 mb-8 leading-relaxed">
                We recommend every homeowner who moves into a new home have their locks rekeyed immediately — you never know how many copies of your key are floating around. It&apos;s one of the most affordable security investments you can make.
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  'Emergency 24/7 home lockout service',
                  'Same-day lock installation available',
                  'Rekey entire house in under an hour',
                  'Smart lock brands: Schlage, August, Kwikset',
                  'Grade 1 ANSI-certified deadbolts',
                  'No hidden fees — upfront pricing always',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-green-500 shrink-0" />
                    <span className="text-slate-700">{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-card border border-slate-100">
              <h3 className="font-bold text-slate-900 text-xl mb-5">Residential Pricing Guide</h3>
              <div className="space-y-3">
                {[
                  { service: 'Home Lockout', price: 'From $45' },
                  { service: 'Lock Rekey (per lock)', price: 'From $25' },
                  { service: 'Full House Rekey (5 locks)', price: 'From $150' },
                  { service: 'Deadbolt Installation', price: 'From $85' },
                  { service: 'Smart Lock Installation', price: 'From $150' },
                  { service: 'Lock Replacement', price: 'From $95' },
                  { service: 'Security Consultation', price: 'Free' },
                ].map((item) => (
                  <div key={item.service} className="flex justify-between py-2.5 border-b border-slate-100 last:border-0">
                    <span className="text-slate-600 text-sm">{item.service}</span>
                    <span className="font-semibold text-slate-900 text-sm">{item.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3">Prices confirmed before work begins. No hidden fees.</p>
              <a href={BUSINESS_PHONE_HREF} className="btn-accent w-full justify-center mt-5">
                <Phone className="h-4 w-4" /> Call for Exact Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <FAQSection faqs={faqs} title="Residential Locksmith FAQs" />

      <section className="section-pad bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black mb-4">Ready to Secure Your Kokomo Home?</h2>
          <p className="text-blue-100 mb-6 max-w-lg mx-auto">Call or schedule a visit. We&apos;ll get your home locked up tight — same day in most cases.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-10 py-4">
              <Phone className="h-5 w-5" /> {BUSINESS_PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="btn-outline py-4 px-10 text-lg">Request a Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
