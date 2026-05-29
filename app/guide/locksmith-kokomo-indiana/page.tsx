import type { Metadata } from 'next';
import {
  Phone, Shield, Clock, Car, Home, Building2, Key, CheckCircle,
  AlertTriangle, Star, ArrowRight, DollarSign, MapPin, Wrench, Lock
} from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import {
  BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY,
  BUSINESS_WEBSITE, BUSINESS_YEARS_EXPERIENCE, BUSINESS_ESTABLISHED
} from '@/lib/constants';
import { buildFAQSchema, buildArticleSchema, buildSpeakableSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Complete Guide to Locksmith Services in Kokomo Indiana (2025)',
  description:
    'The definitive Kokomo Indiana locksmith guide — costs, emergency response, car key programming, rekeying, smart locks, scam warnings, and how to find the best local locksmith. Updated 2025.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/guide/locksmith-kokomo-indiana` },
  openGraph: {
    title: 'Complete Locksmith Guide — Kokomo Indiana 2025 | Affordable Locksmith',
    description:
      'Everything you need to know about locksmiths in Kokomo Indiana. Costs, emergency service, car keys, home security, and expert tips from a 39-year local expert.',
  },
};

const guideFaqs = [
  {
    question: 'What does a locksmith do?',
    answer: 'A locksmith installs, repairs, and opens locks for residential, automotive, and commercial customers. Services include lockouts (car, home, business), key cutting and programming, lock rekeying and replacement, safe opening, access control installation, and security consultation. A full-service locksmith in Kokomo Indiana handles everything from a $45 car lockout to a complete commercial master key system.',
  },
  {
    question: 'How much does a locksmith cost in Kokomo Indiana?',
    answer: 'Locksmith costs in Kokomo Indiana range from $45 for a basic car or home lockout to $250+ for complex jobs like safe opening or ignition replacement. Rekeying starts at $25 per lock. Transponder key programming starts at $75. Commercial master key systems start at $200. Affordable Locksmith confirms the exact price before starting any work — no hidden fees.',
  },
  {
    question: 'How quickly can a locksmith arrive in Kokomo?',
    answer: 'Affordable Locksmith averages 15–30 minutes for emergency calls within Kokomo city limits. Being locally based in Howard County means we reach you faster than national dispatch services. Rural areas of Howard County may be 30–45 minutes.',
  },
  {
    question: 'Is it cheaper to rekey or replace locks?',
    answer: 'Rekeying is almost always cheaper — $25–$45 per lock versus $85–$200 to replace. Rekeying changes the internal pins so a new key works without replacing the hardware. Replace only when the lock is physically damaged or you want a security upgrade.',
  },
  {
    question: 'Can a locksmith make a car key without the original?',
    answer: 'Yes. Using your VIN number and proof of ownership, we can cut and program a replacement transponder key or key fob on-site for most makes and models. This costs 40–60% less than a dealership.',
  },
  {
    question: 'Should I change my locks when moving into a new home?',
    answer: 'Yes — always. Previous owners, contractors, real estate agents, and neighbors may have copies of the original keys. Rekeying all exterior locks costs $75–$175 and provides immediate security. It is the single most impactful security step for any new Kokomo homeowner.',
  },
  {
    question: 'What is the best type of lock for front doors in Kokomo Indiana?',
    answer: 'A Grade 1 ANSI-rated deadbolt — such as Schlage B60N or Medeco Maxum — provides the strongest protection. Grade 1 deadbolts resist picking, bumping, and kick-in attacks. Install with a reinforced strike plate using 3-inch screws for maximum forced-entry resistance.',
  },
  {
    question: 'Are locksmiths licensed in Indiana?',
    answer: 'Indiana does not require a state locksmith license. This makes choosing a business with verifiable local reviews, insurance, and years of operation especially important. Always ask if a locksmith is bonded and insured — a legitimate professional confirms this without hesitation.',
  },
  {
    question: 'How do I avoid locksmith scams in Kokomo?',
    answer: 'Use a locally established locksmith with real Google reviews under a consistent business name. Warning signs: a price far below $45 on the phone, an unmarked vehicle, demands for cash only, and claims the lock must be drilled without attempting other methods. Affordable Locksmith always provides a written price quote before dispatching.',
  },
  {
    question: 'What should I do if I am locked out in Kokomo Indiana?',
    answer: 'Move to a safe, well-lit area and call a trusted local locksmith. Have photo ID ready to verify property ownership. Do not attempt DIY entry — it risks damaging your lock or door. For vehicle lockouts, if you are in danger, call 911 first. Affordable Locksmith responds to Kokomo lockouts 24 hours a day with average arrival in 15–30 minutes.',
  },
  {
    question: 'What is the difference between rekeying and replacing locks?',
    answer: 'Rekeying changes only the internal pin tumblers so a new key works — the hardware stays. Replacing installs entirely new lock hardware. Rekeying costs $25–$45 per lock and takes 10 minutes; replacing costs $85–$200 and is recommended when the lock is damaged or you want to upgrade security quality.',
  },
  {
    question: 'Can locksmiths program smart locks and keypad locks?',
    answer: 'Yes. We install and configure smart locks including Schlage Encode, Yale Assure, and Kwikset Halo. We set up apps, create access codes, and ensure the deadbolt engages correctly before leaving. Smart lock installation in Kokomo typically takes 30–45 minutes.',
  },
  {
    question: 'What is a transponder car key?',
    answer: 'A transponder key contains a microchip that communicates with your vehicle\'s immobilizer system. Without the correct chip signal, the car will not start even with a correctly cut key. Programming transponder keys requires specialized equipment — locksmiths provide this service at 40–60% less than dealerships.',
  },
  {
    question: 'How much does car key replacement cost compared to a dealership?',
    answer: 'A locksmith in Kokomo typically charges $75–$150 for a transponder key versus $250–$400 at a dealership for the same vehicle. For luxury vehicles (BMW, Mercedes), locksmiths charge $200–$350 versus $400–$700 at the dealer. The quality is identical — locksmiths use the same programming standards.',
  },
  {
    question: 'What is a master key system?',
    answer: 'A master key system allows one key to open all locks in a building while individual keys only open specific doors. This is common in offices, apartment buildings, and commercial facilities. A locksmith designs the system to match your access control needs and keys all locks to the same hierarchy.',
  },
];

