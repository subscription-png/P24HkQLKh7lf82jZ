const SERVICES = [
  'BRANDING',
  'GRAPHIC DESIGN',
  'WEB DESIGN',
  'SOCIAL MEDIA',
  'AI GENERATION',
  'AUTOMATION CALLS',
  'LEAD GENERATION',
  'COMMUNICATION MARKETING',
  'AD ANALYSIS',
  'RESEARCH',
  'A/B TESTING',
  'VIDEOS AND ADS',
];

export default function ServicesMarquee() {
  const ticker = [...SERVICES, ...SERVICES];

  return (
    <section aria-label="Services">
      {/* Purple service ticker */}
      <div className="overflow-hidden bg-purple py-4" role="marquee" aria-label="Our services">
        <div className="flex w-max animate-marquee-left whitespace-nowrap">
          {ticker.map((s, i) => (
            <span key={i} className="px-6 text-xl font-normal tracking-[0.08em] text-white md:text-2xl">
              {s} <span className="mx-3 text-white/70" aria-hidden="true">•</span>
            </span>
          ))}
        </div>
      </div>

      {/* Three-second hook */}
      <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
        <h2 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
          Do they get it in
          <br />
          <span className="text-coral">3 seconds?</span>
        </h2>
        <h3 className="mt-6 text-lg md:text-xl">
          If not, <span className="font-bold italic text-purple">your copy&apos;s the problem</span> — not your product.
        </h3>
      </div>
    </section>
  );
}
