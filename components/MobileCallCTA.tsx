'use client';

import { Phone } from 'lucide-react';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY } from '@/lib/constants';

export default function MobileCallCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
      <a
        href={BUSINESS_PHONE_HREF}
        className="flex items-center justify-center gap-3 bg-amber-500 text-white py-4 px-6 shadow-2xl phone-pulse w-full"
      >
        <div className="bg-white/20 rounded-full p-1.5">
          <Phone className="h-5 w-5" />
        </div>
        <div className="text-center">
          <div className="font-black text-lg leading-tight">{BUSINESS_PHONE_DISPLAY}</div>
          <div className="text-xs font-medium opacity-90">Tap to Call — 24/7 Emergency Service</div>
        </div>
      </a>
    </div>
  );
}
