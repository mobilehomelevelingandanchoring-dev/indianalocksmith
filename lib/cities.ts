export interface City {
  name: string;
  slug: string;
  state: string;
  stateShort: string;
  county: string;
  distanceMiles: number;
  population: number;
  description: string;
  neighborhoods?: string[];
  landmarks?: string[];
}

export const CITIES: City[] = [
  {
    name: 'Logansport',
    slug: 'logansport-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Cass County',
    distanceMiles: 25,
    population: 17500,
    description: 'A historic city on the Eel and Wabash Rivers, seat of Cass County.',
    landmarks: ['Riverside Park', 'Cass County Courthouse', 'Logansport High School'],
  },
  {
    name: 'Peru',
    slug: 'peru-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Miami County',
    distanceMiles: 29,
    population: 11400,
    description: 'The "Circus City of the World," located in Miami County along the Wabash River.',
    landmarks: ['International Circus Hall of Fame', 'Peru Amateur Circus', 'Miami County Courthouse'],
  },
  {
    name: 'Tipton',
    slug: 'tipton-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Tipton County',
    distanceMiles: 22,
    population: 5200,
    description: 'A small, welcoming community that is the county seat of Tipton County.',
    landmarks: ['Tipton County Courthouse', 'Tipton High School', 'Tipton Community Park'],
  },
  {
    name: 'Frankfort',
    slug: 'frankfort-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Clinton County',
    distanceMiles: 26,
    population: 16000,
    description: 'County seat of Clinton County, known for its historic downtown and agricultural heritage.',
    landmarks: ['Clinton County Courthouse', 'TPA Park', 'Frankfort Community Public Library'],
  },
  {
    name: 'Galveston',
    slug: 'galveston-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Cass County',
    distanceMiles: 14,
    population: 1200,
    description: 'A small town in Cass County, just northwest of Kokomo.',
    landmarks: ['Galveston Town Park', 'Prairie Creek Reservoir (nearby)'],
  },
  {
    name: 'Greentown',
    slug: 'greentown-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Howard County',
    distanceMiles: 11,
    population: 2500,
    description: 'A growing community in eastern Howard County, just minutes from Kokomo.',
    landmarks: ['Greentown Glass Museum', 'Greentown Elementary School'],
  },
  {
    name: 'Russiaville',
    slug: 'russiaville-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Howard County',
    distanceMiles: 9,
    population: 1050,
    description: 'A charming small town in western Howard County, close to Kokomo.',
    landmarks: ['Russiaville Town Park', 'West Russiaville Elementary'],
  },
  {
    name: 'Bunker Hill',
    slug: 'bunker-hill-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Miami County',
    distanceMiles: 21,
    population: 900,
    description: 'A small community in Miami County, home to the Grissom Air Museum.',
    landmarks: ['Grissom Air Museum', 'Bunker Hill Airport'],
  },
  {
    name: 'Converse',
    slug: 'converse-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Miami County',
    distanceMiles: 20,
    population: 1100,
    description: 'A welcoming small town in Miami County, east of Kokomo.',
    landmarks: ['Converse Town Park', 'Converse-Clay Township Public Library'],
  },
  {
    name: 'Marion',
    slug: 'marion-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Grant County',
    distanceMiles: 32,
    population: 28000,
    description: 'The county seat of Grant County and one of the larger cities in north-central Indiana.',
    landmarks: ['Matter Park', 'Marion Public Library', 'Gas City (nearby)'],
  },
  {
    name: 'Elwood',
    slug: 'elwood-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Madison County',
    distanceMiles: 38,
    population: 8500,
    description: 'A historic city in Madison County, birthplace of Wendell Willkie.',
    landmarks: ['Anderson University (nearby)', 'Elwood Park', 'Madison County Fair'],
  },
  {
    name: 'Wabash',
    slug: 'wabash-in',
    state: 'Indiana',
    stateShort: 'IN',
    county: 'Wabash County',
    distanceMiles: 27,
    population: 10500,
    description: 'The county seat of Wabash County, the first electrically lit city in the world.',
    landmarks: ['Wabash County Courthouse', 'Eagles Theatre', 'Honeywell Center'],
  },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((city) => city.slug === slug);
}

export const ALL_CITY_SLUGS = CITIES.map((c) => c.slug);
