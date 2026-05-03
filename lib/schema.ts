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
    areaServed: [
      { '@type': 'City', name: 'Kokomo', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'County', name: 'Howard County', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Logansport', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Peru', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Tipton', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Frankfort', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Greentown', containedInPlace: { '@type': 'State', name: 'Indiana' } },
      { '@type': 'City', name: 'Marion', containedInPlace: { '@type': 'State', name: 'Indiana' } },
    ],
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
    sameAs: [
      'https://www.google.com/maps',
      'https://www.yelp.com',
      'https://www.facebook.com',
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
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      '@type': 'LocalBusiness',
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
    areaServed: {
      '@type': 'City',
      name: `${BUSINESS_CITY}, ${BUSINESS_STATE}`,
    },
    ...(service.imageUrl ? { image: service.imageUrl } : {}),
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
