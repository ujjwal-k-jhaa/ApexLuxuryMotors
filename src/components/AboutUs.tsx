import React from 'react';
import { motion } from 'motion/react';

export function AboutUs() {
  return (
    <section id="heritage" className="relative z-10 py-32 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Images */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-[500px] rounded-3xl overflow-hidden relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80" 
              alt="Classic Cars Heritage" 
              className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-black/20"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="absolute -bottom-12 -right-6 lg:-right-12 bg-[#111] p-8 rounded-2xl border border-white/10 max-w-sm hidden md:block"
          >
            <div className="text-gold-500 font-serif text-6xl mb-2">1998</div>
            <p className="text-white/50 text-sm font-light">Established with a vision to redefine the acquisition of rare automobiles.</p>
          </motion.div>
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-[10px] text-gold-500 uppercase tracking-[0.3em] font-semibold mb-4">Our Heritage</h2>
            <h3 className="text-4xl md:text-5xl font-sans font-light text-white mb-8">
              A Legacy of <br/>
              <span className="font-semibold">Excellence.</span>
            </h3>
            
            <p className="text-white/50 text-base leading-relaxed font-light mb-6">
              Apex Luxury Motors was founded on a singular principle: absolute perfection. For over two decades, we have quietly served as the trusted advisors to the world's most prominent automotive collectors, curating portfolios of uncompromising rarity.
            </p>
            
            <p className="text-white/50 text-base leading-relaxed font-light mb-10">
              We do not run a conventional dealership. We operate a highly discreet, white-glove automotive concierge service. Our relationships supersede transactions, ensuring our clientele have first access to off-market hypercars, historically significant classics, and complete privacy.
            </p>

            <button className="border-b border-gold-500 pb-1 text-xs uppercase tracking-widest text-gold-500 hover:text-white hover:border-white transition-colors">
              Read Our Full Story
            </button>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
