import React from 'react';
import { motion } from 'framer-motion';

const characters = [
  {
    name: 'Lucia',
    role: 'Mastermind',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1600&auto=format&fit=crop',
    color: 'from-fuchsia-500/30 to-purple-500/30',
  },
  {
    name: 'Jason',
    role: 'Wheelman',
    img: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?q=80&w=1600&auto=format&fit=crop',
    color: 'from-cyan-500/30 to-blue-500/30',
  },
  {
    name: 'Ava',
    role: 'Fixer',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1600&auto=format&fit=crop',
    color: 'from-emerald-500/30 to-teal-500/30',
  },
];

const CharacterCard = ({ c, i }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, rotateX: -10 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay: i * 0.1 }}
    className="group relative overflow-hidden rounded-2xl bg-zinc-900/60 backdrop-blur border border-white/5 shadow-[0_0_30px_rgba(236,72,153,0.15)]"
  >
    <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none "
      style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), var(--tw-gradient-to))` }}
    />
    <img src={c.img} alt={c.name} className="h-64 w-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-6">
      <h3 className="text-xl font-bold text-white drop-shadow">{c.name}</h3>
      <p className="text-sm text-zinc-300">{c.role}</p>
    </div>
    <motion.div
      className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r ${c.color}`}
      initial={{ opacity: 0 }}
      whileHover={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      style={{ filter: 'blur(24px)' }}
    />
  </motion.div>
);

const CharacterShowcase = () => {
  return (
    <section id="characters" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 flex items-end justify-between">
          <h2 className="text-3xl md:text-5xl font-bold">The Crew</h2>
          <p className="text-zinc-400">Hover to feel the neon heat</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {characters.map((c, i) => (
            <CharacterCard key={c.name} c={c} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharacterShowcase;
