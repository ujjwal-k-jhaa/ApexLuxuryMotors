import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      
      {/* Background Text Behind Car */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center z-0 pointer-events-none"
      >
        <h1 className="text-[18vw] font-sans font-bold text-white/[0.04] tracking-tighter leading-none select-none whitespace-nowrap">
          APEX LUXURY
        </h1>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 flex flex-col items-center relative">
        
        {/* Trusted Customers Card (Above Heading) */}
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full pr-6 pl-2 py-2 flex items-center gap-4 mb-8 shadow-2xl"
          >
            <div className="flex -space-x-2">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64" alt="Customer" className="w-8 h-8 rounded-full border border-black object-cover" />
              <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64" alt="Customer" className="w-8 h-8 rounded-full border border-black object-cover" />
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64" alt="Customer" className="w-8 h-8 rounded-full border border-black object-cover" />
              <div className="w-8 h-8 rounded-full border border-black bg-neutral-800 flex items-center justify-center text-[8px] font-medium text-white">
                10k+
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={14} className="text-gold-500" />
              <span className="text-xs font-medium text-white/80 tracking-wide">Trusted by Elites Worldwide</span>
            </div>
        </motion.div>

        {/* Center Content */}
        <div className="flex flex-col items-center text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans text-white leading-[1.1] mb-6 tracking-tight">
              Engineering <br />
              <span className="font-light text-white/70">Beyond Limits.</span>
            </h1>
            
            <p className="text-white/50 max-w-lg text-sm md:text-base leading-relaxed font-light mb-10">
              Access the most exclusive portfolio of hypercars and luxury automobiles, reserved for the discerning few.
            </p>
            
            <button className="group flex items-center space-x-4 bg-white text-black pl-6 pr-2 py-2 rounded-full font-medium transition-all hover:bg-gray-200">
              <span className="text-xs uppercase tracking-[0.2em] text-black font-semibold">Explore Inventory</span>
              <span className="bg-black text-white p-3 rounded-full group-hover:scale-95 transition-transform">
                <ArrowRight size={16} />
              </span>
            </button>
          </motion.div>
        </div>

        {/* High Quality Transparent Car */}
        <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-6xl mt-12 md:mt-2 relative flex justify-center"
          >
            <img 
              src="https://i.ibb.co/ycBg5Kc5/lamborghini-aventador-lp700-4-wide-wrap1-Photoroom.png" 
              alt="High-End Luxury Sports Car"
              className="w-[120%] md:w-[110%] lg:w-full max-w-[1400px] h-auto object-contain scale-110 lg:scale-125 translate-y-8 md:translate-y-12"
              style={{
                 filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.8))'
              }}
            />
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse", repeatDelay: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center z-20 text-white/40"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] mb-2 font-medium">Scroll</span>
        <ChevronDown size={20} strokeWidth={1} />
      </motion.div>
    </section>
  );
}
