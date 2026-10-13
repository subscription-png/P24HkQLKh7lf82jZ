import FadeIn from '@/components/FadeIn';

/* HOMESEC3 circular photo cluster — ring colours and relative positions per spec */
const CIRCLES = [
  {
    id: 'HOMESEC3IMG1',
    src: 'https://picsum.photos/seed/d2-circle-1/420/420',
    alt: 'Creative team member portrait',
    ring: 'border-purple',
    hoverRing: 'hover:border-coral',
    cls: 'left-[8%] top-[6%] h-56 w-56 md:h-64 md:w-64',
  },
  {
    id: 'HOMESEC3IMG2',
    src: 'https://picsum.photos/seed/d2-circle-2/360/360',
    alt: 'Designer reviewing brand boards',
    ring: 'border-yellow',
    hoverRing: 'hover:border-purple',
    cls: 'right-[2%] top-[26%] h-40 w-40 md:h-44 md:w-44',
  },
  {
    id: 'HOMESEC3IMG3',
    src: 'https://picsum.photos/seed/d2-circle-3/400/400',
    alt: 'Copywriter sketching headlines',
    ring: 'border-coral',
    hoverRing: 'hover:border-yellow',
    cls: 'bottom-[4%] left-[34%] h-52 w-52 md:h-60 md:w-60',
  },
  {
    id: 'HOMESEC3IMG4',
    src: 'https://picsum.photos/seed/d2-circle-4/300/300',
    alt: 'Strategist at work in the studio',
    ring: 'border-grey',
    hoverRing: 'hover:border-coral',
    cls: 'bottom-[30%] left-[4%] h-32 w-32 md:h-36 md:w-36',
  },
];

export default function MessageSection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" aria-label="Your message">
      {/* soft yellow glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: 'radial-gradient(circle, rgba(255,245,0,0.5), transparent 65%)' }}
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">
        <FadeIn>
          <p className="text-lg text-grey">Your product&apos;s fine. Your market&apos;s fine.</p>
          <h2 className="mt-3 text-4xl font-bold md:text-5xl">
            It&apos;s your <span className="text-coral">message.</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed md:text-xl">
            Based in Melbourne, we help startups say what they <span className="font-bold text-coral">REALLY</span>{' '}
            mean — and get <span className="font-bold text-coral">HEARD</span>.
          </p>
        </FadeIn>

        {/* Circular cluster */}
        <FadeIn delay={0.15}>
          <div className="relative mx-auto h-[380px] w-full max-w-lg md:h-[440px]">
            {CIRCLES.map((c) => (
              <div
                key={c.id}
                id={c.id}
                className={`group absolute overflow-hidden rounded-full border-8 transition-colors duration-300 ${c.ring} ${c.hoverRing} ${c.cls}`}
              >
                <img
                  src={c.src}
                  alt={c.alt}
                  loading="lazy"
                  decoding="async"
                  width={420}
                  height={420}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
