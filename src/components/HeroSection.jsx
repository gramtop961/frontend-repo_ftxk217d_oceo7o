import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Neon gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,0,128,0.25),rgba(0,0,0,0.6)_60%)] mix-blend-screen" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        <motion.img
          src="/gta6-logo.svg"
          alt="GTA 6 Logo"
          className="mb-6 h-24 w-auto drop-shadow-[0_0_20px_rgba(255,0,128,0.65)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          onError={(e) => {
            // Fallback to text if logo asset doesn't exist
            e.currentTarget.style.display = 'none';
          }}
        />

        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-purple-300 to-cyan-300 drop-shadow-[0_0_20px_rgba(147,51,234,0.45)]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Grand Theft Auto VI
        </motion.h1>

        <motion.p
          className="mt-4 max-w-2xl text-base md:text-lg text-zinc-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          A neon-soaked odyssey through Vice City. Fasten your seatbelt.
        </motion.p>

        <motion.a
          href="#about"
          className="mt-10 inline-flex items-center rounded-full border border-fuchsia-500/40 bg-gradient-to-r from-fuchsia-600/60 to-cyan-600/60 px-8 py-3 font-semibold text-white shadow-[0_0_24px_rgba(236,72,153,0.45)] backdrop-blur hover:shadow-[0_0_40px_rgba(34,211,238,0.65)] transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Coming Soon
        </motion.a>
      </div>

      {/* Bottom fade for readability */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default HeroSection;
