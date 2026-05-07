import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Fjärås Lantmanna — lanthandel i Kungsbacka sedan 1925';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          background:
            'linear-gradient(135deg, #2f5d3a 0%, #3a7048 55%, #4a8a5a 100%)',
          color: '#f7f1e1',
          fontFamily: 'serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 96,
              borderRadius: 24,
              background: '#f7f1e1',
              color: '#2f5d3a',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 64,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontSize: 28, opacity: 0.85, letterSpacing: 2 }}>
              SEDAN 1925
            </div>
            <div style={{ fontSize: 44, fontWeight: 700, marginTop: 4 }}>
              Fjärås Lantmanna
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            Lanthandel i Fjärås
          </div>
          <div style={{ fontSize: 38, opacity: 0.92, lineHeight: 1.3 }}>
            Foder · Trädgård · Arbetskläder · Gasol · Plantjord 50
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 26,
            opacity: 0.8,
          }}
        >
          <div>lantmanna.nu</div>
          <div>Fjärås · Kungsbacka · Halland</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
