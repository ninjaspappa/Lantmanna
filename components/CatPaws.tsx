'use client';

// Diskreta grå tasspår som vandrar nedåt längs höger sida, synkat mot scroll.
// Pausat på mobil (hidden under md).

export default function CatPaws() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-2 top-0 z-10 hidden h-screen w-10 md:block"
    >
      <div className="cat-paws-track relative h-full w-full">
        {Array.from({ length: 12 }).map((_, i) => (
          <svg
            key={i}
            viewBox="0 0 40 40"
            className="cat-paw absolute h-5 w-5 text-foreground/20"
            style={{
              top: `${i * 8.5}%`,
              left: i % 2 === 0 ? '0' : '55%',
              animationDelay: `${i * 0.4}s`,
            }}
          >
            <g fill="currentColor">
              {/* main pad */}
              <ellipse cx="20" cy="26" rx="7" ry="6" />
              {/* toe beans */}
              <ellipse cx="10" cy="16" rx="3" ry="4" />
              <ellipse cx="17" cy="11" rx="3" ry="4" />
              <ellipse cx="23" cy="11" rx="3" ry="4" />
              <ellipse cx="30" cy="16" rx="3" ry="4" />
            </g>
          </svg>
        ))}
      </div>

      <style jsx>{`
        .cat-paw {
          opacity: 0;
          animation: paw-walk 14s linear infinite;
        }
        @keyframes paw-walk {
          0% {
            opacity: 0;
            transform: translateY(-20px) rotate(-8deg);
          }
          10% {
            opacity: 0.9;
          }
          45% {
            opacity: 0.9;
          }
          60% {
            opacity: 0;
            transform: translateY(40px) rotate(-8deg);
          }
          100% {
            opacity: 0;
            transform: translateY(40px) rotate(-8deg);
          }
        }
      `}</style>
    </div>
  );
}
