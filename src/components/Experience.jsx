import { motion } from 'framer-motion';
import { Stars } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="relative bg-black text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.12),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold">A View of Infinity</h2>
            <p className="mt-4 text-zinc-300">Panoramic vistas of the Martian landscape and the endless expanse of space. Designed with futuristic materials, advanced food tech, and stellar hospitality.</p>
            <ul className="mt-6 space-y-3 text-zinc-300">
              <li className="flex items-center gap-3"><Stars className="h-5 w-5 text-fuchsia-400" /> Zero‑lag reservations</li>
              <li className="flex items-center gap-3"><Stars className="h-5 w-5 text-fuchsia-400" /> Orbit‑calibrated seating</li>
              <li className="flex items-center gap-3"><Stars className="h-5 w-5 text-fuchsia-400" /> Atmosphere‑controlled dining pods</li>
            </ul>
            <div className="mt-8">
              <a href="#hero" className="inline-flex items-center justify-center rounded-full bg-white text-black px-5 py-3 font-semibold shadow-lg shadow-fuchsia-500/20 hover:scale-[1.02] active:scale-[0.99] transition">Book a Window Seat</a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(236,72,153,0.25),transparent_40%),radial-gradient(circle_at_80%_80%,rgba(34,211,238,0.25),transparent_40%)]" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
