import FadeIn from '@/components/FadeIn';

/* Section 3 image assets — four overlapping circular photographs */
const IMAGES = [
  {
    id: 'HOMESEC3IMG1',
    src: 'https://picsum.photos/seed/d2-team-melb/520/520',
    alt: 'Melbourne laneway creative workspace',
    ring: 'ring-purple',
    size: 'h-44 w-44 md:h-64 md:w-64',
    pos: 'left-0 top-0 z-10',
    hoverRing: 'hover:ring-yellow',
  },
  {
    id: 'HOMESEC3IMG2',
    src: 'https://picsum.photos/seed/d2-copy-desk/380/380',
    alt: 'Copywriting desk with notes',
    ring: 'ring-yellow',
    size: 'h-28 w-28 md:h-40 md:w-40',
    pos: 'right-0 top-16 z-20',
    hoverRing: 'hover:ring-coral',
  },
  {
    id: 'HOMESEC3IMG3',
    src: 'https://picsum.photos/seed/d2-strategy/560/560',
    alt: 'Strategy session whiteboard',
    ring: 'ring-coral',
    size: 'h-52 w-52 md:h-80 md:w-80',
    pos: 'right-4 bottom-0 z-30',
    hoverRing: 'hover:ring-purple',
  },
  {
    id: 'HOMESEC3IMG4',
    src: 'https://picsum.photos/seed/d2-coffee/340/340',
    alt: 'Melbourne coffee catch-up',
    ring: 'ring-grey',
    size: 'h-24 w-24 md:h-36 md:w-36',
    pos: 'left-24 bottom-6 z-40',
    hoverRing: 'hover:ring-yellow',
  },
];

export default function MessageSection() {
  return (
    <section className="overflow-hidden py-20 md:py-28" aria-label="It's your message">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">
        <FadeIn>
          <p className="text-lg text-grey">Your product&apos;s fine. Your market&apos;s fine.</p>
          <h2 className="mt-2 text-4xl font-bold leading-tight md:text-6xl">
            It&apos;s your <span className="text-coral">message.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/90 md:text-xl">
            Based in Melbourne, we help startups say what they{' '}
            <span className="font-bold text-coral">REALLY</span> mean — and get{' '}
            <span className="font-bold text-coral">HEARD</span>.
          </p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="relative mx-auto h-[340px] w-full max-w-[420px] md:h-[460px] md:max-w-[520px]">
            {IMAGES.map((img) => (
              <img
                key={img.id}
                data-asset-id={img.id}
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className={`absolute rounded-full object-cover ring-4 transition-all duration-300 hover:scale-110 ${img.ring} ${img.hoverRing} ${img.size} ${img.pos}`}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
