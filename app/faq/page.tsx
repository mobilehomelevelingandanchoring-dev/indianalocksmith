import type { Metadata } from 'next';
import { Phone, DollarSign, Clock, Car, Home, Shield, Key, CheckCircle, AlertTriangle, Star } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE, BUSINESS_YEARS_EXPERIENCE } from '@/lib/constants';
import { buildFAQSchema, buildSpeakableSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Locksmith FAQ Kokomo Indiana | Costs, Services & Scam Tips | (855) 633-0750',
  description:
    'Answers to every locksmith question in Kokomo Indiana — how much locksmiths cost, emergency service times, car key programming, rekeying vs replacing, smart locks, and how to avoid scams.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/faq` },
  openGraph: {
    title: 'Locksmith FAQ Kokomo Indiana — Costs, Services & Tips',
    description: 'Complete locksmith FAQ guide for Kokomo Indiana. Costs, emergency service, car keys, rekeying, smart locks, and avoiding scams. Answered by a 39-year local expert.',
  },
};

const pricingData = [
  { service: 'Car Lockout', low: '$45', high: '$85', notes: 'Most common, 15-30 min' },
  { service: 'Home Lockout', low: '$45', high: '$85', notes: 'Damage-free entry' },
  { service: 'Lock Rekeying (per lock)', low: '$25', high: '$45', notes: 'Fastest security upgrade' },
  { service: 'Lock Installation', low: '$85', high: '$200', notes: 'Includes hardware' },
  { service: 'Key Duplication', low: '$5', high: '$25', notes: 'Standard vs high-security' },
  { service: 'Transponder Key', low: '$75', high: '$150', notes: 'vs $250-400 at dealer' },
  { service: 'Key Fob Programming', low: '$65', high: '$120', notes: 'OEM or aftermarket' },
  { service: 'Safe Opening', low: '$95', high: '$250', notes: 'Type & complexity varies' },
  { service: 'Ignition Repair', low: '$95', high: '$200', notes: 'On-site service' },
  { service: 'Deadbolt Installation', low: '$85', high: '$175', notes: 'Hardware included' },
];

const lockComparison = [
  { brand: 'Schlage B60N', grade: '1', pickResist: 'Excellent', bumpResist: 'Excellent', price: '$45–$75', verdict: 'Best overall security' },
  { brand: 'Kwikset 980', grade: '1', pickResist: 'Good', bumpResist: 'Good', price: '$35–$60', verdict: 'Best value' },
  { brand: 'Medeco Maxum', grade: '1', pickResist: 'Superior', bumpResist: 'Superior', price: '$120–$160', verdict: 'High-security choice' },
  { brand: 'Kwikset SmartKey', grade: '2', pickResist: 'Fair', bumpResist: 'Good', price: '$25–$45', verdict: 'Easy DIY rekey' },
  { brand: 'Yale Assure SL', grade: '1', pickResist: 'Excellent', bumpResist: 'Excellent', price: '$150–$250', verdict: 'Best smart lock' },
];

