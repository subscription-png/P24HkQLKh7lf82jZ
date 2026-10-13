import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 text-center">
      <p className="text-4xl font-bold md:text-5xl">{value}</p>
      <p className="mx-auto mt-3 max-w-[220px] text-sm leading-snug text-white/90">{label}</p>
    </div>
  );
}

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      setVal(to);
      return;
    }
    const start = performance.now();
    const dur = 1600;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      setVal(Math.round(to * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return <span ref={ref}>{val.toLocaleString('en-AU')}</span>;
}

const DASH_STATS = [
  { label: 'Leads', sub: 'New leads this week', value: 1248, delta: '+32.5%' },
  { label: 'Social Media', sub: 'Engagement this week', value: 4785, delta: '+45.7%' },
  { label: 'Appointments', sub: 'Scheduled this week', value: 328, delta: '+28.4%' },
  { label: 'Outbound Calls', sub: 'Calls made this week', value: 642, delta: '+18.9%' },
];

export default function GrowthDashboardSection() {
  return (
    <>
      {/* AI Growth Dashboard */}
      <section className="bg-gradient-to-b from-indigo to-[#2a0630] py-20 md:py-28" aria-label="Growth dashboard">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-2 md:px-10">
          <FadeIn>
            <div role="img" aria-label="Growth dashboard interface showing leads, social media, appointments and outbound calls">
              <div className="rounded-2xl border border-indigo-2 bg-[#161226]/90 p-5">
                <div className="flex items-center justify-between">
                  <p className="font-bold">Growth Dashboard</p>
                  <span className="rounded-full bg-purple/20 px-3 py-1 text-xs font-bold text-purple">LIVE</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  {DASH_STATS.map((s) => (
                    <div key={s.label} className="rounded-xl border border-indigo-2 bg-gradient-to-br from-purple-2/50 to-purple-deep/60 p-3.5">
                      <p className="text-xs font-bold">{s.label}</p>
                      <p className="text-[11px] text-white/70">{s.sub}</p>
                      <p className="mt-1 text-xl font-bold">
                        <CountUp to={s.value} />
                        <span className="ml-2 text-xs font-bold text-[#4ade80]">{s.delta}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <svg viewBox="0 0 300 70" className="mt-4 w-full" aria-hidden="true">
                  {[18, 28, 24, 40, 34, 52, 46, 62].map((h, i) => (
                    <motion.rect
                      key={i}
                      x={14 + i * 36}
                      y={66 - h}
                      width="20"
                      height={h}
                      rx="3"
                      fill={i % 2 ? '#AD00FF' : '#FF0063'}
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      style={{ transformBox: 'fill-box', transformOrigin: 'bottom' }}
                      transition={{ delay: i * 0.08, duration: 0.5, ease: 'easeOut' }}
                    />
                  ))}
                </svg>
              </div>
              <div className="mt-3 flex items-center justify-between rounded-xl border border-indigo-2 bg-[#161226]/90 px-4 py-3 text-xs text-grey">
                <span className="font-bold text-[#4ade80]">STATUS: OPTIMAL</span>
                <span>EXECUTE > GROWTH.MODULE</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15}>
            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              A Smarter Way to
              <br />
              Reach your Customers
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/90">
              We integrate AI with strategy, creativity, and data to identify your ideal customers, reach them
              through the right channels, and create personalised experiences that turn prospects into loyal
              customers.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Statistics band */}
      <section className="bg-gradient-to-r from-purple to-purple-2 py-16 md:py-20" aria-label="Key statistics">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-12 px-5 md:grid-cols-4 md:px-10">
          <FadeIn delay={0}><Stat value="99%" label="Current agency capacity available to dedicate exclusively to your brand's launch." /></FadeIn>
          <FadeIn delay={0.1}><Stat value="2x" label="Faster communication and agile turnaround times compared to bloated traditional agencies." /></FadeIn>
          <FadeIn delay={0.2}><Stat value="1st" label="In line for our exclusive VIP support — we treat your startup's growth like our own." /></FadeIn>
          <FadeIn delay={0.3}><Stat value="10/10" label="Dedication to delivering pixel-perfect multimedia assets that you are completely obsessed with." /></FadeIn>
        </div>
      </section>
    </>
  );
}
