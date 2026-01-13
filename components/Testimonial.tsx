import React from 'react';
import { Quote } from 'lucide-react';

export const Testimonial: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden" id="impact">
      {/* 
         Removed local blob decorations to allow global desert background to show.
      */}

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-8">
          <h3 className="text-2xl font-serif text-stone-500 uppercase tracking-widest border-b border-stone-300 pb-2">Stories of Determination</h3>
        </div>

        <div className="relative">
          <Quote className="absolute -top-10 -left-6 md:-left-12 text-brand-accent/30 w-24 h-24 transform -scale-x-100" />
          
          <blockquote className="text-2xl md:text-3xl font-serif font-medium text-brand-darkBlue italic leading-relaxed">
            "Many of the women we support had their education interrupted. 
            Through safe learning environments, they continue to study, grow, and plan for the future."
          </blockquote>
          
          <Quote className="absolute -bottom-10 -right-6 md:-right-12 text-brand-accent/30 w-24 h-24" />
        </div>

        <p className="mt-8 text-sm text-stone-500 italic">
          *All stories are shared anonymously to protect safety.
        </p>
      </div>
    </section>
  );
};