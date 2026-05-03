import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { buildBreadcrumbSchema } from '@/lib/schema';
import { BUSINESS_WEBSITE } from '@/lib/constants';

export interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  const allItems = [{ name: 'Home', href: '/' }, ...items];

  const schemaItems = allItems.map((item) => ({
    name: item.name,
    url: `${BUSINESS_WEBSITE}${item.href}`,
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildBreadcrumbSchema(schemaItems)) }}
      />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-slate-500">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-1">
                {index === 0 && <Home className="h-3.5 w-3.5" />}
                {isLast ? (
                  <span className="text-slate-700 font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link href={item.href} className="hover:text-blue-600 transition-colors">
                    {item.name}
                  </Link>
                )}
                {!isLast && <ChevronRight className="h-3.5 w-3.5" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
