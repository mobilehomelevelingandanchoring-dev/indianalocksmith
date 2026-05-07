import { BUSINESS_PHONE_DISPLAY, BUSINESS_NAME } from './constants';

// ─── Types ────────────────────────────────────────────────────────────────────

export type ServiceSlug =
  | 'emergency-locksmith'
  | 'automotive-locksmith'
  | 'residential-locksmith'
  | 'commercial-locksmith'
  | 'key-services'
  | 'safe-services';

export type LocationSlug =
  | 'kokomo-in'
  | 'howard-county'
  | 'logansport-in'
  | 'peru-in'
  | 'tipton-in'
  | 'frankfort-in'
  | 'galveston-in'
  | 'greentown-in'
  | 'russiaville-in'
  | 'bunker-hill-in'
  | 'converse-in'
  | 'marion-in'
  | 'elwood-in'
  | 'wabash-in';

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceSEOData {
  slug: ServiceSlug;
  name: string;
  schemaType: string;
  headline: string;
  shortDescription: string;
  entityKeywords: string[];
  semanticVariants: string[];
  features: { title: string; description: string }[];
  processSteps: string[];
  paaQuestions: FAQItem[];
}

export interface LocationSEOData {
  slug: LocationSlug;
  name: string;
  state: string;
  stateShort: string;
  county: string;
  responseTime: string;
  distanceMiles: number | null;
  population: number;
  landmarks: string[];
  neighborhoods: string[];
  description: string;
  wikiUrl: string;
  isCounty?: boolean;
}

// ─── All service slugs & location slugs ───────────────────────────────────────

export const ALL_SERVICE_SLUGS: ServiceSlug[] = [
  'emergency-locksmith',
  'automotive-locksmith',
  'residential-locksmith',
  'commercial-locksmith',
  'key-services',
  'safe-services',
];

export const ALL_LOCATION_SLUGS: LocationSlug[] = [
  'kokomo-in',
  'howard-county',
  'logansport-in',
  'peru-in',
  'tipton-in',
  'frankfort-in',
  'galveston-in',
  'greentown-in',
  'russiaville-in',
  'bunker-hill-in',
  'converse-in',
  'marion-in',
  'elwood-in',
  'wabash-in',
];

// ─── Location data ─────────────────────────────────────────────────────────────

