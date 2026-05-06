import { ImageResponse } from 'next/og';

// iOS home-screen-ikon. 180×180 är default-size som Apple förväntar sig.
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#2D6A3E',
          color: '#FAF7F0',
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontWeight: 700,
          fontSize: 130,
          letterSpacing: '-0.02em',
          position: 'relative',
        }}
      >
        L
        <div
          style={{
            position: 'absolute',
            right: 32,
            bottom: 32,
            width: 18,
            height: 18,
            borderRadius: 999,
            background: '#E3B300',
          }}
        />
      </div>
    ),
    size,
  );
}
