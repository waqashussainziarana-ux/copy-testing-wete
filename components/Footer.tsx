import React from 'react';
import { Facebook, Twitter, Instagram, Mail, BookOpen, Phone, MapPin, Clock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#F9F5EB]/90 backdrop-blur-sm border-t border-stone-200/50 pt-16 pb-8">
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
              <li><a href="#" className="hover:text-brand-teal">Home</a></li>
              <li><a href="#about" className="hover:text-brand-teal">About Us</a></li>
              <li><a href="#programs" className="hover:text-brand-teal">Programs</a></li>
              <li><a href="#impact" className="hover:text-brand-teal">Impact Stories</a></li>
              <li><a href="#contact" className="hover:text-brand-teal">Contact</a></li>
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

        <div className="border-t border-stone-200 pt-8 text-center text-xs text-stone-500">
          <p>&copy; {new Date().getFullYear()} Women's Empowerment through Education (WETE). All rights reserved.</p>
          <p className="mt-2">Registered nonprofit. Programs operate with strict confidentiality to ensure safety.</p>
        </div>
      </div>
    </footer>
  );
};