export const LOCATION_DATA: Record<LocationSlug, LocationSEOData> = {
  'kokomo-in': {
    slug: 'kokomo-in',
    name: 'Kokomo',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Howard County',
    responseTime: '15–25 minutes',
    distanceMiles: null,
    population: 58000,
    landmarks: ['Markland Mall', 'Indiana University Kokomo', 'Kokomo Municipal Airport', 'Foster Park', 'Kokomo Beach'],
    neighborhoods: ['Downtown Kokomo', 'Sycamore Hills', 'Paw Paw Pike', 'Maple Crest', 'Bon Air', 'Southway'],
    description: 'Kokomo, Indiana — Howard County seat and our home base for 39+ years.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Kokomo,_Indiana',
  },
  'howard-county': {
    slug: 'howard-county',
    name: 'Howard County',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Howard County',
    responseTime: '15–35 minutes',
    distanceMiles: null,
    population: 83000,
    landmarks: ['Howard County Courthouse', 'Kokomo Opalescent Glass', 'Seiberling Mansion', 'Prairie Creek Reservoir'],
    neighborhoods: ['Kokomo', 'Greentown', 'Russiaville', 'Bunker Hill', 'Greentown', 'Taylor Township'],
    description: 'Howard County, Indiana — our complete service county, covering every township and community.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Howard_County,_Indiana',
    isCounty: true,
  },
  'logansport-in': {
    slug: 'logansport-in',
    name: 'Logansport',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Cass County',
    responseTime: '30–45 minutes',
    distanceMiles: 25,
    population: 17500,
    landmarks: ['Riverside Park', 'Cass County Courthouse', 'Logansport High School', 'Eel River'],
    neighborhoods: ['Downtown Logansport', 'North Side', 'South Logansport', 'East End'],
    description: 'Logansport is a historic river city at the confluence of the Eel and Wabash Rivers in Cass County.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Logansport,_Indiana',
  },
  'peru-in': {
    slug: 'peru-in',
    name: 'Peru',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Miami County',
    responseTime: '35–50 minutes',
    distanceMiles: 29,
    population: 11400,
    landmarks: ['International Circus Hall of Fame', 'Peru Amateur Circus', 'Miami County Courthouse', 'Wabash River'],
    neighborhoods: ['Downtown Peru', 'West Peru', 'East Peru', 'North Side'],
    description: 'Peru, the "Circus City of the World," sits along the Wabash River in Miami County.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Peru,_Indiana',
  },
  'tipton-in': {
    slug: 'tipton-in',
    name: 'Tipton',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Tipton County',
    responseTime: '25–40 minutes',
    distanceMiles: 22,
    population: 5200,
    landmarks: ['Tipton County Courthouse', 'Tipton High School', 'Tipton Community Park', 'Wildcat Creek'],
    neighborhoods: ['Downtown Tipton', 'West Tipton', 'East Side', 'Meadow Farms'],
    description: 'Tipton is the county seat of Tipton County, a close-knit community south of Kokomo.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Tipton,_Indiana',
  },
  'frankfort-in': {
    slug: 'frankfort-in',
    name: 'Frankfort',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Clinton County',
    responseTime: '30–45 minutes',
    distanceMiles: 26,
    population: 16000,
    landmarks: ['Clinton County Courthouse', 'TPA Park', 'Frankfort Community Public Library', 'Hot Dog Festival grounds'],
    neighborhoods: ['Downtown Frankfort', 'North Frankfort', 'South Side', 'Countrywood'],
    description: 'Frankfort, the county seat of Clinton County, is known for its vibrant downtown and annual Hot Dog Festival.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Frankfort,_Indiana',
  },
  'galveston-in': {
    slug: 'galveston-in',
    name: 'Galveston',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Cass County',
    responseTime: '20–30 minutes',
    distanceMiles: 14,
    population: 1200,
    landmarks: ['Galveston Town Park', 'Prairie Creek Reservoir', 'Tippecanoe River (nearby)', 'Wildcat Creek Trail'],
    neighborhoods: ['Galveston Town Center', 'Rural Galveston Township'],
    description: 'Galveston is a small Cass County town just northwest of Kokomo, close to Prairie Creek Reservoir.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Galveston,_Indiana',
  },
  'greentown-in': {
    slug: 'greentown-in',
    name: 'Greentown',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Howard County',
    responseTime: '15–25 minutes',
    distanceMiles: 11,
    population: 2500,
    landmarks: ['Greentown Glass Museum', 'Greentown Lions Club Park', 'Wildcat Creek', 'Eastern Howard Schools'],
    neighborhoods: ['Downtown Greentown', 'West Greentown', 'Greentown Estates'],
    description: 'Greentown is a growing Howard County community just east of Kokomo, home to the historic Greentown Glass Museum.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Greentown,_Indiana',
  },
  'russiaville-in': {
    slug: 'russiaville-in',
    name: 'Russiaville',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Howard County',
    responseTime: '15–20 minutes',
    distanceMiles: 9,
    population: 1050,
    landmarks: ['Russiaville Town Park', 'West Russiaville Elementary', 'Wildcat Creek', 'Western Howard Schools'],
    neighborhoods: ['Russiaville Town Center', 'South Russiaville', 'Farmland Acres'],
    description: 'Russiaville is a charming Howard County town just west of Kokomo along the Wildcat Creek corridor.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Russiaville,_Indiana',
  },
  'bunker-hill-in': {
    slug: 'bunker-hill-in',
    name: 'Bunker Hill',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Miami County',
    responseTime: '25–35 minutes',
    distanceMiles: 21,
    population: 900,
    landmarks: ['Grissom Air Museum', 'Grissom Air Reserve Base', 'Peru Municipal Airport (nearby)', 'Mississinewa Reservoir'],
    neighborhoods: ['Bunker Hill Town Center', 'Grissom Base Area', 'Rural Township'],
    description: 'Bunker Hill is a Miami County community home to the nationally recognized Grissom Air Museum.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Bunker_Hill,_Indiana',
  },
  'converse-in': {
    slug: 'converse-in',
    name: 'Converse',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Miami County',
    responseTime: '25–40 minutes',
    distanceMiles: 20,
    population: 1100,
    landmarks: ['Converse Town Park', 'Converse-Clay Township Public Library', 'Mississinewa River', 'Oak Hill Schools'],
    neighborhoods: ['Downtown Converse', 'North Converse', 'South Converse'],
    description: 'Converse is a welcoming small town along the Mississinewa River in Miami County, east of Kokomo.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Converse,_Indiana',
  },
  'marion-in': {
    slug: 'marion-in',
    name: 'Marion',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Grant County',
    responseTime: '40–55 minutes',
    distanceMiles: 32,
    population: 28000,
    landmarks: ['Matter Park', 'Marion Public Library', 'Indiana Wesleyan University', 'Mississinewa Lake'],
    neighborhoods: ['Downtown Marion', 'North Side', 'Southview', 'West Side', 'Brookside'],
    description: 'Marion, the seat of Grant County, is one of the larger cities in north-central Indiana and home to Indiana Wesleyan University.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Marion,_Indiana',
  },
  'elwood-in': {
    slug: 'elwood-in',
    name: 'Elwood',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Madison County',
    responseTime: '45–60 minutes',
    distanceMiles: 38,
    population: 8500,
    landmarks: ['Elwood Park', 'Wendell Willkie Birthplace & Museum', 'South Madison Community Schools', 'Pipe Creek'],
    neighborhoods: ['Downtown Elwood', 'North Elwood', 'South Side', 'Westview'],
    description: 'Elwood is a historic Madison County city, birthplace of 1940 Republican presidential nominee Wendell Willkie.',
    wikiUrl: 'https://en.wikipedia.org/wiki/Elwood,_Indiana',
  },
  'wabash-in': {
    slug: 'wabash-in',
    name: 'Wabash',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Wabash County',
    responseTime: '35–50 minutes',
    distanceMiles: 27,
    population: 10500,
    landmarks: ['Wabash County Courthouse', 'Eagles Theatre', 'Honeywell Center', 'Salamonie Reservoir', 'Wabash Carnegie Public Library'],
    neighborhoods: ['Downtown Wabash', 'North Wabash', 'South Side', 'East End', 'Wabash Riverfront'],
    description: 'Wabash, the county seat of Wabash County, holds the distinction of being the first electrically lit city in the world (1880).',
    wikiUrl: 'https://en.wikipedia.org/wiki/Wabash,_Indiana',
  },
};

