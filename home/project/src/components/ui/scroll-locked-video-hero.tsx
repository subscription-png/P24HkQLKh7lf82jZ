import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

interface ScrollLockedVideoHeroProps {
  title: string;
  subtitle: string;
  videoSrc?: string;
  posterSrc?: string;
  className?: string;
}

export function ScrollLockedVideoHero({
  title,
  subtitle,
  videoSrc = '/videos/melbourne-tram.mp4',
  posterSrc = 'https://images.unsplash.com/photo-1514395462725-fb4566210144?w=1920&h=1080&fit=crop',
  className = '',
}: ScrollLockedVideoHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Scroll-based transformations
  const videoScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.2, 1.4]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0.4]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.5, 0.7]);
  const titleY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, -100]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 