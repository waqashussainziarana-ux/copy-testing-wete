import React from 'react';
import { Facebook, Twitter, Instagram, Mail, BookOpen, Phone, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F9F5EB]/90 backdrop-blur-sm pt-12 pb-8 relative mt-24">
       {/* Curved Separator at the TOP */}
       <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 -translate-y-full">
         <svg 
            className="relative block w-full h-[40px] md:h-[70px]" 
            data-name="Layer 1" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 1440 120" 
            preserveAspectRatio="none"
         >
            <path 
              d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z" 
              fill="rgba(249, 245, 235, 0.9)"
            ></path>
         </svg>
       </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-6 w-6 text-brand-teal" />
              <span className="font-serif font-bold text-xl text-brand-darkBlue">WETE</span>
            </div>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">
              Women's Empowerment through Education. Providing hope and opportunity through learning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-stone-400 hover:text-brand-darkBlue transition-colors"><Facebook className="w-5 h-5"/></a>
              <a href="#" className="text-stone-400 hover:text-brand-darkBlue transition-colors"><Twitter className="w-5 h-5"/></a>
              <a href="#" className="text-stone-400 hover:text-brand-darkBlue transition-colors"><Instagram className="w-5 h-5"/></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-bold text-brand-darkBlue mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-stone-600">
              <li><Link to="/" className="hover:text-brand-teal">Home</Link></li>
              <li><Link to="/about" className="hover:text-brand-teal">About Us</Link></li>
              <li><Link to="/programs" className="hover:text-brand-teal">Programs</Link></li>
              <li><Link to="/impact" className="hover:text-brand-teal">Impact Stories</Link></li>
              <li><Link to="/contact" className="hover:text-brand-teal">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
             <h4 className="font-serif font-bold text-brand-darkBlue mb-4">Contact</h4>
             <ul className="space-y-3 text-sm text-stone-600">
               <li className="flex items-start gap-2">
                 <MapPin className="w-4 h-4 text-brand-teal mt-1 flex-shrink-0" />
                 <span>1000 Finch Ave West, North York, Ontario, Canada, M3J 2C7</span>
               </li>
               <li className="flex items-center gap-2">
                 <Phone className="w-4 h-4 text-brand-teal flex-shrink-0" />
                 <a href="tel:+16475402575" className="hover:text-brand-darkBlue">+1 647 540 2575</a>
               </li>
               <li className="flex items-center gap-2">
                 <Mail className="w-4 h-4 text-brand-teal flex-shrink-0" />
                 <a href="mailto:relations@wete.ca" className="hover:text-brand-darkBlue">relations@wete.ca</a>
               </li>
               <li className="flex items-center gap-2">
                 <Clock className="w-4 h-4 text-brand-teal flex-shrink-0" />
                 <span>Office Time: 10AM - 5PM</span>
               </li>
             </ul>
          </div>

           {/* Newsletter */}
           <div>
            <h4 className="font-serif font-bold text-brand-darkBlue mb-4">Stay Updated</h4>
            <p className="text-xs text-stone-500 mb-3">Join our newsletter to receive updates on our progress.</p>
            <div className="flex">
              <input type="email" placeholder="Email address" className="bg-white/80 border border-stone-300 px-3 py-2 text-sm w-full rounded-l-md focus:outline-none focus:border-brand-teal" />
              <button className="bg-brand-darkBlue text-white px-3 py-2 rounded-r-md text-sm hover:bg-slate-800">Join</button>
            </div>
           </div>
        </div>

        <div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-500 gap-4">
          <div className="text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Women's Empowerment through Education (WETE). All rights reserved.</p>
            <p className="mt-1">Registered nonprofit. Programs operate with strict confidentiality to ensure safety.</p>
          </div>
          <div className="flex gap-4">
            <Link to="/privacy-policy" className="hover:text-brand-darkBlue">Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-brand-darkBlue">Cookie Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-brand-darkBlue">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};