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

  // ── Madison County ────────────────────────────────────────────────────────
  { name: 'Anderson', slug: 'anderson-in', state: 'Indiana', stateShort: 'IN', county: 'Madison County', distanceMiles: 42, population: 54000, description: 'The county seat of Madison County, home to Anderson University and Mounds State Park.', landmarks: ['Anderson University', 'Mounds State Park', 'Madison County Courthouse', 'Paramount Theatre'] },
  { name: 'Pendleton', slug: 'pendleton-in', state: 'Indiana', stateShort: 'IN', county: 'Madison County', distanceMiles: 52, population: 4500, description: 'A growing Madison County community along the White River, known for Falls Park.', landmarks: ['Falls Park', 'Pendleton Heights High School', 'White River'] },
  { name: 'Lapel', slug: 'lapel-in', state: 'Indiana', stateShort: 'IN', county: 'Madison County', distanceMiles: 48, population: 2100, description: 'A small town in Madison County between Anderson and Noblesville.', landmarks: ['Lapel High School', 'Lapel Town Park'] },
  { name: 'Ingalls', slug: 'ingalls-in', state: 'Indiana', stateShort: 'IN', county: 'Madison County', distanceMiles: 50, population: 3300, description: 'A small community in Madison County, part of the greater Indianapolis metro area.', landmarks: ['Mount Vernon Community School', 'Ingalls Town Park'] },

  // ── Hamilton County ───────────────────────────────────────────────────────
  { name: 'Noblesville', slug: 'noblesville-in', state: 'Indiana', stateShort: 'IN', county: 'Hamilton County', distanceMiles: 65, population: 75000, description: 'The county seat of Hamilton County, one of Indiana\'s fastest-growing cities with a vibrant downtown square.', landmarks: ['Hamilton County Courthouse', 'Federal Hill Commons', 'Ruoff Music Center', 'Potter\'s Bridge Park'] },
  { name: 'Carmel', slug: 'carmel-in', state: 'Indiana', stateShort: 'IN', county: 'Hamilton County', distanceMiles: 68, population: 105000, description: 'An affluent Hamilton County suburb consistently ranked among the best places to live in the US.', landmarks: ['Carmel Arts & Design District', 'The Palladium', 'Midtown Carmel', 'Clay Terrace Mall'] },
  { name: 'Fishers', slug: 'fishers-in', state: 'Indiana', stateShort: 'IN', county: 'Hamilton County', distanceMiles: 68, population: 102000, description: 'One of Indiana\'s fastest-growing cities, known for its tech sector, Conner Prairie, and highly rated schools.', landmarks: ['Conner Prairie', 'Fishers Event Center', 'Nickel Plate Trail', 'Holland Park'] },
  { name: 'Westfield', slug: 'westfield-in', state: 'Indiana', stateShort: 'IN', county: 'Hamilton County', distanceMiles: 65, population: 56000, description: 'A fast-growing Hamilton County city home to Grand Park Sports Campus, one of the largest youth sports facilities in the US.', landmarks: ['Grand Park Sports Campus', 'Westfield High School', 'Midland Trace Trail'] },
  { name: 'Sheridan', slug: 'sheridan-in', state: 'Indiana', stateShort: 'IN', county: 'Hamilton County', distanceMiles: 62, population: 2900, description: 'A small rural community in northern Hamilton County with a welcoming small-town character.', landmarks: ['Biddle Memorial Park', 'Sheridan High School', 'White River Trail'] },
  { name: 'Cicero', slug: 'cicero-in', state: 'Indiana', stateShort: 'IN', county: 'Hamilton County', distanceMiles: 63, population: 5100, description: 'A lakeside community on Morse Reservoir in northern Hamilton County, popular for boating and waterfront living.', landmarks: ['Morse Reservoir', 'Cicero Park', 'Hamilton County 4-H Fairgrounds'] },
  { name: 'Arcadia', slug: 'arcadia-in', state: 'Indiana', stateShort: 'IN', county: 'Hamilton County', distanceMiles: 65, population: 1800, description: 'A small town in northern Hamilton County near Morse Reservoir and the White River.', landmarks: ['White River', 'Arcadia Town Park'] },

  // ── Boone County ──────────────────────────────────────────────────────────
  { name: 'Lebanon', slug: 'lebanon-in', state: 'Indiana', stateShort: 'IN', county: 'Boone County', distanceMiles: 55, population: 17000, description: 'The county seat of Boone County at the junction of I-65 and I-865 northwest of Indianapolis.', landmarks: ['Boone County Courthouse', 'Lebanon Community Park', 'Memorial Park'] },
  { name: 'Zionsville', slug: 'zionsville-in', state: 'Indiana', stateShort: 'IN', county: 'Boone County', distanceMiles: 62, population: 32000, description: 'An affluent Boone County suburb with a charming brick-street village downtown and highly rated schools.', landmarks: ['Zionsville Village Brick Street', 'Lincoln Park', 'Zionsville Community High School'] },
  { name: 'Whitestown', slug: 'whitestown-in', state: 'Indiana', stateShort: 'IN', county: 'Boone County', distanceMiles: 62, population: 10000, description: 'One of Indiana\'s fastest-growing towns, located along I-65 in Boone County with major distribution center growth.', landmarks: ['Whitestown Community Park', 'Whitestown Amphitheater', 'I-65 & SR-267 interchange'] },
  { name: 'Jamestown', slug: 'jamestown-in', state: 'Indiana', stateShort: 'IN', county: 'Boone County', distanceMiles: 70, population: 850, description: 'A quiet small town in western Boone County and one of Indiana\'s less-populated county seats.', landmarks: ['Boone County Western Park'] },
  { name: 'Advance', slug: 'advance-in', state: 'Indiana', stateShort: 'IN', county: 'Boone County', distanceMiles: 65, population: 600, description: 'A small rural community in Boone County west of Zionsville.', landmarks: ['Boone County Rural Landscape'] },

  // ── Hendricks County ──────────────────────────────────────────────────────
  { name: 'Avon', slug: 'avon-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 75, population: 22000, description: 'A fast-growing Hendricks County suburb west of Indianapolis known for excellent schools and White Lick Creek Park.', landmarks: ['Avon Town Hall Park', 'White Lick Creek Park', 'Avon High School'] },
  { name: 'Brownsburg', slug: 'brownsburg-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 73, population: 28000, description: 'A growing Hendricks County community home to Lucas Oil Raceway and a booming residential market.', landmarks: ['Lucas Oil Raceway', 'Arbuckle Acres Park', 'Brownsburg High School'] },
  { name: 'Plainfield', slug: 'plainfield-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 73, population: 35000, description: 'A major logistics and retail hub adjacent to Indianapolis International Airport in Hendricks County.', landmarks: ['Indianapolis International Airport', 'Vandalia Trail', 'Plainfield Aquatic Center'] },
  { name: 'Danville', slug: 'danville-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 77, population: 10000, description: 'The county seat of Hendricks County, featuring a beautiful courthouse square and McCloud Nature Park.', landmarks: ['Hendricks County Courthouse', 'McCloud Nature Park', 'Ellis Park'] },
  { name: 'Pittsboro', slug: 'pittsboro-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 70, population: 2800, description: 'A small Hendricks County town on US-136 between Lebanon and Brownsburg.', landmarks: ['Pittsboro Town Park', 'Tri-West High School'] },
  { name: 'Mooresville', slug: 'mooresville-in', state: 'Indiana', stateShort: 'IN', county: 'Morgan County', distanceMiles: 82, population: 10000, description: 'A growing Morgan County community south of Indianapolis, known for John R. Wooden\'s hometown roots.', landmarks: ['Mooresville Public Library', 'Sullivan Munce Cultural Center', 'White Lick Creek'] },
  { name: 'Amo', slug: 'amo-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 82, population: 400, description: 'A small rural community in central Hendricks County.', landmarks: ['Amo Town Park'] },
  { name: 'Clayton', slug: 'clayton-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 82, population: 850, description: 'A small town in central Hendricks County along State Road 39.', landmarks: ['Clayton Town Park'] },
  { name: 'Coatesville', slug: 'coatesville-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 88, population: 500, description: 'A small western Hendricks County community near the Morgan County line.', landmarks: ['Coatesville Town Park'] },
  { name: 'North Salem', slug: 'north-salem-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 82, population: 600, description: 'A quiet small town in western Hendricks County with rural Indiana character.', landmarks: ['North Salem Park'] },
  { name: 'Lizton', slug: 'lizton-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 80, population: 500, description: 'A small Hendricks County community along US-136 west of Brownsburg.', landmarks: ['US-136 Corridor'] },
  { name: 'Stilesville', slug: 'stilesville-in', state: 'Indiana', stateShort: 'IN', county: 'Hendricks County', distanceMiles: 88, population: 300, description: 'A small rural community in western Hendricks County.', landmarks: ['Stilesville Community Building'] },

  // ── Johnson County ────────────────────────────────────────────────────────
  { name: 'Greenwood', slug: 'greenwood-in', state: 'Indiana', stateShort: 'IN', county: 'Johnson County', distanceMiles: 88, population: 65000, description: 'One of Indiana\'s largest suburbs, located directly south of Indianapolis on US-31 in Johnson County.', landmarks: ['Greenwood Park Mall', 'Freedom Park', 'Greenwood High School', 'Grassy Creek Park'] },
  { name: 'Franklin', slug: 'franklin-in', state: 'Indiana', stateShort: 'IN', county: 'Johnson County', distanceMiles: 92, population: 25000, description: 'The county seat of Johnson County, home to Franklin College and a vibrant downtown.', landmarks: ['Franklin College', 'Johnson County Courthouse', 'Johnson County Fairgrounds'] },
  { name: 'Bargersville', slug: 'bargersville-in', state: 'Indiana', stateShort: 'IN', county: 'Johnson County', distanceMiles: 90, population: 7500, description: 'A rapidly growing Johnson County community between Greenwood and Franklin along SR-135.', landmarks: ['Center Grove High School', 'Bargersville Community Park'] },
  { name: 'Edinburgh', slug: 'edinburgh-in', state: 'Indiana', stateShort: 'IN', county: 'Johnson County', distanceMiles: 100, population: 4500, description: 'A Johnson County community near Camp Atterbury, home to Edinburgh Premium Outlets.', landmarks: ['Edinburgh Premium Outlets', 'Camp Atterbury', 'Sugar Creek'] },
  { name: 'Whiteland', slug: 'whiteland-in', state: 'Indiana', stateShort: 'IN', county: 'Johnson County', distanceMiles: 90, population: 5000, description: 'A growing Johnson County community along I-65 south of Greenwood.', landmarks: ['Clark-Pleasant School District', 'Whiteland Community Park'] },
  { name: 'Trafalgar', slug: 'trafalgar-in', state: 'Indiana', stateShort: 'IN', county: 'Johnson County', distanceMiles: 98, population: 1200, description: 'A small Johnson County community near Tanning Mill Lake in southern Johnson County.', landmarks: ['Tanning Mill Lake', 'Trafalgar Town Park'] },
  { name: 'Needham', slug: 'needham-in', state: 'Indiana', stateShort: 'IN', county: 'Johnson County', distanceMiles: 92, population: 300, description: 'A small rural community in Johnson County.', landmarks: ['Johnson County Rural Area'] },

  // ── Hancock County ────────────────────────────────────────────────────────
  { name: 'Greenfield', slug: 'greenfield-in', state: 'Indiana', stateShort: 'IN', county: 'Hancock County', distanceMiles: 65, population: 22000, description: 'The county seat of Hancock County and birthplace of poet James Whitcomb Riley, east of Indianapolis on I-70.', landmarks: ['James Whitcomb Riley birthplace', 'Hancock County Courthouse', 'Riley Park', 'Greenfield Central High School'] },
  { name: 'Fortville', slug: 'fortville-in', state: 'Indiana', stateShort: 'IN', county: 'Hancock County', distanceMiles: 65, population: 6500, description: 'A growing Hancock County community northeast of Indianapolis on SR-67.', landmarks: ['Fortville Community Park', 'Sugar Creek Trail'] },
  { name: 'McCordsville', slug: 'mccordsville-in', state: 'Indiana', stateShort: 'IN', county: 'Hancock County', distanceMiles: 65, population: 8000, description: 'One of Indiana\'s fastest-growing towns, located northeast of Fishers in Hancock County near Geist Reservoir.', landmarks: ['Geist Reservoir', 'Mt. Vernon High School', 'McCordsville Community Park'] },
  { name: 'New Palestine', slug: 'new-palestine-in', state: 'Indiana', stateShort: 'IN', county: 'Hancock County', distanceMiles: 72, population: 3500, description: 'A growing Hancock County community known for Southern Hancock Schools, east of Indianapolis.', landmarks: ['New Palestine High School', 'Brandywine Creek', 'Town Park'] },
  { name: 'Charlottesville', slug: 'charlottesville-in', state: 'Indiana', stateShort: 'IN', county: 'Hancock County', distanceMiles: 65, population: 400, description: 'A small rural community in central Hancock County.', landmarks: ['Buck Creek'] },
  { name: 'Maxwell', slug: 'maxwell-in', state: 'Indiana', stateShort: 'IN', county: 'Hancock County', distanceMiles: 70, population: 300, description: 'A small agricultural community in eastern Hancock County.', landmarks: ['Maxwell Community Hall'] },
  { name: 'Wilkinson', slug: 'wilkinson-in', state: 'Indiana', stateShort: 'IN', county: 'Hancock County', distanceMiles: 55, population: 400, description: 'A small community in western Hancock County.', landmarks: ['Wilkinson Town Park'] },

  // ── Shelby County ─────────────────────────────────────────────────────────
  { name: 'Shelbyville', slug: 'shelbyville-in', state: 'Indiana', stateShort: 'IN', county: 'Shelby County', distanceMiles: 82, population: 21000, description: 'The county seat of Shelby County, an agricultural and manufacturing community southeast of Indianapolis.', landmarks: ['Shelby County Courthouse', 'Grover Museum', 'Shelbyville High School'] },
  { name: 'Morristown', slug: 'morristown-in', state: 'Indiana', stateShort: 'IN', county: 'Shelby County', distanceMiles: 82, population: 1200, description: 'A small Shelby County community along the Big Blue River, known for its historic covered bridge.', landmarks: ['Morristown Covered Bridge', 'Big Blue River'] },
  { name: 'Fountaintown', slug: 'fountaintown-in', state: 'Indiana', stateShort: 'IN', county: 'Shelby County', distanceMiles: 88, population: 400, description: 'A rural community in Shelby County southeast of Indianapolis.', landmarks: ['Little Blue River'] },
  { name: 'Fairland', slug: 'fairland-in', state: 'Indiana', stateShort: 'IN', county: 'Shelby County', distanceMiles: 90, population: 400, description: 'A small rural community in Shelby County.', landmarks: ['Shelby County Fairgrounds'] },
  { name: 'Boggstown', slug: 'boggstown-in', state: 'Indiana', stateShort: 'IN', county: 'Shelby County', distanceMiles: 90, population: 300, description: 'A small rural community in northwestern Shelby County.', landmarks: ['Boggstown Community Hall'] },
  { name: 'Gwynneville', slug: 'gwynneville-in', state: 'Indiana', stateShort: 'IN', county: 'Shelby County', distanceMiles: 92, population: 400, description: 'A small community in Shelby County near the Decatur County line.', landmarks: ['Gwynneville Town Hall'] },

  // ── Morgan County ─────────────────────────────────────────────────────────
  { name: 'Martinsville', slug: 'martinsville-in', state: 'Indiana', stateShort: 'IN', county: 'Morgan County', distanceMiles: 90, population: 12000, description: 'The county seat of Morgan County, known for its artesian wells, historic downtown, and Indiana Soldiers Home.', landmarks: ['Morgan County Courthouse', 'Artesian Well Park', 'Indiana Soldiers Home'] },
  { name: 'Monrovia', slug: 'monrovia-in', state: 'Indiana', stateShort: 'IN', county: 'Morgan County', distanceMiles: 85, population: 1100, description: 'A small Morgan County community along SR-42 west of Mooresville.', landmarks: ['White Lick Creek', 'Monrovia Park'] },
  { name: 'Morgantown', slug: 'morgantown-in', state: 'Indiana', stateShort: 'IN', county: 'Morgan County', distanceMiles: 90, population: 1000, description: 'A small Morgan County town near the Brown County line along SR-135.', landmarks: ['White River', 'Morgantown Town Park'] },
  { name: 'Brooklyn', slug: 'brooklyn-in', state: 'Indiana', stateShort: 'IN', county: 'Morgan County', distanceMiles: 88, population: 1400, description: 'A small Morgan County community between Mooresville and Martinsville.', landmarks: ['Brooklyn Town Park'] },

  // ── Marion County / Indianapolis ──────────────────────────────────────────
  { name: 'Indianapolis', slug: 'indianapolis-in', state: 'Indiana', stateShort: 'IN', county: 'Marion County', distanceMiles: 52, population: 875000, description: 'The state capital and largest city in Indiana, known for the Indianapolis 500, Colts, Pacers, and a thriving downtown.', landmarks: ['Indianapolis Motor Speedway', 'Lucas Oil Stadium', 'Bankers Life Fieldhouse', 'Indiana Statehouse', 'Monument Circle', 'White River State Park', 'The Children\'s Museum of Indianapolis'], neighborhoods: ['Broad Ripple', 'Fountain Square', 'Irvington', 'Meridian-Kessler', 'Mass Ave', 'Castleton', 'Lawrence', 'Pike Township', 'Warren Township', 'Southport', 'Speedway'] },
  { name: 'Beech Grove', slug: 'beech-grove-in', state: 'Indiana', stateShort: 'IN', county: 'Marion County', distanceMiles: 58, population: 16000, description: 'An independent city within Marion County, home to the Amtrak Beech Grove facility and strong community identity.', landmarks: ['Amtrak Beech Grove Facility', 'Beech Grove City Park', 'Beech Grove High School'] },
  { name: 'Camby', slug: 'camby-in', state: 'Indiana', stateShort: 'IN', county: 'Marion County', distanceMiles: 62, population: 8000, description: 'An unincorporated community in southwestern Marion County near Indianapolis International Airport and Plainfield.', landmarks: ['Indianapolis International Airport (nearby)', 'Eagle Creek Reservoir (nearby)'] },
  { name: 'West Newton', slug: 'west-newton-in', state: 'Indiana', stateShort: 'IN', county: 'Marion County', distanceMiles: 65, population: 500, description: 'A small community in southwestern Marion County along the White River.', landmarks: ['White River Greenway'] },

  // ── Decatur County ────────────────────────────────────────────────────────
  { name: 'Finly', slug: 'finly-in', state: 'Indiana', stateShort: 'IN', county: 'Decatur County', distanceMiles: 95, population: 300, description: 'A small rural community in Decatur County in south-central Indiana.', landmarks: ['Decatur County Rural Area'] },

  // ── Lake County — Northwest Indiana ───────────────────────────────────────
  { name: 'Gary', slug: 'gary-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 115, population: 65000, description: 'A Lake County city on Lake Michigan, birthplace of Michael Jackson and historically known as a steel industry center.', landmarks: ['Marquette Park Beach', 'Michael Jackson childhood home', 'Genesis Convention Center', 'Lake Michigan'], neighborhoods: ['Miller Beach', 'Midtown Gary', 'Glen Park', 'Black Oak', 'Aetna'] },
  { name: 'Hammond', slug: 'hammond-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 118, population: 72000, description: 'The most populous city in Lake County, located on the Illinois border adjacent to Chicago\'s south suburbs.', landmarks: ['Wolf Lake Memorial Park', 'Purdue University Northwest Hammond', 'Hammond Civic Center'], neighborhoods: ['Hessville', 'Robertsdale', 'Columbia Avenue', 'Woodmar'] },
  { name: 'Merrillville', slug: 'merrillville-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 110, population: 35000, description: 'A major retail and commercial hub in Lake County centered on US-30, home to Southlake Mall.', landmarks: ['Southlake Mall', 'Centennial Park', 'US-30 Corridor', 'Merrillville Community Planetarium'] },
  { name: 'Munster', slug: 'munster-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 118, population: 23000, description: 'An affluent Lake County suburb adjacent to Lansing, Illinois, consistently rated among Indiana\'s best places to live.', landmarks: ['Community Hospital Munster', 'Centennial Park', 'Munster High School'] },
  { name: 'Highland', slug: 'highland-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 115, population: 22000, description: 'A Lake County suburb at the junction of US-41 and Ridge Road near the Illinois border.', landmarks: ['Liberty Bell Park', 'Highland High School', 'US-41 Corridor'] },
  { name: 'Schererville', slug: 'schererville-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 112, population: 30000, description: 'A growing Lake County community at the crossroads of US-30 and US-41, one of the fastest-growing towns in Northwest Indiana.', landmarks: ['Schererville Town Park', 'US-41 & US-30 interchange', 'St. Michael Church'] },
  { name: 'Crown Point', slug: 'crown-point-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 110, population: 35000, description: 'The county seat of Lake County, known for its historic courthouse where John Dillinger famously escaped in 1934.', landmarks: ['Lake County Courthouse', 'The Venue at Old County Jail', 'Main Square Park', 'Crown Point Community Library'] },
  { name: 'Saint John', slug: 'saint-john-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 115, population: 24000, description: 'A growing Lake County community known for quality schools and a desirable suburban lifestyle.', landmarks: ['Lake Central High School', 'Civic Park', 'Town Hall'] },
  { name: 'Dyer', slug: 'dyer-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 118, population: 16000, description: 'A Lake County community on the Illinois border known for easy Chicago commuter access via I-394.', landmarks: ['Dyer Town Park', 'I-394 access', 'Lake Shore Drive access'] },
  { name: 'Griffith', slug: 'griffith-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 115, population: 16000, description: 'A Lake County community bordered by Highland, Munster, and Gary along the South Shore corridor.', landmarks: ['Griffith Park District', 'South Shore Railroad stop', 'Broad Street Business District'] },
  { name: 'Hobart', slug: 'hobart-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 112, population: 29000, description: 'A Lake County city on the shore of Lake George offering waterfront living in Northwest Indiana.', landmarks: ['Lake George', 'Hobart Lakefront', 'Hobart High School', 'Lakeside Park'] },
  { name: 'East Chicago', slug: 'east-chicago-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 120, population: 27000, description: 'A Lake County city on Lake Michigan historically known as an industrial and steel center.', landmarks: ['Cline Avenue Bridge', 'Washington Park Beach', 'Ameristar Casino', 'Lake Michigan'] },
  { name: 'Whiting', slug: 'whiting-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 120, population: 4500, description: 'A small Lake County city known for Whihala Beach on Lake Michigan and the annual Pierogi Fest.', landmarks: ['Whihala Beach', 'BP Whiting Refinery', 'Pierogi Fest (annual event)'] },
  { name: 'Cedar Lake', slug: 'cedar-lake-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 112, population: 12000, description: 'A Lake County community centered around Cedar Lake, a popular recreational lake for boating and fishing.', landmarks: ['Cedar Lake (the lake)', 'Lake Shore Drive', 'Cedar Lake Town Park'] },
  { name: 'Lowell', slug: 'lowell-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 108, population: 10000, description: 'A growing Lake County community along US-2 in southern Lake County near Buckley Homestead.', landmarks: ['Buckley Homestead County Park', 'Lowell High School', 'Kankakee River (nearby)'] },
  { name: 'Lake Station', slug: 'lake-station-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 115, population: 12000, description: 'A Lake County city adjacent to Gary, historically tied to the steel industry.', landmarks: ['Jeorse Park', 'Deep River', 'Lake Station City Hall'] },
  { name: 'Leroy', slug: 'leroy-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 115, population: 300, description: 'A small unincorporated community in Lake County.', landmarks: ['Deep River County Park'] },
  { name: 'Shelby', slug: 'shelby-lake-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 115, population: 700, description: 'A small community in Lake County along US-41.', landmarks: ['US-41 Corridor'] },
  { name: 'Roselawn', slug: 'roselawn-in', state: 'Indiana', stateShort: 'IN', county: 'Newton County', distanceMiles: 108, population: 1500, description: 'A Newton County community known for the Kankakee River and rural character.', landmarks: ['Kankakee River', 'Sumava Beach Area'] },
  { name: 'Thayer', slug: 'thayer-in', state: 'Indiana', stateShort: 'IN', county: 'Newton County', distanceMiles: 105, population: 200, description: 'A small Newton County community on the Illinois border in northwest Indiana.', landmarks: ['Newton County Rural Area'] },
  { name: 'Sumava Resorts', slug: 'sumava-resorts-in', state: 'Indiana', stateShort: 'IN', county: 'Lake County', distanceMiles: 112, population: 500, description: 'A small resort community in Lake County near Cedar Lake.', landmarks: ['Cedar Lake Shore'] },

  // ── Porter County ─────────────────────────────────────────────────────────
  { name: 'Valparaiso', slug: 'valparaiso-in', state: 'Indiana', stateShort: 'IN', county: 'Porter County', distanceMiles: 112, population: 35000, description: 'The county seat of Porter County and home to Valparaiso University, a vibrant college city in Northwest Indiana.', landmarks: ['Valparaiso University', 'Porter County Courthouse', 'Central Park Plaza', 'Sunset Hill Farm County Park'] },
  { name: 'Portage', slug: 'portage-in', state: 'Indiana', stateShort: 'IN', county: 'Porter County', distanceMiles: 112, population: 36000, description: 'A growing Porter County city on Lake Michigan near Indiana Dunes National Park.', landmarks: ['Indiana Dunes National Park', 'Portage Marina', 'Portage High School', 'Lake Michigan'] },
  { name: 'Chesterton', slug: 'chesterton-in', state: 'Indiana', stateShort: 'IN', county: 'Porter County', distanceMiles: 118, population: 14000, description: 'A Porter County community serving as the eastern gateway to Indiana Dunes National Park.', landmarks: ['Indiana Dunes National Park', 'Westchester Township History Museum', 'Yellow Brick Road Festival'] },
  { name: 'Hebron', slug: 'hebron-in', state: 'Indiana', stateShort: 'IN', county: 'Porter County', distanceMiles: 110, population: 4000, description: 'A small Porter County community south of Portage along US-231.', landmarks: ['Jasper-Pulaski Fish & Wildlife Area', 'Hebron Community Park'] },
  { name: 'Boone Grove', slug: 'boone-grove-in', state: 'Indiana', stateShort: 'IN', county: 'Porter County', distanceMiles: 112, population: 1000, description: 'A small rural community in central Porter County.', landmarks: ['Boone Grove High School'] },
  { name: 'Wheeler', slug: 'wheeler-in', state: 'Indiana', stateShort: 'IN', county: 'Porter County', distanceMiles: 112, population: 600, description: 'A small Porter County community along US-30.', landmarks: ['Wheeler Antique Mall', 'US-30 Corridor'] },
  { name: 'Beverly Shores', slug: 'beverly-shores-in', state: 'Indiana', stateShort: 'IN', county: 'Porter County', distanceMiles: 128, population: 600, description: 'A scenic lakeside town within Indiana Dunes National Park on the shore of Lake Michigan.', landmarks: ['Indiana Dunes National Park', 'Lake Michigan beach', 'Beverly Shores Train Station'] },

  // ── LaPorte County ────────────────────────────────────────────────────────
  { name: 'Michigan City', slug: 'michigan-city-in', state: 'Indiana', stateShort: 'IN', county: 'LaPorte County', distanceMiles: 128, population: 31000, description: 'A coastal LaPorte County city on Lake Michigan, home to Blue Chip Casino and the Indiana Dunes shoreline.', landmarks: ['Blue Chip Casino', 'Washington Park Beach', 'Lighthouse Place Premium Outlets', 'Lake Michigan Pier'] },
  { name: 'Westville', slug: 'westville-in', state: 'Indiana', stateShort: 'IN', county: 'LaPorte County', distanceMiles: 122, population: 3000, description: 'A small LaPorte County community home to Purdue University Northwest Westville campus.', landmarks: ['Purdue University Northwest Westville', 'Kankakee River'] },

  // ── Clark County — Southern Indiana ───────────────────────────────────────
  { name: 'Jeffersonville', slug: 'jeffersonville-in', state: 'Indiana', stateShort: 'IN', county: 'Clark County', distanceMiles: 175, population: 50000, description: 'A major Clark County city directly across the Ohio River from Louisville, Kentucky, connected by the Big Four Bridge.', landmarks: ['Big Four Bridge', 'Ohio River waterfront', 'Howard Steamboat Museum', 'Town Center Mall'] },
  { name: 'Clarksville', slug: 'clarksville-in', state: 'Indiana', stateShort: 'IN', county: 'Clark County', distanceMiles: 175, population: 23000, description: 'A Clark County town adjacent to Louisville, Kentucky along the Ohio River, home to Falls of the Ohio State Park.', landmarks: ['Falls of the Ohio State Park', 'Ohio River waterfront', 'Green Tree Mall'] },
  { name: 'Charlestown', slug: 'charlestown-in', state: 'Indiana', stateShort: 'IN', county: 'Clark County', distanceMiles: 172, population: 9000, description: 'The county seat of Clark County, a historic community with Charlestown State Park on the Ohio River.', landmarks: ['Charlestown State Park', 'Clark County Courthouse', 'Ohio River'] },
  { name: 'Sellersburg', slug: 'sellersburg-in', state: 'Indiana', stateShort: 'IN', county: 'Clark County', distanceMiles: 175, population: 6500, description: 'A Clark County community along I-65 between New Albany and Columbus, Indiana.', landmarks: ['Sellersburg Park', 'I-65 Corridor', 'IUS (nearby)'] },
  { name: 'Henryville', slug: 'henryville-in', state: 'Indiana', stateShort: 'IN', county: 'Clark County', distanceMiles: 168, population: 2200, description: 'A Clark County community north of Jeffersonville on I-65 and birthplace of Colonel Harland Sanders.', landmarks: ['Colonel Sanders Museum', 'Henryville High School', 'I-65 Corridor'] },
  { name: 'Memphis', slug: 'memphis-in', state: 'Indiana', stateShort: 'IN', county: 'Clark County', distanceMiles: 175, population: 800, description: 'A small Clark County community in the Louisville metro area near Charlestown.', landmarks: ['Clark County Rural Area'] },

  // ── Floyd County — Southern Indiana ───────────────────────────────────────
  { name: 'New Albany', slug: 'new-albany-in', state: 'Indiana', stateShort: 'IN', county: 'Floyd County', distanceMiles: 182, population: 35000, description: 'The county seat of Floyd County and the largest city in Southern Indiana, situated across the Ohio River from Louisville.', landmarks: ['New Albany Historic District', 'Carnegie Center for Art & History', 'Ohio River waterfront', 'Scribner Place Aquatic Center'] },
  { name: 'Floyds Knobs', slug: 'floyds-knobs-in', state: 'Indiana', stateShort: 'IN', county: 'Floyd County', distanceMiles: 185, population: 8000, description: 'An unincorporated Floyd County community in the scenic knobs north of New Albany, known for upscale hillside neighborhoods.', landmarks: ['Knobs State Forest', 'Floyd County Knobs viewpoints', 'Highland Hills'] },
  { name: 'Mount Saint Francis', slug: 'mount-saint-francis-in', state: 'Indiana', stateShort: 'IN', county: 'Floyd County', distanceMiles: 185, population: 600, description: 'A small Floyd County community home to the Mount Saint Francis Retreat and Conference Center.', landmarks: ['Mount Saint Francis Retreat Center'] },
];

export function getCityBySlug(slug: string): City | undefined {
  return CITIES.find((city) => city.slug === slug);
}

export const ALL_CITY_SLUGS = CITIES.map((c) => c.slug);