const servicesData = [
  {
    icon: Car, color: 'blue',
    title: 'Automotive Locksmith Services',
    intro: 'Car lockouts, key programming, and ignition repair — fully mobile, on-site service.',
    items: [
      ['Car Lockout', 'Non-destructive entry — 15–30 min response', '$45–$85'],
      ['Transponder Key Programming', 'All makes/models, 40–60% below dealer', '$75–$150'],
      ['Key Fob Programming', 'OEM and aftermarket fobs', '$65–$120'],
      ['Ignition Repair / Replacement', 'Worn or seized ignition cylinders', '$95–$200'],
      ['Broken Key Extraction', 'Key snapped inside lock or ignition', '$65–$120'],
      ['Laser-Cut High-Security Keys', 'Requires specialized cutting equipment', '$120–$200'],
      ['Motorcycle Key Service', 'All major brands — Honda, Harley, Yamaha', '$75–$150'],
    ],
  },
  {
    icon: Home, color: 'green',
    title: 'Residential Locksmith Services',
    intro: 'Home security upgrades, lockouts, and rekeying for Kokomo homeowners and renters.',
    items: [
      ['Home Lockout', 'Damage-free entry — any lock type', '$45–$85'],
      ['Lock Rekeying', 'New key, same hardware — fastest upgrade', '$25–$45/lock'],
      ['Deadbolt Installation', 'Grade 1 deadbolts, reinforced strike plates', '$85–$175'],
      ['Smart Lock Installation', 'Schlage, Yale, Kwikset — app setup included', '$150–$300'],
      ['Lock Replacement', 'Worn or damaged locks replaced', '$85–$200'],
      ['Door Hardware Repair', 'Sticking, misaligned, or broken hardware', '$65–$150'],
      ['Security Consultation', 'Free walk-through and recommendations', 'Free'],
    ],
  },
  {
    icon: Building2, color: 'purple',
    title: 'Commercial Locksmith Services',
    intro: 'Business security, access control, and master key systems for Kokomo businesses.',
    items: [
      ['Commercial Lockout', 'Business and office lockouts — rapid response', '$65–$125'],
      ['Master Key Systems', 'Custom access hierarchy for any facility', 'From $200'],
      ['Access Control Systems', 'Keypad, card, and fob entry systems', 'By quote'],
      ['Panic Bar Installation', 'ADA-compliant exit hardware', 'By quote'],
      ['High-Security Locks', 'Medeco, Mul-T-Lock, ASSA ABLOY', '$150–$400+'],
      ['Keypad Entry Systems', 'Standalone and networked systems', 'By quote'],
      ['Security Audit', 'Identify and document vulnerabilities', 'By quote'],
    ],
  },
  {
    icon: Shield, color: 'red',
    title: 'Emergency Locksmith — 24/7',
    intro: 'Immediate response for any lockout or urgent security need in Kokomo and Howard County.',
    items: [
      ['24/7 Car Lockout', 'Any hour, including holidays', '$45–$85'],
      ['24/7 Home Lockout', 'Any hour — damage-free entry', '$45–$85'],
      ['After Break-In Repair', 'Lock repair and replacement same day', 'By quote'],
      ['Urgent Rekeying', 'Immediate rekey after lost or stolen keys', '$25–$45/lock'],
      ['Broken Key Emergency', 'Extraction and replacement on-site', '$65–$120'],
      ['Lost Key Replacement', 'Home, car, or office keys replaced same day', 'By service'],
    ],
  },
];

const howToSteps = [
  { step: 1, title: 'Move to a safe, well-lit area', detail: 'Stay near your vehicle or building entrance. If it is dark, find the nearest lit area — a store, gas station, or streetlight. Do not walk down unlit streets alone at night in Kokomo.' },
  { step: 2, title: 'Check for unlocked entry points', detail: 'Quickly check other doors, windows, or a garage door. Only attempt entry on property you own or rent. Never force entry — modern locks resist this and you will damage the door or lock.' },
  { step: 3, title: 'Call a trusted local locksmith', detail: 'Call Affordable Locksmith at (855) 633-0750 — a real person answers immediately 24/7. Give your exact location and a brief description of the situation. We will confirm our arrival time and price before dispatching.' },
  { step: 4, title: 'Have your ID ready', detail: 'For home lockouts, have a photo ID with the address. For car lockouts, have your vehicle registration or title. A professional locksmith will always verify ownership before opening a property — this protects you.' },
  { step: 5, title: 'Wait safely for the technician', detail: 'Stay visible and in a safe area. Let someone you trust know your location. If you feel unsafe, call 911. Our technician arrives in a marked vehicle and introduces themselves with ID.' },
  { step: 6, title: 'Review the written price quote', detail: 'Before any work begins, you receive a specific price. Review it. There are no hidden charges, service fees, or surprises. Once you approve, the locksmith completes the work — typically in 10–30 minutes.' },
];

