import { Award, CheckCircle, Clock, Shield } from 'lucide-react';
import { STATS } from '@/lib/constants';

const iconMap: Record<string, React.ElementType> = {
  Award,
  CheckCircle,
  Clock,
  Shield,
};

export default function StatsSection() {
  return (
    <section className="bg-blue-900 text-white section-pad">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {STATS.map((stat) => {
            const Icon = iconMap[stat.icon];
            return (
              <div key={stat.label} className="text-center">
                <div className="flex justify-center mb-3">
                  <div className="bg-blue-800 rounded-full p-3">
                    <Icon className="h-8 w-8 text-amber-400" />
                  </div>
                </div>
                <div className="text-4xl lg:text-5xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-blue-200 font-medium text-sm lg:text-base">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
