import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

export type TabKey = 'BUILD' | 'ATTRACT' | 'CONVERT' | 'SCALE';

export const TABS: {
  key: TabKey;
  label: string;
  icon: JSX.Element;
  heading: [string, string];
  body: string;
  bullets: string[];
}[] = [
  {
    key: 'BUILD',
    label: 'BUILD',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <path d="M12 3 3 8l9 5 9-5-9-5ZM3 12l9 5 9-5M3 16l9 5 9-5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      </svg>
    ),
    heading: ['Build your', 'Foundation'],
    body: 'Craft a brand voice that resonates. Develop messaging frameworks that convert. Create content strategies that scale.',
    bullets: ['Brand Voice Development', 'Messaging Architecture', 'Content Strategy'],
  },
  {
    key: 'ATTRACT',
    label: 'ATTRACT',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="2" />
        <path d="M3.5 19c.8-3 2.9-4.5 5.5-4.5s4.7 1.5 5.5 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="17" cy="9" r="2.4" stroke="currentColor" strokeWidth="2" />
        <path d="M16 14.6c2.4.2 4 1.6 4.6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    heading: ['Attract your', 'Audience'],
    body: 'Stop shouting into the void. Reach the people already looking for you, with creative they can\u2019t scroll past.',
    bullets: ['Social Media Campaigns', 'Paid & Organic Content', 'Audience Targeting'],
  },
  {
    key: 'CONVERT',
    label: 'CONVERT',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <path d="M4 18 14 8m0 0h-5m5 0v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M4 12l3-3M18 15l2 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    heading: ['Convert the', 'Clicks'],
    body: 'Traffic means nothing without conversion. Landing pages, funnels and copy engineered to turn interest into action.',
    bullets: ['Landing Pages & Funnels', 'Conversion Copywriting', 'A/B Testing'],
  },
  {
    key: 'SCALE',
    label: 'SCALE',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
        <path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    heading: ['Scale what', 'Works'],
    body: 'Double down on winners. Automate the repetitive, systemise the proven, and grow without the growing pains.',
    bullets: ['Marketing Automation', 'Lead Generation Systems', 'Performance Reporting'],
  },
];

function Dashboard() {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-indigo-2 bg-[#161226]" role="img" aria-label="Automation dashboard mock-up showing workflow, metrics and scaling capacity">
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-indigo-2 bg-indigo-2/60 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-coral" />
        <span className="h-3 w-3 rounded-full bg-yellow" />
        <span className="h-3 w-3 rounded-full bg-[#22c55e]" />
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-2">
        <div className="rounded-xl border border-indigo-2 bg-indigo/60 p-4">
          <p className="text-xs font-bold tracking-widest text-purple">AUTOMATION WORKFLOW</p>
          <ul className="mt-3 space-y-2 text-sm text-grey">
            <li className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" /> Trigger
            </li>
            <li className="pl-4 text-white/70">→ Action 1</li>
            <li className="pl-4 text-white/70">→ Action 2</li>
            <li className="pl-4 text-white/70">→ Complete</li>
          </ul>
        </div>
        <div className="rounded-xl border border-indigo-2 bg-indigo/60 p-4">
          <p className="text-xs font-bold tracking-widest text-purple">PERFORMANCE METRICS</p>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-grey">ROI</dt><dd className="font-bold text-[#22c55e]">+340%</dd></div>
            <div className="flex justify-between"><dt className="text-grey">CAC</dt><dd className="font-bold text-[#22c55e]">-45%</dd></div>
            <div className="flex justify-between"><dt className="text-grey">LTV</dt><dd className="font-bold text-[#22c55e]">+120%</dd></div>
          </dl>
        </div>
        <div className="rounded-xl border border-indigo-2 bg-indigo/60 p-4">
          <p className="text-xs font-bold tracking-widest text-purple">GROWTH TRAJECTORY</p>
          <svg viewBox="0 0 200 70" className="mt-3 w-full" aria-hidden="true">
            <path d="M10 60 C 60 52, 120 34, 190 12" stroke="#AD00FF" strokeWidth="3" fill="none" strokeLinecap="round" />
          </svg>
        </div>
        <div className="rounded-xl border border-indigo-2 bg-indigo/60 p-4">
          <p className="text-xs font-bold tracking-widest text-purple">SYSTEM HEALTH</p>
          <dl className="mt-3 space-y-2 text-sm">
            <div className="flex justify-between"><dt className="text-grey">Uptime</dt><dd className="font-bold text-[#22c55e]">99.9%</dd></div>
            <div className="flex justify-between"><dt className="text-grey">Response Time</dt><dd className="font-bold text-[#22c55e]">45ms</dd></div>
            <div className="flex justify-between"><dt className="text-grey">Error Rate</dt><dd className="font-bold text-[#22c55e]">0.01%</dd></div>
          </dl>
        </div>
        <div className="rounded-xl border border-indigo-2 bg-indigo/60 p-4">
          <p className="text-xs font-bold tracking-widest text-purple">OPTIMIZATION QUEUE</p>
          <ul className="mt-3 space-y-2 text-sm text-grey">
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-yellow" /> In Progress</li>
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-[#22c55e]" /> Completed</li>
            <li className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-grey" /> Queued</li>
          </ul>
        </div>
        <div className="rounded-xl border border-indigo-2 bg-indigo/60 p-4">
          <p className="text-xs font-bold tracking-widest text-purple">SCALING CAPACITY</p>
          <div className="mt-4 h-2.5 w-full overflow-hidden rounded-full bg-indigo-2">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-purple to-coral"
              initial={{ width: '10%' }}
              whileInView={{ width: '82%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>
          <p className="mt-3 text-center text-sm font-bold text-[#22c55e]">Ready to Scale</p>
        </div>
      </div>
    </div>
  );
}

export default function BuildScaleTabs({ showHeading = true }: { showHeading?: boolean }) {
  const [active, setActive] = useState<TabKey>('BUILD');
  const tab = TABS.find((t) => t.key === active)!;

  return (
    <section className="py-20 md:py-24" aria-label="Build and Scale services">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {showHeading && (
          <FadeIn className="text-center">
            <h2 className="text-5xl font-bold tracking-tight text-purple md:text-7xl">BUILD &amp; SCALE</h2>
            <p className="mt-4 text-lg md:text-xl">From foundation to domination — we&apos;ve got you covered</p>
          </FadeIn>
        )}

        {/* Tabs */}
        <FadeIn delay={0.1}>
          <div role="tablist" aria-label="Service stages" className="mt-10 flex flex-wrap justify-center gap-3">
            {TABS.map((t) => (
              <button
                key={t.key}
                role="tab"
                id={`tab-${t.key}`}
                aria-selected={active === t.key}
                aria-controls={`panel-${t.key}`}
                onClick={() => setActive(t.key)}
                className={`inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold tracking-widest transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral ${
                  active === t.key
                    ? 'bg-gradient-to-r from-coral to-purple text-white'
                    : 'bg-indigo-2 text-grey hover:text-white'
                }`}
              >
                {t.icon}
                {t.label}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            id={`panel-${active}`}
            role="tabpanel"
            aria-labelledby={`tab-${active}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid items-center gap-12 lg:grid-cols-2"
          >
            <div>
              <h3 className="text-4xl font-bold leading-tight md:text-5xl">
                {tab.heading[0]}{' '}
                <span className="text-purple">{tab.heading[1]}</span>
              </h3>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-white/90">{tab.body}</p>
              <ul className="mt-6 space-y-2.5">
                {tab.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-3 text-base md:text-lg">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-purple">
                      <path d="M4 12h14m0 0-6-6m6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <Dashboard />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
