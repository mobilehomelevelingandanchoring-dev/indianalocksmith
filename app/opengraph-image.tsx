import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Affordable Locksmith — Kokomo, Indiana';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #2563eb 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'system-ui, sans-serif',
          position: 'relative',
        }}
      >
        {/* Background pattern */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />

        {/* Lock icon */}
        <div
          style={{
            width: 80,
            height: 80,
            background: '#f59e0b',
            borderRadius: 20,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 24,
            fontSize: 40,
          }}
        >
          🔐
        </div>

        {/* Business name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: 'white',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: 12,
          }}
        >
          Affordable Locksmith
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: 32,
            color: '#93c5fd',
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          Kokomo, Indiana
        </div>

        {/* Phone + tagline */}
        <div
          style={{
            display: 'flex',
            gap: 40,
            alignItems: 'center',
          }}
        >
          <div
            style={{
              background: '#f59e0b',
              color: '#1e1e1e',
              fontSize: 28,
              fontWeight: 700,
              padding: '12px 32px',
              borderRadius: 50,
            }}
          >
            (833) 632-3357
          </div>
          <div style={{ color: '#dbeafe', fontSize: 22 }}>
            39+ Years Experience • 24/7 Emergency
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
