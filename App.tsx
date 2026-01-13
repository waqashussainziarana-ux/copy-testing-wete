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
import { PageHeader } from './components/PageHeader';
import { Contact } from './components/Contact';

// Helper to handle scroll position on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// -- PAGE LAYOUT WRAPPER --
interface PageLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, subtitle, children }) => (
  <>
    <PageHeader title={title} subtitle={subtitle} />
    <div className="min-h-[50vh]">
      {children}
    </div>
  </>
);

// -- PAGE COMPONENTS --

// Homepage: Landing page structure
const HomePage = () => (
  <>
    <Hero />
    <Features /> 
    <Process />
    <Donation />
  </>
);

// Standalone Pages with PageHeader
const AboutPage = () => (
  <PageLayout 
    title="About Us" 
    subtitle="Our mission is to dismantle barriers to learning and create safe pathways for academic and personal growth for women in Afghanistan."
  >
    <Mission />
  </PageLayout>
);

const TeamPage = () => (
  <PageLayout 
    title="Our Team" 
    subtitle="Meet the dedicated individuals working tirelessly to ensure education remains accessible to all."
  >
    <Team />
  </PageLayout>
);

const ProgramsPage = () => (
  <PageLayout 
    title="Our Programs" 
    subtitle="Secure, accessible, and community-driven educational initiatives designed for challenging environments."
  >
    <Features />
    <Process />
  </PageLayout>
);

const GalleryPage = () => (
  <PageLayout 
    title="Gallery" 
    subtitle="Glimpses into the daily impact of our programs and the resilient spirit of our students."
  >
    <Gallery />
  </PageLayout>
);

const ImpactPage = () => (
  <PageLayout 
    title="Our Impact" 
    subtitle="Real stories of determination and the tangible difference your support makes."
  >
    <Testimonial />
  </PageLayout>
);

const FAQPage = () => (
  <PageLayout 
    title="Frequently Asked Questions" 
    subtitle="Learn more about our operations, safety protocols, and how you can get involved."
  >
    <FAQ />
  </PageLayout>
);

const VolunteerPage = () => (
  <PageLayout 
    title="Volunteer" 
    subtitle="Join our mission. Your time, skills, and passion can help change lives."
  >
    <Volunteer />
  </PageLayout>
);

const ContactPage = () => (
  <PageLayout 
    title="Contact Us" 
    subtitle="We are here to answer your questions. Reach out to learn more about how you can support women's education."
  >
    <Contact />
  </PageLayout>
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