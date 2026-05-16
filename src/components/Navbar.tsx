import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ['Collection', 'Bespoke', 'Services', 'Heritage'];

  return (
    <>
      <motion.nav
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        initial="visible"
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 w-full z-50 flex justify-center pt-6 px-6 pointer-events-none"
      >
        <div 
          className={`pointer-events-auto flex items-center justify-between w-full max-w-5xl transition-all duration-500 rounded-full px-6 md:px-8 shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${
            scrolled ? 'bg-white/5 backdrop-blur-xl border border-white/10 py-3' : 'bg-transparent border border-transparent py-4'
          }`}
        >
          {false && <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/0 rounded-full pointer-events-none" />}
          
          {/* Logo */}
          <a href="#" className="flex flex-col items-center justify-center shrink-0 relative z-10">
            <span className="font-sans font-medium text-lg md:text-xl tracking-[0.2em] uppercase text-white leading-none">Apex</span>
            <span className="text-[8px] md:text-[9px] tracking-[0.3em] font-medium text-gold-500 uppercase mt-1">Motors</span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center justify-center space-x-1 sm:space-x-2 lg:space-x-6 mx-auto relative z-10">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="relative px-4 py-2 text-xs font-semibold tracking-widest text-white/60 hover:text-white transition-colors uppercase group overflow-hidden rounded-full"
              >
                <span className="relative z-10">{link}</span>
                <span className="absolute inset-0 bg-white/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center"></span>
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block shrink-0 relative z-10">
            <button className="relative overflow-hidden group bg-white text-black px-6 py-2.5 rounded-full hover:bg-gold-500 transition-colors duration-500 border border-transparent">
              <span className="relative z-10 text-xs tracking-widest uppercase font-bold group-hover:text-black transition-colors duration-500">
                Inquire
              </span>
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white/80 hover:text-white transition-colors p-2 -mr-2 bg-white/5 rounded-full relative z-10"
            onClick={() => setMobileOpen(true)}
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-2xl md:hidden flex flex-col"
          >
            <div className="flex justify-between items-center p-6 border-b border-white/5">
              <a href="#" className="flex flex-col">
                <span className="font-sans font-medium text-xl tracking-[0.2em] uppercase text-white leading-none">Apex</span>
                <span className="text-[9px] tracking-[0.3em] font-medium text-gold-500 uppercase mt-1">Motors</span>
              </a>
              <button 
                className="text-white/80 hover:text-white transition-colors p-2 bg-white/5 rounded-full"
                onClick={() => setMobileOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col px-8 py-12 space-y-6">
              {navLinks.map((link, i) => (
                <motion.a 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  key={link} 
                  href={`#${link.toLowerCase()}`}
                  className="text-3xl font-sans font-light tracking-wider text-white/80 hover:text-gold-500 transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link}
                </motion.a>
              ))}
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-12 bg-white text-black px-6 py-4 rounded-full text-sm font-bold uppercase tracking-widest text-center shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Inquire Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
