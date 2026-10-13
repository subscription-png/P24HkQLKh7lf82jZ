import { Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

const STEPS = [
  {
    title: 'LISTEN',
    copy: 'Cut through the noise with messaging that hits hard and sticks.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16" aria-hidden="true">
        <circle cx="32" cy="26" r="9" stroke="white" strokeWidth="4" />
        <path d="M14 52c2-10 9-15 18-15s16 5 18 15" stroke="white" strokeWidth="4" strokeLinecap="round" />
        <path d="M12 22a22 22 0 0 1 6-13M52 22a22 22 0 0 0-6-13M6 28a32 32 0 0 1 8-18M58 28a32 32 0 0 0-8-18" stroke="white" strokeWidth="3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'SHARPEN',
    copy: 'Every word serves a purpose. No fluff, no filler, just results.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16" aria-hidden="true">
        <circle cx="32" cy="32" r="18" stroke="white" strokeWidth="4" />
        <circle cx="32" cy="32" r="9" stroke="white" strokeWidth="3" />
        <circle cx="32" cy="32" r="3" fill="white" />
        <path d="M32 4v10M32 50v10M4 32h10M50 32h10" stroke="white" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'LAUNCH',
    copy: 'Copy that converts browsers into buyers and skeptics into believers.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" className="h-16 w-16" aria-hidden="true">
        <path d="M40 8c8 0 16 8 16 16 0 6-4 14-12 22l-8 8c-4-2-9-7-12-12l8-8C40 26 40 8 40 8Z" fill="white" />
        <circle cx="44" cy="22" r="5" fill="#AD00FF" />
        <path d="M22 34c-4 2-8 8-9 16 8-1 14-5 16-9" fill="white" />
        <path d="M14 42c-3 4-4 10-4 16 6 0 12-1 16-4" fill="#AD00FF" />
      </svg>
    ),
  },
];

export default function DnaSection() {
  return (
    <section className="py-20 md:py-28" aria-label="D2 DNA process">
      <div className="mx-auto max-w-6xl px-5 text-center md:px-10">
        <FadeIn>
          <div className="flex items-center justify-center gap-2">
            <svg width="56" height="56" viewBox="0 0 40 40" fill="none" aria-hidden="true">
              <path d="M6 4 L22 20 L6 36" stroke="#AD00FF" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 8 L24 20" stroke="#FF0063" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-5xl font-bold text-coral md:text-6xl">DNA</span>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-6">
          {STEPS.map((step, i) => (
            <FadeIn key={step.title} delay={i * 0.15} className="relative">
              <motion.div
                className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-purple"
                whileHover={{ scale: 1.06 }}
                transition={{ type: 'spring', stiffness: 300, damping: 18 }}
              >
                {step.icon}
              </motion.div>
              {i < STEPS.length - 1 && (
                <svg
                  className="absolute right-[-14%] top-14 hidden h-10 w-16 text-coral md:block"
                  viewBox="0 0 64 40"
                  fill="none"
                  aria-hidden="true"
                >
                  <path d="M4 20h44m0 0L34 6m14 14-14 14" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              <h3 className="mt-6 text-3xl font-bold tracking-wide text-yellow">{step.title}</h3>
              <p className="mx-auto mt-4 max-w-xs leading-relaxed text-white/90">{step.copy}</p>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <Link
            to="/d2-dna"
            className="group mt-14 inline-flex items-center gap-3 rounded-full border-2 border-purple px-8 py-3 text-sm font-bold tracking-widest transition-colors duration-200 hover:bg-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-indigo"
          >
            D2 DNA
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-purple transition-colors group-hover:text-white">
              <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}
