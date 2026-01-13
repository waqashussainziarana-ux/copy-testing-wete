import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
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
import { Volunteer } from './components/Volunteer';

// Helper to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// -- PAGE COMPONENTS --

// Homepage: Simplified to serve as a landing page
const HomePage = () => (
  <>
    <Hero />
    <Features /> {/* kept as "Programs Overview" */}
    <Process />  {/* kept as "How it Works" */}
    <Donation />
  </>
);

// Standalone Pages
const AboutPage = () => (
  <div className="pt-20 min-h-[60vh]">
    <Mission />
  </div>
);

const TeamPage = () => (
  <div className="pt-20 min-h-[60vh]">
    <Team />
  </div>
);

const ProgramsPage = () => (
  <div className="pt-20 min-h-[60vh]">
    <Features />
    <Process />
  </div>
);

const GalleryPage = () => (
  <div className="pt-20 min-h-[60vh]">
    <Gallery />
  </div>
);

const ImpactPage = () => (
  <div className="pt-20 min-h-[60vh]">
    <Testimonial />
  </div>
);

const FAQPage = () => (
  <div className="pt-20 min-h-[60vh]">
    <FAQ />
  </div>
);

const VolunteerPage = () => (
  <div className="pt-20 min-h-[60vh]">
    <Volunteer />
  </div>
);

const ContactPage = () => (
  <div className="py-32 max-w-7xl mx-auto px-4 text-center min-h-[60vh]">
    <h1 className="text-4xl font-serif font-bold text-brand-darkBlue mb-6">Get in Touch</h1>
    <p className="text-lg text-stone-600 mb-8 max-w-2xl mx-auto">
      We are always here to answer your questions and discuss how you can help. 
      Please check the footer below for our contact details, location, and office hours.
    </p>
  </div>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <div className="min-h-screen font-sans selection:bg-brand-accent selection:text-white flex flex-col">
        <ScrollToTop />
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/impact" element={<ImpactPage />} />
            <Route path="/volunteer" element={<VolunteerPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </HashRouter>
  );
};

export default App;