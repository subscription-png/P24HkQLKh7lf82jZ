import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

export default function TramSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Animation transforms for the tram scene
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const tramX = useTransform(scrollYProgress, [0.2, 0.8], ['-100%', '100%']);
  const tramOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.7, 0.8], [0, 1, 1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [50, 0, 0, -50]);
  const cityLightsOpacity = useTransform(scrollYProgress, [0.1, 0.4, 0.6, 0.9], [0.3, 1, 1, 0.3]);

  return (
    <section ref={ref} className="relative h-[250vh]" aria-label="Melbourne tram animation section">
      <div className="sticky top-0 h-screen overflow-hidden bg-indigo">
        {/* Animated city background with parallax */}
        <motion.div
          style={reduced ? undefined : { y: backgroundY }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1920&h=1080&fit=crop"
            alt="Melbourne cityscape at night"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-indigo/80 via-indigo/40 to-indigo/80" />
        </motion.div>

        {/* Animated city lights effect */}
        <motion.div
          style={reduced ? undefined : { opacity: cityLightsOpacity }}
          className="absolute inset-0"
        >
          <div className="absolute left-[10%] top-[30%] h-2 w-2 animate-pulse rounded-full bg-yellow shadow-[0_0_20px_rgba(255,245,0,0.8)]" />
          <div className="absolute left-[25%] top-[45%] h-1.5 w-1.5 animate-pulse rounded-full bg-coral shadow-[0_0_15px_rgba(255,0,99,0.8)]" style={{ animationDelay: '0.5s' }} />
          <div className="absolute left-[60%] top-[25%] h-2 w-2 animate-pulse rounded-full bg-purple shadow-[0_0_20px_rgba(173,0,255,0.8)]" style={{ animationDelay: '1s' }} />
          <div className="absolute left-[75%] top-[50%] h-1.5 w-1.5 animate-pulse rounded-full bg-yellow shadow-[0_0_15px_rgba(255,245,0,0.8)]" style={{ animationDelay: '1.5s' }} />
          <div className="absolute left-[85%] top-[35%] h-2 w-2 animate-pulse rounded-full bg-coral shadow-[0_0_20px_rgba(255,0,99,0.8)]" style={{ animationDelay: '2s' }} />
          <div className="absolute left-[45%] top-[55%] h-1.5 w-1.5 animate-pulse rounded-full bg-purple shadow-[0_0_15px_rgba(173,0,255,0.8)]" style={{ animationDelay: '2.5s' }} />
        </motion.div>

        {/* Animated tram moving across the screen */}
        <motion.div
          style={reduced ? undefined : { x: tramX, opacity: tramOpacity }}
          className="absolute left-0 top-[60%] z-10"
        >
          <svg
            width="400"
            height="120"
            viewBox="0 0 400 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_0_30px_rgba(255,245,0,0.5)]"
          >
            {/* Tram body */}
            <rect x="20" y="30" width="360" height="60" rx="8" fill="#FFF500" />
            <rect x="20" y="30" width="360" height="60" rx="8" fill="url(#tramGradient)" />
            
            {/* Tram windows */}
            <rect x="40" y="40" width="50" height="25" rx="3" fill="#0e0b20" opacity="0.8" />
            <rect x="100" y="40" width="50" height="25" rx="3" fill="#0e0b20" opacity="0.8" />
            <rect x="160" y="40" width="50" height="25" rx="3" fill="#0e0b20" opacity="0.8" />
            <rect x="220" y="40" width="50" height="25" rx="3" fill="#0e0b20" opacity="0.8" />
            <rect x="280" y="40" width="50" height="25" rx="3" fill="#0e0b20" opacity="0.8" />
            
            {/* Tram stripes */}
            <rect x="20" y="70" width="360" height="8" fill="#FF0063" />
            <rect x="20" y="78" width="360" height="4" fill="#AD00FF" />
            
            {/* Tram wheels/bogies */}
            <circle cx="80" cy="95" r="12" fill="#272638" />
            <circle cx="80" cy="95" r="8" fill="#1a1828" />
            <circle cx="320" cy="95" r="12" fill="#272638" />
            <circle cx="320" cy="95" r="8" fill="#1a1828" />
            
            {/* Tram pantograph */}
            <line x1="200" y1="30" x2="200" y2="10" stroke="#FFF500" strokeWidth="3" />
            <line x1="180" y1="10" x2="220" y2="10" stroke="#FFF500" strokeWidth="3" />
            
            {/* Tram headlight */}
            <circle cx="375" cy="55" r="6" fill="#FFF500" opacity="0.9" />
            <circle cx="375" cy="55" r="10" fill="#FFF500" opacity="0.3" />
            
            {/* Gradient definitions */}
            <defs>
              <linearGradient id="tramGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFF500" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#FFF500" stopOpacity="0" />
                <stop offset="100%" stopColor="#FFF500" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
          
          {/* Tram light trail effect */}
          <div className="absolute left-0 top-1/2 h-1 w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-yellow/50 to-transparent blur-sm" />
        </motion.div>

        {/* Tram tracks */}
        <div className="absolute bottom-[20%] left-0 right-0 h-1 bg-gradient-to-r from-transparent via-grey/30 to-transparent" />
        <div className="absolute bottom-[18%] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-grey/20 to-transparent" />

        {/* Text overlay with animation */}
        <motion.div
          style={reduced ? undefined : { opacity: textOpacity, y: textY }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center px-5 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl">
            D2 Media is ready for Melbourne…
          </h2>
          <p className="mt-4 text-[2.5rem] font-bold leading-tight text-yellow md:text-[5rem] lg:text-[6rem]">
            Are you ready to stand-out?
          </p>
          
          {/* Decorative animated elements */}
          <motion.div
            initial={reduced ? undefined : { scale: 0, rotate: -180 }}
            animate={reduced ? undefined : { scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            className="mt-8 flex gap-4"
          >
            <div className="h-3 w-3 rounded-full bg-coral" />
            <div className="h-3 w-3 rounded-full bg-yellow" />
            <div className="h-3 w-3 rounded-full bg-purple" />
          </motion.div>
        </motion.div>

        {/* Animated gradient orbs for atmosphere */}
        <motion.div
          animate={reduced ? undefined : {
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[20%] top-[20%] h-64 w-64 rounded-full bg-purple/20 blur-[100px]"
        />
        <motion.div
          animate={reduced ? undefined : {
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[20%] bottom-[20%] h-64 w-64 rounded-full bg-coral/20 blur-[100px]"
        />
      </div>
    </section>
  );
}
