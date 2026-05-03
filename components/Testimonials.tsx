import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/constants';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-50 text-amber-700 px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Star className="h-4 w-4 fill-amber-500 text-amber-500" />
            4.9 Average Rating • 247+ Reviews
          </div>
          <h2 className="section-title">What Kokomo Customers Say</h2>
          <p className="section-subtitle mx-auto mt-4">
            Real reviews from real neighbors across Howard County. Our reputation is built one satisfied customer at a time.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.name} className="card p-6 flex flex-col">
              <div className="flex items-start justify-between mb-4">
                <StarRating rating={testimonial.rating} />
                <Quote className="h-6 w-6 text-blue-100 shrink-0" />
              </div>
              <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-4">
                &ldquo;{testimonial.text}&rdquo;
              </p>
              <div className="border-t border-slate-100 pt-4 flex items-center gap-3">
                <div className="bg-blue-600 text-white rounded-full w-9 h-9 flex items-center justify-center font-bold text-sm shrink-0">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 rounded-2xl px-8 py-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="h-8 w-8 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <div className="font-black text-2xl text-slate-900">4.9 / 5.0</div>
              <div className="text-slate-500 text-sm">Based on 247+ verified reviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
