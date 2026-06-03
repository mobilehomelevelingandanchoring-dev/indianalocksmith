import {
  BUSINESS_NAME,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE,
  BUSINESS_CITY,
  BUSINESS_STATE,
  BUSINESS_STATE_SHORT,
  BUSINESS_ZIP,
  BUSINESS_WEBSITE,
  BUSINESS_COORDINATES,
  BUSINESS_RATING,
  BUSINESS_REVIEW_COUNT,
  BUSINESS_ESTABLISHED,
  BUSINESS_EMAIL,
  BUSINESS_HOURS,
} from './constants';

export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Locksmith'],
    '@id': `${BUSINESS_WEBSITE}/#business`,
    name: BUSINESS_NAME,
    alternateName: ['Affordable Locksmith Kokomo', 'Affordable Locksmith Kokomo IN'],
    description:
      'Professional locksmith serving Kokomo, Indiana and Howard County with 39+ years of experience. Available 24/7 for automotive, residential, commercial, and emergency locksmith services.',
    url: BUSINESS_WEBSITE,
    telephone: `+1${BUSINESS_PHONE}`,
    email: BUSINESS_EMAIL,
    foundingDate: String(BUSINESS_ESTABLISHED),
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS_CITY,
      addressRegion: BUSINESS_STATE_SHORT,
      postalCode: BUSINESS_ZIP,
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS_COORDINATES.lat,
      longitude: BUSINESS_COORDINATES.lng,
    },
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: BUSINESS_COORDINATES.lat,
        longitude: BUSINESS_COORDINATES.lng,
      },
      geoRadius: '320000',
    },
    areaServed: [
      { '@type': 'City', name: 'Kokomo', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'County', name: 'Howard County', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Indianapolis', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Carmel', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Fishers', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Noblesville', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Westfield', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Anderson', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Logansport', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Peru', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Tipton', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Frankfort', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Greentown', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Marion', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Greenwood', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Avon', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Brownsburg', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Hammond', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Gary', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Valparaiso', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Michigan City', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Jeffersonville', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'New Albany', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'State', name: 'Indiana' },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Locksmith Services — Kokomo Indiana',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${BUSINESS_WEBSITE}/services/emergency-locksmith#service`, name: '24/7 Emergency Locksmith Service', url: `${BUSINESS_WEBSITE}/services/emergency-locksmith` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${BUSINESS_WEBSITE}/services/automotive-locksmith#service`, name: 'Automotive Locksmith — Car Lockouts & Key Programming', url: `${BUSINESS_WEBSITE}/services/automotive-locksmith` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${BUSINESS_WEBSITE}/services/residential-locksmith#service`, name: 'Residential Locksmith — Home Lockouts & Rekeying', url: `${BUSINESS_WEBSITE}/services/residential-locksmith` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${BUSINESS_WEBSITE}/services/commercial-locksmith#service`, name: 'Commercial Locksmith — Master Keys & Access Control', url: `${BUSINESS_WEBSITE}/services/commercial-locksmith` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${BUSINESS_WEBSITE}/services/key-services#service`, name: 'Key Cutting, Duplication & Transponder Programming', url: `${BUSINESS_WEBSITE}/services/key-services` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', '@id': `${BUSINESS_WEBSITE}/services/safe-services#service`, name: 'Safe Opening, Combination Changes & Vault Services', url: `${BUSINESS_WEBSITE}/services/safe-services` } },
      ],
    },
    openingHoursSpecification: BUSINESS_HOURS.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS_RATING,
      reviewCount: BUSINESS_REVIEW_COUNT,
      bestRating: 5,
      worstRating: 1,
    },
    priceRange: '$$',
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'USD',
    hasMap: `https://maps.google.com/?q=${encodeURIComponent(`${BUSINESS_NAME} Kokomo Indiana`)}`,
    image: `${BUSINESS_WEBSITE}/og-image.jpg`,
    logo: `${BUSINESS_WEBSITE}/logo.png`,
    knowsAbout: [
      'Locksmith Services', 'Emergency Locksmith', 'Car Lockout Service',
      'Automotive Key Programming', 'Transponder Key Replacement', 'Residential Locksmith',
      'Lock Rekeying', 'Deadbolt Installation', 'Smart Lock Installation',
      'Commercial Locksmith', 'Master Key Systems', 'Access Control Systems',
      'Safe Opening', 'Safe Combination Changes', 'Key Duplication',
    ],
    sameAs: [
      'https://www.google.com/maps/search/Affordable+Locksmith+Kokomo+Indiana',
      'https://www.yelp.com/biz/affordable-locksmith-kokomo',
      'https://www.facebook.com',
      'https://www.bbb.org',
    ],
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  cityName?: string;
  stateName?: string;
  county?: string;
  serviceType?: string;
  priceRange?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${service.url}#service`,
    name: service.name,
    description: service.description,
    url: service.url,
    ...(service.serviceType ? { serviceType: service.serviceType } : {}),
    provider: {
      '@type': ['LocalBusiness', 'Locksmith'],
      '@id': `${BUSINESS_WEBSITE}/#business`,
      name: BUSINESS_NAME,
      telephone: `+1${BUSINESS_PHONE}`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: BUSINESS_CITY,
        addressRegion: BUSINESS_STATE_SHORT,
        postalCode: BUSINESS_ZIP,
        addressCountry: 'US',
      },
    },
    areaServed: service.cityName
      ? {
          '@type': service.county ? 'AdministrativeArea' : 'City',
          name: service.cityName,
          containedInPlace: {
            '@type': 'State',
            name: service.stateName ?? BUSINESS_STATE,
          },
        }
      : { '@type': 'City', name: `${BUSINESS_CITY}, ${BUSINESS_STATE}` },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'USD',
      description: service.priceRange ?? 'Call for upfront pricing — no hidden fees',
      availability: 'https://schema.org/InStock',
      availableAtOrFrom: {
        '@type': ['LocalBusiness', 'Locksmith'],
        '@id': `${BUSINESS_WEBSITE}/#business`,
      },
    },
    ...(service.imageUrl ? { image: service.imageUrl } : {}),
  };
}

