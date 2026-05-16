import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const cars = [
  {
    id: 1,
    name: 'Aurelia Grand Tourer',
    category: 'Coupe',
    price: 'From $285,000',
    metrics: ['800 HP', '0-60 in 2.8s', 'V12 Twin Turbo'],
    image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&q=80',
  },
  {
    id: 2,
    name: 'Obsidian Phantom',
    category: 'Ultra-Luxury Sedan',
    price: 'From $450,000',
    metrics: ['563 HP', 'Bespoke Interior', 'Whisper Quiet'],
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?auto=format&fit=crop&q=80',
  },
  {
    id: 3,
    name: 'Valkyrie Spyder',
    category: 'Hypercar',
    price: 'Price on Request',
    metrics: ['1000+ HP', 'Hybrid Drive', 'Track Optimized'],
    image: 'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?auto=format&fit=crop&q=80',
  }
];

export function FeaturedCars() {
  return (
    <section id="collection" className="relative z-10 py-32 bg-black/60 backdrop-blur-lg border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 overflow-hidden">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 md:mb-0"
          >
            <h2 className="text-sm text-gold-500 uppercase tracking-[0.3em] font-semibold mb-4">Curated Selection</h2>
            <h3 className="text-4xl md:text-6xl font-serif text-white">The Apex <br/>Collection</h3>
          </motion.div>

          <motion.div
             initial={{ opacity: 0, x: 50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <button className="flex items-center space-x-2 text-white/70 hover:text-white group transition-colors">
              <span className="text-xs uppercase tracking-widest border-b border-transparent group-hover:border-white transition-all pb-1">View Full Inventory</span>
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Cars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {cars.map((car, idx) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: idx * 0.2, ease: "easeOut" }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-zinc-900 border border-white/5">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out" 
                />
                
                {/* Internal gradient to ensure text readability if over image, here we keep clean dark bottom */}
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/90 to-transparent pt-32">
                  <p className="text-[10px] text-white/50 uppercase tracking-widest mb-1">{car.category}</p>
                  <h4 className="text-2xl font-serif text-white group-hover:text-gold-400 transition-colors">{car.name}</h4>
                </div>
              </div>

              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <p className="text-sm font-light text-white/70">{car.price}</p>
                <button className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/50 group-hover:bg-gold-500 group-hover:text-black group-hover:border-gold-500 transition-all">
                  <ArrowUpRight size={14} />
                </button>
              </div>

              <div className="flex items-center gap-4 text-xs font-light tracking-wide text-white/40">
                {car.metrics.map((metric, i) => (
                  <span key={i} className="flex items-center">
                    {i > 0 && <span className="w-1 h-1 rounded-full bg-white/20 mx-3"></span>}
                    {metric}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
