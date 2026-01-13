import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-[#FFFBF2] border-b border-stone-200 pt-32 pb-12 relative overflow-hidden">
       {/* Subtle overlay to distinguish from body bg slightly if needed, or keep transparent */}
      <div className="absolute inset-0 bg-brand-sand/20 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <nav className="flex items-center text-sm text-stone-500 mb-4" aria-label="Breadcrumb">
           <Link to="/" className="hover:text-brand-darkBlue flex items-center gap-1 transition-colors">
             <Home className="w-4 h-4" />
             <span>Home</span>
           </Link>
           <ChevronRight className="w-4 h-4 mx-2 text-stone-400" />
           <span className="font-medium text-brand-teal select-none">{title}</span>
        </nav>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-brand-darkBlue tracking-tight leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-stone-600 max-w-3xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};