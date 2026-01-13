import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Navigation Items with their Route path and Home section ID
  const navItems = [
    { label: 'Home', path: '/', sectionId: 'top' },
    { label: 'About Us', path: '/about', sectionId: 'about' },
    { label: 'Our Team', path: '/team', sectionId: 'team' },
    { label: 'Programs', path: '/programs', sectionId: 'programs' },
    { label: 'Volunteer', path: '/volunteer', sectionId: 'volunteer' },
    { label: 'Gallery', path: '/gallery', sectionId: 'gallery' },
    { label: 'Impact', path: '/impact', sectionId: 'impact' },
    { label: 'FAQ', path: '/faq', sectionId: 'faq' },
    { label: 'Contact', path: '/contact', sectionId: 'contact' },
  ];

  const handleDonate = () => {
    window.open("https://gofund.me/5233f0ce", "_blank");
  };

  const handleNavClick = (e: React.MouseEvent, item: typeof navItems[0]) => {
    e.preventDefault();
    setIsOpen(false);

    const isHomepage = location.pathname === '/';

    if (isHomepage) {
      // 1. If on Homepage, try smooth scrolling first (Hybrid behavior)
      // This maintains the "Single Page" feel for the homepage
      if (item.path === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const element = document.getElementById(item.sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If section not found (or if it's a separate page like Volunteer), navigate
          navigate(item.path);
        }
      }
    } else {
      // 2. If on any other page, navigate to the dedicated route
      // This satisfies the requirement for "separate pages"
      navigate(item.path);
    }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/');
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F9F5EB]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a href="/" onClick={handleLogoClick} className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-brand-teal" />
              <div className="absolute -top-1 -right-1">
                 <svg width="12" height="12" viewBox="0 0 10 10" className="text-amber-500 fill-current">
                   <path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5L5 0Z" />
                 </svg>
              </div>
            </div>
            <span className="font-serif font-bold text-2xl text-brand-darkBlue tracking-wide">WETE</span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-6">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-stone-600 hover:text-brand-darkBlue font-medium text-sm uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                  location.pathname === item.path ? 'text-brand-teal font-bold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
            <Button variant="donate" className="px-6 py-2 text-sm ml-4" onClick={handleDonate}>
              Donate
            </Button>
          </div>
          
          {/* Condensed Desktop Nav (for smaller laptops) */}
           <div className="hidden lg:flex xl:hidden items-center space-x-4">
            {navItems.slice(0, 6).map((item) => (
               <a 
                key={item.label}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-stone-600 hover:text-brand-darkBlue font-medium text-xs uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
                  location.pathname === item.path ? 'text-brand-teal font-bold' : ''
                }`}
              >
                {item.label}
              </a>
            ))}
             <Button variant="donate" className="px-4 py-2 text-xs" onClick={handleDonate}>
              Donate
            </Button>
          </div>


          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-stone-600 hover:text-brand-darkBlue p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#F9F5EB] border-b border-stone-200 h-screen overflow-y-auto">
          <div className="px-2 pt-2 pb-20 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`block px-3 py-4 rounded-md text-lg font-medium cursor-pointer border-b border-stone-100 ${
                  location.pathname === item.path 
                    ? 'text-brand-teal bg-stone-100' 
                    : 'text-stone-700 hover:text-brand-darkBlue hover:bg-stone-100'
                }`}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-6 px-3">
              <Button variant="donate" className="w-full text-lg py-3" onClick={handleDonate}>Donate Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};