import type { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, ArrowRight, Clock, Tag, Phone } from 'lucide-react';
import Breadcrumb from '@/components/Breadcrumb';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_WEBSITE } from '@/lib/constants';
import { BLOG_POSTS } from '@/lib/blog-data';

export const metadata: Metadata = {
  title: 'Locksmith Blog | Tips, Advice & Security Guides | Affordable Locksmith Kokomo',
  description:
    'Expert locksmith tips, home security advice, and how-to guides from Affordable Locksmith in Kokomo, Indiana. Learn about locks, keys, and keeping your home, car, and business secure.',
  alternates: { canonical: `${BUSINESS_WEBSITE}/blog` },
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-hero-gradient text-white py-16 lg:py-20">
        <div className="container-custom">
          <Breadcrumb items={[{ name: 'Blog', href: '/blog' }]} />
          <div className="max-w-2xl mt-4">
            <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
              <BookOpen className="h-4 w-4" />
              Expert Locksmith Advice
            </div>
            <h1 className="text-4xl lg:text-5xl font-black text-white mb-5">
              Locksmith Blog — Security Tips for Kokomo Residents
            </h1>
            <p className="text-blue-100 text-lg">
              Expert advice on home security, car key technology, emergency preparedness, and more — straight from Kokomo&apos;s most experienced locksmith.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Articles */}
            <div className="lg:col-span-2">
              <div className="grid gap-8">
                {BLOG_POSTS.map((post) => (
                  <article key={post.slug} className="card overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-blue-900 to-blue-700 h-32 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-blue-300 opacity-40" />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        <span className="badge bg-blue-50 text-blue-700 text-xs">
                          <Tag className="h-3 w-3" />
                          {post.category}
                        </span>
                        <span className="badge bg-slate-50 text-slate-500 text-xs">
                          <Clock className="h-3 w-3" />
                          {post.readTime} min read
                        </span>
                        <span className="text-xs text-slate-400">{post.datePublished}</span>
                      </div>
                      <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-slate-600 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="text-xs bg-slate-100 text-slate-500 px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-blue-600 font-semibold text-sm hover:gap-2.5 transition-all"
                      >
                        Read Full Article <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="card p-5 bg-red-600 text-white border-0">
                <h3 className="font-bold text-lg mb-2">Emergency? Call Now</h3>
                <p className="text-red-100 text-sm mb-4">
                  Don&apos;t wait for a blog post. If you need a locksmith right now, call us directly.
                </p>
                <a href={BUSINESS_PHONE_HREF} className="flex items-center justify-center gap-2 bg-white text-red-600 font-bold py-2.5 rounded-lg hover:bg-red-50 transition-colors text-sm">
                  <Phone className="h-4 w-4" /> {BUSINESS_PHONE_DISPLAY}
                </a>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-4">Popular Topics</h3>
                <div className="space-y-2">
                  {['Car Lockout Tips', 'Home Security', 'Smart Locks', 'Key Programming', 'Commercial Security', 'Emergency Locksmith'].map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-sm text-slate-600 py-1.5 border-b border-slate-100 last:border-0">
                      <Tag className="h-3.5 w-3.5 text-blue-500" />
                      {topic}
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-5 bg-blue-50 border-blue-100">
                <h3 className="font-bold text-slate-900 mb-2">About Our Blog</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Written by Kokomo&apos;s most experienced locksmith. Our articles are based on real-world experience serving Howard County since 1985 — practical advice you can trust.
                </p>
              </div>

              <div className="card p-5">
                <h3 className="font-bold text-slate-900 mb-4">Recent Posts</h3>
                <div className="space-y-3">
                  {BLOG_POSTS.slice(0, 4).map((post) => (
                    <Link
                      key={post.slug}
                      href={`/blog/${post.slug}`}
                      className="block text-sm text-slate-700 hover:text-blue-600 transition-colors leading-snug"
                    >
                      {post.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