// ─── Service data ──────────────────────────────────────────────────────────────

export const SERVICE_DATA: Record<ServiceSlug, ServiceSEOData> = {
  'emergency-locksmith': {
    slug: 'emergency-locksmith',
    name: 'Emergency Locksmith',
    schemaType: 'EmergencyService',
    headline: '24/7 Emergency Locksmith Service',
    shortDescription:
      'Immediate response for lockouts, broken keys, and urgent lock failures — available 24 hours a day, 7 days a week, 365 days a year.',
    entityKeywords: [
      'emergency locksmith', 'locked out', 'lockout service', '24/7 locksmith',
      'after hours locksmith', 'urgent locksmith', 'same day locksmith',
      'car lockout', 'house lockout', 'office lockout', 'broken key extraction',
      'lost key replacement', 'midnight locksmith', 'holiday locksmith',
    ],
    semanticVariants: [
      '24 hour locksmith', 'round the clock locksmith', 'emergency lockout service',
      'urgent lock help', 'fast locksmith', 'immediate locksmith', 'lock emergency',
    ],
    features: [
      { title: '24/7 Availability', description: 'We answer calls at 2 AM, on holidays, and in severe weather. No answering machine — a real technician picks up every time.' },
      { title: '15–30 Min Response', description: 'Fast dispatch from our Kokomo base. We prioritize emergency calls and provide an ETA the moment you call.' },
      { title: 'All Lock Types', description: 'Cars, homes, apartments, offices, storage units — if it locks, we can open it without damage.' },
      { title: 'Upfront Pricing', description: 'We quote the price before starting. No surprise fees, no after-hours surcharges beyond what we disclose upfront.' },
      { title: 'Licensed & Insured', description: 'Fully licensed Indiana locksmith with liability insurance. You can verify our credentials before we begin work.' },
      { title: 'Non-Destructive Entry', description: 'Our goal is always lock picking or bypass — drilling is a last resort. We protect your lock and door hardware.' },
    ],
    processSteps: [
      'Call us — a live locksmith answers immediately, day or night',
      'We confirm your location and provide a firm arrival estimate and price quote',
      'Our technician arrives with full equipment for any lock type',
      'We identify the fastest non-destructive entry method for your specific lock',
      'You\'re back inside in minutes — we document the service and provide a receipt',
    ],
    paaQuestions: [
      {
        question: 'How fast can an emergency locksmith arrive?',
        answer: `${BUSINESS_NAME} typically arrives within 15–30 minutes in Kokomo and Howard County. For surrounding cities in central Indiana, response time is 25–50 minutes depending on location. We dispatch immediately upon your call — no hold queues, no call centers.`,
      },
      {
        question: 'How much does emergency locksmith service cost in Indiana?',
        answer: 'Emergency locksmith service in central Indiana typically ranges from $65–$150 depending on the lock type, time of day, and service needed. Car lockouts average $65–$100; home lockouts $75–$125; commercial lockouts $85–$150. We quote the exact price before starting — no surprise fees.',
      },
      {
        question: 'Is there a 24/7 locksmith near me in Indiana?',
        answer: `${BUSINESS_NAME} in Kokomo, Indiana operates 24 hours a day, 7 days a week, 365 days a year — including holidays and severe weather. Call ${BUSINESS_PHONE_DISPLAY} any time and a licensed locksmith will answer immediately.`,
      },
      {
        question: 'What should I do if I am locked out of my house?',
        answer: 'If locked out of your house: (1) Stay calm and move to a safe, well-lit area. (2) Check all windows and doors — never force entry. (3) Call a licensed local locksmith rather than attempting DIY entry. (4) Have your ID ready to prove residency. A professional locksmith can open most residential locks non-destructively in under 10 minutes.',
      },
      {
        question: 'What should I do if I locked my keys in my car?',
        answer: 'If your keys are locked in your car: (1) Move your vehicle to a safe area if possible. (2) Do not attempt to jimmy the lock yourself — modern cars have sensors that can trigger alarms or damage door frames. (3) Call a licensed automotive locksmith. We use specialized slim-jim and long-reach tools to open vehicles without damage, typically in 5–15 minutes.',
      },
      {
        question: 'Can a locksmith open a car without breaking the window?',
        answer: 'Yes. Licensed automotive locksmiths use slim-jim tools, air-wedge kits, and long-reach tools to open car doors without breaking windows or damaging paint. This method works on the vast majority of vehicles including newer models. Drilling or window breaking is only necessary in extreme circumstances.',
      },
      {
        question: 'Do locksmiths charge more at night or on weekends?',
        answer: 'Some locksmiths do charge after-hours premiums. At Affordable Locksmith Kokomo, we quote the full price before starting regardless of time — what we quote at 2 AM is the price you pay. We recommend always asking for an all-in price before authorizing any work.',
      },
      {
        question: 'How do I verify an emergency locksmith is legitimate?',
        answer: 'To verify a locksmith: (1) Ask for their full name and company name before they arrive. (2) Check for a physical business address — not just a phone number. (3) Ask for a price quote before they start work. (4) Legitimate locksmiths arrive in marked vehicles with ID. (5) In Indiana, ask for their state license number. Red flags: unusually low phone quotes followed by inflated on-site prices.',
      },
    ],
  },

  'automotive-locksmith': {
    slug: 'automotive-locksmith',
    name: 'Automotive Locksmith',
    schemaType: 'AutomotiveService',
    headline: 'Automotive Locksmith — Car Lockouts, Key Programming & More',
    shortDescription:
      'Mobile automotive locksmith for car lockouts, transponder key programming, key fob replacement, and ignition repair across central Indiana.',
    entityKeywords: [
      'automotive locksmith', 'car locksmith', 'car lockout', 'auto locksmith',
      'transponder key', 'key fob programming', 'car key replacement', 'ignition repair',
      'car key programming', 'laser cut key', 'smart key', 'keyless entry',
      'broken car key', 'key extraction', 'car key duplication', 'push to start key',
    ],
    semanticVariants: [
      'vehicle locksmith', 'mobile car locksmith', 'automotive key specialist',
      'car key cutting', 'remote key programming', 'car lockout service', 'truck lockout',
    ],
    features: [
      { title: 'Car Lockout Service', description: 'We open locked cars using non-destructive techniques — slim-jim, long-reach, and air-wedge tools. Works on sedans, trucks, SUVs, and vans.' },
      { title: 'Transponder Key Programming', description: 'We program transponder chips for most makes and models — Toyota, Honda, Ford, GM, Chrysler, BMW, Mercedes, and more. Typically 50–70% less than dealership pricing.' },
      { title: 'Key Fob Replacement', description: 'Lost or broken key fob? We cut and program replacement key fobs on-site using professional-grade OBD-II and key programming tools.' },
      { title: 'Ignition Repair', description: 'Worn ignition cylinders, broken keys in ignition, and ignition switch failures — we diagnose and repair or replace ignition components on-site.' },
      { title: 'Broken Key Extraction', description: 'Broken key stuck in door lock or ignition? We extract broken key fragments without damaging the lock cylinder, then cut a new key on the spot.' },
      { title: 'High-Security Car Keys', description: 'We cut and program laser-cut (sidewinder), smart keys, and push-to-start proximity fobs for luxury and modern vehicles.' },
    ],
    processSteps: [
      'Call with your year, make, model, and VIN if available — we confirm we can service your vehicle',
      'We quote the price and dispatch our mobile unit to your location',
      'Technician arrives with onboard key-cutting machine and programming equipment',
      'We cut the key blank to your vehicle\'s specifications',
      'We program the transponder/fob using professional ADAS equipment and test all functions',
    ],
    paaQuestions: [
      {
        question: 'How much does a car lockout service cost?',
        answer: 'Car lockout service in central Indiana typically costs $65–$100. The price depends on vehicle type and lock complexity. We quote the exact price before starting. Most car lockouts are opened in 5–15 minutes using non-destructive tools.',
      },
      {
        question: 'How much does transponder key programming cost near me?',
        answer: 'Transponder key programming by a local locksmith typically costs $80–$200 depending on the vehicle make, model, and key type. This is usually 50–70% less than dealership pricing. Smart keys and push-to-start fobs for luxury vehicles may cost $150–$300.',
      },
      {
        question: 'Can a locksmith make a car key without the original?',
        answer: 'Yes. A licensed automotive locksmith can create a new car key from scratch using the VIN number and lock codes — no original key required. This process involves cutting a new key blank to the vehicle\'s specifications and programming the transponder chip. Most locksmiths can do this on-site.',
      },
      {
        question: 'Is it cheaper to use a locksmith or a dealership for car keys?',
        answer: 'A local automotive locksmith is typically 40–70% less expensive than a car dealership for key cutting and programming. Dealerships charge premium labor rates and often require a tow-in. Locksmiths come to your location with mobile equipment and charge a fair, flat fee.',
      },
      {
        question: 'How long does transponder key programming take?',
        answer: 'Transponder key programming typically takes 20–45 minutes on-site. The process includes cutting the key blank, programming the chip via OBD-II port, and testing all locks and ignition. Complex smart keys or proximity fobs for newer vehicles may take up to 60 minutes.',
      },
      {
        question: 'What do I do if my car key fob stops working?',
        answer: 'First, try replacing the battery (CR2032 in most fobs). If that doesn\'t work, the fob may need re-pairing or reprogramming. A locksmith can diagnose whether the issue is the battery, lost programming, or a damaged fob. If the fob is damaged, we cut and program a new one on-site.',
      },
      {
        question: 'Can a locksmith program a push-to-start smart key?',
        answer: 'Yes. Most licensed automotive locksmiths have the professional equipment to program push-to-start proximity keys and smart keys for modern vehicles. The process uses OBD-II programming tools and vehicle-specific software. This is available for most Toyota, Honda, Ford, GM, BMW, Mercedes, and other brands.',
      },
      {
        question: 'What should I do if I break a key in my ignition?',
        answer: 'Do not try to remove a broken key with pliers or a screwdriver — this can push the fragment deeper and damage the ignition cylinder. Call a locksmith immediately. We use specialized extraction tools to remove the fragment without damaging the cylinder, then cut you a new key on the spot.',
      },
    ],
  },

  'residential-locksmith': {
    slug: 'residential-locksmith',
    name: 'Residential Locksmith',
    schemaType: 'HomeAndConstructionService',
    headline: 'Residential Locksmith — Home Lockouts, Rekeying & Security Upgrades',
    shortDescription:
      'Complete home locksmith services: lockouts, rekeying, deadbolt installation, smart lock setup, and security upgrades for Indiana homeowners.',
    entityKeywords: [
      'residential locksmith', 'home locksmith', 'house lockout', 'home lockout',
      'rekeying', 'rekey locks', 'deadbolt installation', 'smart lock installation',
      'lock change', 'lock replacement', 'door lock repair', 'apartment locksmith',
      'lock upgrade', 'home security locksmith', 'sliding door lock', 'window lock',
    ],
    semanticVariants: [
      'house locksmith', 'home lock service', 'residential lock repair',
      'home lock upgrade', 'apartment lock change', 'new home rekeying',
    ],
    features: [
      { title: 'Home Lockout Service', description: 'Locked out of your house or apartment? We use non-destructive picking and bypass techniques to get you back inside without damaging your lock.' },
      { title: 'Lock Rekeying', description: 'Rekeying changes the internal pins so old keys no longer work. Faster and more affordable than replacing locks — ideal after moving into a new home or losing a key.' },
      { title: 'Deadbolt Installation', description: 'Upgrade to ANSI Grade 1 deadbolts (Schlage, Kwikset, Medeco) with proper door frame reinforcement for maximum residential security.' },
      { title: 'Smart Lock Setup', description: 'We install and program smart locks from Schlage, August, Yale, and Kwikset. Includes door prep, hardware installation, and app pairing.' },
      { title: 'Window & Sliding Door Locks', description: 'Secure every entry point. We install Charlie bars, key-operated sash locks, and reinforced sliding door hardware.' },
      { title: 'Security Consultation', description: 'Free walk-through of your home to identify weak points and recommend upgrades — no obligation to purchase.' },
    ],
    processSteps: [
      'Call or book online — describe what you need (lockout, rekey, install)',
      'We provide an upfront quote with no hidden fees',
      'Technician arrives with a full inventory of lock hardware and tools',
      'We assess your existing hardware and recommend the best solution',
      'Service completed — you receive new keys and a full service receipt',
    ],
    paaQuestions: [
      {
        question: 'How much does it cost to rekey a house in Indiana?',
        answer: 'Rekeying a home in Indiana typically costs $20–$50 per lock, with a service call fee of $30–$60. Rekeying an entire house (3–5 locks) usually runs $100–$200 total. This is significantly less expensive than replacing locks and achieves the same security benefit: old keys no longer work.',
      },
      {
        question: 'Should I rekey or replace locks after moving?',
        answer: 'Rekeying is almost always the better choice after moving into a new home. It costs 30–60% less than replacing locks, takes under 15 minutes per lock, and achieves the same result — all previous keys become useless. Only replace locks if they are damaged, outdated, or you want to upgrade hardware.',
      },
      {
        question: 'How much does deadbolt installation cost?',
        answer: 'Deadbolt installation costs $50–$150 per lock depending on the lock grade, door condition, and whether new bore holes are required. ANSI Grade 1 deadbolts (Schlage B60N or similar) are recommended for exterior doors. Installation typically takes 20–45 minutes per door.',
      },
      {
        question: 'Can a locksmith open a house door without a key?',
        answer: 'Yes. A licensed residential locksmith uses lock picking or bypass techniques to open most door locks non-destructively — meaning your lock is undamaged and still functional after entry. Most residential lockouts are resolved in 5–15 minutes. Proof of residency (ID with matching address) will be requested.',
      },
      {
        question: 'Can a locksmith install a smart lock?',
        answer: 'Yes. Most licensed locksmiths install and program smart locks from major brands including Schlage Encode, August Smart Lock, Yale Assure, and Kwikset Halo. The service includes hardware installation, deadbolt calibration, and app pairing. Expect to pay $75–$150 for labor plus the cost of the lock.',
      },
      {
        question: 'What is the most secure deadbolt for a residential door?',
        answer: 'The most secure residential deadbolts are ANSI Grade 1 certified locks such as the Schlage B60N, Medeco Maxum, and Mul-T-Lock MT5+. Key features to look for: ANSI/BHMA Grade 1 rating, anti-pick pins, anti-drill hardened steel, and at minimum a 1-inch throw bolt. Door frame reinforcement is equally important.',
      },
      {
        question: 'How long does lock rekeying take?',
        answer: 'Rekeying a standard pin-tumbler lock takes approximately 10–20 minutes per lock. A whole-house rekey (3–5 locks) typically takes 30–60 minutes. The locksmith disassembles the lock cylinder, replaces the driver and key pins to match a new key code, and reassembles and tests the lock.',
      },
      {
        question: 'Can I rekey my locks to all use the same key?',
        answer: 'Yes — this is called a "master rekey" or "keyed alike" service. A locksmith can rekey multiple locks (front door, back door, garage) so all operate on a single key. This is a common service for new homeowners. Cost is the same as standard rekeying per lock.',
      },
    ],
  },

  'commercial-locksmith': {
    slug: 'commercial-locksmith',
    name: 'Commercial Locksmith',
    schemaType: 'ProfessionalService',
    headline: 'Commercial Locksmith — Business Security, Access Control & Master Keys',
    shortDescription:
      'Professional commercial locksmith services for Indiana businesses: master key systems, access control, panic bars, high-security locks, and business lockouts.',
    entityKeywords: [
      'commercial locksmith', 'business locksmith', 'master key system',
      'access control', 'panic bar installation', 'exit device', 'high security locks',
      'commercial lockout', 'office lockout', 'keypad entry', 'electronic access',
      'commercial rekeying', 'security audit', 'file cabinet lock', 'storefront lock',
    ],
    semanticVariants: [
      'office locksmith', 'business lock service', 'commercial lock installation',
      'industrial locksmith', 'retail security locksmith', 'commercial door hardware',
    ],
    features: [
      { title: 'Master Key Systems', description: 'Design and install hierarchical master key systems — allowing different levels of access for employees, managers, and owners with a single master key override.' },
      { title: 'Access Control Systems', description: 'Keypad, proximity card, biometric, and cloud-based access control for commercial facilities. We install, service, and integrate with existing security systems.' },
      { title: 'Panic Bar & Exit Device Installation', description: 'Code-compliant panic bar installation for commercial doors. We carry Von Duprin, Sargent, and Falcon hardware to meet ADA and fire code requirements.' },
      { title: 'High-Security Locks', description: 'Medeco, Mul-T-Lock, and ASSA Abloy high-security cylinders for businesses that require patented key control and pick/drill resistance.' },
      { title: 'Business Lockouts', description: '24/7 commercial lockout service for offices, retail stores, warehouses, and industrial facilities. We minimize business downtime.' },
      { title: 'Security Audits', description: 'Comprehensive walk-through of your facility to identify vulnerabilities. Written report with prioritized recommendations provided at no obligation.' },
    ],
    processSteps: [
      'Contact us to schedule a site assessment or emergency dispatch',
      'We survey your facility and document all entry points and current hardware',
      'We design a security solution tailored to your business size and access needs',
      'Installation scheduled to minimize disruption to business operations',
      'We provide employee training on new hardware, key control documentation, and service agreement options',
    ],
    paaQuestions: [
      {
        question: 'How much does a master key system cost for a business?',
        answer: 'A commercial master key system typically costs $300–$1,500+ depending on the number of locks, security level, and key hierarchy complexity. Simple 5–10 door systems start around $300–$500. Large facilities with multiple access levels (grandmaster, master, change key) cost $800–$2,000+. This includes hardware, cylinder installation, and key cutting.',
      },
      {
        question: 'What is the difference between a master key and a regular key?',
        answer: 'A regular key opens only one specific lock. A master key opens all locks within a designated group. A grandmaster key opens all locks in a system. Master key systems use specially machined cylinders with two shear lines — one for the individual key and one for the master. They allow tiered access control without electronic systems.',
      },
      {
        question: 'Can a locksmith install an access control system for a small business?',
        answer: 'Yes. Most commercial locksmiths install keypad, key fob, and card-reader access control for small and mid-size businesses. Systems range from standalone keypad locks ($150–$400 per door) to networked cloud-based systems ($500–$2,000+ per door). We recommend matching the system to your user count and audit trail requirements.',
      },
      {
        question: 'What should I do if an employee loses a key or is terminated?',
        answer: 'If a key-holding employee leaves on bad terms: (1) Immediately change or rekey any locks they had access to. (2) If using a master key system, rekey the affected levels only. (3) Consider upgrading to patented key control (Medeco or Mul-T-Lock) to prevent unauthorized key duplication. Rekeying is faster and less expensive than lock replacement.',
      },
      {
        question: 'Are panic bars required by law for commercial buildings?',
        answer: 'In Indiana, panic (exit) devices are required by fire code on any commercial exit door that serves 50 or more occupants, and on all high-hazard occupancy exits regardless of size. IBC and NFPA 101 Life Safety Code govern requirements. Non-compliance can result in code violations. A licensed commercial locksmith can assess and bring your facility into compliance.',
      },
      {
        question: 'How do I secure a commercial building after a break-in?',
        answer: 'After a commercial break-in: (1) Call us immediately for 24/7 emergency boarding and lock repair. (2) Document everything for your insurance claim before cleaning up. (3) Replace or rekey all compromised locks. (4) Consider upgrading to high-security locks with anti-drill and anti-pick features. (5) Schedule a security audit to identify and address all vulnerabilities.',
      },
    ],
  },

  'key-services': {
    slug: 'key-services',
    name: 'Key Services',
    schemaType: 'ProfessionalService',
    headline: 'Key Cutting, Duplication & Transponder Programming',
    shortDescription:
      'Professional key cutting, duplication, and transponder programming for residential, commercial, and automotive applications across central Indiana.',
    entityKeywords: [
      'key cutting', 'key duplication', 'key fob programming', 'transponder key',
      'car key copy', 'house key copy', 'laser cut key', 'sidewinder key',
      'high security key', 'skeleton key', 'master key cutting', 'key extraction',
      'broken key', 'key replacement', 'VATS key', 'proximity key', 'smart key',
    ],
    semanticVariants: [
      'key making', 'key copy service', 'key blank cutting', 'automotive key specialist',
      'key fob replacement', 'electronic key programming', 'key code cutting',
    ],
    features: [
      { title: 'Car Key Cutting', description: 'We cut all types of car keys — standard metal keys, laser-cut (sidewinder) keys, high-security keys, and transponder-chipped keys — using code-based cutting machines.' },
      { title: 'Key Fob Programming', description: 'We program replacement key fobs for most domestic and imported vehicles using professional OBD-II and dedicated key programming equipment.' },
      { title: 'House & Commercial Key Duplication', description: 'Standard, Medeco, Mul-T-Lock, and high-security key duplication. We stock hundreds of key blanks and cut on-site.' },
      { title: 'Transponder Chip Programming', description: 'We program transponder chips to match your vehicle\'s ECU. Supports Hitag2, Hitag Pro, PCF7936, and most common chip types.' },
      { title: 'Broken Key Extraction', description: 'Broken key lodged in a lock or ignition? We extract fragments with specialized tools without damaging the cylinder, then cut a new key immediately.' },
      { title: 'High-Security Key Duplication', description: 'Authorized cutting of Medeco, Mul-T-Lock, and other restricted-keyway systems. Duplication requires authorization and verification.' },
    ],
    processSteps: [
      'Bring your key or provide the key code / VIN for automotive keys',
      'We identify the exact key blank and cutting specifications',
      'Key is cut on our precision code-cutting machine',
      'For transponder keys: chip is programmed and verified against the vehicle',
      'All cuts are tested and verified before you leave',
    ],
    paaQuestions: [
      {
        question: 'How much does key duplication cost?',
        answer: 'Standard house key duplication costs $2–$6. Car key duplication (metal blade only, no chip) costs $5–$15. Transponder key cutting and programming costs $80–$175. High-security key cutting (Medeco, Mul-T-Lock) costs $25–$75. We cut keys on-site with precision equipment and test every cut.',
      },
      {
        question: 'Can a locksmith cut a car key from the VIN number?',
        answer: 'Yes. A licensed locksmith with the proper equipment can decode a vehicle\'s key code from the VIN, then cut a new key without the original. This is called key code cutting. It is the standard method when all keys are lost and is significantly less expensive than towing to a dealership.',
      },
      {
        question: 'Can locksmiths duplicate high-security keys like Medeco?',
        answer: 'Medeco, Mul-T-Lock, and other restricted-keyway keys can only be duplicated by authorized dealers with the proper cutting equipment and key ownership verification. As authorized locksmiths, we can duplicate these keys with proper ID and authorization documentation.',
      },
      {
        question: 'Why won\'t my copied key work in the lock?',
        answer: 'Common causes of a non-working key copy: (1) The original key was worn and the copy was cut from worn measurements. (2) The wrong key blank was used. (3) The cut depths are off by a fraction. Bring both the original and copy to us — we can re-cut the copy precisely or use code-based cutting to get the exact specifications.',
      },
      {
        question: 'What is a transponder key and why is it more expensive?',
        answer: 'A transponder key contains a microchip in the head that communicates with your vehicle\'s ECU. When you insert the key, the car sends a radio signal to the chip; if the chip sends back the correct code, the car starts. Without this communication, the immobilizer prevents the engine from starting. Programming requires specialized equipment, which is why transponder keys cost more than standard metal keys.',
      },
      {
        question: 'Can I get a key made if I have no keys at all?',
        answer: 'Yes, for both homes and vehicles. For homes, a locksmith can pick the lock, then decode the lock\'s key code to cut a new key. For vehicles, most locksmiths can decode the key code from the VIN and cut + program a new key. This service costs more than duplication but is far less expensive than dealer services.',
      },
    ],
  },

  'safe-services': {
    slug: 'safe-services',
    name: 'Safe & Vault Services',
    schemaType: 'ProfessionalService',
    headline: 'Safe Opening, Combination Changes & Vault Services',
    shortDescription:
      'Professional safe and vault services: non-destructive safe opening, combination changes, digital lock resets, safe repair, and antique safe services.',
    entityKeywords: [
      'safe locksmith', 'safe opening', 'safe cracking', 'combination change',
      'vault locksmith', 'safe repair', 'digital safe reset', 'gun safe service',
      'fireproof safe', 'wall safe', 'floor safe', 'antique safe', 'safe technician',
      'broken safe', 'lost safe combination', 'safe lock replacement',
    ],
    semanticVariants: [
      'safe specialist', 'vault technician', 'safe combination recovery',
      'safe bypass', 'electronic safe service', 'biometric safe service',
    ],
    features: [
      { title: 'Non-Destructive Safe Opening', description: 'We open most safes without drilling using manipulation, scoping, and bypass techniques. Non-destructive opening preserves your safe\'s value and functionality.' },
      { title: 'Combination Changes', description: 'We change dial combinations and reset digital/electronic combinations on most residential and commercial safe brands.' },
      { title: 'Digital Lock Reset', description: 'Forgotten the code to your electronic or digital safe? We reset biometric, keypad, and combination digital locks without damaging the safe body.' },
      { title: 'Safe Repair & Maintenance', description: 'Worn dials, broken relockers, damaged hinges, and electronic lock malfunctions — we diagnose and repair all safe components.' },
      { title: 'Gun Safe Service', description: 'Gun safe opening, combination changes, biometric resets, and interior hinge/shelf repair for all major brands including Liberty, Fort Knox, and Browning.' },
      { title: 'Antique Safe Service', description: 'Restoration and opening of antique dial-combination safes. We preserve and service vintage Mosler, Diebold, and Victor safe locks.' },
    ],
    processSteps: [
      'Describe your safe brand, model, and lock type — we confirm we can service it',
      'We quote the price for the required service (opening, combination change, repair)',
      'Technician arrives with safe-specific tools and manufacturer references',
      'We attempt non-destructive entry first — manipulation or bypass',
      'If drilling is required (last resort), we repair the lock or install a new high-quality replacement',
    ],
    paaQuestions: [
      {
        question: 'How much does it cost to open a safe?',
        answer: 'Non-destructive safe opening costs $150–$350 for most residential safes. Complex safes or high-security commercial safes cost $300–$600. If drilling is required (last resort), expect to pay $200–$500 plus lock replacement. We always attempt non-destructive methods first and quote the price before starting.',
      },
      {
        question: 'Can a locksmith open a safe without damaging it?',
        answer: 'Yes — in most cases. Licensed safe technicians use manipulation (listening to the dial mechanism), scoping (inserting a small fiber-optic camera), and bypass techniques to open safes non-destructively. Success depends on the safe type and lock mechanism. High-security TL-30 and TL-15 rated safes are more challenging but often still openable without drilling.',
      },
      {
        question: 'What do I do if I forgot my safe combination?',
        answer: 'If you\'ve forgotten your safe combination: (1) Check your owner\'s manual and any cards that came with the safe — combinations are often included. (2) Check for a reset button on electronic safes. (3) Contact the manufacturer with proof of purchase — some provide combination recovery. (4) Call a licensed safe technician. We can open most safes non-destructively and reset the combination.',
      },
      {
        question: 'Can a locksmith open a gun safe?',
        answer: 'Yes. Licensed locksmiths routinely open gun safes using non-destructive methods including manipulation and bypass. We service most major brands: Liberty Safe, Fort Knox, American Security, Browning, Cannon, and Stack-On. Bring proof of ownership. For combination changes and biometric resets, the process typically takes 30–60 minutes.',
      },
      {
        question: 'How do locksmiths open safes without the combination?',
        answer: 'Locksmiths use several techniques: (1) Manipulation — listening or feeling the internal mechanism while rotating the dial to identify the combination. (2) Scoping — drilling a small hole to view the internal components with a fiber-optic scope. (3) Bypass — using the safe\'s reset procedures or known vulnerabilities. Drilling the lock body is a last resort when other methods fail.',
      },
      {
        question: 'How much does it cost to change a safe combination?',
        answer: 'Combination changes for standard dial safes cost $75–$150. Electronic combination resets cost $50–$125. The service includes verifying the new combination works correctly and documenting the change. We can also change a combination to one of your choosing or have it set to a manufacturer default.',
      },
    ],
  },
};

