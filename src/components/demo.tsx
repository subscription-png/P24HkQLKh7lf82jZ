import { DynamicFrameLayout } from '@/components/ui/dynamic-frame-layout';

export default function Demo() {
  return (
    <section className="bg-indigo py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">
            Our <span className="text-purple">Services</span>
          </h2>
          <p className="mt-4 text-lg text-grey md:text-xl">
            Comprehensive solutions to elevate your brand
          </p>
        </div>
        <DynamicFrameLayout />
      </div>
    </section>
  );
}
