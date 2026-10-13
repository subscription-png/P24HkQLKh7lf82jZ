import { Link } from '@tanstack/react-router';
import FadeIn from '@/components/FadeIn';

const STEPS = [
  {
    title: 'LISTEN',
    body: 'Cut through the noise with messaging that hits hard and sticks.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-14 w-14" aria-hidden="true">
        <circle cx="12" cy="10" r="4" fill="currentColor" stroke="none" />
        <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" fill="currentColor" stroke="none" />
        <path d="M18.5 5.5a9 9 0 0 1 0 9M21 3a13 13 0 0 1 0 14M5.5 5.5a9 9 0 0 0 0 9M3 3a13 13 0 0 0 0 14" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'SHARPEN',
    body: 'Every word serves a purpose. No fluff, no filler, just results.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-14 w-14" aria-hidden="true">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
        <path d="M12 1v4M12 19v4M1 12h4M19 12h4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'LAUNCH',
    body: 'Copy that converts browsers into buyers and skeptics into believers.',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-14 w-14" aria-hidden="true">
        <path d="M13.5 2.5c3.5.5 6 3 6.5 6.5l-4.5 4.5-6.5-6.5 4.5-4.5ZM8.5 9l6.5 6.5c-.5 2.5-2 4.5-5 5.5L8 19l-1.5 1.5c-.5-2.5 0-4.5 2-6.5v-5Zm-3 8c-1 1-1.5 3-1.5 4.5C5.5 21.5 7.5 21 8.5 20l-3-3ZM15 7.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z" />
      </svg>
    ),
  },
];

export default function DnaSection() {
  return (
    <section className="py-20 text-center md:py-28" aria-label="D2 DNA process">
      <FadeIn className="mx-auto max-w-6xl px-5 md:px-10">
        <h2 className="flex items-baseline justify-center gap-2 text-5xl font-bold tracking-tight md:text-7xl">
          <span className="text-purple">D2</span>
          <span className="text-coral">DNA</span>
        </h2>

        <div className="mt-14 flex flex-col items-center justify-center gap-10 md:flex-row md:gap-6">
          {STEPS.map((step, i) => (
            <div key={step.title} className="flex items-center gap-6">
              <FadeIn delay={i * 0.15} className="w-64 text-center">
                <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-full bg-purple text-white md:h-40 md:w-40">
                  {step.icon}
                </div>
                <h3 className="mt-5 text-2xl font-bold tracking-wide text-yellow">{step.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-white/90">{step.body}</p>
              </FadeIn>
              {i < STEPS.length - 1 && (
                <svg width="44" height="44" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="hidden shrink-0 rotate-0 text-coral md:block">
                  <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {i < STEPS.length - 1 && (
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-coral md:hidden">
                  <path d="M12 4v14m0 0-6-6m6 6 6-6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>

        <Link
          to="/d2-dna"
          className="mt-14 inline-flex items-center gap-3 rounded-full border-2 border-purple px-8 py-3 text-sm font-bold tracking-widest text-white transition-colors duration-200 hover:bg-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-indigo"
        >
          D2 DNA
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="text-purple">
            <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </FadeIn>
    </section>
  );
}
