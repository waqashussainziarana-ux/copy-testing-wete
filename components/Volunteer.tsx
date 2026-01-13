import React from 'react';
import { Hand, Heart, Users, Mail } from 'lucide-react';
import { Button } from './Button';

export const Volunteer: React.FC = () => {
  return (
    <section className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro text only, removed big H1 */}
        <div className="text-center mb-16">
          <p className="text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed">
            We are looking for passionate individuals to help us empower women through education. Explore the roles below and find where you fit in.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-stone-200 shadow-sm text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-brand-teal/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-teal">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-brand-darkBlue text-lg mb-2">Educators</h3>
            <p className="text-stone-600 text-sm">Create curriculum or mentor students remotely.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-stone-200 shadow-sm text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-brand-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-accent">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-brand-darkBlue text-lg mb-2">Fundraisers</h3>
            <p className="text-stone-600 text-sm">Help us organize events and secure funding.</p>
          </div>

          <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl border border-stone-200 shadow-sm text-center hover:shadow-md transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-brand-darkBlue">
              <Hand className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-brand-darkBlue text-lg mb-2">Advocates</h3>
            <p className="text-stone-600 text-sm">Spread awareness on social media and in your community.</p>
          </div>
        </div>

        {/* Application Form Area */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-stone-100">
          <div className="bg-brand-darkBlue p-6 md:p-8 text-white text-center">
            <h2 className="text-2xl font-serif font-bold">Volunteer Application</h2>
            <p className="text-brand-sand/80 text-sm mt-2">Fill out the form below or email us directly.</p>
          </div>
          
          <div className="p-6 md:p-10">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">First Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-stone-700 mb-1">Last Name</label>
                  <input type="text" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
                <input type="email" className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all" />
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Area of Interest</label>
                <select className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all bg-white">
                  <option>Education & Mentoring</option>
                  <option>Fundraising & Events</option>
                  <option>Marketing & Social Media</option>
                  <option>Administration</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-stone-700 mb-1">Message</label>
                <textarea rows={4} className="w-full px-4 py-2 border border-stone-300 rounded-md focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all" placeholder="Tell us a bit about yourself and why you'd like to join..."></textarea>
              </div>

              <div className="pt-2">
                <Button className="w-full md:w-auto px-8" onClick={() => alert('Thank you for your interest! This is a demo form.')}>
                  Submit Application
                </Button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-stone-200 text-center">
              <p className="text-stone-500 text-sm flex items-center justify-center gap-2">
                <Mail className="w-4 h-4" />
                Or email us at <a href="mailto:volunteer@wete.ca" className="text-brand-teal hover:underline font-medium">volunteer@wete.ca</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};