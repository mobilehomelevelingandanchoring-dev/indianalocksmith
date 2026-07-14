import { Phone, MapPin, Wrench, CheckCircle } from 'lucide-react';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY } from '@/lib/constants';

const steps = [
  {
    step: '01',
    icon: Phone,
    title: 'Call or Text Us',
    description:
      'Reach us at (833) 632-3357 any time, day or night. We answer immediately — no hold music, no automated menus, no call centers.',
    color: 'bg-blue-600',
  },
  {
    step: '02',
    icon: MapPin,
    title: 'We Come to You',
    description:
      'Tell us your location and we dispatch directly to you. Our average response time in Kokomo is just 15–30 minutes. We go anywhere in Howard County.',
    color: 'bg-amber-500',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Expert Service',
    description:
      'Our licensed technician arrives with professional tools and 39+ years of experience. We handle any lock situation efficiently and without damage.',
    color: 'bg-green-600',
  },
  {
    step: '04',
    icon: CheckCircle,
    title: 'Back to Normal',
    description:
      "You're back in business fast — with upfront, fair pricing and no hidden fees. We stand behind every job with a 100% satisfaction guarantee.",
    color: 'bg-purple-600',
  },
];

export default function ProcessSection() {
  return (
    <section className="section-pad bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle mx-auto mt-4">
            Getting help from Affordable Locksmith is simple, fast, and stress-free. Here&apos;s exactly what to expect.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          <div className="hidden lg:block absolute top-12 left-[22%] right-[22%] h-0.5 bg-slate-100 z-0" />

          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative z-10 text-center flex flex-col items-center">
                <div className={`${step.color} text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg mb-4`}>
                  <Icon className="h-7 w-7" />
                </div>
                <div className="text-xs font-black text-slate-400 mb-2 tracking-widest">STEP {step.step}</div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href={BUSINESS_PHONE_HREF}
            className="btn-accent text-lg px-10 py-4 inline-flex items-center gap-3"
          >
            <Phone className="h-5 w-5" />
            Call Now: {BUSINESS_PHONE_DISPLAY}
          </a>
          <p className="text-slate-500 text-sm mt-3">Available 24 hours a day, 7 days a week</p>
        </div>
      </div>
    </section>
  );
}
