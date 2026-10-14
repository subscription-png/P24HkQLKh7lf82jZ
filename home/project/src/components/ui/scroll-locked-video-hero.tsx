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
  const titleOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.8, 0.6, 0]);
  const subtitleY = useTransform(scrollYProgress, [0, 0.5, 1], [0, -30, -60]);
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [1, 0.9, 0.7, 0]);

  // Scrub video playback based on scroll
  useEffect(() => {
    if (!videoRef.current || !isVideoLoaded || reduced || videoError) return;

    const video = videoRef.current;
    const duration = video.duration;

    if (isNaN(duration) || duration === 0) return;

    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (video && !video.paused) {
        video.pause();
      }
      const targetTime = latest * duration;
      if (video && Math.abs(video.currentTime - targetTime) > 0.1) {
        video.currentTime = targetTime;
      }
    });

    return () => unsubscribe();
  }, [scrollYProgress, isVideoLoaded, reduced, videoError]);

  // Handle video loaded
  const handleVideoLoaded = () => {
    setIsVideoLoaded(true);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // Handle video error
  const handleVideoError = () => {
    console.warn('Video failed to load, using poster image');
    setVideoError(true);
  };

  return (
    <section
      ref={containerRef}
      className={`relative h-[300vh] ${className}`}
      aria-label="Scroll-locked video hero section"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Video Background */}
        <motion.div
          style={reduced ? undefined : { scale: videoScale, opacity: videoOpacity }}
          className="absolute inset-0"
        >
          {!videoError ? (
            <video
              ref={videoRef}
              className="h-full w-full object-cover"
              muted
              playsInline
              preload="auto"
              poster={posterSrc}
              onLoadedMetadata={handleVideoLoaded}
              onError={handleVideoError}
              aria-label="Background video"
            >
              <source src={videoSrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={posterSrc}
              alt="Melbourne cityscape"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          
          {/* Fallback image if video doesn't load */}
          {!isVideoLoaded && !videoError && (
            <img
              src={posterSrc}
              alt="Melbourne cityscape"
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          style={reduced ? undefined : { opacity: overlayOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-indigo/60 via-indigo/40 to-indigo/80"
        />

        {/* Content Container */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-5 text-center">
          {/* Main Title */}
          <motion.h2
            style={reduced ? undefined : { y: titleY, opacity: titleOpacity }}
            className="text-4xl font-bold tracking-tight text-white md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            style={reduced ? undefined : { y: subtitleY, opacity: subtitleOpacity }}
            className="mt-4 text-[2.5rem] font-bold leading-tight text-yellow md:text-[5rem] lg:text-[6rem]"
          >
            {subtitle}
          </motion.p>

          {/* Decorative Elements */}
          <motion.div
            initial={reduced ? undefined : { scale: 0, rotate: -180 }}
            animate={reduced ? undefined : { scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            className="mt-8 flex gap-4"
          >
            <div className="h-3 w-3 rounded-full bg-coral" />
            <div className="h-3 w-3 rounded-full bg-yellow" />
            <div className="h-3 w-3 rounded-full bg-purple" />
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
          className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium text-white/80">Scroll to explore</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="animate-bounce text-white/80"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </motion.div>

        {/* Ambient Light Effects */}
        <motion.div
          animate={reduced ? undefined : {
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute left-[20%] top-[20%] h-64 w-64 rounded-full bg-purple/20 blur-[100px]"
        />
        <motion.div
          animate={reduced ? undefined : {
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute right-[20%] bottom-[20%] h-64 w-64 rounded-full bg-coral/20 blur-[100px]"
        />
      </div>
    </section>
  );
}
