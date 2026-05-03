import { Shield, Clock, Star, Award, Phone, CheckCircle } from 'lucide-react';
import { BUSINESS_PHONE_DISPLAY, BUSINESS_YEARS_EXPERIENCE, BUSINESS_RATING, BUSINESS_REVIEW_COUNT } from '@/lib/constants';

const badges = [
  {
    icon: Award,
    title: `${BUSINESS_YEARS_EXPERIENCE}+ Years`,
    subtitle: 'Local Experience',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
  },
  {
    icon: Star,
    title: `${BUSINESS_RATING} Stars`,
    subtitle: `${BUSINESS_REVIEW_COUNT}+ Reviews`,
    color: 'text-amber-500',
    bg: 'bg-amber-50',
  },
  {
    icon: Clock,
    title: '24/7 Available',
    subtitle: 'Emergency Service',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    icon: Shield,
    title: 'Licensed & Insured',
    subtitle: 'Fully Certified',
    color: 'text-purple-600',
    bg: 'bg-purple-50',
  },
  {
    icon: CheckCircle,
    title: 'No Hidden Fees',
    subtitle: 'Upfront Pricing',
    color: 'text-teal-600',
    bg: 'bg-teal-50',
  },
  {
    icon: Phone,
    title: 'Fast Response',
    subtitle: '15–30 Min Avg',
    color: 'text-red-600',
    bg: 'bg-red-50',
  },
];

export default function TrustBadges({ variant = 'grid' }: { variant?: 'grid' | 'row' }) {
  if (variant === 'row') {
    return (
      <div className="flex flex-wrap justify-center gap-4">
        {badges.map((badge) => {
          const Icon = badge.icon;
          return (
            <div
              key={badge.title}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2.5 text-white"
            >
              <Icon className="h-5 w-5 opacity-90" />
              <div>
                <div className="font-bold text-sm leading-tight">{badge.title}</div>
                <div className="text-xs opacity-80">{badge.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
      {badges.map((badge) => {
        const Icon = badge.icon;
        return (
          <div key={badge.title} className="card p-4 text-center hover:scale-105 transition-transform duration-200">
            <div className={`${badge.bg} ${badge.color} rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2`}>
              <Icon className="h-6 w-6" />
            </div>
            <div className="font-bold text-slate-900 text-sm">{badge.title}</div>
            <div className="text-xs text-slate-500 mt-0.5">{badge.subtitle}</div>
          </div>
        );
      })}
    </div>
  );
}
