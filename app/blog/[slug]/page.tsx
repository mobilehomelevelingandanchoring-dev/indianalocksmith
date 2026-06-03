import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BookOpen, Clock, Tag, Calendar, ArrowLeft, Phone, ArrowRight, MapPin, HelpCircle } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_NAME, BUSINESS_WEBSITE } from '@/lib/constants';
import { getBlogPostBySlug, BLOG_POSTS, ALL_BLOG_SLUGS } from '@/lib/blog-data';
import { buildArticleSchema } from '@/lib/schema';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return ALL_BLOG_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return {};

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `${BUSINESS_WEBSITE}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${BUSINESS_WEBSITE}/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.datePublished,
      modifiedTime: post.dateModified,
      authors: [BUSINESS_NAME],
    },
  };
}

export default function BlogPostPage({ params }: PageProps) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const schema = buildArticleSchema({
    title: post.title,
    description: post.metaDescription,
    slug: post.slug,
    datePublished: post.datePublished,
    dateModified: post.dateModified,
  });

  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="bg-hero-gradient text-white py-14">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog' }, { name: post.title, href: `/blog/${post.slug}` }]} />
          <div className="max-w-3xl mt-4">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="badge bg-blue-500/20 text-blue-300 text-xs">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
              <span className="badge bg-white/10 text-blue-200 text-xs">
                <Clock className="h-3 w-3" />
                {post.readTime} min read
              </span>
              <span className="badge bg-white/10 text-blue-200 text-xs">
                <Calendar className="h-3 w-3" />
                {post.datePublished}
              </span>
            </div>
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-black text-white mb-4 leading-tight">
              {post.title}
            </h1>
            <p className="text-blue-100 text-lg">{post.excerpt}</p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Article body */}
            <article className="lg:col-span-2">
              <div
                className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-li:text-slate-600 prose-a:text-blue-600 prose-strong:text-slate-900"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-slate-200">
                {post.tags.map((tag) => (
                  <span key={tag} className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-600 text-white rounded-xl p-3 shrink-0">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">About the Author</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      This article was written by the team at <strong>{BUSINESS_NAME}</strong> — Kokomo, Indiana&apos;s trusted locksmith since 1985. Our content is based on real-world experience with thousands of lock and key situations throughout Howard County.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold">
                  <ArrowLeft className="h-4 w-4" /> Back to All Articles
                </Link>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="card p-5 bg-amber-500 text-white border-0 sticky top-24">
                <h3 className="font-bold text-lg mb-2">Need a Locksmith Now?</h3>
                <p className="text-amber-100 text-sm mb-4">
                  Have an immediate lock or key issue? We&apos;re available 24/7 in Kokomo and Howard County.
                </p>
                <a
                  href={BUSINESS_PHONE_HREF}
                  className="flex items-center justify-center gap-2 bg-white text-amber-600 font-bold py-3 rounded-xl hover:bg-amber-50 transition-colors"
                >
                  <Phone className="h-4 w-4" /> {BUSINESS_PHONE_DISPLAY}
                </a>
                <p className="text-amber-200 text-xs mt-2 text-center">24/7 Emergency Service Available</p>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-4">Our Services</h3>
                <ul className="space-y-2">
                  {[
                    { href: '/services/automotive-locksmith', label: 'Automotive Locksmith' },
                    { href: '/services/residential-locksmith', label: 'Residential Locksmith' },
                    { href: '/services/commercial-locksmith', label: 'Commercial Locksmith' },
                    { href: '/services/emergency-locksmith', label: 'Emergency Locksmith' },
                    { href: '/services/key-services', label: 'Key Services' },
                    { href: '/services/safe-services', label: 'Safe Services' },
                  ].map((svc) => (
                    <li key={svc.href}>
                      <Link
                        href={svc.href}
                        className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-600 transition-colors"
                      >
                        <ArrowRight className="h-3.5 w-3.5 text-blue-400" />
                        {svc.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-4">More Articles</h3>
                <div className="space-y-4">
                  {relatedPosts.map((related) => (
                    <Link
                      key={related.slug}
                      href={`/blog/${related.slug}`}
                      className="block group"
                    >
                      <div className="text-sm font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-snug mb-1">
                        {related.title}
                      </div>
                      <div className="text-xs text-slate-500">{related.category} • {related.readTime} min</div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* FAQ + City links */}
              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <HelpCircle className="h-4 w-4 text-blue-600" />
                  <h3 className="font-bold text-slate-900">Locksmith FAQ</h3>
                </div>
                <p className="text-xs text-slate-500 mb-3">Pricing, timing, what to expect — answered honestly.</p>
                <Link href="/faq" className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-700">
                  Browse All FAQs <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>

              <div className="card p-5">
                <div className="flex items-center gap-2 mb-3">
                  <MapPin className="h-4 w-4 text-blue-600" />
                  <h3 className="font-bold text-slate-900">Service Areas</h3>
                </div>
                <ul className="space-y-1.5">
                  {[
                    { href: '/service-areas/kokomo-in', label: 'Kokomo, IN' },
                    { href: '/service-areas/indianapolis-in', label: 'Indianapolis, IN' },
                    { href: '/service-areas/carmel-in', label: 'Carmel, IN' },
                    { href: '/service-areas/fishers-in', label: 'Fishers, IN' },
                    { href: '/service-areas/noblesville-in', label: 'Noblesville, IN' },
                    { href: '/service-areas/anderson-in', label: 'Anderson, IN' },
                    { href: '/service-areas/greenwood-in', label: 'Greenwood, IN' },
                    { href: '/service-areas/hammond-in', label: 'Hammond, IN' },
                  ].map((area) => (
                    <li key={area.href}>
                      <Link href={area.href} className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-blue-600 transition-colors">
                        <ArrowRight className="h-3 w-3 text-blue-400 shrink-0" />
                        {area.label}
                      </Link>
                    </li>
                  ))}
                  <li className="pt-1">
                    <Link href="/service-areas" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                      All Locations →
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
