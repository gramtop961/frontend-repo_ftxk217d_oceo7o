import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Twitter, Youtube, Instagram } from 'lucide-react';

const targetDate = new Date();
// Set an arbitrary future date (e.g., next year Dec 10)
const year = targetDate.getFullYear() + 1;
const countdownTo = new Date(`${year}-12-10T00:00:00Z`).getTime();

function useCountdown() {
  const [time, setTime] = useState(countdownTo - Date.now());

  useEffect(() => {
    const id = setInterval(() => setTime(countdownTo - Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const clamp = (n) => Math.max(0, n);
  const total = clamp(time);

  const days = Math.floor(total / (1000 * 60 * 60 * 24));
  const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((total % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

const TimeBox = ({ label, value }) => (
  <div className="relative flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-900/50 px-6 py-4 shadow-[0_0_24px_rgba(34,211,238,0.25)]">
    <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-500/20 blur-xl" />
    <div className="text-3xl font-extrabold tabular-nums drop-shadow">{String(value).padStart(2, '0')}</div>
    <div className="text-xs uppercase tracking-widest text-zinc-400">{label}</div>
  </div>
);

const CountdownFooter = () => {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <footer className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 text-center">
          <h3 className="text-2xl md:text-4xl font-bold mb-2">Release Countdown</h3>
          <p className="text-zinc-400">Ticking closer to Vice City. Stay tuned.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          <TimeBox label="Days" value={days} />
          <TimeBox label="Hours" value={hours} />
          <TimeBox label="Minutes" value={minutes} />
          <TimeBox label="Seconds" value={seconds} />
        </motion.div>

        <div className="mt-14 flex flex-col items-center gap-6">
          <div className="flex items-center gap-6 text-zinc-300">
            <a href="https://twitter.com/rockstargames" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Twitter size={22} /></a>
            <a href="https://instagram.com/rockstargames" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Instagram size={22} /></a>
            <a href="https://youtube.com/rockstargames" target="_blank" rel="noreferrer" className="hover:text-white transition-colors"><Youtube size={22} /></a>
          </div>
          <div className="text-xs text-zinc-500">© {new Date().getFullYear()} Rockstar Games. Grand Theft Auto and the Rockstar Games logos are trademarks and/or registered trademarks of Take-Two Interactive Software, Inc.</div>
        </div>
      </div>
    </footer>
  );
};

export default CountdownFooter;