// ─── Content generation helpers ────────────────────────────────────────────────

export function getServiceData(slug: ServiceSlug): ServiceSEOData {
  return SERVICE_DATA[slug];
}

export function getLocationData(slug: LocationSlug): LocationSEOData {
  return LOCATION_DATA[slug];
}

/** Build the 84 service×location param pairs for generateStaticParams */
export function getAllServiceLocationParams() {
  return ALL_SERVICE_SLUGS.flatMap((service) =>
    ALL_LOCATION_SLUGS.map((location) => ({ service, location }))
  );
}

/** Deduplicated service slugs for use in internal linking widgets */
export function getOtherServices(current: ServiceSlug): ServiceSlug[] {
  return ALL_SERVICE_SLUGS.filter((s) => s !== current);
}

/** Nearby locations sorted by distance for internal linking */
export function getNearbyLocations(current: LocationSlug, limit = 5): LocationSEOData[] {
  return ALL_LOCATION_SLUGS
    .filter((s) => s !== current)
    .map((s) => LOCATION_DATA[s])
    .filter((l) => l.distanceMiles !== null)
    .sort((a, b) => (a.distanceMiles ?? 99) - (b.distanceMiles ?? 99))
    .slice(0, limit);
}

/** Service-specific, location-aware meta title */
export function buildServiceLocationTitle(
  service: ServiceSEOData,
  location: LocationSEOData
): string {
  return `${service.name} in ${location.name}, ${location.stateShort} | ${BUSINESS_NAME} | ${BUSINESS_PHONE_DISPLAY}`;
}

