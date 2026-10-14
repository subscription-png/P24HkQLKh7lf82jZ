import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/* TRAMDOOR visual — full-width rainy tram doors. Left/right halves part on scroll. */
const TRAM_IMAGE =
  'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1800&auto=format&fit=crop';
const CITY_IMAGE =
  'https://images.unsplash.com/photo-1514395462725-fb4566210144?q=80&w=1800&auto=format&fit=crop';

export default function TramSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const leftX = useTransform(scrollYProgress, [0.15, 0.75], ['0%', '-72%']);
  const rightX = useTransform(scrollYProgress, [0.15, 0.75], ['0%', '72%']);
  const textOpacity = useTransform(scrollYProgress, [0.05, 0.3], [0, 1]);
  const scrollHintOpacity = useTransform(scrollYProgress, [0.05, 0.2], [1, 0]);

  return (
    <section ref={ref} className="relative h-[85vh] overflow-hidden" aria-label="Melbourne tram doors">
      {/* Revealed background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${CITY_IMAGE})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-indigo/55" aria-hidden="true" />

      <motion.p
        style={reduced ? undefined : { opacity: textOpacity }}
        className="absolute inset-0 z-0 flex items-center justify-center text-center text-4xl font-bold tracking-tight md:text-6xl"
      >
        THE CITY OPENS
      </motion.p>

      {/* Door halves */}
      <motion.div
        style={reduced ? undefined : { x: leftX }}
        className="absolute inset-y-0 left-0 z-10 w-1/2 border-r-2 border-indigo/80"
        role="img"
        aria-label="Rain-streaked tram door, left half"
      >
        <div
          className="h-full w-full"
          style={{ backgroundImage: `url(${TRAM_IMAGE})`, backgroundPosition: 'left center', backgroundSize: '200% 100%' }}
        />
      </motion.div>
      <motion.div
        style={reduced ? undefined : { x: rightX }}
        className="absolute inset-y-0 right-0 z-10 w-1/2 border-l-2 border-indigo/80"
        role="img"
        aria-label="Rain-streaked tram door, right half"
      >
        <div
          className="h-full w-full"
          style={{ backgroundImage: `url(${TRAM_IMAGE})`, backgroundPosition: 'right center', backgroundSize: '200% 100%' }}
        />
      </motion.div>

      <motion.div
        style={reduced ? undefined : { opacity: scrollHintOpacity }}
        className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-center text-xs font-bold tracking-[0.35em] text-white/80"
        aria-hidden="true"
      >
        SCROLL
        <svg className="mx-auto mt-2 h-5 w-5 animate-bounce" viewBox="0 0 24 24" fill="none">
          <path d="M12 4v14m0 0-5-5m5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </motion.div>
    </section>
  );
}
