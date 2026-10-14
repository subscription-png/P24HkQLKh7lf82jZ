import { createFileRoute, Link } from '@tanstack/react-router';
import { motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';
import { Component as ImageAutoSlider } from '@/components/ui/image-auto-slider';

export const Route = createFileRoute('/d2-dna')({
  head: () => ({
    meta: [
      { title: 'D2 DNA — D2 Media Communication Agency in Melbourne' },
      {
        name: 'description',
        content:
          'Listen, Sharpen, Launch. The D2 DNA process: messaging that hits hard and sticks, copy with no fluff, and campaigns that convert.',
      },
    ],
  }),
  component: D2DnaPage,
});

const STEPS = [
  {
    n: '01',
    title: 'LISTEN',
    body: 'Cut through the noise with messaging that hits hard and sticks.',
    detail:
      'Before a single word is written, we listen — to you, your customers and your market. We dig for the insight your competitors missed and the truth your audience is waiting to hear.',
  },
  {
    n: '02',
    title: 'SHARPEN',
    body: 'Every word serves a purpose. No fluff, no filler, just results.',
    detail:
      'We distil everything we heard into a razor-sharp message. Frameworks, voice and copy systems that make every headline, page and post work harder.',
  },
  {
    n: '03',
    title: 'LAUNCH',
    body: 'Copy that converts browsers into buyers and skeptics into believers.',
    detail:
      'Your message goes live across every channel — website, socials, campaigns — engineered to convert from day one and measured so it keeps improving.',
  },
];

function D2DnaPage() {
  return (
    <main className="pt-28 md:pt-36">
      {/* Header */}
      <section className="px-5 pb-16 text-center md:px-10 md:pb-24" aria-label="D2 DNA introduction">
        <FadeIn className="mx-auto max-w-3xl">
          <h1 className="flex items-baseline justify-center gap-3 text-6xl font-bold tracking-tight md:text-8xl">
            <span className="text-purple">D2</span>
            <span className="text-coral">DNA</span>
          </h1>
          <p className="mt-6 text-xl leading-relaxed text-white/90 md:text-2xl">
            The process behind every brand we make impossible to ignore. Three steps. No shortcuts.
          </p>
        </FadeIn>
      </section>

      {/* We don't do boring section */}
      <section className="px-5 pb-16 md:px-10" aria-label="Our approach">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="text-white">We don't do </span>
            <span className="text-purple">boring.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Every brand has a story. We make sure yours is impossible to ignore.
          </p>
        </motion.div>
      </section>

      {/* Image card marquee */}
      <section className="pb-24" aria-label="Brand showcase">
        <ImageAutoSlider />
      </section>

      {/* Process steps */}
      <section className="mx-auto max-w-5xl space-y-8 px-5 pb-24 md:px-10" aria-label="The three-step process">
        {STEPS.map((s, i) => (
          <FadeIn key={s.n} delay={i * 0.1}>
            <article className="group grid gap-6 rounded-3xl border border-indigo-2 bg-indigo-2/30 p-8 transition-colors duration-300 hover:border-purple md:grid-cols-[auto_1fr] md:gap-10 md:p-12">
              <p className="text-5xl font-bold text-purple transition-colors duration-300 group-hover:text-coral md:text-6xl">
                {s.n}
              </p>
              <div>
                <h2 className="text-3xl font-bold tracking-wide text-yellow md:text-4xl">{s.title}</h2>
                <p className="mt-3 text-lg font-bold text-white md:text-xl">{s.body}</p>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-grey md:text-lg">{s.detail}</p>
              </div>
            </article>
          </FadeIn>
        ))}
      </section>

      {/* CTA */}
      <section className="px-5 pb-28 text-center" aria-label="Next step">
        <FadeIn>
          <p className="text-xl text-white/90">Ready to find out what your brand really sounds like?</p>
          <Link
            to="/get-in-touch"
            className="mt-7 inline-flex items-center gap-3 rounded-full bg-coral px-9 py-4 text-sm font-bold tracking-widest text-white transition-colors duration-200 hover:bg-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo"
          >
            GET IN TOUCH
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </FadeIn>
      </section>
    </main>
  );
}
