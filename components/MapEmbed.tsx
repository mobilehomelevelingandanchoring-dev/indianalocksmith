import { MapPin, Navigation, Phone } from 'lucide-react';
import { BUSINESS_PHONE_HREF, BUSINESS_PHONE_DISPLAY, BUSINESS_CITY, BUSINESS_STATE } from '@/lib/constants';

export default function MapEmbed() {
  const mapSrc =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d97049.62!2d-86.1336!3d40.4865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8813b64e8ae3b0b5%3A0x67a3e96bcbff1000!2sKokomo%2C%20IN!5e0!3m2!1sen!2sus!4v1700000000000';

  return (
    <section className="section-pad bg-slate-50">
      <div className="container-custom">
        <div className="text-center mb-10">
          <h2 className="section-title">Serving Kokomo & Surrounding Areas</h2>
          <p className="section-subtitle mx-auto">
            We come directly to you anywhere in Howard County and neighboring communities. Mobile locksmith service with fast response times.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 rounded-2xl overflow-hidden shadow-card border border-slate-200 h-80 lg:h-96">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Affordable Locksmith service area map — ${BUSINESS_CITY}, ${BUSINESS_STATE}`}
            />
          </div>

          <div className="space-y-5">
            <div className="card p-5">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-600 rounded-lg p-2 shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Service Area</h3>
                  <p className="text-slate-600 text-sm">
                    Kokomo, IN and all of Howard County. We also serve Logansport, Peru, Tipton, Frankfort, Greentown, Russiaville, and more.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-3">
                <div className="bg-green-100 text-green-600 rounded-lg p-2 shrink-0">
                  <Navigation className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Mobile Service</h3>
                  <p className="text-slate-600 text-sm">
                    We come directly to your location — home, office, parking lot, or anywhere you need us. No need to tow or travel to us.
                  </p>
                </div>
              </div>
            </div>

            <div className="card p-5">
              <div className="flex items-start gap-3">
                <div className="bg-amber-100 text-amber-600 rounded-lg p-2 shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Call for Service</h3>
                  <p className="text-slate-600 text-sm mb-3">
                    Available 24/7 for emergency and scheduled locksmith services throughout the area.
                  </p>
                  <a
                    href={BUSINESS_PHONE_HREF}
                    className="btn-accent text-sm px-4 py-2"
                  >
                    <Phone className="h-4 w-4" />
                    {BUSINESS_PHONE_DISPLAY}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
