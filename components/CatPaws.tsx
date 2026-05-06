'use client';

// Diskreta tasspår som vandrar uppåt längs höger sida — en tass i taget,
// fejdar in och ut sekventiellt. Pausat på mobil (hidden under md).

const PAW_COUNT = 10;
const STEP_DURATION = 1.4; // sekunder per tass synlig
const TOTAL_DURATION = PAW_COUNT * STEP_DURATION;

export default function CatPaws() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-3 top-0 z-10 hidden h-screen w-16 md:block"
    >
      <div className="relative h-full w-full">
        {Array.from({ length: PAW_COUNT }).map((_, i) => {
          // Distribuera över höjden, med första tassen längst ner och sista högst upp
          const topPercent = 92 - i * (84 / (PAW_COUNT - 1));
          const delay = i * STEP_DURATION;
          const isLeft = i % 2 === 0;
          return (
            <svg
              key={i}
              viewBox="0 0 40 40"
              className="cat-paw absolute h-10 w-10 text-foreground/45"
              style={{
                top: `${topPercent}%`,
                left: isLeft ? '0' : '50%',
                transform: `rotate(${isLeft ? -12 : 12}deg)`,
                animationDelay: `${delay}s`,
                animationDuration: `${TOTAL_DURATION}s`,
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
          );
        })}
      </div>

      <style jsx>{`
        .cat-paw {
          opacity: 0;
          animation-name: paw-step;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;
          animation-fill-mode: both;
        }
        @keyframes paw-step {
          0% {
            opacity: 0;
          }
          ${((STEP_DURATION * 0.3) / TOTAL_DURATION) * 100}% {
            opacity: 0.85;
          }
          ${((STEP_DURATION * 0.7) / TOTAL_DURATION) * 100}% {
            opacity: 0.85;
          }
          ${(STEP_DURATION / TOTAL_DURATION) * 100}% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
