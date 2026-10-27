import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Component as ImageAutoSlider } from '@/components/ui/image-auto-slider';

export default function MessageSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative overflow-hidden bg-indigo pt-12 pb-8 md:pt-20 md:pb-10">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h1 className="font-bold text-white mb-6" style={{ fontSize: 'clamp(4rem, 10vw, 9rem)', lineHeight: '0.9' }}>
            Do they get it in
            <br />
            <span className="text-coral">3 seconds?</span>
          </h1>
          <h3 className="text-2xl md:text-3xl font-bold text-white">
            If not, <span className="font-bold italic text-purple">your copy&apos;s the problem</span> — not your product.
          </h3>
        </motion.div>

        {/* Image card marquee */}
        <section className="pb-8" aria-label="Brand showcase">
          <ImageAutoSlider />
        </section>
      </div>
    </section>
  );
}
