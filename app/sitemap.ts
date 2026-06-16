import { MetadataRoute } from 'next';
import { BUSINESS_WEBSITE } from '@/lib/constants';
import { ALL_CITY_SLUGS } from '@/lib/cities';
import { BLOG_POSTS } from '@/lib/blog-data';
import { ALL_SERVICE_SLUGS, ALL_LOCATION_SLUGS } from '@/lib/seo-data';

// Force static generation — this route must never be server-rendered on demand.
// Next.js metadata routes already bypass layout.tsx entirely; this is an extra
// safeguard so the XML is pre-built at deploy time, not re-generated per request.
export const dynamic = 'force-static';

// Site launch date — used as lastModified for pages that rarely change.
const SITE_LAUNCH = new Date('2024-01-15');
// Date of major city expansion — used for new city + programmatic pages.
const CITY_EXPANSION = new Date('2025-06-01');

export default function sitemap(): MetadataRoute.Sitemap {
  // ─── Tier 1 — highest crawl priority ─────────────────────────────────────
  const homepage: MetadataRoute.Sitemap = [
    {
      url: BUSINESS_WEBSITE,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'daily',
      priority: 1.0,
    },
  ];

  // ─── Tier 2 — core money pages ────────────────────────────────────────────
  const corePages: MetadataRoute.Sitemap = [
    {
      url: `${BUSINESS_WEBSITE}/services/emergency-locksmith`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BUSINESS_WEBSITE}/service-areas/kokomo-in`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BUSINESS_WEBSITE}/service-areas/howard-county`,
      lastModified: SITE_LAUNCH,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ];

  // ─── Tier 3 — service pages ───────────────────────────────────────────────
  const servicePages: MetadataRoute.Sitemap = [
    { url: `${BUSINESS_WEBSITE}/services` },
    { url: `${BUSINESS_WEBSITE}/services/automotive-locksmith` },
    { url: `${BUSINESS_WEBSITE}/services/residential-locksmith` },
    { url: `${BUSINESS_WEBSITE}/services/commercial-locksmith` },
    { url: `${BUSINESS_WEBSITE}/services/key-services` },
    { url: `${BUSINESS_WEBSITE}/services/safe-services` },
  ].map((entry) => ({
    ...entry,
    lastModified: SITE_LAUNCH,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // ─── Tier 4 — geo / city pages ────────────────────────────────────────────
  const cityPages: MetadataRoute.Sitemap = ALL_CITY_SLUGS.map((slug) => ({
    url: `${BUSINESS_WEBSITE}/service-areas/${slug}`,
    lastModified: CITY_EXPANSION,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // ─── Tier 5 — blog posts (real lastModified from data) ────────────────────
  const blogIndex: MetadataRoute.Sitemap = [
    {
      url: `${BUSINESS_WEBSITE}/blog`,
      lastModified: new Date(
        Math.max(...BLOG_POSTS.map((p) => new Date(p.dateModified).getTime()))
      ),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
  ];

  const blogPosts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BUSINESS_WEBSITE}/blog/${post.slug}`,
    lastModified: new Date(post.dateModified),
    changeFrequency: 'weekly' as const,
    priority: 0.5,
  }));

  // ─── Tier 6 — programmatic service×location pages (6 services × 36 locations = 216 pages) ─────
  // Kokomo + emergency get highest priority; others get 0.65
  const programmaticPages: MetadataRoute.Sitemap = ALL_SERVICE_SLUGS.flatMap((service) =>
    ALL_LOCATION_SLUGS.map((location) => ({
      url: `${BUSINESS_WEBSITE}/services/${service}/${location}`,
      lastModified: CITY_EXPANSION,
      changeFrequency: 'monthly' as const,
      priority:
        service === 'emergency-locksmith' && location === 'kokomo-in'
          ? 0.85
          : service === 'emergency-locksmith' || location === 'kokomo-in'
          ? 0.75
          : location === 'indianapolis-in' || location === 'carmel-in' || location === 'fishers-in'
          ? 0.72
          : 0.65,
    }))
  );

  // ─── Tier 7 — content authority pages (pillar guide + FAQ + local guide) ──
  const contentPages: MetadataRoute.Sitemap = [
    { url: `${BUSINESS_WEBSITE}/guide/locksmith-kokomo-indiana`, priority: 0.85 },
    { url: `${BUSINESS_WEBSITE}/faq`, priority: 0.75 },
    { url: `${BUSINESS_WEBSITE}/kokomo-indiana`, priority: 0.7 },
  ].map((entry) => ({
    ...entry,
    lastModified: new Date('2025-05-29'),
    changeFrequency: 'monthly' as const,
  }));

  // ─── Tier 8 — static utility pages ───────────────────────────────────────
  const utilityPages: MetadataRoute.Sitemap = [
    { url: `${BUSINESS_WEBSITE}/service-areas` },
    { url: `${BUSINESS_WEBSITE}/contact` },
    { url: `${BUSINESS_WEBSITE}/about` },
    { url: `${BUSINESS_WEBSITE}/partners` },
  ].map((entry) => ({
    ...entry,
    lastModified: SITE_LAUNCH,
    changeFrequency: 'yearly' as const,
    priority: 0.4,
  }));

  return [
    ...homepage,
    ...corePages,
    ...servicePages,
    ...cityPages,
    ...programmaticPages,
    ...contentPages,
    ...blogIndex,
    ...blogPosts,
    ...utilityPages,
  ];
}
