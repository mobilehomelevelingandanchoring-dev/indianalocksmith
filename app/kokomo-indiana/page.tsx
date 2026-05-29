import type { Metadata } from 'next';
import { Phone, MapPin, Star, CheckCircle, Shield, Home, Building2, AlertTriangle } from 'lucide-react';
import Link from 'next/link';
import Breadcrumb from '@/components/Breadcrumb';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE } from '@/lib/constants';
import { buildFAQSchema, buildWebPageSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Kokomo Indiana Guide — Is Kokomo Safe? Neighborhoods, Cost of Living & More',
  description:
    'Complete guide to Kokomo Indiana — safety ratings, best neighborhoods, cost of living, jobs, history, and what it\'s really like to live in Kokomo, IN. Updated 2025.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/kokomo-indiana` },
  openGraph: {
    title: 'Kokomo Indiana Guide — Safety, Neighborhoods, Cost of Living 2025',
    description: 'Is Kokomo Indiana safe? What is it known for? Best neighborhoods, cost of living, jobs, and what locals actually say about living in Kokomo, IN.',
  },
};

const faqs = [
  { question: 'What is Kokomo Indiana famous for?', answer: 'Kokomo Indiana is famous for three things: automotive innovation, Ryan White (the AIDS activist who grew up in Kokomo), and being one of America\'s most important manufacturing cities. Kokomo is where Elwood Haynes built and tested one of America\'s first gasoline-powered automobiles in 1894. Today, Kokomo remains a vital automotive manufacturing hub with major Chrysler/Stellantis operations employing thousands.' },
  { question: 'Is Kokomo Indiana a good place to live?', answer: 'Kokomo Indiana offers a genuinely affordable quality of life with the amenities of a mid-size city. Housing costs are among the lowest in Indiana. The job market centers on stable manufacturing employment. Schools range from average to good. Downtown Kokomo has seen significant revitalization with new restaurants, events, and the Foster Park area. For families seeking affordability and Midwest stability, Kokomo is a solid choice.' },
  { question: 'Is Kokomo Indiana safe?', answer: 'Kokomo has higher crime rates than many small Indiana cities but is comparable to other Midwest manufacturing cities of similar size. Crime is concentrated in specific areas — much of Kokomo is peaceful and family-friendly. The safest neighborhoods include Sycamore Hills, Kings Crossing, and the far north side. Choosing the right neighborhood makes a significant difference in your experience of safety in Kokomo.' },
  { question: 'What are the safest neighborhoods in Kokomo Indiana?', answer: 'The safest areas in Kokomo Indiana include: Sycamore Hills and Kings Crossing (north side, newer developments), Boulevard Heights, the far Northwest side near US-31, the Markland Avenue corridor (west side), and established Highland Park neighborhoods. These areas have lower crime rates, good schools, and active neighborhood communities.' },
  { question: 'What are the rough or dangerous areas of Kokomo Indiana?', answer: 'Like most cities, Kokomo has areas with higher crime concentrations. Neighborhoods closer to the city center on the south and east sides have historically higher property crime rates. Before renting or buying, research specific addresses using Howard County crime maps. The good news: even in higher-crime zip codes, most residents go years without incident. Smart home security measures (good locks, outdoor lighting, alarms) significantly reduce risk anywhere in the city.' },
  { question: 'Is downtown Kokomo safe at night?', answer: 'Downtown Kokomo has improved significantly over the past decade. The Foster Park area, Sycamore Street restaurant corridor, and Arts District are active and generally safe in the evening, especially on weekends with events. As with any downtown area, being aware of your surroundings, parking in well-lit areas, and traveling in groups after midnight is advisable.' },
  { question: 'What is the crime rate in Kokomo Indiana?', answer: 'Kokomo\'s crime rate is above the Indiana state average but in line with Midwest manufacturing cities of similar size. Property crime (burglary, car break-ins, theft) is more common than violent crime. Howard County statistics show property crime declining over the past several years due to increased policing and community programs. Securing your home with quality locks and a security system is one of the most effective personal protections.' },
  { question: 'What is the cost of living in Kokomo Indiana?', answer: 'Kokomo Indiana has a very low cost of living — well below the national average and even below the Indiana average. Housing is the biggest advantage: median home prices hover around $130,000–$170,000. Groceries, utilities, and local services are affordable. Kokomo regularly ranks as one of the most affordable mid-size cities in the Midwest for homeowners.' },
  { question: 'What is the average home price in Kokomo Indiana?', answer: 'The median home sale price in Kokomo Indiana is approximately $130,000–$165,000 as of 2024-2025. This is significantly below the Indiana state median and a fraction of national averages. Neighborhoods like Sycamore Hills command higher prices ($200,000–$350,000), while south-side homes may be $80,000–$120,000.' },
  { question: 'What is the average rent in Kokomo Indiana?', answer: 'Average apartment rent in Kokomo Indiana ranges from $650–$900 per month for a one-bedroom and $800–$1,200 for a two-bedroom (2024-2025 data). Newer apartment complexes and north-side rentals command higher rents. Kokomo remains one of Indiana\'s most affordable rental markets.' },
  { question: 'Who are the biggest employers in Kokomo Indiana?', answer: 'The largest employers in Kokomo Indiana are Stellantis (Chrysler) with its Indiana Transmission Plants and Kokomo Casting, employing thousands of UAW-represented workers. Indiana University Kokomo, Community Howard Regional Health, the City of Kokomo, and Haynes International (specialty metals) are other major employers. Manufacturing remains the backbone of Kokomo\'s economy.' },
  { question: 'What is Kokomo Indiana known for historically?', answer: 'Kokomo Indiana has a rich industrial history. It was the test site of one of America\'s first automobiles (Elwood Haynes, 1894). The city became home to numerous auto parts manufacturers and was a key Detroit-area supplier for decades. Ryan White, the young AIDS patient who changed how America viewed the HIV epidemic, was from Kokomo. The city has several historical firsts including early radio transmission experiments by Reginald Fessenden.' },
  { question: 'Why is Kokomo called Kokomo?', answer: 'Kokomo Indiana is named after Frances Slocum, a white woman who was kidnapped by Lenape Native Americans as a child and lived the rest of her life as a Miami tribal member. Her Miami name was "Maconaquah," but she was known to settlers as "Kokomo" — the name of her son. The city was incorporated in 1844 and named in her honor.' },
  { question: 'What county is Kokomo Indiana in?', answer: 'Kokomo Indiana is the county seat of Howard County, Indiana. Howard County covers approximately 293 square miles in north-central Indiana. Kokomo is the largest city in the county and serves as its government, retail, and healthcare hub.' },
  { question: 'What is the population of Kokomo Indiana?', answer: 'Kokomo Indiana has a population of approximately 56,000–58,000 people (2024 estimates). The Howard County metro area population is approximately 82,000. Kokomo is the 9th largest city in Indiana by population.' },
  { question: 'How far is Kokomo from Indianapolis?', answer: 'Kokomo Indiana is approximately 50 miles (80 km) north of Indianapolis. The drive via US-31 South or US-31/I-465 takes about 55–70 minutes depending on traffic. Many Kokomo residents commute to Indianapolis for work or entertainment.' },
  { question: 'What is the closest airport to Kokomo Indiana?', answer: 'The closest major airport to Kokomo Indiana is Indianapolis International Airport (IND), approximately 55 miles south. Kokomo also has the Kokomo Municipal Airport (OKK) serving general aviation and charter flights. Most commercial travelers use Indianapolis International.' },
  { question: 'What colleges are near Kokomo Indiana?', answer: 'Indiana University Kokomo is the primary university in the city, offering bachelor\'s and master\'s degrees. Ivy Tech Community College has a Kokomo campus offering two-year degrees and certifications. Purdue Polytechnic Institute has a location in Kokomo. Indiana Wesleyan University and Ball State University are within driving distance.' },
  { question: 'Does Kokomo Indiana get snow?', answer: 'Yes — Kokomo Indiana has a typical Midwest continental climate with cold, snowy winters. Average annual snowfall is 25–35 inches. Winters run November through March with temperatures regularly below freezing. This makes lock maintenance important — frozen locks and iced-over car doors are common winter service calls for local locksmiths.' },
  { question: 'Is Kokomo Indiana growing?', answer: 'Kokomo Indiana has seen modest population stability after decades of manufacturing decline. Downtown revitalization, new restaurant and entertainment development, and ongoing auto industry investment have improved the economic outlook. The city is investing in infrastructure and quality of life improvements to attract younger residents.' },
  { question: 'What are the best things to do in Kokomo Indiana?', answer: 'Top things to do in Kokomo Indiana include: Kokomo Opalescent Glass (world\'s largest art glass maker, free tours), Elwood Haynes Museum, Highland Park and Paw-Paw Arch, Kokomo Beach waterpark, Sycamore Hills Orchards, the Haynes-Apperson Festival, downtown dining on Sycamore Street, and the Kokomo Jackrabbits baseball games at Kokomo Municipal Stadium.' },
  { question: 'Is Kokomo Indiana family friendly?', answer: 'Yes — Kokomo is a genuinely family-friendly city with affordable housing, good parks, active youth sports leagues, and community events throughout the year. The north side neighborhoods with access to good schools and parks like Kokomo Beach are particularly popular with families. The lower cost of living allows families to own more home than in larger Indiana cities.' },
  { question: 'What are the best schools in Kokomo Indiana?', answer: 'Kokomo School Corporation and Western School Corporation serve most of the city. Northwestern High School and Western Middle/High School consistently rank among the better schools in Howard County. Private options include Kokomo Christian School and St. Patrick School. Indiana University Kokomo\'s early college program allows high school students to earn college credit.' },
  { question: 'What hospitals are in Kokomo Indiana?', answer: 'Community Howard Regional Health is the primary hospital serving Kokomo and Howard County, with a full-service medical center including emergency, surgical, and specialty care. Indiana University Health Kokomo provides additional outpatient services. Franciscan Health and other specialty providers serve the region.' },
  { question: 'Are break-ins common in Kokomo Indiana?', answer: 'Property crime including home burglaries and car break-ins does occur in Kokomo, particularly in certain neighborhoods and during late-night hours. Most break-ins are opportunistic — unlocked doors, easily defeated locks, or visible valuables in cars. Upgrading to a Grade 1 deadbolt, rekeying after moving, adding exterior lighting, and using a smart lock with an alarm significantly reduces your risk. Our locksmith serves Kokomo homeowners looking to upgrade their security.' },
  { question: 'What home security upgrades make the most difference in Kokomo?', answer: 'The most cost-effective home security upgrades in Kokomo Indiana: (1) Replace or rekey all exterior locks — many homes have old, worn locks that are easily defeated. (2) Install Grade 1 deadbolts on all exterior doors. (3) Reinforce door frames with 3-inch strike plate screws. (4) Add motion-activated exterior lighting. (5) Install a video doorbell. (6) Consider a smart lock with tamper alert. A locksmith can assess your current locks and recommend improvements.' },
];

