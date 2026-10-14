import { motion } from 'framer-motion';
import { Component as ImageAutoSlider } from '@/components/ui/image-auto-slider';

export default function MessageSection() {
  return (
    <section className="relative overflow-hidden bg-indigo py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
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
    </section>
  );
}
