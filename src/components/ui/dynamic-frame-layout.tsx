import React, { useState, useRef, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

interface Frame {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  stats: {
    label: string;
    value: string;
  }[];
  color: string;
}

interface DynamicFrameLayoutProps {
  frames?: Frame[];
  className?: string;
}

const defaultFrames: Frame[] = [
  {
    id: 1,
    title: 'Brand Identity',
    subtitle: 'Visual storytelling that resonates',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop&q=80',
    stats: [
      { label: 'Projects', value: '150+' },
      { label: 'Clients', value: '80+' },
    ],
    color: '#AD00FF',
  },
  {
    id: 2,
    title: 'Digital Marketing',
    subtitle: 'Data-driven campaigns',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    stats: [
      { label: 'ROI', value: '320%' },
      { label: 'Reach', value: '2M+' },
    ],
    color: '#FF0063',
  },
  {
    id: 3,
    title: 'Content Strategy',
    subtitle: 'Messages that convert',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&auto=format&fit=crop&q=80',
    stats: [
      { label: 'Engagement', value: '+185%' },
      { label: 'Content', value: '500+' },
    ],
    color: '#FFF500',
  },
  {
    id: 4,
    title: 'Web Development',
    subtitle: 'Digital experiences built to scale',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop&q=80',
    stats: [
      { label: 'Websites', value: '120+' },
      { label: 'Uptime', value: '99.9%' },
    ],
    color: '#AD00FF',
  },
  {
    id: 5,
    title: 'Social Media',
    subtitle: 'Community-driven growth',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=80',
    stats: [
      { label: 'Followers', value: '500K+' },
      { label: 'Growth', value: '+240%' },
    ],
    color: '#FF0063',
  },
  {
    id: 6,
    title: 'Analytics',
    subtitle: 'Insights that drive decisions',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    stats: [
      { label: 'Reports', value: '1000+' },
      { label: 'Accuracy', value: '98%' },
    ],
    color: '#FFF500',
  },
];

export function DynamicFrameLayout({ frames = defaultFrames, className = '' }: DynamicFrameLayoutProps) {
  const [activeFrame, setActiveFrame] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      mouseX.set((e.clientX - centerX) / 30);
      mouseY.set((e.clientY - centerY) / 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {frames.map((frame, index) => {
          const isActive = activeFrame === frame.id;
          const rotateX = useTransform(y, [-20, 20], [5, -5]);
          const rotateY = useTransform(x, [-20, 20], [-5, 5]);

          return (
            <motion.div
              key={frame.id}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-indigo-2"
              style={{
                rotateX: isActive ? rotateX : 0,
                rotateY: isActive ? rotateY : 0,
                transformStyle: 'preserve-3d',
              }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setActiveFrame(frame.id)}
              onMouseLeave={() => setActiveFrame(null)}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden sm:h-72 lg:h-80">
                <motion.img
                  src={frame.image}
                  alt={frame.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                />
                <div
                  className="absolute inset-0 opacity-60 transition-opacity duration-300 group-hover:opacity-40"
                  style={{
                    background: `linear-gradient(180deg, transparent 0%, ${frame.color}40 100%)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="relative p-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isActive ? 1 : 0.9, y: isActive ? 0 : 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-bold text-white">{frame.title}</h3>
                  <p className="mt-2 text-sm text-grey">{frame.subtitle}</p>
                </motion.div>

                {/* Stats */}
                <motion.div
                  className="mt-4 grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    height: isActive ? 'auto' : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {frame.stats.map((stat) => (
                    <div key={stat.label} className="rounded-lg bg-indigo p-3">
                      <div className="text-xs text-grey">{stat.label}</div>
                      <div className="mt-1 text-xl font-bold" style={{ color: frame.color }}>
                        {stat.value}
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Accent border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 w-full"
                  style={{ backgroundColor: frame.color }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: isActive ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Glow effect */}
              <motion.div
                className="pointer-events-none absolute inset-0 rounded-2xl"
                style={{
                  boxShadow: `0 0 40px ${frame.color}40`,
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
