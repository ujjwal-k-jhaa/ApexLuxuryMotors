import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative z-10 bg-neutral-950 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-1">
            <a href="#" className="flex flex-col mb-6">
              <span className="font-sans font-light text-2xl tracking-[0.2em] uppercase text-white">Apex</span>
              <span className="text-[10px] tracking-[0.3em] text-white/50 uppercase">Luxury Motors</span>
            </a>
            <p className="text-xs text-white/40 leading-relaxed max-w-sm">
              Providing access to the pinnacle of automotive engineering for the world's most discerning collectors.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h5 className="text-xs text-white uppercase tracking-widest font-semibold mb-6">Inventory</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/50 hover:text-gold-500 transition-colors">New Arrivals</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-gold-500 transition-colors">Pre-Owned</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-gold-500 transition-colors">Classics</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-gold-500 transition-colors">Limited Editions</a></li>
            </ul>
          </div>

          {/* Nav */}
          <div>
            <h5 className="text-xs text-white uppercase tracking-widest font-semibold mb-6">Company</h5>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-white/50 hover:text-gold-500 transition-colors">Heritage</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-gold-500 transition-colors">Services</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-gold-500 transition-colors">Journal</a></li>
              <li><a href="#" className="text-sm text-white/50 hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h5 className="text-xs text-white uppercase tracking-widest font-semibold mb-6">The Paddock</h5>
            <p className="text-xs text-white/40 leading-relaxed mb-4">
              Subscribe to receive exclusive access to off-market vehicles and private events.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-white/5 border border-white/10 rounded-none px-4 py-3 text-sm text-white focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button className="absolute right-0 top-0 h-full px-4 text-white hover:text-gold-500 transition-colors">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-white/30 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Apex Luxury Motors. All Rights Reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[10px] text-white/30 hover:text-white uppercase tracking-widest transition-colors">Privacy</a>
            <a href="#" className="text-[10px] text-white/30 hover:text-white uppercase tracking-widest transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
