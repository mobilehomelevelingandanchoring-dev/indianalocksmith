'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { buildFAQSchema } from '@/lib/schema';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  title?: string;
  subtitle?: string;
}

function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-5 text-left bg-white hover:bg-slate-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-slate-900 text-sm sm:text-base">{faq.question}</span>
        <ChevronDown
          className={`h-5 w-5 text-blue-600 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="px-5 pb-5 text-slate-600 text-sm sm:text-base leading-relaxed border-t border-slate-100">
          <p className="pt-4">{faq.answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection({ faqs, title, subtitle }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-custom">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(faqs)) }}
        />

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <HelpCircle className="h-4 w-4" />
            Frequently Asked Questions
          </div>
          <h2 className="section-title">{title ?? 'Common Questions About Our Locksmith Services'}</h2>
          {subtitle && <p className="section-subtitle mx-auto mt-4">{subtitle}</p>}
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