const lockGuide = [
  { lock: 'Schlage B60N Deadbolt', grade: '1', best: 'Front doors — best security/value', cost: '$45–$75', notes: 'Highest-selling Grade 1 deadbolt in the US; 6-pin cylinder with anti-pick pins' },
  { lock: 'Schlage Encode Plus', grade: '1', best: 'Smart lock users', cost: '$200–$280', notes: 'Built-in Wi-Fi, Apple Home Key support, Grade 1 deadbolt cylinder' },
  { lock: 'Kwikset 980 Deadbolt', grade: '1', best: 'Value-conscious buyers', cost: '$35–$55', notes: 'ANSI Grade 1, BumpGuard technology, SecureScreen keypad option' },
  { lock: 'Medeco Maxum', grade: '1', best: 'Maximum security', cost: '$120–$160', notes: 'UL listed, patented rotating pins make it nearly impickable; key control prevents duplication' },
  { lock: 'Yale Assure Lock 2', grade: '1', best: 'Smart home integration', cost: '$150–$250', notes: 'Matter smart home standard, multiple connectivity options, Grade 1 certified' },
  { lock: 'Kwikset SmartKey', grade: '2', best: 'DIY rekeying', cost: '$25–$45', notes: 'Easy self-rekeying without a locksmith; Grade 2 cylinder — not ideal as only exterior lock' },
];

