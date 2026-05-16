import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ArrowDownLeft } from 'lucide-react';

export function CarAnatomy() {
  return (
    <section className="relative z-10 py-32 bg-[#050505] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="text-[10px] text-gold-500 uppercase tracking-[0.3em] font-semibold block mb-4">Engineering Art</span>
          <h2 className="text-3xl md:text-5xl font-sans font-light text-white">Anatomy of <span className="font-semibold">Performance</span></h2>
        </motion.div>

        {/* Anatomy Display */}
        <div className="relative w-full h-[500px] md:h-[700px] max-w-6xl mx-auto flex items-center justify-center">
          
          {/* High Quality Car Sketch/Image representation */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <img 
               src="https://i.ibb.co/8Ln7cRc8/Untitled-3-Photoroom.png" 
               alt="Car Anatomy Sketch" 
               className="w-[120%] md:w-[100%] max-w-5xl h-auto object-contain opacity-100 filter drop-shadow-[0_0_80px_rgba(255,255,255,0.15)]"
               style={{ 
                 mixBlendMode: 'screen'
               }}
            />
          </motion.div>

          {/* Markers */}
          {/* Engine / Front */}
          <motion.div 
            initial={{ opacity: 0, x: -20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute top-[10%] lg:top-[8%] left-0 lg:left-[5%] group z-10"
          >
            <div className="flex items-end gap-3 text-white">
               <div className="bg-black/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/5 text-right relative z-20">
                 <h5 className="text-sm font-semibold tracking-wider uppercase mb-1 drop-shadow-md">Aerodynamic Fascia</h5>
                 <p className="text-[10px] text-white/70 uppercase tracking-widest max-w-[150px] drop-shadow-md">Reduces drag & optimizes cooling</p>
               </div>
               <div className="relative z-10">
                 <ArrowDownLeft size={32} className="text-gold-500 rotate-180 opacity-60 group-hover:opacity-100 transition-opacity transform translate-y-3" />
                 <div className="absolute top-full right-0 w-[80px] lg:w-[200px] h-[1px] bg-gradient-to-r from-transparent to-gold-500/50 mt-2"></div>
               </div>
            </div>
          </motion.div>

          {/* Body / Center */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="absolute top-[0%] lg:top-[-5%] left-[50%] -translate-x-1/2 group z-10"
          >
            <div className="flex flex-col items-center gap-3 text-white text-center">
               <div className="bg-black/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/5 text-center">
                 <h5 className="text-sm font-semibold tracking-wider uppercase mb-1 drop-shadow-md">Carbon Monocoque</h5>
                 <p className="text-[10px] text-white/70 uppercase tracking-widest drop-shadow-md">Ultra Light Structure</p>
               </div>
               <div className="relative flex flex-col items-center">
                 <div className="h-[60px] lg:h-[120px] w-[1px] bg-gradient-to-b from-gold-500/50 to-transparent mb-1"></div>
                 <div className="w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(212,175,55,1)]"></div>
               </div>
            </div>
          </motion.div>

          {/* Rear / Engine for mid-engine */}
          <motion.div 
            initial={{ opacity: 0, x: 20, y: -20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="absolute top-[20%] lg:top-[15%] right-0 lg:right-[5%] group z-10"
          >
            <div className="flex items-end gap-3 text-white flex-row-reverse">
               <div className="bg-black/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/5 text-left relative z-20">
                 <h5 className="text-sm font-semibold tracking-wider uppercase mb-1 drop-shadow-md">V12 Powertrain</h5>
                 <p className="text-[10px] text-white/70 uppercase tracking-widest max-w-[150px] drop-shadow-md">Mid-mounted naturally aspirated heart</p>
               </div>
               <div className="relative z-10">
                 <ArrowUpRight size={32} className="text-gold-500 opacity-60 group-hover:opacity-100 transition-opacity transform translate-y-3 scale-x-[-1]" />
                 <div className="absolute top-full left-0 w-[80px] lg:w-[150px] h-[1px] bg-gradient-to-l from-transparent to-gold-500/50 mt-2"></div>
               </div>
            </div>
          </motion.div>

          {/* Rear Wheels / Brakes */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="absolute bottom-[5%] lg:bottom-[0%] right-[10%] lg:right-[15%] group z-10"
          >
            <div className="flex flex-col-reverse items-center gap-3 text-white text-center">
               <div className="bg-black/40 backdrop-blur-md px-4 py-3 rounded-2xl border border-white/5 text-center relative z-20">
                 <h5 className="text-sm font-semibold tracking-wider uppercase mb-1 drop-shadow-md">Carbon Ceramic Brakes</h5>
                 <p className="text-[10px] text-white/70 uppercase tracking-widest drop-shadow-md">Immense stopping power</p>
               </div>
               <div className="relative flex flex-col items-center z-10">
                 <div className="w-2 h-2 rounded-full bg-gold-500 shadow-[0_0_10px_rgba(212,175,55,1)]"></div>
                 <div className="h-[60px] lg:h-[120px] w-[1px] bg-gradient-to-t from-gold-500/50 to-transparent mt-1"></div>
               </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
