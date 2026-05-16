import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Gem, Compass, Clock } from 'lucide-react';

const services = [
  {
    icon: Gem,
    title: 'Bespoke Customization',
    desc: 'Collaborate with our artisans to tailor every stitch, material, and hue to your exact specifications.'
  },
  {
    icon: Compass,
    title: 'Global Sourcing',
    desc: 'Seeking a rare classic or a sold-out hypercar? Our global network secures the unobtainable.'
  },
  {
    icon: ShieldCheck,
    title: 'Secure Transport',
    desc: 'White-glove, enclosed delivery directly to your estate, anywhere across the globe.'
  },
  {
    icon: Clock,
    title: 'Concierge Servicing',
    desc: 'Flight-in mechanics and pristine detailing, ensuring your masterpiece performs flawlessly.'
  }
];

export function Services() {
  return (
    <section id="services" className="relative z-10 py-32 bg-inherit border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center">
        
        <div className="text-center mb-20 max-w-2xl">
          <motion.div
             initial={{ opacity: 0, y: -20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm text-gold-500 uppercase tracking-[0.3em] font-semibold mb-4">Our Commitment</h2>
            <h3 className="text-4xl md:text-5xl font-sans font-light text-white mb-6">A Higher Standard of Ownership.</h3>
            <p className="text-white/50 font-light leading-relaxed">
              Beyond the acquisition, we offer a lifelong partnership in automotive perfection. Discretion, speed, and uncompromising quality define our service offerings.
            </p>
          </motion.div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 w-full">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="flex flex-col items-center text-center p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-gold-500/50 group-hover:bg-gold-500/10 transition-colors">
                  <Icon size={28} className="text-white/70 group-hover:text-gold-500 transition-colors" strokeWidth={1.5} />
                </div>
                <h4 className="text-lg font-sans font-medium text-white mb-3 tracking-wide">{service.title}</h4>
                <p className="text-sm text-white/40 leading-relaxed font-light">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
