import { Phone, AlertTriangle } from 'lucide-react';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY } from '@/lib/constants';

export default function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white py-2.5">
      <div className="container-custom">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-2 text-sm font-medium">
            <AlertTriangle className="h-4 w-4 shrink-0 animate-pulse" />
            <span>
              <strong>24/7 Emergency Locksmith</strong> — Kokomo & Howard County
            </span>
          </div>
          <a
            href={BUSINESS_PHONE_HREF}
            className="flex items-center gap-1.5 bg-white text-red-600 font-black px-4 py-1 rounded-full text-sm hover:bg-red-50 transition-colors shrink-0"
          >
            <Phone className="h-3.5 w-3.5" />
            {BUSINESS_PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );
}
