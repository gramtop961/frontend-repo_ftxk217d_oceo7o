import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const MapPreview = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section ref={ref} className="relative w-full bg-gradient-to-b from-black via-zinc-950 to-black py-24 text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40" style={{
        background: 'radial-gradient(circle at 20% 10%, rgba(236,72,153,0.2), transparent 40%), radial-gradient(circle at 80% 30%, rgba(34,211,238,0.2), transparent 40%)'
      }} />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-5xl font-bold mb-2">Vice City Skyline</h2>
        <p className="text-zinc-400 mb-12">A subtle parallax glimpse of the neon coast.</p>

        <div className="relative h-80 md:h-[28rem] rounded-3xl overflow-hidden border border-white/5 bg-zinc-900/40 backdrop-blur">
          <motion.img
            style={{ y: y1 }}
            src="https://images.unsplash.com/photo-1505764706515-aa95265c5abc?q=80&w=2400&auto=format&fit=crop"
            alt="Skyline layer 1"
            className="absolute inset-0 h-full w-full object-cover opacity-80"
          />
          <motion.img
            style={{ y: y2 }}
            src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?q=80&w=2400&auto=format&fit=crop"
            alt="Skyline layer 2"
            className="absolute inset-0 h-full w-full object-cover mix-blend-screen opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default MapPreview;
