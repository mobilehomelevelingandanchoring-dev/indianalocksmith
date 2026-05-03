import { MetadataRoute } from 'next';
import { BUSINESS_WEBSITE } from '@/lib/constants';
import { ALL_CITY_SLUGS } from '@/lib/cities';
import { ALL_BLOG_SLUGS } from '@/lib/blog-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BUSINESS_WEBSITE,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BUSINESS_WEBSITE}/services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BUSINESS_WEBSITE}/services/automotive-locksmith`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BUSINESS_WEBSITE}/services/residential-locksmith`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BUSINESS_WEBSITE}/services/commercial-locksmith`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BUSINESS_WEBSITE}/services/emergency-locksmith`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BUSINESS_WEBSITE}/services/key-services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BUSINESS_WEBSITE}/services/safe-services`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BUSINESS_WEBSITE}/about`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${BUSINESS_WEBSITE}/contact`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BUSINESS_WEBSITE}/service-areas`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BUSINESS_WEBSITE}/service-areas/kokomo-in`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.95,
    },
    {
      url: `${BUSINESS_WEBSITE}/service-areas/howard-county`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BUSINESS_WEBSITE}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
  ];

  const cityPages: MetadataRoute.Sitemap = ALL_CITY_SLUGS.map((slug) => ({
    url: `${BUSINESS_WEBSITE}/service-areas/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const blogPages: MetadataRoute.Sitemap = ALL_BLOG_SLUGS.map((slug) => ({
    url: `${BUSINESS_WEBSITE}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...staticPages, ...cityPages, ...blogPages];
}
