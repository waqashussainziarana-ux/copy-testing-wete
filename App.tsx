
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
import { AlertCircle } from 'lucide-react';
import { 
  MissionStatement, 
  Vision, 
  WhoWeAre, 
  RegistrationStatus,
  OurFirstProject,
  Funding,
  BecomeDonor,
  PaypalDonation,
  MailDonations,
  PrivacyPolicy,
  CookiePolicy,
  TermsConditions
} from './components/SubPages';

// Toggle this variable to make the website online/offline
const IS_OFFLINE = false;

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

// -- OFFLINE PAGE --
const OfflinePage = () => (
  <div className="fixed inset-0 z-[9999] bg-stone-50 flex items-center justify-center p-6 text-center">
    <div className="max-w-md w-full bg-white p-10 rounded-2xl shadow-xl border border-stone-200">
      <div className="flex justify-center mb-6">
        <div className="p-4 bg-red-50 rounded-full">
          <AlertCircle className="w-12 h-12 text-red-500" />
        </div>
      </div>
      <h1 className="text-2xl font-serif font-bold text-brand-darkBlue mb-4">Service Unavailable</h1>
      <p className="text-stone-600 text-lg leading-relaxed mb-8">
        hosting expired contact the concerned person
      </p>
      <div className="w-16 h-1 bg-brand-accent mx-auto rounded-full opacity-50"></div>
    </div>
  </div>
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
  if (IS_OFFLINE) {
    return <OfflinePage />;
  }

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

            {/* About Us Sub-pages */}
            <Route path="/about/mission-statement" element={
              <PageLayout title="Mission Statement">
                <MissionStatement />
              </PageLayout>
            } />
            <Route path="/about/vision" element={
              <PageLayout title="Our Vision">
                <Vision />
              </PageLayout>
            } />
            <Route path="/about/who-we-are" element={
              <PageLayout title="Who We Are">
                <WhoWeAre />
              </PageLayout>
            } />
            <Route path="/about/registration-status" element={
              <PageLayout title="Registration Status">
                <RegistrationStatus />
              </PageLayout>
            } />

            {/* Programs Sub-pages */}
            <Route path="/programs/our-first-project" element={
              <PageLayout title="Our First Project" subtitle="Literacy for All">
                <OurFirstProject />
              </PageLayout>
            } />
            <Route path="/programs/funding" element={
              <PageLayout title="Funding">
                <Funding />
              </PageLayout>
            } />
            <Route path="/programs/how-to-become-a-donor" element={
              <PageLayout title="Donate with GoFundMe">
                <BecomeDonor />
              </PageLayout>
            } />
            <Route path="/programs/paypal-donation" element={
              <PageLayout title="PayPal Donation">
                <PaypalDonation />
              </PageLayout>
            } />
            <Route path="/programs/mail-donations" element={
              <PageLayout title="Mail Donations">
                <MailDonations />
              </PageLayout>
            } />

            {/* Legal Pages */}
            <Route path="/privacy-policy" element={
              <PageLayout title="Privacy Policy">
                <PrivacyPolicy />
              </PageLayout>
            } />
            <Route path="/cookie-policy" element={
              <PageLayout title="Cookie Policy">
                <CookiePolicy />
              </PageLayout>
            } />
            <Route path="/terms-and-conditions" element={
              <PageLayout title="Terms and Conditions">
                <TermsConditions />
              </PageLayout>
            } />

          </Routes>
        </main>
        
        <Footer />
        <BackToTop />
      </div>
    </HashRouter>
  );
};

export default App;
