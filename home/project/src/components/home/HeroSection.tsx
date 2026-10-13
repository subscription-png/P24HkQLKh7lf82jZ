import { motion, useReducedMotion } from 'framer-motion';
import Typewriter from '@/components/Typewriter';

/* HOMESEC1GIRL — bold, stylish woman portrait matching the "stand out" brand energy. */
const HOMESEC1GIRL =
  'https://res.cloudinary.com/lafaaku5/image/upload/v1791884780/vwcnqv922hxewyl8ptwv.png';

const HERO_VIDEO =
  'https://res.cloudinary.com/lafaaku5/video/upload/v1791886578/twsddnfjzprpt4vulw3r.mp4';

export default function HeroSection() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-indigo pt-28 md:pt-24" aria-label="Introduction">
      {/* Video background */}
      <div className="absolute inset-0 h-full w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-indigo/60" />
      </div>

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

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 md:grid-cols-2 md:px-10">
        {/* Copy */}
        <div className="relative">
          <h1 className="leading-[1.12] tracking-tight">
            <span className="block text-[clamp(2rem,4.5vw,3.75rem)] font-normal">
              <Typewriter
                startDelay={500}
                speed={40}
                segments={[
                  { text: 'Play it ', className: 'text-white' },
                  { text: 'safe,', className: 'text-purple font-bold' },
                ]}
              />
            </span>
            <span className="block text-[clamp(2rem,4.5vw,3.75rem)] font-normal">
              <Typewriter
                startDelay={1400}
                speed={40}
                segments={[
                  { text: 'you will be ', className: 'text-white' },
                  { text: 'forgotten.', className: 'text-purple font-bold' },
                ]}
              />
            </span>
            <span className="mt-5 block text-[clamp(2rem,4.5vw,3.75rem)] font-normal text-white">
              <Typewriter startDelay={2600} speed={40} segments={[{ text: "It's time to" }]} />
            </span>
            <span className="mt-1 block text-[clamp(5rem,10vw,9rem)] font-bold leading-none text-yellow">
              <Typewriter startDelay={3400} speed={60} segments={[{ text: 'stand out!' }]} />
            </span>
          </h1>

          {/* Add more space below h1 and position chevrons at the bottom right */}
          <div className="relative h-64 w-full flex items-end justify-end pt-10">
            <div className="relative h-48 w-80">
              <motion.svg
                className="absolute right-20 top-0 md:right-24"
                width="96"
                height="96"
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
                className="absolute right-32 top-16 md:right-40 md:top-20"
                width="56"
                height="56"
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
                className="absolute right-4 top-16 md:right-6 md:top-20"
                width="64"
                height="64"
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
        </div>

        {/* HOMESEC1GIRL image */}
        <div className="relative mx-auto flex w-full items-end md:col-start-2 md:row-start-1 md:h-full">
          <img
            src={HOMESEC1GIRL}
            alt="Expressing confidence and individuality — communicate your brand by being uniquely you."
            className="mx-auto h-auto w-full max-w-full object-contain object-bottom md:max-h-[110%] md:w-auto"
            loading="eager"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