const allFaqs = [
  // Costs
  { question: 'How much does a locksmith cost in Kokomo Indiana?', answer: 'Most locksmith services in Kokomo Indiana range from $45 to $200 depending on the job. A car or home lockout starts at $45. Lock rekeying starts at $25 per lock. Transponder key programming starts at $75. At Affordable Locksmith, we confirm the exact price before starting any work — no hidden fees.' },
  { question: 'How much does emergency locksmith service cost?', answer: 'Emergency locksmith calls in Kokomo typically range from $45 to $150. Some companies charge after-hours surcharges of $20–$50; at Affordable Locksmith, our pricing remains consistent 24/7. We always confirm the total cost before dispatching, so there are never surprise bills.' },
  { question: 'Is it cheaper to rekey or replace locks?', answer: 'Rekeying is almost always cheaper. Rekeying a lock in Kokomo costs $25–$45 per lock and changes only the internal pins so a new key works. Replacing a lock costs $85–$200 and installs entirely new hardware. Rekey when the lock is in good condition; replace when the lock is damaged or you want to upgrade security.' },
  { question: 'Are locksmiths cheaper than dealerships for car keys?', answer: 'Yes — typically 40–60% less. A dealer transponder key for a common vehicle like a Toyota Camry or Honda Civic often costs $250–$400. A licensed automotive locksmith in Kokomo can program the same key for $75–$150. The quality is equivalent because we use the same key programming standards.' },
  { question: 'How much does key duplication cost?', answer: 'Standard house key copies cost $5–$10 at most locksmiths and hardware stores. High-security keys (Medeco, Mul-T-Lock) cost $15–$30. Car key copies without a transponder cost $5–$15. Transponder key duplication costs $75–$150 including programming.' },
  { question: 'How much does it cost to replace all locks in a house?', answer: 'Replacing all locks in a typical Kokomo home with 3–5 exterior locks costs $350–$700 for labor and standard hardware. For high-security or smart locks, budget $500–$1,500. Rekeying all locks is a cheaper alternative at $75–$175 total if the existing locks are in good shape.' },
  // Emergency
  { question: 'Do locksmiths work 24/7 in Kokomo Indiana?', answer: 'Yes — Affordable Locksmith answers 24 hours a day, 7 days a week, 365 days a year in Kokomo and Howard County. When you call, a real person answers immediately. No hold music, no voicemail, no call centers. Our average response time in Kokomo is 15–30 minutes.' },
  { question: 'How long does a locksmith take to arrive in Kokomo?', answer: 'Our average arrival time within Kokomo city limits is 15–30 minutes. We are locally based in Howard County, so we reach you faster than national dispatch services that use out-of-area contractors. Rural Howard County areas may be 30–45 minutes depending on location.' },
  { question: 'What should I do if I am locked out?', answer: 'Stay calm and move to a safe, well-lit area. Check if any other doors or windows are unlocked (only attempt entry to your own property). Call a trusted local locksmith — have your ID ready to confirm ownership. Avoid DIY entry attempts, which risk damaging your lock or door. Never use a credit card to attempt entry on modern locks.' },
  { question: 'Are locksmiths available on holidays in Kokomo?', answer: 'Yes. Affordable Locksmith provides full 24/7 service every holiday including Christmas, Thanksgiving, New Year\'s Eve, and July 4th. Lockouts don\'t follow the calendar, and neither do we.' },
  // Automotive
  { question: 'Can locksmiths program transponder car keys?', answer: 'Yes. A professional automotive locksmith can cut and program transponder keys for most makes and models including Toyota, Honda, Ford, GM, Chrysler, Hyundai, and many European brands. We carry programming equipment on our service vehicles, so we handle it on the spot.' },
  { question: 'Can a locksmith make a car key without the original?', answer: 'Yes. For most vehicles, we can cut and program a new key using your Vehicle Identification Number (VIN) and proof of ownership. This applies to transponder keys, high-security laser-cut keys, and key fobs. You do not need a working key to get a replacement.' },
  { question: 'Can a locksmith make a key from the VIN number?', answer: 'Yes — the VIN contains information we can use to identify your key code and cut the correct key blank. Combined with our programming equipment, we can create a fully functional replacement key on-site without any existing keys.' },
  { question: 'Can a locksmith unlock a car without damaging it?', answer: 'Yes. Professional locksmiths use non-destructive entry tools specifically engineered for vehicle lockouts. We have unlocked thousands of cars in Kokomo without a single scratch. We never drill or force entry — the process is invisible and leaves no marks on your door, lock, or paint.' },
  { question: 'Can locksmiths cut laser-cut or high-security car keys?', answer: 'Yes. We carry laser-key cutting equipment for high-security vehicle keys (often called "sidewinder" or "internal cut" keys). These require specialized equipment that most hardware stores do not have. We service most vehicles that require laser-cut keys.' },
  { question: 'How much does key fob programming cost in Kokomo?', answer: 'Key fob programming in Kokomo typically costs $65–$120 depending on the vehicle make and model. This is significantly less than dealer pricing, which often ranges from $150–$350 for the same service.' },
  // Home & Residential
  { question: 'Should I change locks after buying a house?', answer: 'Yes — always rekey or replace your locks when moving into a new home. Previous owners, contractors, neighbors, and real estate agents may have copies of the old keys. Rekeying all exterior locks costs $75–$175 and is the fastest, most affordable way to ensure only you have access.' },
  { question: 'What is the difference between rekeying and changing locks?', answer: 'Rekeying changes the internal pin tumblers inside the existing lock cylinder so only a new key will work. The lock hardware stays the same. Changing locks removes the entire lock and installs new hardware. Rekeying is faster and cheaper; lock replacement is better when the lock is damaged or you want to upgrade security quality.' },
  { question: 'Can I rekey locks myself?', answer: 'It is possible with a rekeying kit ($10–$20) but requires care and patience. One wrong pin or spring will result in a non-functioning lock. Professional rekeying takes 5–10 minutes per lock, is guaranteed to work, and often costs only $25–$45 per lock. Most homeowners find hiring a locksmith more reliable and not much more expensive than DIY kits.' },
  { question: 'How often should house locks be changed?', answer: 'Most high-quality locks last 10–20 years with normal use. Replace locks when: they show visible wear or sticking, you move into a new home, keys are lost or stolen, after a break-in or domestic dispute, or when upgrading to higher security. Rekeying instead of replacing extends the life of good locks.' },
  { question: 'Should I rekey or replace locks after a breakup or divorce?', answer: 'Yes — rekeying is the fastest and most affordable solution. A locksmith can rekey all your exterior locks in under an hour. This immediately prevents entry with any previously existing keys without replacing the hardware.' },
  // Lock types & Security
  { question: 'What type of lock is most secure for front doors?', answer: 'A Grade 1 ANSI-rated deadbolt with a 1-inch throw bolt provides the strongest entry protection. Top recommendations are Schlage B60N, Medeco Maxum, or Mul-T-Lock MT5+. Pair it with a reinforced strike plate with 3-inch screws for maximum security. Grade 1 deadbolts resist picking, bumping, and kick-in attacks far better than Grade 2 or Grade 3 locks.' },
  { question: 'Is Schlage better than Kwikset?', answer: 'For security, Schlage generally outperforms standard Kwikset locks. Schlage B-Series deadbolts are ANSI Grade 1, offer better pick and bump resistance, and are made with a harder metal alloy. Kwikset\'s SmartKey system offers convenient rekeying but slightly lower pick resistance. Both are reputable brands; Schlage is the more common professional recommendation for exterior doors.' },
  { question: 'Are smart locks safer than traditional locks?', answer: 'Modern smart locks with Grade 1 deadbolt cylinders are as physically secure as traditional locks. The added risk is digital: weak passwords, unpatched firmware, or insecure Wi-Fi can expose smart locks to cyber attacks. Best practice: use a smart lock with a Grade 1 deadbolt cylinder, strong unique PIN codes, and keep firmware updated.' },
  { question: 'What locks do burglars avoid?', answer: 'Burglars avoid Grade 1 deadbolts with reinforced strike plates, high-security locks (Medeco, Mul-T-Lock), visible security cameras, and homes with alarm system signs. The biggest deterrent is difficulty — most break-ins are opportunistic and target the easiest entry. A $60 Grade 1 deadbolt properly installed stops the majority of attempted forced entries.' },
  { question: 'What are bump-proof locks?', answer: 'Bump-resistant or bump-proof locks have modified pin designs that resist the "key bumping" technique. High-security brands like Medeco, Mul-T-Lock, and ASSA ABLOY use rotating pins and sidebars that make bumping nearly impossible. Standard Kwikset and Schlage locks have varying degrees of bump resistance.' },
  { question: 'What is key bumping?', answer: 'Key bumping is a picking technique where a specially cut "bump key" is tapped while turned to exploit the physics of pin tumbler locks. It can open most standard pin tumbler locks in seconds. Protection: upgrade to a bump-resistant lock (Grade 1 with security pins) or a high-security lock brand.' },
  // Trust & Scams
  { question: 'How do I find a trustworthy locksmith in Kokomo?', answer: 'Look for: a local phone number (not a national referral line), a marked service vehicle, the locksmith wearing a uniform with a company name, willingness to provide a written quote before starting work, verifiable reviews on Google or BBB, and proof of insurance. Ask for their business name and license/insurance number. Avoid locksmiths who give vague phone estimates and significantly increase the price on arrival.' },
  { question: 'How do locksmith scams work?', answer: 'Common locksmith scams: (1) A national middleman advertises cheaply online but dispatches an unlicensed contractor who charges much more on arrival. (2) The technician claims the lock is "destroyed" and must be drilled and replaced — an unnecessary upsell. (3) They demand cash only and won\'t provide a written receipt. Protection: always ask for the total price in writing before work begins and use a locally known, reviewable business.' },
  { question: 'Are locksmiths licensed in Indiana?', answer: 'Indiana does not currently require a state license for locksmiths. This makes it even more important to choose a locksmith with verifiable reviews, business insurance, years of local operation, and transparent pricing. Always ask if the locksmith is bonded and insured — a professional will confirm this without hesitation.' },
  { question: 'What proof does a locksmith need before unlocking my property?', answer: 'A reputable locksmith will ask for government-issued photo ID and verify it matches the address or vehicle registration. For cars, vehicle registration or title. For homes, a utility bill or lease agreement may also be requested. This verification protects both you and ensures no one can hire a locksmith to enter your property without permission.' },
  { question: 'What should a locksmith invoice include?', answer: 'A proper locksmith invoice should include: business name, address, and phone number; technician name; detailed description of work performed; parts used (lock brand, key type); itemized pricing; total amount charged; payment method; and a warranty statement. Request one even if paying cash.' },
  // Near Me / Local
  { question: 'Who is the best locksmith in Kokomo Indiana?', answer: 'Affordable Locksmith is widely rated the best locksmith in Kokomo Indiana. With 39+ years of continuous local service, owner-operated accountability, 4.9-star ratings from 247+ reviews, and true 24/7 availability, we\'ve earned that reputation by treating every customer like family.' },
  { question: 'Where can I get keys made in Kokomo Indiana?', answer: 'Affordable Locksmith provides full key cutting and duplication services in Kokomo for house keys, car keys, transponder keys, high-security keys, and key fobs. We are a fully mobile service and come to your location. Hardware stores (Lowe\'s, Home Depot, Ace) cut basic house keys but typically cannot handle car transponder keys or high-security keys.' },
  { question: 'Can a locksmith come to my location in Kokomo?', answer: 'Yes — we are fully mobile and come to you anywhere in Kokomo, Howard County, and surrounding areas. We do not have a storefront you visit; we bring all equipment to your car, home, or business. This is the standard model for professional locksmiths.' },
  { question: 'Which locksmith is open now in Kokomo?', answer: 'Affordable Locksmith is open right now — 24 hours a day, 7 days a week. Call (855) 633-0750 and a real person will answer immediately, any time of day or night.' },
  // Smart Locks
  { question: 'Can locksmiths install smart locks?', answer: 'Yes. We install and configure smart locks including Schlage Encode, Yale Assure, Kwikset Halo, and August smart locks. We ensure the lock is properly fitted, the deadbolt engages correctly, and the app is set up before we leave. Smart lock installation in Kokomo typically takes 30–45 minutes.' },
  { question: 'Are keypad locks worth it?', answer: 'Yes for most homeowners. Keypad locks eliminate key management, allow temporary codes for housekeepers or guests, and many integrate with home security systems. Grade 1 keypad deadbolts (Schlage Encode, Yale Assure) are as secure as keyed locks. The main downside: batteries die and need replacing every 6–12 months.' },
  { question: 'Are smart locks hackable?', answer: 'In theory, yes — like any internet-connected device. In practice, hacking a smart lock requires technical skill and proximity, making physical break-ins far more common. Risk reduction: use unique strong PIN codes, enable two-factor authentication if available, keep firmware updated, and use a separate network for smart home devices.' },
  { question: 'Which smart lock is best?', answer: 'Top-rated smart locks: Schlage Encode Plus (best overall security, built-in deadbolt), Yale Assure Lock 2 (great app, multiple connectivity), August Wi-Fi Smart Lock (retrofits existing deadbolt), Kwikset Halo Touch (fingerprint entry). All perform best paired with a Grade 1 deadbolt cylinder.' },
  // Commercial
  { question: 'Do locksmiths offer commercial services in Kokomo?', answer: 'Yes. Affordable Locksmith provides full commercial locksmith services in Kokomo including business lockouts, master key systems, access control installation, panic bar installation, high-security lock upgrades, file cabinet locks, and security audits for businesses of all sizes.' },
  { question: 'What is master keying?', answer: 'A master key system lets one master key open all locks in a building while individual keys only open specific doors. This is common in offices, apartments, and commercial buildings where managers need universal access. A locksmith designs and keys the system to your access hierarchy.' },
  { question: 'How much does commercial rekeying cost?', answer: 'Commercial rekeying in Kokomo typically runs $25–$45 per lock for standard rekeying. A full office building with 10–20 locks might cost $300–$700. Master key systems start at around $200 for a small office and increase with the number of locks and complexity of the access hierarchy.' },
  // Other
  { question: 'Can locksmiths open safes?', answer: 'Yes. A qualified locksmith can open most residential and commercial safes, including dial combination safes, electronic digital safes, fire safes, and gun safes. Methods include manipulation (no damage), drilling as a last resort (repairs follow), and scope-and-drill for electronic safes. Safe opening in Kokomo starts at $95.' },
  { question: 'Can locksmiths replace motorcycle keys?', answer: 'Yes. We service motorcycles, scooters, and ATVs — cutting keys and programming transponders for most major brands including Honda, Yamaha, Kawasaki, Harley-Davidson, and Suzuki.' },
  { question: 'Can a locksmith unlock a digital safe?', answer: 'Yes. For digital/electronic safes, locksmiths can use override codes, bypass procedures, or scope-and-dial techniques depending on the manufacturer and model. If the battery is dead, many digital safes have an external battery port — a locksmith can advise the simplest solution first.' },
  { question: 'Will my insurance cover a locksmith call?', answer: 'Homeowners insurance may cover a locksmith if you are locked out as a result of a covered event (theft of keys, for example). Standard lockouts are generally not covered. Some roadside assistance plans (AAA, insurer add-ons) cover vehicle lockouts. Check your policy\'s "emergency roadside service" rider.' },
  { question: 'Can locksmiths clone key fobs?', answer: 'Locksmiths can duplicate many types of proximity fobs (access control fobs for offices and apartments) and program replacement automotive remote key fobs. True cryptographic automotive transponders cannot be "cloned" but can be programmed as authorized replacements using the vehicle\'s on-board programming procedure.' },
  { question: 'What is the difference between Grade 1 and Grade 2 locks?', answer: 'ANSI/BHMA grades rate lock security and durability. Grade 1 (highest): withstands 250,000+ open/close cycles and heavy forced entry. Grade 2: 150,000 cycles, suitable for light commercial use. Grade 3: 100,000 cycles, basic residential. Use Grade 1 on all exterior doors.' },
  { question: 'How long does it take to rekey a house?', answer: 'A professional locksmith can rekey a typical home (3–5 exterior locks) in 30–60 minutes. Rekeying one lock takes about 10 minutes. The process does not damage any hardware and your new keys are ready immediately. Affordable Locksmith carries the most common Kwikset and Schlage rekey kits on the service vehicle.' },
];