/** Service-specific, location-aware meta description */
export function buildServiceLocationDescription(
  service: ServiceSEOData,
  location: LocationSEOData
): string {
  const dist = location.distanceMiles
    ? ` We serve ${location.name} from our Kokomo base — ${location.distanceMiles} miles away, ${location.responseTime} typical response.`
    : '';
  return `${service.name} in ${location.name}, ${location.stateShort}. ${service.shortDescription}${dist} Call ${BUSINESS_PHONE_DISPLAY} — available 24/7.`;
}

/** Location-specific FAQ questions (combines service PAA with location context) */
export function buildLocationFAQs(
  service: ServiceSEOData,
  location: LocationSEOData
): FAQItem[] {
  const locationFAQ: FAQItem = {
    question: `How quickly can ${BUSINESS_NAME} respond to a ${service.name.toLowerCase()} call in ${location.name}, ${location.stateShort}?`,
    answer: `Our typical response time in ${location.name} is ${location.responseTime}${location.distanceMiles ? ` — approximately ${location.distanceMiles} miles from our Kokomo dispatch center` : ''}. We dispatch immediately upon your call, 24 hours a day, 7 days a week. Call ${BUSINESS_PHONE_DISPLAY} for the fastest response.`,
  };

  const areaFAQ: FAQItem = {
    question: `Does ${BUSINESS_NAME} serve ${location.name}, ${location.stateShort}?`,
    answer: `Yes. ${BUSINESS_NAME} provides ${service.name.toLowerCase()} service to ${location.name} and the surrounding ${location.county} area. We are based in Kokomo, Indiana and serve all of central Indiana including ${location.name}. Call ${BUSINESS_PHONE_DISPLAY} any time.`,
  };

  // Return location-specific FAQ pair + first 4 from service PAA
  return [locationFAQ, areaFAQ, ...service.paaQuestions.slice(0, 4)];
}