/** Organization schema — site-wide entity node */
export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BUSINESS_WEBSITE}/#organization`,
    name: BUSINESS_NAME,
    url: BUSINESS_WEBSITE,
    logo: {
      '@type': 'ImageObject',
      url: `${BUSINESS_WEBSITE}/icon.svg`,
      width: 512,
      height: 512,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: `+1${BUSINESS_PHONE}`,
      contactType: 'customer service',
      areaServed: 'US-IN',
      availableLanguage: 'English',
      hoursAvailable: 'Mo-Su 00:00-23:59',
    },
    sameAs: [
      'https://www.google.com/maps/search/Affordable+Locksmith+Kokomo+Indiana',
      'https://www.yelp.com/biz/affordable-locksmith-kokomo',
      'https://www.facebook.com',
      'https://www.bbb.org',
    ],
    knowsAbout: [
      'Locksmith Services',
      'Emergency Locksmith',
      'Automotive Locksmith',
      'Residential Locksmith',
      'Commercial Locksmith',
      'Key Programming',
      'Transponder Keys',
      'Safe Opening',
      'Access Control Systems',
    ],
    areaServed: [
      { '@type': 'City', name: 'Kokomo', addressRegion: 'IN' },
      { '@type': 'AdministrativeArea', name: 'Howard County', addressRegion: 'IN' },
      { '@type': 'City', name: 'Logansport', addressRegion: 'IN' },
      { '@type': 'City', name: 'Peru', addressRegion: 'IN' },
      { '@type': 'City', name: 'Marion', addressRegion: 'IN' },
      { '@type': 'City', name: 'Wabash', addressRegion: 'IN' },
      { '@type': 'City', name: 'Frankfort', addressRegion: 'IN' },
      { '@type': 'City', name: 'Tipton', addressRegion: 'IN' },
    ],
  };
}

/** Speakable schema — marks sections optimized for voice search / Google AI Overview */
export function buildSpeakableSchema(pageUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': pageUrl,
    url: pageUrl,
    speakable: {
      '@type': 'SpeakableSpecification',
      cssSelector: ['h1', '.speakable-summary', '.quick-answer'],
    },
  };
}

/** WebPage schema — for individual pages */
export function buildWebPageSchema(page: {
  title: string;
  description: string;
  url: string;
  dateModified?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': page.url,
    name: page.title,
    description: page.description,
    url: page.url,
    isPartOf: { '@id': `${BUSINESS_WEBSITE}/#website` },
    about: { '@id': `${BUSINESS_WEBSITE}/#business` },
    ...(page.dateModified ? { dateModified: page.dateModified } : {}),
    inLanguage: 'en-US',
  };
}

/** ItemList schema — for service hub and area hub pages */
export function buildItemListSchema(items: { name: string; url: string; description: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}

export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    url: `${BUSINESS_WEBSITE}/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
    },
    publisher: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: BUSINESS_WEBSITE,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${BUSINESS_WEBSITE}/blog/${article.slug}`,
    },
  };
}
