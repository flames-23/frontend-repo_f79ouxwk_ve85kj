import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/t7ourXf4CdN9XTF3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/40 via-black/30 to-black"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-3xl"
        >
          <p className="text-sm tracking-widest text-fuchsia-300/90 uppercase mb-4">
            Taste Beyond Earth
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight">
            Mars Bites
          </h1>
          <p className="mt-6 text-lg text-zinc-200 max-w-2xl">
            The first restaurant on the red planet. Zero‑gravity smoothies, Martian flame‑grilled burgers, and a view of infinity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#menu" className="pointer-events-auto inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 font-semibold shadow-lg shadow-fuchsia-500/20 hover:scale-[1.02] active:scale-[0.99] transition">
              Explore Menu
            </a>
            <a href="#experience" className="pointer-events-auto inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 text-white px-5 py-3 font-semibold hover:bg-white/10 transition">
              Reserve a View
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
