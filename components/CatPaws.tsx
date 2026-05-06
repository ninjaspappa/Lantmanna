'use client';

// Diskreta tasspår som vandrar uppåt längs höger sida — en tass i taget,
// fejdar in och ut sekventiellt. Pausat på mobil (hidden under md).

// 10 tassar × 1.4s synligt slot = 14s total. Keyframe-procenten i CSS
// nedan är hårdkodade (styled-jsx hanterar inte dynamiska keyframe-selectorer).
const PAW_COUNT = 10;
const STEP_DURATION = 1.4;

export default function CatPaws() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-3 top-0 z-10 hidden h-screen w-16 md:block"
    >
      <div className="relative h-full w-full">
        {Array.from({ length: PAW_COUNT }).map((_, i) => {
          // Första tassen längst ner, sista högst upp → "går uppåt"
          const topPercent = 92 - i * (84 / (PAW_COUNT - 1));
          const delay = i * STEP_DURATION;
          const isLeft = i % 2 === 0;
          return (
            <svg
              key={i}
              viewBox="0 0 40 40"
              className="cat-paw absolute h-10 w-10"
              style={{
                top: `${topPercent}%`,
                left: isLeft ? '0' : '50%',
                color: 'rgba(28, 39, 31, 0.55)',
                transform: `rotate(${isLeft ? -12 : 12}deg)`,
                animationDelay: `${delay}s`,
              }}
            >
              <g fill="currentColor">
                <ellipse cx="20" cy="26" rx="7" ry="6" />
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
          animation: paw-step 14s ease-in-out infinite both;
        }
        /*
         * 4 tassar synliga i taget: nyast = mörkast (ledande tass högst upp),
         * bakre tass har tonats ut mest. Varje tass går igenom 4 stegs-fönster:
         *   0 → 0.9 (placeras, ledande)
         *   1 steg → 0.65 (en tass framåt)
         *   2 steg → 0.4
         *   3 steg → 0.18 (bakre i spåret)
         *   4 steg → 0 (borta)
         * Med 10 tassar × 1.4s/steg = 14s total → 1 steg = 10%.
         */
        @keyframes paw-step {
          0% {
            opacity: 0;
          }
          2% {
            opacity: 0.9;
          }
          12% {
            opacity: 0.65;
          }
          22% {
            opacity: 0.4;
          }
          32% {
            opacity: 0.18;
          }
          40% {
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
