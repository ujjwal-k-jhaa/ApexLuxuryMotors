import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { value: '$1.2B+', label: 'Volume Traded' },
  { value: '54', label: 'Countries Served' },
  { value: '300+', label: 'Point Inspection' },
  { value: '24/7', label: 'Concierge Access' },
];

export function Statistics() {
  return (
    <section className="relative z-10 py-20 bg-neutral-950 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-6 divide-x divide-white/5">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4 tracking-tighter">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-[0.3em] font-semibold text-gold-500 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
