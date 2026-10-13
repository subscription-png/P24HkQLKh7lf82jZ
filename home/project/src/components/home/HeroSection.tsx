import { motion, useReducedMotion } from 'framer-motion';
import Typewriter from '@/components/Typewriter';

/* HOMESEC1GIRL — cut-out woman with pink bob, yellow sunglasses, split yellow/pink blazer holding champagne.
   The supplied master document designates this asset; the URL below is the preserved reference image. */
const HOMESEC1GIRL =
  'https://image.seed.so/i/0195a2db-hero-woman'; // fallback handled by onError below

const FALLBACK_GIRL =
  'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=900&auto=format&fit=crop';

export default function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-indigo pt-28 md:pt-24" aria-label="Introduction">
      {/* Animated background paths */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 1440 900"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <motion.path
          d="M-80 700 C 300 560, 420 760, 720 620 S 1180 480, 1540 640"
          stroke="#AD00FF"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeDasharray="1200"
          initial={reduced ? undefined : { strokeDashoffset: 1200 }}
          animate={reduced ? undefined : { strokeDashoffset: 0 }}
          transition={{ duration: 2.4, ease: 'easeOut' }}
        />
        <motion.path
          d="M-80 220 C 260 320, 560 140, 860 260 S 1300 320, 1540 200"
          stroke="#FF0063"
          strokeOpacity="0.25"
          strokeWidth="2"
          strokeDasharray="1200"
          initial={reduced ? undefined : { strokeDashoffset: 1200 }}
          animate={reduced ? undefined : { strokeDashoffset: 0 }}
          transition={{ duration: 2.8, delay: 0.4, ease: 'easeOut' }}
        />
      </svg>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 pb-10 md:grid-cols-2 md:px-10">
        {/* Copy */}
        <div className="relative">
          <h1 className="text-[clamp(2rem,4.4vw,3.6rem)] font-bold leading-[1.12] tracking-tight">
            <span className="block">
              <Typewriter
                startDelay={500}
                speed={40}
                segments={[
                  { text: 'Play it ', className: 'text-white' },
                  { text: 'safe,', className: 'text-purple' },
                ]}
              />
            </span>
            <span className="block">
              <Typewriter
                startDelay={1400}
                speed={40}
                segments={[
                  { text: 'you will be ', className: 'text-white' },
                  { text: 'forgotten.', className: 'text-purple' },
                ]}
              />
            </span>
            <span className="mt-5 block text-white">
              <Typewriter startDelay={2600} speed={40} segments={[{ text: "It's time to" }]} />
            </span>
            <span className="mt-1 block text-[clamp(3rem,7.5vw,6rem)] font-bold leading-none text-yellow">
              <Typewriter startDelay={3400} speed={60} segments={[{ text: 'stand out!' }]} />
            </span>
          </h1>

          {/* Three chevrons */}
          <div className="relative mt-10 h-32 w-64 md:absolute md:-bottom-16 md:left-auto md:right-6 md:mt-0">
            <motion.svg
              className="absolute left-16 top-0"
              width="72"
              height="72"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              initial={reduced ? undefined : { opacity: 0, x: -18 }}
              animate={reduced ? undefined : { opacity: 1, x: 0 }}
              transition={{ delay: 4.3, duration: 0.5 }}
            >
              <path d="M5 4l8 8-8 8" stroke="#FF0063" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <motion.svg
              className="absolute left-2 top-14"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              initial={reduced ? undefined : { opacity: 0, x: -18 }}
              animate={reduced ? undefined : { opacity: 1, x: 0 }}
              transition={{ delay: 4.5, duration: 0.5 }}
            >
              <path d="M5 4l8 8-8 8" stroke="#FFF500" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
            <motion.svg
              className="absolute left-24 top-14"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              initial={reduced ? undefined : { opacity: 0, x: -18 }}
              animate={reduced ? undefined : { opacity: 1, x: 0 }}
              transition={{ delay: 4.7, duration: 0.5 }}
            >
              <path d="M5 4l8 8-8 8" stroke="#AD00FF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </div>
        </div>

        {/* HOMESEC1GIRL image */}
        <motion.div
          className="relative mx-auto w-full max-w-md md:max-w-none"
          initial={reduced ? undefined : { opacity: 0, y: 40 }}
          animate={reduced ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={HOMESEC1GIRL}
            onError={(e) => {
              const el = e.currentTarget;
              if (el.src !== FALLBACK_GIRL) el.src = FALLBACK_GIRL;
            }}
            alt="Woman with a vivid pink bob and yellow sunglasses, wearing a split yellow and pink blazer and holding a glass of champagne"
            className="float-slow mx-auto max-h-[70vh] w-auto object-contain"
            loading="eager"
            decoding="async"
          />
        </motion.div>
      </div>
    </section>
  );
}
