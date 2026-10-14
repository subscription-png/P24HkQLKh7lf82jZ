import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { Link } from '@tanstack/react-router';

export default function TramSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const textOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);
  const imageOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[200vh]" aria-label="Melbourne tram section">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background image */}
        <motion.div
          style={reduced ? undefined : { opacity: imageOpacity }}
          className="absolute inset-0"
        >
          <img
            src="/images/melbourne-tram.jpg"
            alt="Melbourne tram at night"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-indigo/60" />
        </motion.div>

        {/* Text overlay */}
        <motion.p
          style={reduced ? undefined : { opacity: textOpacity }}
          className="absolute inset-0 z-0 flex flex-col items-center justify-center text-center text-4xl font-bold tracking-tight md:text-6xl"
        >
          D2 Media is ready for Melbourne…<br />
          <span className="block text-[2.5rem] md:text-[5rem] mt-2">
            Are you ready to stand-out?
          </span>
        </motion.p>
      </div>
    </section>
  );
}