export default function KokomoIndianaPage() {
  const faqSchema = buildFAQSchema(faqs);
  const webPageSchema = buildWebPageSchema({
    title: 'Kokomo Indiana Guide — Safety, Neighborhoods & Living',
    description: 'Complete guide to Kokomo Indiana covering safety, best neighborhoods, cost of living, history, and what it\'s really like to live there.',
    url: `${BUSINESS_WEBSITE}/kokomo-indiana`,
    dateModified: '2025-05-29',
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />

      {/* Hero */}
      <section className="bg-hero-gradient text-white py-14 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Kokomo, Indiana', href: '/kokomo-indiana' }]} />
          <div className="grid lg:grid-cols-2 gap-10 items-center mt-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-200 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
                <MapPin className="h-4 w-4" />
                Howard County, Indiana
              </div>
              <h1 className="text-4xl lg:text-5xl font-black text-white mb-5 speakable-summary">
                Kokomo, Indiana — Complete Local Guide
              </h1>
              <p className="text-blue-100 text-lg mb-6 speakable-summary">
                Is Kokomo Indiana safe? What is it like to live there? Answers to every question about Kokomo — safety, neighborhoods, cost of living, history, jobs, and more. Written by locals who have served this community for 39+ years.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 rounded-lg px-4 py-2 text-sm text-blue-200">
                  <span className="font-bold text-white">~57,000</span> Population
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2 text-sm text-blue-200">
                  <span className="font-bold text-white">Howard County</span> Seat
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2 text-sm text-blue-200">
                  <span className="font-bold text-white">~50 miles</span> N of Indianapolis
                </div>
                <div className="bg-white/10 rounded-lg px-4 py-2 text-sm text-blue-200">
                  <span className="font-bold text-white">Founded</span> 1844
                </div>
              </div>
            </div>
            <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
              <h3 className="font-bold text-white mb-4">Quick Facts — Kokomo, IN</h3>
              {[
                ['County', 'Howard County'],
                ['State', 'Indiana'],
                ['Population', '~57,000 (2024 est.)'],
                ['Median Home Price', '~$145,000'],
                ['Avg 1BR Rent', '$650–$900/mo'],
                ['Biggest Employer', 'Stellantis (Chrysler)'],
                ['Known For', 'Auto manufacturing, Ryan White'],
                ['Distance to Indy', '~50 miles, ~60 min'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center py-1.5 border-b border-white/10 last:border-0">
                  <span className="text-blue-200 text-sm">{label}</span>
                  <span className="text-white text-sm font-semibold">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Safety Overview */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-amber-100 text-amber-700 rounded-xl p-2.5">
              <Shield className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Is Kokomo Indiana Safe?</h2>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-400 rounded-r-xl p-5 mb-8 max-w-3xl">
            <p className="text-slate-700 leading-relaxed speakable-summary">
              <strong>Short answer:</strong> Kokomo Indiana is moderately safe by Midwest standards. Crime rates are higher than small Indiana towns but comparable to other manufacturing cities of similar size. Safety varies significantly by neighborhood — the north side is noticeably safer than parts of the south and east sides. Most Kokomo residents go years without experiencing crime.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { label: 'Safest Areas', items: ['Sycamore Hills', 'Kings Crossing', 'Far Northwest side', 'Boulevard Heights', 'Highland Park'], color: 'green' },
              { label: 'Mixed Areas', items: ['Markland Ave corridor', 'North Kokomo', 'Western Ave', 'Bon Air'], color: 'amber' },
              { label: 'Higher Caution', items: ['South East side', 'Parts of downtown', 'Some east-side neighborhoods'], color: 'red' },
            ].map((group) => (
              <div key={group.label} className={`rounded-xl p-5 border ${
                group.color === 'green' ? 'bg-green-50 border-green-200' :
                group.color === 'amber' ? 'bg-amber-50 border-amber-200' :
                'bg-red-50 border-red-200'
              }`}>
                <div className={`font-bold mb-3 ${
                  group.color === 'green' ? 'text-green-800' :
                  group.color === 'amber' ? 'text-amber-800' :
                  'text-red-800'
                }`}>{group.label}</div>
                <ul className="space-y-1.5">
                  {group.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${
                        group.color === 'green' ? 'bg-green-500' :
                        group.color === 'amber' ? 'bg-amber-500' :
                        'bg-red-500'
                      }`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-blue-50 rounded-2xl p-6 max-w-3xl">
            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Home className="h-5 w-5 text-blue-600" />
              Protect Your Kokomo Home: Security Upgrades That Work
            </h3>
            <p className="text-slate-600 text-sm mb-4 leading-relaxed">
              No matter which Kokomo neighborhood you live in, the right locks and security measures dramatically reduce your risk. Most residential break-ins in Kokomo involve unlocked doors or easily defeated locks — not sophisticated attacks.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 mb-4">
              {['Upgrade to Grade 1 deadbolts on all exterior doors', 'Rekey locks immediately when moving in', 'Install motion-activated exterior lighting', 'Use smart locks with tamper alerts', 'Reinforce door frames with 3-inch strike plates', 'Secure sliding glass doors and windows'].map(tip => (
                <div key={tip} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                  {tip}
                </div>
              ))}
            </div>
            <a href={BUSINESS_PHONE_HREF} className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors">
              <Phone className="h-4 w-4" /> Get a Free Security Assessment — {BUSINESS_PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>

      {/* Cost of Living */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-green-100 text-green-700 rounded-xl p-2.5">
              <Building2 className="h-6 w-6" />
            </div>
            <h2 className="text-2xl font-black text-slate-900">Cost of Living in Kokomo Indiana</h2>
          </div>

          <div className="overflow-x-auto mb-8">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-800 text-white">
                  <th className="text-left px-4 py-3 rounded-tl-lg">Category</th>
                  <th className="text-center px-4 py-3">Kokomo, IN</th>
                  <th className="text-center px-4 py-3">Indiana Avg</th>
                  <th className="text-center px-4 py-3 rounded-tr-lg">US Avg</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { cat: 'Median Home Price', kokomo: '~$145,000', indiana: '~$230,000', us: '~$420,000' },
                  { cat: 'Average 1BR Rent', kokomo: '$650–$900', indiana: '$850–$1,100', us: '$1,400–$1,800' },
                  { cat: 'Cost of Living Index', kokomo: '78', indiana: '90', us: '100' },
                  { cat: 'Median Household Income', kokomo: '~$47,000', indiana: '~$60,000', us: '~$74,000' },
                  { cat: 'Gas (per gallon, avg)', kokomo: 'Slightly below avg', indiana: 'Avg', us: 'Baseline' },
                ].map((row, i) => (
                  <tr key={row.cat} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="px-4 py-3 font-semibold text-slate-900">{row.cat}</td>
                    <td className="px-4 py-3 text-center font-bold text-green-700">{row.kokomo}</td>
                    <td className="px-4 py-3 text-center text-slate-600">{row.indiana}</td>
                    <td className="px-4 py-3 text-center text-slate-500">{row.us}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-xl p-5 max-w-2xl">
            <p className="text-green-900 font-semibold mb-1">Kokomo Affordability Advantage</p>
            <p className="text-slate-600 text-sm leading-relaxed">
              A family buying in Kokomo can typically purchase a 3-bedroom home for under $160,000 — the same budget that buys a 1-bedroom condo in Indianapolis or a studio apartment in Chicago. This affordability, combined with stable manufacturing employment, is the primary reason families choose Kokomo.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section — all questions */}
      <section className="section-pad bg-white">
        <div className="container-custom">
          <h2 className="section-title mb-8">Kokomo Indiana — Frequently Asked Questions</h2>
          <div className="space-y-6 max-w-3xl">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-slate-100 pb-6 last:border-0">
                <h3 className="font-bold text-slate-900 mb-2 text-lg">{faq.question}</h3>
                <p className="text-slate-600 leading-relaxed faq-answer text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kokomo Residents Trust Us */}
      <section className="section-pad bg-slate-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Serving Kokomo Since 1985</h2>
          <p className="text-slate-600 leading-relaxed mb-6">
            Affordable Locksmith has been part of the Kokomo Indiana community for 39+ years — through the auto industry ups and downs, through the Ryan White era, through downtown revitalization, and through every cold Howard County winter. We know this city, its neighborhoods, and its people. When Kokomo families call us, they reach a neighbor, not a call center.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Star, label: '4.9★ Google Rating', sub: '247+ verified Kokomo reviews' },
              { icon: CheckCircle, label: '39+ Years in Kokomo', sub: 'Owner-operated, locally rooted' },
              { icon: Shield, label: 'Fully Insured', sub: 'Licensed & bonded professional' },
            ].map(({ icon: Icon, label, sub }) => (
              <div key={label} className="bg-white rounded-xl p-5 text-center shadow-sm">
                <Icon className="h-7 w-7 text-blue-600 mx-auto mb-2" />
                <div className="font-bold text-slate-900">{label}</div>
                <div className="text-slate-500 text-sm mt-1">{sub}</div>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4">
            <Link href="/service-areas/kokomo-in" className="btn-primary">
              Kokomo Locksmith Services
            </Link>
            <Link href="/faq" className="btn-outline">
              Locksmith FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-blue-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-black mb-4">Need a Locksmith in Kokomo, Indiana?</h2>
          <p className="text-blue-200 mb-6 max-w-md mx-auto">
            39+ years serving Kokomo. Fast response, honest pricing, real local expertise.
          </p>
          <a href={BUSINESS_PHONE_HREF} className="btn-accent text-xl px-12 py-4 inline-flex phone-pulse">
            <Phone className="h-6 w-6" /> {BUSINESS_PHONE_DISPLAY}
          </a>
          <p className="text-blue-300 text-sm mt-4">24/7 emergency service · 15–30 min response · No hidden fees</p>
        </div>
      </section>
    </>
  );
}
