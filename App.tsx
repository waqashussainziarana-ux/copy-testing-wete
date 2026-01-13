import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Mission } from './components/Mission';
import { Team } from './components/Team';
import { Features } from './components/Features';
import { Gallery } from './components/Gallery';
import { Process } from './components/Process';
import { Testimonial } from './components/Testimonial';
import { FAQ } from './components/FAQ';
import { Donation } from './components/Donation';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Mission />
        <Team />
        <Features />
        <Gallery />
        <Process />
        <Testimonial />
        <FAQ />
        <Donation />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;