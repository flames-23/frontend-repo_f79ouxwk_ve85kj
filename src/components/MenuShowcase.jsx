import { motion } from 'framer-motion';
import { Flame, CupSoda, Beef } from 'lucide-react';

const items = [
  {
    icon: Flame,
    title: 'Martian Flame‑Grilled Burger',
    desc: 'Smoked over basalt stones with comet‑salt and nebula sauce.',
  },
  {
    icon: CupSoda,
    title: 'Zero‑Gravity Smoothie',
    desc: 'Anti‑spill, high‑protein blend engineered for orbiting taste buds.',
  },
  {
    icon: Beef,
    title: 'Stellar Protein Bites',
    desc: 'Charred bites with ion‑glaze and asteroid sesame crunch.',
  },
];

export default function MenuShowcase() {
  return (
    <section id="menu" className="relative bg-zinc-950 text-white py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(236,72,153,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold">Signature Creations</h2>
          <p className="mt-3 text-zinc-300 max-w-2xl">Innovative fusion dishes for astronauts and extraterrestrial visitors alike.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500 to-cyan-400 text-black">
                  <it.icon className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-xl font-semibold">{it.title}</h3>
                  <p className="mt-2 text-zinc-300">{it.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
