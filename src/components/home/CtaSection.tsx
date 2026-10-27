import { Link } from '@tanstack/react-router';
import FadeIn from '@/components/FadeIn';

export default function CtaSection() {
  return (
    <section
      className="py-24 text-center md:py-32"
      style={{ background: 'linear-gradient(135deg, #590746 0%, #370939 50%, #0e0b20 100%)' }}
      aria-label="Call to action"
    >
      <FadeIn className="mx-auto max-w-3xl px-5">
        <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          STILL FIGURING OUT
          <br />
          YOUR NEXT MOVE?
        </h2>
        <p className="mt-5 text-xl text-white/90">Let&apos;s make it clear.</p>
        <Link
          to="/get-in-touch"
          className="mt-9 inline-flex items-center gap-3 rounded-full bg-coral px-9 py-4 text-sm font-bold tracking-widest text-white transition-colors duration-200 hover:bg-purple focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo"
        >
          BOOK A CALL
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M7 17 17 7m0 0H8m9 0v9" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </FadeIn>
    </section>
  );
}
