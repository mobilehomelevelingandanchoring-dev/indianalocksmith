import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MobileCallCTA from '@/components/MobileCallCTA';
import { buildLocalBusinessSchema, buildOrganizationSchema } from '@/lib/schema';
import {
  BUSINESS_NAME,
  BUSINESS_WEBSITE,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_CITY,
  BUSINESS_STATE,
  DEFAULT_META,
} from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(BUSINESS_WEBSITE),
  title: {
    default: DEFAULT_META.defaultTitle,
    template: DEFAULT_META.titleTemplate,
  },
  description: DEFAULT_META.description,
  keywords: [
    'locksmith Kokomo IN',
    'locksmith Kokomo Indiana',
    'emergency locksmith Kokomo',
    'car lockout Kokomo',
    'locksmith near me',
    'Howard County locksmith',
    '24/7 locksmith Kokomo',
    'mobile locksmith Kokomo',
    'affordable locksmith',
    'residential locksmith Kokomo',
    'commercial locksmith Kokomo',
    'automotive locksmith Kokomo',
  ],
  authors: [{ name: BUSINESS_NAME, url: BUSINESS_WEBSITE }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BUSINESS_WEBSITE,
    siteName: `${BUSINESS_NAME} — ${BUSINESS_CITY}, ${BUSINESS_STATE}`,
    title: DEFAULT_META.defaultTitle,
    description: DEFAULT_META.description,
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} — ${BUSINESS_CITY}, ${BUSINESS_STATE}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: DEFAULT_META.defaultTitle,
    description: DEFAULT_META.description,
    images: ['/opengraph-image'],
  },
  alternates: {
    canonical: BUSINESS_WEBSITE,
  },
  verification: {
    google: 'nsvk-HhnR68TxkUhnZ2vXBLxfcD0eQsL9v03RxMUYfI',
  },
  other: {
    'geo.region': 'US-IN',
    'geo.placename': `${BUSINESS_CITY}, ${BUSINESS_STATE}`,
    'geo.position': '40.4865;-86.1336',
    'ICBM': '40.4865, -86.1336',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const localBusinessSchema = buildLocalBusinessSchema();
  const organizationSchema = buildOrganizationSchema();

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/favicon.svg" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className="font-sans">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded z-[100]"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content" className="pt-[88px]">
          {children}
        </main>
        <Footer />
        <MobileCallCTA />
      </body>
    </html>
  );
}
