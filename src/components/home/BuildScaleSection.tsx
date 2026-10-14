import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FadeIn from '@/components/FadeIn';

const TABS = [
  {
    key: 'build',
    label: 'BUILD',
    heading: ['Build your', 'Foundation'],
    body: 'Craft a brand voice that resonates. Develop messaging frameworks that convert. Create content strategies that scale.',
    bullets: ['Brand Voice Development', 'Messaging Architecture', 'Content Strategy'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
        <path d="M12 2 2 8l10 6 10-6-10-6ZM2 14l10 6 10-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'attract',
    label: 'ATTRACT',
    heading: ['Attract the', 'Right Audience'],
    body: 'Reach the people already looking for you. Position your brand where attention lives and pull ideal customers in.',
    bullets: ['Audience Research', 'Channel Strategy', 'Magnetic Content'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
        <circle cx="9" cy="8" r="3.5" />
        <path d="M2.5 20c0-3.6 2.9-6.5 6.5-6.5s6.5 2.9 6.5 6.5M17 4.5a4 4 0 0 1 0 7M21.5 20c0-2.8-1.7-5.2-4.2-6.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    key: 'convert',
    label: 'CONVERT',
    heading: ['Convert Clicks', 'into Customers'],
    body: 'Turn attention into action. Landing pages, funnels and copy engineered to move browsers to buyers.',
    bullets: ['Conversion Copywriting', 'Landing Page Design', 'A/B Testing'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
        <path d="M3 20 21 8M21 8h-6m6 0v6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    key: 'scale',
    label: 'SCALE',
    heading: ['Scale Without', 'the Growing Pains'],
    body: 'Systems and automation that grow with you. Multiply output without multiplying headcount or chaos.',
    bullets: ['Marketing Automation', 'AI Workflows', 'Performance Optimisation'],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.2 2.2M16.2 16.2l2.2 2.2M5.6 18.4l2.2-2.2M16.2 7.8l2.2-2.2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
] as const;

type TabKey = (typeof TABS)[number]['key'];

function Dashboard() {
  return (
    <div
      className="w-full overflow-hidden rounded-2xl border border-indigo-2 bg-[#161226] shadow-2xl shadow-purple/20"
      role="img"
      aria-label="Dashboard mock-up showing automation workflow, performance metrics, growth trajectory, system health, optimisation queue and scaling capacity"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 border-b border-indigo-2 px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-coral" />
        <span className="h-3 w-3 rounded-full bg-yellow" />
        <span className="h-3 w-3 rounded-full bg-[#4ade80]" />
      </div>
      <div className="grid grid-cols-2 gap-3 p-4 text-left">
        <div className="rounded-lg border border-indigo-2 bg-indigo/60 p-3">
          <p className="text-xs font-bold tracking-wider text-purple">AUTOMATION WORKFLOW</p>
          <ul className="mt-2 space-y-1 text-xs text-grey">
            <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#4ade80]" /> Trigger</li>
            <li>→ Action 1</li>
            <li>→ Action 2</li>
            <li>→ Complete</li>
          </ul>
        </div>
        <div className="rounded-lg border border-indigo-2 bg-indigo/60 p-3">
          <p className="text-xs font-bold tracking-wider text-purple">PERFORMANCE METRICS</p>
          <ul className="mt-2 space-y-1.5 text-xs">
            <li className="flex justify-between text-grey"><span>ROI</span><span className="font-bold text-[#4ade80]">+340%</span></li>
            <li className="flex justify-between text-grey"><span>CAC</span><span className="font-bold text-[#4ade80]">-45%</span></li>
            <li className="flex justify-between text-grey"><span>LTV</span><span className="font-bold text-[#4ade80]">+120%</span></li>
          </ul>
        </div>
        <div className="rounded-lg border border-indigo-2 bg-indigo/60 p-3">
          <p className="text-xs font-bold tracking-wider text-purple">GROWTH TRAJECTORY</p>
          <svg viewBox="0 0 120 50" className="mt-2 w-full" aria-hidden="true">
            <motion.path
              d="M5 45 C 40 42, 70 28, 115 8"
              stroke="#AD00FF"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeOut' }}
            />
          </svg>
        </div>
        <div className="rounded-lg border border-indigo-2 bg-indigo/60 p-3">
          <p className="text-xs font-bold tracking-wider text-purple">SYSTEM HEALTH</p>
          <ul className="mt-2 space-y-1.5 text-xs">
            <li className="flex justify-between text-grey"><span>Uptime</span><span className="font-bold text-[#4ade80]">99.9%</span></li>
            <li className="flex justify-between text-grey"><span>Response Time</span><span className="font-bold text-[#4ade80]">45ms</span></li>
            <li className="flex justify-between text-grey"><span>Error Rate</span><span className="font-bold text-[#4ade80]">0.01%</span></li>
          </ul>
        </div>
        <div className="rounded-lg border border-indigo-2 bg-indigo/60 p-3">
          <p className="text-xs font-bold tracking-wider text-purple">OPTIMISATION QUEUE</p>
          <ul className="mt-2 space-y-1.5 text-xs text-grey">
            <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-yellow" /> In Progress</li>
            <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[#4ade80]" /> Completed</li>
            <li className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-grey" /> Queued</li>
          </ul>
        </div>
        <div className="rounded-lg border border-indigo-2 bg-indigo/60 p-3">
          <p className="text-xs font-bold tracking-wider text-purple">SCALING CAPACITY</p>
          <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-indigo-2">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-coral to-purple"
              initial={{ width: '0%' }}
              whileInView={{ width: '86%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            />
          </div>
          <p className="mt-2 text-center text-xs font-bold text-[#4ade80]">Ready to Scale</p>
        </div>
      </div>
    </div>
  );
}

export default function BuildScaleSection() {
  const [active, setActive] = useState<TabKey>('build');
  const tab = TABS.find((t) => t.key === active)!;

  return (
    <section className="py-20 md:py-28" aria-label="Build and Scale">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <FadeIn className="text-center">
          <h2 className="text-5xl font-bold tracking-tight text-purple md:text-7xl">BUILD &amp; SCALE</h2>
          <p className="mt-4 text-lg md:text-xl">From foundation to domination — we&apos;ve got you covered</p>

          {/* Tabs */}
          <div role="tablist" aria-label="Build and Scale services" className="mt-9 flex flex-wrap justify-center gap-3">
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
