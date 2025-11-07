import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const AboutSection = () => {
  return (
    <section id="about" className="relative w-full bg-black py-24 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-fuchsia-600/10 to-cyan-600/10 pointer-events-none" />
      <div className="relative mx-auto max-w-5xl px-6">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <motion.h2 variants={item} className="text-3xl md:text-5xl font-bold">
            Vice City Reimagined
          </motion.h2>
          <motion.p variants={item} className="text-zinc-300 md:text-lg">
            Sun-soaked boulevards. Neon-lit nights. In GTA VI, every corner of Vice City pulses with life — from high-rise heists to underground street races. This is a story of ambition, betrayal, and the price of power in a city that never sleeps.
          </motion.p>
          <motion.p variants={item} className="text-zinc-300 md:text-lg">
            Designed for next-gen immersion, experience cinematic set-pieces, adaptive soundscapes, and a world that reacts to your every move.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
