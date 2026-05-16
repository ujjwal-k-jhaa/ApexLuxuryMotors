import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const ladderSteps = [
  {
    num: "01",
    title: "Meticulous Decontamination",
    desc: "A multi-stage pure water wash, chemical fallout removal, and clay bar treatment to ensure the clearest possible canvas."
  },
  {
    num: "02",
    title: "Multi-Stage Paint Correction",
    desc: "Micron-level measurement and leveling of the clear coat to remove swirls, holograms, and imperfections, revealing flawless reflection."
  },
  {
    num: "03",
    title: "Bespoke Ceramic Coating",
    desc: "Application of aerospace-grade quartz coatings, rendering the surface highly hydrophobic and protected from environmental degradation."
  },
  {
    num: "04",
    title: "Interior & Engine Bay Rejuvenation",
    desc: "Steam cleaning, leather nourishment, and dry-ice blasting of mechanical components for a true concourse-level finish."
  }
];

export function DetailingProcess() {
  return (
    <section className="relative z-10 py-32 bg-neutral-950/80 backdrop-blur-md overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-[10px] text-gold-500 uppercase tracking-[0.3em] font-semibold mb-4">Concours Level</h2>
            <h3 className="text-4xl md:text-5xl font-sans font-light text-white mb-6">How We Detail <span className="font-semibold">The Dream.</span></h3>
            <p className="text-white/50 text-sm font-light leading-relaxed">
              Before any vehicle joins our portfolio or is delivered to a client, it undergoes hundreds of hours of obsessive aesthetic and mechanical refinement.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Ladder Timeline */}
          <div className="relative border-l border-white/10 pl-8 md:pl-12 space-y-16">
            {ladderSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                className="relative"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[41px] md:-left-[57px] top-1 flex items-center justify-center w-6 h-6 rounded-full bg-black border border-gold-500 text-gold-500">
                  <span className="w-1.5 h-1.5 bg-gold-500 rounded-full"></span>
                </span>
                
                <h4 className="text-2xl font-serif text-white mb-2 flex items-center gap-4">
                  <span className="text-white/20 font-sans text-xl">{step.num}</span> 
                  {step.title}
                </h4>
                <p className="text-white/40 font-light leading-relaxed text-sm">{step.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Graphical/Image Demo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full h-full min-h-[400px] relative rounded-3xl overflow-hidden group"
          >
             <img 
               src="https://images.unsplash.com/photo-1503376712396-f94d9359c3eb?auto=format&fit=crop&w=1200&q=80" 
               alt="Car Polishing" 
               className="absolute inset-0 w-full h-full object-cover filter brightness-75 group-hover:scale-105 transition-transform duration-[2s]"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
             
             {/* Overlay Details */}
             <div className="absolute bottom-10 left-10 right-10">
               <div className="flex items-center gap-3 mb-4">
                 <CheckCircle2 size={24} className="text-gold-500" />
                 <h5 className="text-lg font-medium text-white tracking-wide">30+ Hours Average Prep Time</h5>
               </div>
               <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                 <motion.div 
                   className="h-full bg-gold-500"
                   initial={{ width: "0%" }}
                   whileInView={{ width: "100%" }}
                   viewport={{ once: true }}
                   transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
                 />
               </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