export default function LocksmithGuideKokomoPage() {
  const faqSchema = buildFAQSchema(guideFaqs);
  const articleSchema = buildArticleSchema({
    title: 'Complete Guide to Locksmith Services in Kokomo Indiana (2025)',
    description: 'The definitive Kokomo Indiana locksmith guide — costs, emergency response, car key programming, rekeying, and how to find the best local locksmith.',
    slug: 'guide/locksmith-kokomo-indiana',
    datePublished: '2025-01-15',
    dateModified: '2025-05-29',
  });
  const speakableSchema = buildSpeakableSchema(`${BUSINESS_WEBSITE}/guide/locksmith-kokomo-indiana`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: 'What to Do When Locked Out in Kokomo Indiana',
        description: 'Step-by-step guide for handling a lockout in Kokomo, Indiana safely and efficiently.',
        totalTime: 'PT30M',
        step: howToSteps.map(s => ({
          '@type': 'HowToStep',
          position: s.step,
          name: s.title,
          text: s.detail,
        })),
      })}} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white py-14 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Guide', href: '/guide' }, { name: 'Locksmith Kokomo Indiana', href: '/guide/locksmith-kokomo-indiana' }]} />
          <div className="grid lg:grid-cols-2 gap-10 items-start mt-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <Lock className="h-4 w-4" />
                Comprehensive Locksmith Guide — Updated 2025
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-5 speakable-summary">
                Complete Guide to Locksmith Services in Kokomo, Indiana
              </h1>
              <p className="text-blue-100 text-lg mb-4 speakable-summary">
                Everything Kokomo Indiana residents need to know about locksmiths — from emergency lockouts to home security upgrades. Costs, services, scam warnings, and expert recommendations from a {BUSINESS_YEARS_EXPERIENCE}-year local expert.
              </p>
              {/* Featured Snippet Quick Answer */}
              <div className="bg-white/10 border border-white/20 rounded-xl p-5 mb-6">
                <p className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">Quick Answer</p>
                <p className="text-blue-50 leading-relaxed speakable-summary">
                  A locksmith in Kokomo Indiana costs <strong>$45–$150</strong> for most services. Emergency service is available <strong>24/7</strong> with <strong>15–30 minute</strong> response. Car lockouts start at $45, rekeying at $25/lock, transponder keys at $75. Call <strong>(855) 633-0750</strong> any time — real person answers immediately.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-8 py-3 inline-flex">
                  <Phone className="h-5 w-5" /> {BUSINESS_PHONE_DISPLAY}
                </a>
                <Link href="/faq" className="inline-flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-6 py-3 rounded-xl transition-all text-sm hover:bg-white/10">
                  Full FAQ <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            {/* Table of Contents */}
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20 text-sm">
              <p className="font-bold text-white mb-4">In This Guide</p>
              <nav className="space-y-2">
                {[
                  ['#what-does-locksmith-do', 'What Does a Locksmith Do?'],
                  ['#services', 'All Locksmith Services & Costs'],
                  ['#emergency', 'Emergency Locksmith — 24/7'],
                  ['#automotive', 'Automotive & Car Key Services'],
                  ['#residential', 'Residential & Home Security'],
                  ['#commercial', 'Commercial Security'],
                  ['#cost', 'Complete Cost Guide'],
                  ['#choose', 'How to Choose a Trustworthy Locksmith'],
                  ['#locked-out', 'Locked Out? Step-by-Step Guide'],
                  ['#security', 'Best Locks for Kokomo Homes'],
                  ['#scams', 'Locksmith Scam Warning Signs'],
                  ['#faq', 'FAQ — 15 Expert Answers'],
                ].map(([href, label]) => (
                  <a key={href} href={href} className="flex items-center gap-2 text-blue-200 hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                    {label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>

      {/* What Does a Locksmith Do */}
      <section id="what-does-locksmith-do" className="section-pad bg-white scroll-mt-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-4">What Does a Locksmith Do?</h2>
          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-xl p-5 mb-6">
            <p className="text-slate-700 leading-relaxed speakable-summary">
              <strong>A locksmith is a security specialist who installs, repairs, adjusts, and opens locking mechanisms.</strong> Modern locksmiths handle far more than simple lockouts — they program electronic car keys, install smart home locks, design commercial access control systems, open safes, and consult on home security. In Kokomo Indiana, a full-service locksmith is available 24 hours a day for any lock or key emergency.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Car, label: 'Automotive', desc: 'Car lockouts, key programming, fob replacement, ignition repair' },
              { icon: Home, label: 'Residential', desc: 'Home lockouts, rekeying, deadbolt installation, smart locks' },
              { icon: Building2, label: 'Commercial', desc: 'Business security, master keys, access control, panic bars' },
              { icon: Clock, label: 'Emergency', desc: '24/7 lockout response for cars, homes, and businesses' },
              { icon: Key, label: 'Key Services', desc: 'Cutting, duplication, transponder programming, laser keys' },
              { icon: Shield, label: 'Safe Services', desc: 'Safe opening, combination change, vault repair' },
            ].map(({ icon: Icon, label, desc }) => (
              <div key={label} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                <div className="bg-blue-100 text-blue-700 rounded-lg p-2 shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{desc}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 leading-relaxed mb-4">
            Affordable Locksmith has served Kokomo, Indiana and all of Howard County since {BUSINESS_ESTABLISHED}. As an owner-operated business, every service call is handled by our own trained technicians — never subcontractors. Our mobile service vehicles are fully stocked with professional tools, key cutting equipment, and transponder programming devices to handle virtually any lock or key situation on the first visit.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Whether you are locked out of your car on US-31 at 2 AM, need to rekey your new home on Markland Avenue after moving in, or want to upgrade your downtown Kokomo business to a modern access control system, a professional locksmith provides a safer and more cost-effective solution than any alternative.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section id="services" className="section-pad bg-slate-50 scroll-mt-20">
        <div className="container-custom">
          <h2 className="text-3xl font-black text-slate-900 mb-3 text-center">All Locksmith Services Available in Kokomo, Indiana</h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">Every lock and key service, priced transparently. We confirm the exact cost before starting any work.</p>
          <div className="space-y-10">
            {servicesData.map((cat) => {
              const Icon = cat.icon;
              const colorMap: Record<string, string> = {
                blue: 'bg-blue-100 text-blue-700',
                green: 'bg-green-100 text-green-700',
                purple: 'bg-purple-100 text-purple-700',
                red: 'bg-red-100 text-red-700',
              };
              return (
                <div key={cat.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`rounded-xl p-3 ${colorMap[cat.color]}`}>
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-black text-slate-900 text-xl">{cat.title}</h3>
                      <p className="text-slate-500 text-sm">{cat.intro}</p>
                    </div>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b-2 border-slate-100">
                          <th className="text-left pb-2 text-slate-600 font-semibold">Service</th>
                          <th className="text-left pb-2 text-slate-600 font-semibold hidden md:table-cell">Notes</th>
                          <th className="text-right pb-2 text-slate-600 font-semibold">Starting Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-50">
                        {cat.items.map(([name, notes, price]) => (
                          <tr key={name}>
                            <td className="py-2.5 font-medium text-slate-900">{name}</td>
                            <td className="py-2.5 text-slate-500 hidden md:table-cell">{notes}</td>
                            <td className="py-2.5 text-right font-bold text-green-700">{price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-slate-400 mt-4 text-center">* All prices confirmed in writing before work begins. Final cost may vary by lock type, vehicle make/model, or job complexity.</p>
        </div>
      </section>

      {/* Emergency Section */}
      <section id="emergency" className="section-pad bg-gradient-to-br from-slate-900 to-red-950 text-white scroll-mt-20">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-500/30 text-red-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-ping" />
                Available Right Now
              </div>
              <h2 className="text-3xl font-black text-white mb-4">24 Hour Emergency Locksmith — Kokomo Indiana</h2>
              <p className="text-red-100 mb-4 leading-relaxed speakable-summary">
                Locked out at 2 AM near Highland Park? Lost your keys outside Kokomo Opalescent Glass? Car locked at Grissom Air Reserve Base? We respond to emergency lockouts anywhere in Kokomo and Howard County in 15–30 minutes — every hour of every day, including all holidays.
              </p>
              <p className="text-red-200 text-sm mb-6 leading-relaxed">
                When you call, a real person answers — not a call center, not voicemail, not an automated system. We dispatch immediately and give you an honest arrival window. Our price is confirmed before we move, so there are zero surprises when we arrive.
              </p>
              <a href={BUSINESS_PHONE_HREF} className="inline-flex items-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-black px-10 py-4 rounded-xl text-xl transition-colors shadow-lg phone-pulse">
                <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
              </a>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Average Response Time in Kokomo', value: '15–30 Min' },
                { label: 'Service Coverage', value: 'All of Howard County' },
                { label: 'Hours of Operation', value: '24/7 — 365 Days' },
                { label: 'Emergency Jobs Completed', value: '10,000+' },
                { label: 'After-Hours Surcharge', value: 'None' },
                { label: 'Calls Answered By', value: 'Real Person — Always' },
              ].map(stat => (
                <div key={stat.label} className="bg-white/10 rounded-xl px-5 py-3.5 flex justify-between items-center">
                  <span className="text-red-200 text-sm">{stat.label}</span>
                  <span className="text-white font-black">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Automotive Section */}
      <section id="automotive" className="section-pad bg-white scroll-mt-20">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 text-blue-700 rounded-xl p-3">
              <Car className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Automotive Locksmith in Kokomo Indiana</h2>
          </div>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Automotive locksmithing is one of the most technical areas of the trade. Modern vehicles use encrypted transponder chips, rolling security codes, and proximity sensors that require specialized programming equipment. Affordable Locksmith carries the latest automotive key programming systems and serves all major vehicle makes and models in Kokomo, Indiana.
          </p>

          <div className="bg-blue-50 rounded-2xl p-6 mb-8">
            <h3 className="font-bold text-slate-900 mb-4">Locksmith vs Dealer: Car Key Cost Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b-2 border-blue-200">
                    <th className="text-left pb-3 text-slate-600">Vehicle Type</th>
                    <th className="text-right pb-3 text-red-600">Dealer Cost</th>
                    <th className="text-right pb-3 text-green-700">Locksmith Cost</th>
                    <th className="text-right pb-3 text-slate-500">You Save</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100">
                  {[
                    ['Toyota / Honda Transponder Key', '$250–$380', '$80–$130', '~55%'],
                    ['Ford / GM / Chrysler Key Fob', '$200–$400', '$65–$130', '~58%'],
                    ['BMW / Mercedes Smart Key', '$400–$700', '$200–$350', '~47%'],
                    ['Luxury SUV Proximity Key', '$500–$800', '$250–$400', '~48%'],
                    ['Laser-Cut / Sidewinder Key', '$300–$500', '$120–$200', '~53%'],
                    ['Basic Transponder (Hyundai, KIA)', '$150–$250', '$75–$110', '~50%'],
                  ].map(([vehicle, dealer, locksmith, save]) => (
                    <tr key={vehicle}>
                      <td className="py-2.5 font-medium text-slate-900">{vehicle}</td>
                      <td className="py-2.5 text-right text-red-600">{dealer}</td>
                      <td className="py-2.5 text-right text-green-700 font-bold">{locksmith}</td>
                      <td className="py-2.5 text-right text-slate-400 text-xs">{save}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3">Savings are approximate. Exact pricing depends on vehicle year, make, and model. Call for a precise quote.</p>
          </div>

          <h3 className="font-bold text-slate-900 text-xl mb-4">Common Automotive Lock & Key Questions</h3>
          <div className="space-y-5">
            {[
              {
                q: 'Can you make a car key from just the VIN number?',
                a: 'Yes. For most vehicles, we can use the Vehicle Identification Number (VIN) to identify your exact key code and cut a new key blank to factory specifications. Combined with our programming equipment, we produce a fully functional replacement key without any original keys. We require photo ID and proof of ownership (registration or title) before providing this service.',
              },
              {
                q: 'What vehicles do you service for automotive locksmith work?',
                a: 'We service virtually all domestic and import vehicles sold in the United States including Toyota, Honda, Ford, Chevrolet, GMC, Dodge, Chrysler, Jeep, RAM, Hyundai, Kia, Nissan, Mazda, Subaru, Volkswagen, BMW, Mercedes-Benz, Audi, Lexus, Acura, Infiniti, and most others. We also service motorcycles, ATVs, RVs, and commercial vehicles.',
              },
              {
                q: 'What if I only have one key left and want a spare?',
                a: 'We strongly recommend duplicating your remaining key before you lose it entirely. Programming a spare transponder key while you still have the original is faster and often less expensive than programming a replacement from scratch. Call us for on-site key duplication anywhere in Kokomo.',
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-slate-100 pb-5 last:border-0">
                <h4 className="font-bold text-slate-900 mb-2">{q}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/services/automotive-locksmith" className="btn-primary">
              View All Automotive Services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Residential Section */}
      <section id="residential" className="section-pad bg-green-50 scroll-mt-20">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 text-green-700 rounded-xl p-3">
              <Home className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Residential Locksmith in Kokomo Indiana</h2>
          </div>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Home security in Kokomo Indiana starts with quality locks and professional installation. Whether you just purchased a home in Sycamore Hills, are rekeying after losing keys in downtown Kokomo, or want to upgrade to a smart lock system before renting your property, a professional residential locksmith provides faster, more reliable service than hardware store options.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3">When to Rekey Your Kokomo Home</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {[
                  'Moving into any new home or apartment',
                  'After a breakup, divorce, or roommate change',
                  'After losing your house keys',
                  'After a break-in or attempted break-in',
                  'After contractors or repair workers had access',
                  'After losing track of who has copies',
                  'After evicting a tenant',
                  'When buying a home where you don\'t know the key history',
                ].map(i => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
              <p className="text-green-700 font-bold text-sm mt-4">Cost: $25–$45 per lock (most homes $75–$175 total)</p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-3">Home Security Upgrade Priority List</h3>
              <div className="space-y-3">
                {[
                  { priority: 1, action: 'Rekey all exterior locks', cost: '$75–$175', impact: 'Immediate access control' },
                  { priority: 2, action: 'Upgrade to Grade 1 deadbolts', cost: '$85–$175/lock', impact: 'Resist kick-in & pick attacks' },
                  { priority: 3, action: 'Reinforce strike plates', cost: '$25–$50', impact: 'Stops door frame kick-in' },
                  { priority: 4, action: 'Add motion-activated lighting', cost: '$30–$100', impact: 'Deters opportunistic entry' },
                  { priority: 5, action: 'Install smart lock + alarm', cost: '$150–$400', impact: 'Remote monitoring & alerts' },
                ].map(({ priority, action, cost, impact }) => (
                  <div key={priority} className="flex items-start gap-3 text-sm">
                    <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center font-bold text-xs shrink-0">{priority}</div>
                    <div>
                      <span className="font-semibold text-slate-900">{action}</span>
                      <span className="text-slate-500"> — {cost}</span>
                      <div className="text-slate-400 text-xs">{impact}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Link href="/services/residential-locksmith" className="btn-primary">
            View Residential Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* Cost Guide */}
      <section id="cost" className="section-pad bg-white scroll-mt-20">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 text-green-700 rounded-xl p-3">
              <DollarSign className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">How Much Does a Locksmith Cost in Kokomo Indiana?</h2>
          </div>
          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-xl p-5 mb-6">
            <p className="text-slate-700 leading-relaxed speakable-summary">
              <strong>Locksmith costs in Kokomo Indiana range from $45 to $250+</strong> depending on the service. Simple car and home lockouts start at $45. Rekeying a lock starts at $25. Transponder key programming starts at $75 — compared to $250–$400 at a dealership. Emergency service is available 24/7 at the same pricing — no after-hours surcharge. All prices are confirmed in writing before work begins.
            </p>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Service</th>
                  <th className="text-center px-4 py-3">Starting Price</th>
                  <th className="text-center px-4 py-3 hidden sm:table-cell">Typical Range</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg hidden md:table-cell">What&apos;s Included</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Car Lockout', '$45', '$45–$85', 'Non-destructive entry, any vehicle'],
                  ['Home Lockout', '$45', '$45–$85', 'Damage-free entry, any lock type'],
                  ['Business Lockout', '$65', '$65–$125', 'Commercial doors & deadbolts'],
                  ['Lock Rekeying', '$25/lock', '$25–$45/lock', 'New key, same hardware, labor'],
                  ['Deadbolt Installation', '$85', '$85–$175', 'Hardware + installation'],
                  ['Smart Lock Installation', '$150', '$150–$300', 'Hardware + app setup'],
                  ['Transponder Key', '$75', '$75–$150', 'Key cut + programming'],
                  ['Key Fob Programming', '$65', '$65–$120', 'OEM or aftermarket'],
                  ['Ignition Repair', '$95', '$95–$200', 'On-site repair'],
                  ['Safe Opening', '$95', '$95–$250', 'Non-destructive when possible'],
                  ['Key Duplication (basic)', '$5', '$5–$15', 'Standard house/padlock keys'],
                  ['High-Security Key Copy', '$20', '$20–$50', 'Medeco, Mul-T-Lock, etc.'],
                ].map(([svc, start, range, includes], i) => (
                  <tr key={svc} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{svc}</td>
                    <td className="px-4 py-3 text-center font-black text-green-700">{start}</td>
                    <td className="px-4 py-3 text-center text-slate-600 hidden sm:table-cell">{range}</td>
                    <td className="px-4 py-3 text-slate-500 text-xs hidden md:table-cell">{includes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="font-bold text-slate-900 text-xl mb-4">What Affects Locksmith Pricing?</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {[
              { factor: 'Service Type', detail: 'Lockouts are the fastest and cheapest service. Key programming and smart lock installation involve more equipment and time.' },
              { factor: 'Lock Brand & Grade', detail: 'Rekeying a standard Kwikset costs less than rekeying a high-security Medeco. Higher-security hardware requires more tools and expertise.' },
              { factor: 'Vehicle Make & Model', detail: 'Newer vehicles with advanced transponder systems take longer to program. European luxury cars often require specialized equipment.' },
              { factor: 'Time of Day', detail: 'Affordable Locksmith does not charge after-hours surcharges. Many national services do — always ask before booking any locksmith.' },
              { factor: 'Location', detail: 'Service within Kokomo city limits is our primary service area. Rural Howard County locations may include a small travel fee.' },
              { factor: 'Number of Locks', detail: 'Rekeying multiple locks in one visit reduces the per-lock cost since the service call is already on-site.' },
            ].map(({ factor, detail }) => (
              <div key={factor} className="flex items-start gap-3 bg-slate-50 rounded-xl p-4">
                <Wrench className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{factor}</div>
                  <div className="text-slate-500 text-xs mt-1">{detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
            <p className="font-bold text-amber-900 mb-2 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" /> Price Transparency Guarantee
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              Affordable Locksmith provides a specific written price before dispatching any technician. We never add fees after arrival. If the job changes in scope (different lock type, additional locks), we discuss and confirm the new price before proceeding. This is not standard practice in the industry — it is our policy because we believe you deserve to know exactly what you are paying.
            </p>
          </div>
        </div>
      </section>

      {/* How to Choose */}
      <section id="choose" className="section-pad bg-slate-50 scroll-mt-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-4">How to Choose a Trustworthy Locksmith in Kokomo Indiana</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Locksmith scams are common throughout Indiana and the US. The most frequent scheme: a national referral service lists cheaply online, dispatches an unlicensed technician, and the price jumps dramatically on arrival. Knowing how to verify a legitimate local locksmith protects you from overpaying or compromising your security.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-8">
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                <CheckCircle className="h-5 w-5" /> A Legitimate Locksmith Will:
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {[
                  'Provide a specific price quote before dispatching',
                  'Arrive in a marked vehicle with company branding',
                  'Wear a uniform with a company name/logo',
                  'Show photo ID when asked',
                  'Confirm they are bonded and insured without hesitation',
                  'Provide an itemized written receipt after the job',
                  'Have verifiable Google reviews under a consistent business name',
                  'Use professional, non-destructive entry tools',
                  'Not recommend drilling unless all other options are exhausted',
                  'Have a local, verifiable phone number — not a national call center',
                ].map(i => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-2xl p-5">
              <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="h-5 w-5" /> Red Flags — Avoid This Locksmith:
              </h3>
              <ul className="space-y-2.5 text-sm text-slate-700">
                {[
                  'Phone quote of $15–$25 for any real locksmith service',
                  'Arrives in an unmarked or personal vehicle',
                  'Cannot name their company or provide contact info',
                  'Immediately claims the lock must be drilled',
                  'Demands cash only, no receipt offered',
                  'Significantly higher price than the phone quote on arrival',
                  'Uses a generic business name that differs by city',
                  'Cannot confirm they are insured',
                  'No verifiable reviews under a consistent business name',
                  'Applies extreme pressure to decide quickly',
                ].map(i => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-5">
            <p className="font-bold text-blue-900 mb-2">The Easiest Check: Search the Business Name Directly</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              Before calling, search the exact business name on Google Maps. A legitimate local locksmith will have consistent reviews under one name, a physical address in the area, and a phone number that matches the number on their website. Affordable Locksmith has served Kokomo under the same name since {BUSINESS_ESTABLISHED} — our reviews, address, and contact information are transparent and verifiable.
            </p>
          </div>
        </div>
      </section>

      {/* Locked Out Step by Step */}
      <section id="locked-out" className="section-pad bg-white scroll-mt-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-4">Locked Out in Kokomo Indiana? Follow These Steps</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            A lockout is stressful, but it is solvable in 30 minutes or less. Following the right steps keeps you safe and ensures the fastest possible resolution.
          </p>
          <div className="space-y-4 mb-8">
            {howToSteps.map((step) => (
              <div key={step.step} className="flex items-start gap-4 bg-slate-50 rounded-xl p-5">
                <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-black text-lg shrink-0">
                  {step.step}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{step.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-red-600 text-white rounded-2xl p-6 text-center">
            <p className="font-black text-xl mb-2">Currently Locked Out in Kokomo?</p>
            <p className="text-red-100 mb-4 text-sm">Call now — a real person answers immediately. We confirm arrival time and price before dispatching.</p>
            <a href={BUSINESS_PHONE_HREF} className="inline-flex items-center gap-3 bg-white text-red-600 font-black px-10 py-4 rounded-xl text-xl hover:bg-red-50 transition-colors phone-pulse">
              <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Security Guide */}
      <section id="security" className="section-pad bg-slate-50 scroll-mt-20">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-slate-200 text-slate-700 rounded-xl p-3">
              <Shield className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Best Locks for Kokomo Homes — 2025 Guide</h2>
          </div>
          <p className="text-slate-600 mb-4 leading-relaxed">
            Not all locks provide equal protection. ANSI (American National Standards Institute) grades locks on security and durability: Grade 1 is the highest, Grade 3 the lowest. For exterior doors on any Kokomo home, Grade 1 is the correct choice. Here is what the best-performing locks for Kokomo homeowners look like:
          </p>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Lock Model</th>
                  <th className="text-center px-4 py-3">Grade</th>
                  <th className="text-center px-4 py-3 hidden sm:table-cell">Pick Resistance</th>
                  <th className="text-center px-4 py-3">Price</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg hidden lg:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {lockGuide.map((row, i) => (
                  <tr key={row.lock} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3">
                      <div className="font-semibold text-slate-900">{row.lock}</div>
                      <div className="text-slate-400 text-xs mt-0.5 hidden sm:block">{row.notes}</div>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${row.grade === '1' ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                        Grade {row.grade}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-slate-600 hidden sm:table-cell">{row.best.includes('security') || row.best.includes('Maximum') ? '★★★★★' : row.best.includes('Smart') || row.best.includes('Value') ? '★★★★☆' : '★★★☆☆'}</td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-900">{row.cost}</td>
                    <td className="px-4 py-3 text-slate-500 text-sm hidden lg:table-cell">{row.best}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-6">
            {[
              { title: 'ANSI Grade 1', desc: 'Exterior doors, deadbolts, and main entry points. Required standard for any serious security.', color: 'green' },
              { title: 'ANSI Grade 2', desc: 'Interior doors and light commercial. Acceptable for inside doors but not exterior entry points.', color: 'amber' },
              { title: 'ANSI Grade 3', desc: 'Minimal residential interior use only. Never install on exterior doors in Kokomo.', color: 'red' },
            ].map(({ title, desc, color }) => (
              <div key={title} className={`rounded-xl p-4 text-sm ${color === 'green' ? 'bg-green-50 border border-green-200' : color === 'amber' ? 'bg-amber-50 border border-amber-200' : 'bg-red-50 border border-red-200'}`}>
                <div className={`font-bold mb-2 ${color === 'green' ? 'text-green-800' : color === 'amber' ? 'text-amber-800' : 'text-red-800'}`}>{title}</div>
                <p className="text-slate-600">{desc}</p>
              </div>
            ))}
          </div>

          <p className="text-slate-600 text-sm leading-relaxed">
            A locksmith can supply and professionally install any of these locks, ensuring correct fit and proper deadbolt throw. Improper DIY installation of even a Grade 1 lock can make it easier to defeat if the deadbolt doesn&apos;t fully engage with the strike plate.
          </p>
        </div>
      </section>

      {/* Local Kokomo Context */}
      <section className="section-pad bg-blue-50 scroll-mt-20">
        <div className="container-custom max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 text-blue-700 rounded-xl p-3">
              <MapPin className="h-6 w-6" />
            </div>
            <h2 className="text-3xl font-black text-slate-900">Serving All of Kokomo Indiana and Howard County</h2>
          </div>
          <p className="text-slate-600 mb-6 leading-relaxed">
            Affordable Locksmith is locally based in Kokomo Indiana — not a national call center dispatching out-of-area contractors. When you call, you reach a team that knows Sycamore Street, Markland Avenue, US-31, Highland Park, Kokomo Beach, and every neighborhood in Howard County. That local knowledge means faster response and a team with real accountability to this community.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Kokomo Neighborhoods We Serve</h3>
              <div className="flex flex-wrap gap-2">
                {['Downtown Kokomo', 'Highland Park', 'Sycamore Hills', 'Kings Crossing', 'North Kokomo', 'South Kokomo', 'Boulevard Heights', 'Bon Air', 'Western Avenue', 'Markland Avenue', 'East Side', 'West Side'].map(n => (
                  <span key={n} className="bg-white rounded-lg px-3 py-1.5 text-xs text-slate-700 border border-slate-200 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-blue-500" />{n}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-900 mb-3">Surrounding Areas We Cover</h3>
              <div className="flex flex-wrap gap-2">
                {['Greentown', 'Russiaville', 'Tipton', 'Logansport', 'Peru', 'Frankfort', 'Marion', 'Wabash', 'Flora', 'Galveston', 'Bunker Hill', 'Amboy'].map(n => (
                  <span key={n} className="bg-white rounded-lg px-3 py-1.5 text-xs text-slate-700 border border-slate-200 flex items-center gap-1">
                    <MapPin className="h-3 w-3 text-slate-400" />{n}, IN
                  </span>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl p-5 shadow-sm">
            <p className="text-slate-600 text-sm leading-relaxed">
              <strong>Common Kokomo Lockout Scenarios We Respond To:</strong> Locked out at the Kokomo Municipal Stadium during a Jackrabbits game. Keys locked in the car at the Kokomo Center. Can&apos;t get into your home near Highland Park after forgetting keys at work. Business lockout on Sycamore Street before opening. Lost keys at the GraceCourt Family Church parking lot. We respond to all of these — and everything in between — 24 hours a day.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section-pad bg-white scroll-mt-20">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8">Expert Answers — Locksmith FAQ for Kokomo Indiana</h2>
          <div className="space-y-6">
            {guideFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-slate-100 pb-6 last:border-0">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed faq-answer text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 bg-blue-50 rounded-xl">
            <p className="text-slate-600 text-sm">
              Have a question not answered here? <a href={BUSINESS_PHONE_HREF} className="text-blue-600 font-semibold">Call us at {BUSINESS_PHONE_DISPLAY}</a> or visit our <Link href="/faq" className="text-blue-600 font-semibold">complete locksmith FAQ page</Link> with 40+ additional questions answered.
            </p>
          </div>
        </div>
      </section>

      {/* EEAT / About */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 mb-4">About Affordable Locksmith — Kokomo Indiana</h2>
          <div className="grid sm:grid-cols-2 gap-6 mb-6">
            <p className="text-slate-600 leading-relaxed text-sm">
              Affordable Locksmith has served Kokomo, Indiana and Howard County since {BUSINESS_ESTABLISHED} — {BUSINESS_YEARS_EXPERIENCE}+ years of owner-operated, community-rooted service. We are not a franchise. We are not a national call center. We are a family business built on Kokomo&apos;s values of hard work, accountability, and fair dealing.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm">
              Every service call involves our own trained technicians. We carry full general liability insurance and stand behind every job with a satisfaction guarantee. Our 4.9-star rating from 247+ verified customers reflects the standard we hold ourselves to on every single call — whether it&apos;s a $45 lockout or a $500 commercial security installation.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { value: `${BUSINESS_YEARS_EXPERIENCE}+`, label: 'Years in Kokomo' },
              { value: '15,000+', label: 'Jobs Completed' },
              { value: '4.9★', label: 'Google Rating' },
              { value: '24/7', label: 'Availability' },
            ].map(({ value, label }) => (
              <div key={label} className="bg-white rounded-xl p-4 text-center shadow-sm">
                <div className="text-2xl font-black text-blue-600">{value}</div>
                <div className="text-slate-500 text-xs mt-1">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Internal Links */}
      <section className="section-pad bg-white border-t border-slate-100">
        <div className="container-custom max-w-4xl">
          <h2 className="text-xl font-black text-slate-900 mb-6">Explore All Locksmith Services in Kokomo Indiana</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { href: '/services/automotive-locksmith', label: 'Automotive Locksmith', desc: 'Car lockouts, key programming, fobs' },
              { href: '/services/residential-locksmith', label: 'Residential Locksmith', desc: 'Home security, rekeying, deadbolts' },
              { href: '/services/commercial-locksmith', label: 'Commercial Locksmith', desc: 'Business security, master keys' },
              { href: '/services/emergency-locksmith', label: 'Emergency Locksmith', desc: '24/7 response — 15–30 min' },
              { href: '/services/key-services', label: 'Key Services', desc: 'Cutting, programming, duplicating' },
              { href: '/services/safe-services', label: 'Safe & Vault Services', desc: 'Safe opening, combination changes' },
              { href: '/service-areas/kokomo-in', label: 'Locksmith in Kokomo, IN', desc: 'Primary service area page' },
              { href: '/faq', label: 'Locksmith FAQ', desc: '40+ questions answered' },
              { href: '/kokomo-indiana', label: 'Kokomo Indiana Guide', desc: 'Safety, neighborhoods, local info' },
            ].map(({ href, label, desc }) => (
              <Link key={href} href={href} className="flex items-center gap-3 bg-slate-50 hover:bg-blue-50 rounded-xl p-4 transition-colors group border border-slate-100 hover:border-blue-200">
                <ArrowRight className="h-4 w-4 text-blue-500 shrink-0 group-hover:translate-x-1 transition-transform" />
                <div>
                  <div className="font-semibold text-slate-900 text-sm group-hover:text-blue-700">{label}</div>
                  <div className="text-slate-400 text-xs">{desc}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-hero-gradient text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">
            Need a Locksmith in Kokomo Indiana Right Now?
          </h2>
          <p className="text-blue-100 text-lg mb-8 max-w-xl mx-auto">
            {BUSINESS_YEARS_EXPERIENCE}+ years. 4.9 stars. Real people. Real local service. One call and we&apos;re on the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href={BUSINESS_PHONE_HREF} className="inline-flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-600 text-white font-black px-10 py-4 rounded-xl text-xl transition-colors shadow-xl phone-pulse">
              <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:bg-white/10">
              Get a Free Quote
            </Link>
          </div>
          <p className="text-blue-300 text-sm mt-4">24/7 emergency service · 15–30 min Kokomo response · No hidden fees · Price confirmed before dispatch</p>
        </div>
      </section>
    </>
  );
}
