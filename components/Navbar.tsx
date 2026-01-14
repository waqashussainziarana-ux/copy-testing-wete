import React, { useState } from 'react';
import { Menu, X, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { Button } from './Button';

interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string[]>([]);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: 'Home', path: '/' },
    { 
      label: 'About Us', 
      path: '/about',
      children: [
        { label: 'Mission Statement', path: '/about/mission-statement' },
        { label: 'Our Vision', path: '/about/vision' },
        { label: 'Who We Are', path: '/about/who-we-are' },
        { label: 'Registration Status', path: '/about/registration-status' },
        { label: 'Our Team', path: '/team' },
      ]
    },
    { 
      label: 'Programs', 
      path: '/programs',
      children: [
        { label: 'Our First Project', path: '/programs/our-first-project' },
        { label: 'Funding', path: '/programs/funding' },
        { label: 'Donate with GoFundMe', path: '/programs/how-to-become-a-donor' },
        { label: 'Paypal Donation', path: '/programs/paypal-donation' },
        { label: 'Mail Donations', path: '/programs/mail-donations' },
      ]
    },
    { 
      label: 'Network', 
      path: '/network/who-are-we',
      children: [
        { label: 'Who Are We', path: '/network/who-are-we' },
        { label: 'Become a Volunteer', path: '/volunteer' },
      ]
    },
    { label: 'Gallery', path: '/gallery' },
    { label: 'Impact', path: '/impact' },
    { label: 'FAQ', path: '/faq' },
    { label: 'Contact', path: '/contact' },
  ];

  const handleDonate = () => {
    window.open("https://gofund.me/5233f0ce", "_blank");
  };

  const handleNavClick = (e: React.MouseEvent, item: NavItem) => {
    // CRITICAL FIX: Prevent default browser navigation (full reload) 
    // to allow React Router to handle the routing via hash.
    e.preventDefault();
    
    // Toggle mobile menu if open
    setIsOpen(false);

    if (item.path) {
       if (item.path === '#') {
         // Do nothing for placeholder links
         return;
       }
       
       if (location.pathname === item.path) {
         window.scrollTo({ top: 0, behavior: 'smooth' });
       } else {
         navigate(item.path);
       }
    }
  };

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded(prev => 
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#F9F5EB]/95 backdrop-blur-sm border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <div className="relative group-hover:scale-105 transition-transform">
              <BookOpen className="h-8 w-8 text-brand-teal" />
              <div className="absolute -top-1 -right-1">
                 <svg width="12" height="12" viewBox="0 0 10 10" className="text-amber-500 fill-current animate-pulse">
                   <path d="M5 0L6.5 3.5L10 5L6.5 6.5L5 10L3.5 6.5L0 5L3.5 3.5L5 0Z" />
                 </svg>
              </div>
            </div>
            <span className="font-serif font-bold text-2xl text-brand-darkBlue tracking-wide">WETE</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative group">
                <a 
                  href={item.path}
                  onClick={(e) => handleNavClick(e, item)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-md text-stone-600 hover:text-brand-darkBlue hover:bg-stone-100 font-medium text-sm uppercase tracking-wider transition-all cursor-pointer ${
                    location.pathname.startsWith(item.path) && item.path !== '/' ? 'text-brand-teal font-bold bg-brand-teal/5' : ''
                  } ${location.pathname === '/' && item.path === '/' ? 'text-brand-teal font-bold' : ''}`}
                >
                  {item.label}
                  {item.children && <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100" />}
                </a>

                {/* Desktop Dropdown */}
                {item.children && (
                  <div className="absolute left-0 mt-0 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform group-hover:translate-y-0 translate-y-2 pt-2 z-50">
                    <div className="bg-white rounded-lg shadow-xl border border-stone-100 overflow-hidden ring-1 ring-black ring-opacity-5">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.path}
                          onClick={(e) => {
                             e.stopPropagation();
                             handleNavClick(e, child);
                          }}
                          className={`block px-4 py-3 text-sm text-stone-600 hover:bg-brand-sand/30 hover:text-brand-darkBlue transition-colors border-l-2 border-transparent hover:border-brand-teal ${
                             location.pathname === child.path ? 'bg-brand-sand/30 text-brand-teal border-brand-teal font-medium' : ''
                          }`}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pl-4">
              <Button variant="donate" className="px-6 py-2 text-sm shadow-md hover:shadow-lg" onClick={handleDonate}>
                Donate
              </Button>
            </div>
          </div>
          
          {/* Condensed Desktop Nav (for smaller laptops) - simplified list */}
           <div className="hidden lg:flex xl:hidden items-center space-x-2">
            {navItems.slice(0, 5).map((item) => (
               <a 
                key={item.label}
                href={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className={`text-stone-600 hover:text-brand-darkBlue font-medium text-xs uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer px-2 py-1`}
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
              className="text-stone-600 hover:text-brand-darkBlue p-2 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#F9F5EB] border-b border-stone-200 h-[calc(100vh-80px)] overflow-y-auto">
          <div className="px-4 pt-4 pb-20 space-y-2">
            {navItems.map((item) => (
              <div key={item.label}>
                <div className="flex items-center justify-between border-b border-stone-100 last:border-0">
                  <a
                    href={item.path}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`flex-grow py-4 text-lg font-medium cursor-pointer ${
                      location.pathname === item.path 
                        ? 'text-brand-teal' 
                        : 'text-stone-700'
                    }`}
                  >
                    {item.label}
                  </a>
                  {item.children && (
                    <button 
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleMobileExpand(item.label);
                        }}
                        className="p-4 text-stone-400 hover:text-brand-darkBlue focus:outline-none"
                    >
                        {mobileExpanded.includes(item.label) ? <ChevronDown className="w-5 h-5"/> : <ChevronRight className="w-5 h-5"/>}
                    </button>
                  )}
                </div>

                {/* Mobile Submenu */}
                {item.children && mobileExpanded.includes(item.label) && (
                    <div className="bg-stone-50/50 rounded-lg my-1 pl-4 space-y-1">
                        {item.children.map(child => (
                             <a
                                key={child.label}
                                href={child.path}
                                onClick={(e) => handleNavClick(e, child)}
                                className={`block px-3 py-3 text-base ${
                                    location.pathname === child.path 
                                    ? 'text-brand-teal font-medium' 
                                    : 'text-stone-600'
                                }`}
                             >
                                {child.label}
                             </a>
                        ))}
                    </div>
                )}
              </div>
            ))}
            <div className="pt-8 pb-4">
              <Button variant="donate" className="w-full text-lg py-4 shadow-lg" onClick={handleDonate}>Donate Now</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};