const costFaqs = allFaqs.slice(0, 6);
const emergencyFaqs = allFaqs.slice(6, 10);
const autoFaqs = allFaqs.slice(10, 16);
const homeFaqs = allFaqs.slice(16, 21);
const securityFaqs = allFaqs.slice(21, 27);
const trustFaqs = allFaqs.slice(27, 32);

export default function FAQPage() {
  const faqSchema = buildFAQSchema(allFaqs);
  const speakableSchema = buildSpeakableSchema(`${BUSINESS_WEBSITE}/faq`);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white py-14 lg:py-18">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'FAQ', href: '/faq' }]} />
          <div className="max-w-3xl mt-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <Shield className="h-4 w-4" />
              Complete Locksmith Resource — Kokomo, Indiana
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-5 speakable-summary">
              Locksmith FAQ — Kokomo Indiana
            </h1>

            {/* AI Overview Quick Answer box */}
            <div className="bg-white/10 border border-white/20 rounded-2xl p-6 mb-6">
              <p className="text-xs font-bold text-blue-300 uppercase tracking-wider mb-2">Quick Answer</p>
              <p className="text-blue-50 text-lg leading-relaxed speakable-summary">
                A locksmith in Kokomo Indiana typically costs $45–$150. Emergency service is available 24/7 with 15–30 minute response. Car lockouts start at $45, rekeying starts at $25 per lock, and transponder keys start at $75 — all significantly less than dealership pricing. Call <strong>(855) 633-0750</strong> any time.
              </p>
            </div>

            <a href={BUSINESS_PHONE_HREF} className="btn-accent text-lg px-8 py-3 inline-flex">
              <Phone className="h-5 w-5" /> Call {BUSINESS_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* AI Overview Summary */}
      <section className="bg-blue-50 border-b border-blue-100 py-8">
        <div className="container-custom max-w-3xl">
          <p className="text-sm font-bold text-blue-700 uppercase tracking-wider mb-3">About This Guide</p>
          <p className="text-slate-700 leading-relaxed speakable-summary">
            This FAQ guide is written by Affordable Locksmith — Kokomo Indiana&apos;s most trusted locksmith with {BUSINESS_YEARS_EXPERIENCE}+ years of experience. We answer every common question about locksmith costs, emergency service, car key programming, home security, lock brands, and how to avoid scams. Every answer reflects real-world experience serving Howard County families and businesses since 1985.
          </p>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section id="cost" className="section-pad bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 text-green-700 rounded-xl p-2.5">
              <DollarSign className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Locksmith Costs in Kokomo Indiana</h2>
          </div>

          <div className="overflow-x-auto mb-10">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Service</th>
                  <th className="text-center px-4 py-3">Starting Price</th>
                  <th className="text-center px-4 py-3">Typical Range</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg hidden md:table-cell">Notes</th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((row, i) => (
                  <tr key={row.service} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.service}</td>
                    <td className="px-4 py-3 text-center font-black text-green-700">{row.low}</td>
                    <td className="px-4 py-3 text-center text-slate-600">{row.low}–{row.high}</td>
                    <td className="px-4 py-3 text-slate-500 hidden md:table-cell">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mb-10">* Prices confirmed before work begins. Final cost depends on lock type and vehicle make/model. No hidden fees.</p>

          <div className="space-y-6">
            {costFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-slate-100 pb-6 last:border-0">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Service Section */}
      <section id="emergency" className="section-pad bg-red-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-red-100 text-red-700 rounded-xl p-2.5">
              <Clock className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Emergency Locksmith — 24/7 Kokomo Indiana</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Response Time', value: '15–30 Min', note: 'Kokomo city limits' },
              { label: 'Availability', value: '24 / 7', note: '365 days a year' },
              { label: 'Call Answered By', value: 'Real Person', note: 'No hold, no voicemail' },
            ].map((stat) => (
              <div key={stat.label} className="bg-white rounded-xl p-5 text-center shadow-sm border border-red-100">
                <div className="text-3xl font-black text-red-600 mb-1">{stat.value}</div>
                <div className="font-semibold text-slate-900 text-sm">{stat.label}</div>
                <div className="text-slate-500 text-xs mt-1">{stat.note}</div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {emergencyFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-red-100 pb-6 last:border-0">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <a href={BUSINESS_PHONE_HREF} className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-black px-10 py-4 rounded-xl text-xl transition-colors shadow-lg phone-pulse">
              <Phone className="h-6 w-6" /> Emergency Line: {BUSINESS_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Automotive Section */}
      <section id="car" className="section-pad bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-blue-100 text-blue-700 rounded-xl p-2.5">
              <Car className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Car & Automotive Locksmith Questions</h2>
          </div>

          {/* Dealer vs Locksmith comparison */}
          <div className="bg-blue-50 rounded-2xl p-6 mb-10">
            <h3 className="font-bold text-slate-900 mb-4">Car Key Cost: Locksmith vs Dealer</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="text-left border-b-2 border-blue-200">
                    <th className="pb-2 text-slate-600">Vehicle / Key Type</th>
                    <th className="pb-2 text-right text-red-600">Dealer Cost</th>
                    <th className="pb-2 text-right text-green-700">Locksmith Cost</th>
                    <th className="pb-2 text-right text-slate-500 hidden sm:table-cell">You Save</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-blue-100">
                  {[
                    { vehicle: 'Honda / Toyota Transponder', dealer: '$250–$350', locksmith: '$80–$120', save: '~55%' },
                    { vehicle: 'Ford / GM / Chrysler Key Fob', dealer: '$200–$400', locksmith: '$65–$130', save: '~60%' },
                    { vehicle: 'BMW / Mercedes Smart Key', dealer: '$400–$700', locksmith: '$200–$350', save: '~45%' },
                    { vehicle: 'Laser-Cut High-Security Key', dealer: '$300–$500', locksmith: '$120–$200', save: '~55%' },
                  ].map((row) => (
                    <tr key={row.vehicle}>
                      <td className="py-2.5 text-slate-700">{row.vehicle}</td>
                      <td className="py-2.5 text-right text-red-600 font-medium">{row.dealer}</td>
                      <td className="py-2.5 text-right text-green-700 font-bold">{row.locksmith}</td>
                      <td className="py-2.5 text-right text-slate-500 hidden sm:table-cell">{row.save}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-6">
            {autoFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-slate-100 pb-6 last:border-0">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services/automotive-locksmith" className="btn-primary mr-4">
              Automotive Locksmith Services
            </Link>
          </div>
        </div>
      </section>

      {/* Home Section */}
      <section id="home" className="section-pad bg-green-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 text-green-700 rounded-xl p-2.5">
              <Home className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Home & Residential Lock Questions</h2>
          </div>

          <div className="bg-white rounded-2xl p-6 mb-10 shadow-sm">
            <h3 className="font-bold text-slate-900 mb-4">Rekey vs Replace — Quick Comparison</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="font-bold text-green-700 mb-3 flex items-center gap-2"><CheckCircle className="h-5 w-5" /> Rekey (Recommended When)</div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {['Moving into a new home', 'Lost or stolen keys', 'After a breakup or roommate change', 'Lock hardware is in good condition', 'You want the fastest, cheapest solution', 'All locks are same brand (one-visit service)'].map(i => (
                    <li key={i} className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />{i}</li>
                  ))}
                </ul>
                <div className="mt-4 font-bold text-green-700">Cost: $25–$45 per lock</div>
              </div>
              <div>
                <div className="font-bold text-blue-700 mb-3 flex items-center gap-2"><Key className="h-5 w-5" /> Replace (Recommended When)</div>
                <ul className="space-y-2 text-sm text-slate-600">
                  {['Lock is damaged, sticking, or worn', 'Upgrading to a higher security grade', 'Installing a smart lock', 'Lock cannot be rekeyed (proprietary)', 'Door alignment has changed', 'You want new hardware aesthetics'].map(i => (
                    <li key={i} className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />{i}</li>
                  ))}
                </ul>
                <div className="mt-4 font-bold text-blue-700">Cost: $85–$200 per lock</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {homeFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-green-100 pb-6 last:border-0">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/services/residential-locksmith" className="btn-primary">
              Residential Locksmith Services
            </Link>
          </div>
        </div>
      </section>

      {/* Security & Lock Brands Section */}
      <section id="locks" className="section-pad bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-slate-100 text-slate-700 rounded-xl p-2.5">
              <Shield className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Lock Security & Product Questions</h2>
          </div>

          {/* Lock comparison table */}
          <div className="mb-10 overflow-x-auto">
            <h3 className="font-bold text-slate-900 mb-4">Top Door Lock Comparison — 2025</h3>
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Lock</th>
                  <th className="text-center px-4 py-3">ANSI Grade</th>
                  <th className="text-center px-4 py-3 hidden sm:table-cell">Pick Resist.</th>
                  <th className="text-center px-4 py-3 hidden md:table-cell">Bump Resist.</th>
                  <th className="text-center px-4 py-3">Price</th>
                  <th className="text-left px-4 py-3 rounded-tr-lg hidden lg:table-cell">Best For</th>
                </tr>
              </thead>
              <tbody>
                {lockComparison.map((row, i) => (
                  <tr key={row.brand} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.brand}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${row.grade === '1' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                        Grade {row.grade}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center text-slate-600 hidden sm:table-cell">{row.pickResist}</td>
                    <td className="px-4 py-3 text-center text-slate-600 hidden md:table-cell">{row.bumpResist}</td>
                    <td className="px-4 py-3 text-center font-semibold text-slate-900">{row.price}</td>
                    <td className="px-4 py-3 text-slate-500 hidden lg:table-cell">{row.verdict}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-xs text-slate-400 mt-2">Prices are approximate retail. A locksmith can supply and install any of these locks.</p>
          </div>

          <div className="space-y-6">
            {securityFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-slate-100 pb-6 last:border-0">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Scam Avoidance */}
      <section id="trust" className="section-pad bg-amber-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-amber-100 text-amber-700 rounded-xl p-2.5">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">How to Find a Trustworthy Locksmith & Avoid Scams</h2>
          </div>
          <p className="text-slate-600 mb-8 max-w-2xl">Locksmith scams are common across the US, including Indiana. Here is how to protect yourself.</p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            <div className="bg-green-50 border border-green-200 rounded-xl p-5">
              <div className="font-bold text-green-800 mb-3 flex items-center gap-2"><CheckCircle className="h-5 w-5" /> Signs of a Legitimate Locksmith</div>
              <ul className="space-y-2 text-sm text-slate-700">
                {['Local phone number (not a referral service)', 'Marked vehicle with company name/logo', 'Technician wears a uniform with company ID', 'Gives a written price quote before starting work', 'Provides a detailed invoice after work', 'Has verifiable Google reviews under their real business name', 'Can confirm they are bonded and insured', 'Uses professional, non-destructive tools'].map(i => (
                  <li key={i} className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <div className="font-bold text-red-800 mb-3 flex items-center gap-2"><AlertTriangle className="h-5 w-5" /> Red Flags to Watch For</div>
              <ul className="space-y-2 text-sm text-slate-700">
                {['Unusually low quote on the phone ($15–$25 for any service)', 'Arrives in an unmarked or personal vehicle', 'Claims the lock must be drilled without attempting other methods', 'Demands cash only with no receipt', 'Price jumps significantly after arrival', 'Cannot name their company or provide insurance proof', 'Uses generic business names that vary by city', 'No verifiable reviews under a consistent business name'].map(i => (
                  <li key={i} className="flex items-start gap-2"><div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-1.5 shrink-0" />{i}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            {trustFaqs.map((faq) => (
              <div key={faq.question} className="border-b border-amber-100 pb-6 last:border-0">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full FAQ dump — remaining questions */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title mb-8">More Locksmith Questions Answered</h2>
          <div className="space-y-5">
            {allFaqs.slice(32).map((faq) => (
              <div key={faq.question} className="bg-white rounded-xl p-5 shadow-sm border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                <p className="text-slate-600 text-sm leading-relaxed faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EEAT / About Section */}
      <section className="section-pad bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-4">About This FAQ — Our Credentials</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            These answers are written by Affordable Locksmith — a locally owned and operated locksmith business serving Kokomo, Indiana and Howard County since 1985. With {BUSINESS_YEARS_EXPERIENCE}+ years of hands-on experience, thousands of lockouts resolved, and a 4.9-star rating from 247+ verified customers, we provide honest, expert-backed answers grounded in real local experience.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mt-6">
            {[
              { icon: Star, label: '4.9-Star Rating', sub: '247+ verified reviews' },
              { icon: CheckCircle, label: `${BUSINESS_YEARS_EXPERIENCE}+ Years Experience`, sub: 'Serving Kokomo since 1985' },
              { icon: Shield, label: 'Bonded & Insured', sub: 'Licensed professional service' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="flex items-center gap-3 bg-slate-50 rounded-xl p-4">
                <Icon className="h-6 w-6 text-blue-600 shrink-0" />
                <div>
                  <div className="font-bold text-slate-900 text-sm">{label}</div>
                  <div className="text-slate-500 text-xs">{sub}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-4 flex-wrap">
            <Link href="/about" className="btn-outline text-sm px-5 py-2.5">Our Story</Link>
            <Link href="/services" className="btn-outline text-sm px-5 py-2.5">All Services</Link>
            <Link href="/service-areas" className="btn-outline text-sm px-5 py-2.5">Service Areas</Link>
            <Link href="/blog" className="btn-outline text-sm px-5 py-2.5">Locksmith Blog</Link>
            <Link href="/contact" className="btn-outline text-sm px-5 py-2.5">Get a Free Quote</Link>
          </div>
        </div>
      </section>

      {/* City discovery — internal linking for crawl coverage */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom">
          <h2 className="section-title mb-3 text-center">Find Locksmith Help in Your Indiana City</h2>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            We serve 120+ Indiana communities. Click your city for local response times, pricing, and service details.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 mb-6">
            {[
              { name: 'Kokomo', slug: 'kokomo-in' },
              { name: 'Indianapolis', slug: 'indianapolis-in' },
              { name: 'Carmel', slug: 'carmel-in' },
              { name: 'Fishers', slug: 'fishers-in' },
              { name: 'Noblesville', slug: 'noblesville-in' },
              { name: 'Westfield', slug: 'westfield-in' },
              { name: 'Anderson', slug: 'anderson-in' },
              { name: 'Avon', slug: 'avon-in' },
              { name: 'Brownsburg', slug: 'brownsburg-in' },
              { name: 'Plainfield', slug: 'plainfield-in' },
              { name: 'Greenwood', slug: 'greenwood-in' },
              { name: 'Franklin', slug: 'franklin-in' },
              { name: 'Greenfield', slug: 'greenfield-in' },
              { name: 'Shelbyville', slug: 'shelbyville-in' },
              { name: 'Martinsville', slug: 'martinsville-in' },
              { name: 'Logansport', slug: 'logansport-in' },
              { name: 'Marion', slug: 'marion-in' },
              { name: 'Peru', slug: 'peru-in' },
              { name: 'Tipton', slug: 'tipton-in' },
              { name: 'Frankfort', slug: 'frankfort-in' },
              { name: 'Hammond', slug: 'hammond-in' },
              { name: 'Gary', slug: 'gary-in' },
              { name: 'Merrillville', slug: 'merrillville-in' },
              { name: 'Valparaiso', slug: 'valparaiso-in' },
              { name: 'Michigan City', slug: 'michigan-city-in' },
              { name: 'Jeffersonville', slug: 'jeffersonville-in' },
              { name: 'New Albany', slug: 'new-albany-in' },
              { name: 'Wabash', slug: 'wabash-in' },
              { name: 'Elwood', slug: 'elwood-in' },
              { name: 'Munster', slug: 'munster-in' },
            ].map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="card p-3 text-center text-sm font-medium text-slate-700 hover:text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 transition-all"
              >
                {city.name}
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/service-areas" className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700">
              View All 120+ Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black mb-4">Still Have a Question? Just Call Us.</h2>
          <p className="text-blue-200 mb-6 max-w-lg mx-auto">
            Kokomo&apos;s most trusted locksmith — real answers, honest pricing, fast response. Any hour, any day.
          </p>
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-12 py-4 inline-flex phone-pulse">
            <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
          </a>
          <div className="flex flex-wrap justify-center gap-6 mt-6 text-blue-300 text-sm">
            <span>✓ 24/7 Emergency Service</span>
            <span>✓ 15–30 Min Response</span>
            <span>✓ Price Confirmed Before We Start</span>
            <span>✓ No Hidden Fees</span>
          </div>
        </div>
      </section>
    </>
  );
}
