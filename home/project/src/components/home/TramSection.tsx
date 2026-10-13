
import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

/* TRAMDOOR visual — full-width rainy tram doors. Left/right halves part on scroll. */
const TRAM_IMAGE =
  'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=1800&auto=format&fit=crop';

export default function TramSection() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });

  const leftX = useTransform(scrollYProgress, [0.15, 0.