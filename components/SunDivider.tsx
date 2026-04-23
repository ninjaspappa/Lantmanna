'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface SunDividerProps {
  flip?: boolean;
  tone?: 'light' | 'dark';
  className?: string;
}

// Organisk SVG-vågövergång mellan gula sektioner — undviker skarpa kanter.
// Animerar in subtilt i viewport.
export default function SunDivider({ flip = false, tone = 'light', className = '' }: SunDividerProps) {
  const reduceMotion = useReducedMotion();
  const fill = tone === 'dark' ? '#B88F00' : '#E3B300';

  return (
    <div
      className={`relative h-16 w-full overflow-hidden md:h-24 ${className}`}
      style={{ transform: flip ? 'scaleY(-1)' : undefined }}
      aria-hidden
    >
      <motion.svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        initial={reduceMotion ? {} : { scaleX: 1.05, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <path
          d="M0,40 C240,90 480,0 720,30 C960,60 1200,90 1440,40 L1440,100 L0,100 Z"
          fill={fill}
        />
      </motion.svg>
    </div>
  );
}
