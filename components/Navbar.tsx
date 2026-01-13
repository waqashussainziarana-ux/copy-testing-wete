import React, { useState } from 'react';
import { Menu, X, BookOpen } from 'lucide-react';
import { Button } from './Button';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: 'Home', href: '#' },
    { label: 'About Us', href: '#about' },
    { label: 'Our Team', href: '#team' },
    { label: 'Programs', href: '#programs' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Impact', href: '#impact' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleDonate = () => {
    window.open("https://gofund.me/5233f0ce", "_blank");
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F9F5EB]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="relative">
              <BookOpen className="h-8 w-8 text-brand-teal" />
              <div className="absolute -top-1 -right-1">
                 <svg width="12" height="12" viewBox="0 0 10 10" className="text-amber-500 fill-current">
                   <path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5L5 0Z" />
                 </svg>
              </div>
            </div>
            <span className="font-serif font-bold text-2xl text-brand-darkBlue tracking-wide">WETE</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {links.map((link) => (
              <a 
                key={link.label}
                href={link.href} 
                className="text-stone-600 hover:text-brand-darkBlue font-medium text-sm uppercase tracking-wider transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <Button variant="donate" className="px-6 py-2 text-sm ml-4" onClick={handleDonate}>
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
        <div className="lg:hidden bg-[#F9F5EB] border-b border-stone-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-stone-700 hover:text-brand-darkBlue hover:bg-stone-100"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 px-3">
              <Button variant="donate" className="w-full" onClick={handleDonate}>Donate</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};