import { Component as ImageAutoSlider } from '@/components/ui/image-auto-slider';

export default function ThreeSecondHook() {
  return (
    <section className="relative overflow-hidden bg-indigo">
      {/* Three-second hook */}
      <div className="mx-auto max-w-4xl px-5 py-20 text-center md:py-28">
        <h2 className="text-5xl font-bold leading-tight md:text-7xl lg:text-8xl">
          Do they get it in
          <br />
          <span className="text-coral">3 seconds?</span>
        </h2>
        <h3 className="mt-6 text-lg md:text-xl">
          If not, <span className="font-bold italic text-purple">your copy&apos;s the problem</span> — not your product.
        </h3>

        {/* Image card marquee */}
        <section className="pb-24 w-[95%] mx-auto" aria-label="Brand showcase">
          <ImageAutoSlider />
        </section>
      </div>
    </section>
  );
}
