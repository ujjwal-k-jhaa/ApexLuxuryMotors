import React from 'react';
import { motion } from 'motion/react';
import { Shield, Fingerprint, Gauge, Globe } from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Absolute Discretion',
    desc: 'Your privacy is our highest priority. All transactions and negotiations are handled with complete opacity.'
  },
  {
    icon: Gauge,
    title: 'Unrivaled Precision',
    desc: 'Every vehicle undergoes a rigorously documented 300-point inspection by factory-trained artisans.'
  },
  {
    icon: Globe,
    title: 'Global Procurement',
    desc: 'If the exact specification you desire is not in our inventory, we will source it from any corner of the globe.'
  },
  {
    icon: Shield,
    title: 'Lifetime Partnership',
    desc: 'We offer enclosed logistics, bespoke maintenance, and track-day support throughout your ownership journey.'
  }
];

export function WhatMakesUsDifferent() {
  return (
    <section className="relative z-10 py-32 bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20">
          <motion.div
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <h2 className="text-[10px] text-gold-500 uppercase tracking-[0.3em] font-semibold mb-4">The Apex Standard</h2>
             <h3 className="text-4xl md:text-5xl font-sans font-light text-white leading-tight">
               What Sets Us <br/>
               <span className="font-semibold">Apart.</span>
             </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.15, ease: "easeOut" }}
                className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-gold-500/30 transition-all cursor-default"
              >
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-white/50 group-hover:text-gold-500 group-hover:bg-gold-500/10 transition-colors">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-sans text-white mb-3 tracking-wide">{item.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
