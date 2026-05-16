import React from 'react';
import { CosmicBackground } from './components/CosmicBackground';
import { Microinteractions } from './components/Microinteractions';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Statistics } from './components/Statistics';
import { AboutUs } from './components/AboutUs';
import { WhatMakesUsDifferent } from './components/WhatMakesUsDifferent';
import { DetailingProcess } from './components/DetailingProcess';
import { CarAnatomy } from './components/CarAnatomy';
import { Testimonials } from './components/Testimonials';
import { Services } from './components/Services';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white relative selection:bg-gold-500/30 selection:text-gold-200">
      <CosmicBackground />
      <Microinteractions />
      <Navbar />
      
      <main className="relative z-10 flex flex-col">
        <Hero />
        <Statistics />
        <AboutUs />
        <WhatMakesUsDifferent />
        <DetailingProcess />
        <CarAnatomy />
        <Testimonials />
        <Services />
      </main>

      <Footer />
    </div>
  );
}
