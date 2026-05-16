import React from 'react';
import { motion } from 'motion/react';

const testimonials = [
  {
    quote: "The level of discretion and absolute precision they exhibited during the acquisition of my 918 Spyder was unmatched.",
    author: "Jonathan R.",
    role: "Private Collector"
  },
  {
    quote: "Their global network is staggering. They sourced a pristine F40 for me in less than three weeks.",
    author: "Marcus T.",
    role: "Enthusiast"
  },
  {
    quote: "White-glove service from the initial inquiry to the enclosed delivery outside my estate in Geneva.",
    author: "Elena V.",
    role: "CEO"
  },
  {
    quote: "An entirely new standard for automotive concierge. They don't just sell cars, they curate collections.",
    author: "David H.",
    role: "Investor"
  }
];

export function Testimonials() {
  // We duplicate array to create seamless infinite loop effect
  const repeatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative z-10 py-24 bg-black overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12">
         <h2 className="text-[10px] text-gold-500 uppercase tracking-[0.3em] font-semibold mb-2">Verified Acclaim</h2>
         <h3 className="text-2xl font-sans font-light text-white">Words from our select clientele.</h3>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Left Gradient Mask */}
        <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />

        <motion.div 
          className="flex gap-8 px-8"
          animate={{ x: [0, -1030] }} // Approximated translation for loop
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {repeatedTestimonials.map((t, i) => (
            <div 
              key={i} 
              className="w-[350px] md:w-[450px] flex-shrink-0 bg-neutral-900 border border-white/5 rounded-2xl p-8"
            >
              <div className="text-gold-500 text-3xl font-serif mb-4 leading-none">"</div>
              <p className="text-white/70 font-light leading-relaxed mb-8 text-sm">{t.quote}</p>
              <div>
                <p className="text-white font-medium text-xs tracking-wide uppercase">{t.author}</p>
                <p className="text-white/40 text-[10px] tracking-widest uppercase mt-1">{t.role}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Right Gradient Mask */}
        <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
