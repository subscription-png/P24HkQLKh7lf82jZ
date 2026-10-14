import { motion } from 'framer-motion';
import { Component as ImageAutoSlider } from '@/components/ui/image-auto-slider';

export default function MessageSection() {
  return (
    <section className="relative overflow-hidden bg-indigo py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 text-center md:mb-24"
        >
          <h2 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            <span className="text-white">We don't do </span>
            <span className="text-purple">boring.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
            Every brand has a story. We make sure yours is impossible to ignore.
          </p>
        </motion.div>

        {/* Three-second hook */}
        <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
          <h2 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
            Do they get it in
            <br />
            <span className="text-coral">3 seconds?</span>
          </h2>
          <h3 className="mt-6 text-2xl md:text-3xl">
            If not, <span className="font-bold italic text-purple">your copy&apos;s the problem</span> — not your
            product.
          </h3>
        </div>
      </div>

      {/* Image auto slider gallery */}
      <ImageAutoSlider />
    </section>
  );
}
