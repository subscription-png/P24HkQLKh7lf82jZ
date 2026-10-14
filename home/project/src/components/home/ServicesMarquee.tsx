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
    </section>
  );
}
