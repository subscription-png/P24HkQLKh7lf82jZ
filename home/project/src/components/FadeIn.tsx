import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export default function FadeIn({
  children,
  delay = 0,
  y = 50,
  className = '',
  as = 'div',
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: 'div' | 'section';
}) {
  const reduced = useReducedMotion();
  const Comp = as === 'section' ? motion.section : motion.div;
  return (
    <Comp
      className={className}
      initial={reduced ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Comp>
  );
}
