import { motion } from 'framer-motion';

export default function Demo() {
  return (
    <section className="relative overflow-hidden py-24" aria-label="Demo section">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">
            See D2 Media in Action
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-grey">
            Watch how we transform brands and drive results for Melbourne startups.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12"
        >
          <div className="relative mx-auto aspect-video max-w-4xl overflow-hidden rounded-2xl border border-indigo-2 bg-indigo-2/50">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop"
              alt="Team collaboration at D2 Media"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-indigo/40">
              <button
                type="button"
                aria-label="Play demo video"
                className="group flex h-20 w-20 items-center justify-center rounded-full bg-coral text-white transition-all duration-200 hover:scale-110 hover:bg-coral/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 focus-visible:ring-offset-indigo"
              >
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                  className="ml-1"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {[
            {
              title: 'Brand Strategy',
              description: 'Craft compelling narratives that resonate with your audience.',
            },
            {
              title: 'Digital Marketing',
              description: 'Data-driven campaigns that deliver measurable results.',
            },
            {
              title: 'Creative Design',
              description: 'Stand out with bold, memorable visual identities.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="rounded-xl border border-indigo-2 bg-indigo-2/30 p-6 backdrop-blur-sm transition-colors hover:border-purple/50"
            >
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <p className="mt-2 text-grey">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
