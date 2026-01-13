import React from 'react';
import { Laptop, GraduationCap, ShieldCheck, Globe2 } from 'lucide-react';
import { FeatureProps } from '../types';

const FeatureCard: React.FC<FeatureProps> = ({ icon: Icon, title, description, colorClass }) => (
  <div className="flex flex-col items-center text-center p-6 group rounded-xl bg-white/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300 border border-white/50">
    <div className={`w-16 h-16 rounded-full ${colorClass} bg-opacity-20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
      <Icon className={`w-8 h-8 ${colorClass?.replace('bg-', 'text-')}`} />
    </div>
    <h3 className="text-xl font-serif font-bold text-brand-darkBlue mb-3">{title}</h3>
    <p className="text-stone-600 text-sm leading-relaxed">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  const features: FeatureProps[] = [
    {
      icon: Laptop,
      title: "Remote Learning",
      description: "Secure, home-based education utilizing encrypted communication tools to reach students safely.",
      colorClass: "bg-orange-500 text-orange-600"
    },
    {
      icon: GraduationCap,
      title: "Women-Led Teaching",
      description: "Empowering female educators to continue their profession and mentor the next generation.",
      colorClass: "bg-brand-darkBlue text-brand-darkBlue"
    },
    {
      icon: ShieldCheck,
      title: "Safety First",
      description: "Confidential programs with strict security protocols to protect identities of students and staff.",
      colorClass: "bg-brand-teal text-brand-teal"
    },
    {
      icon: Globe2,
      title: "Global Support",
      description: "Funded by international donors and partnered with global NGOs to ensure sustainability.",
      colorClass: "bg-cyan-600 text-cyan-600"
    }
  ];

  return (
    <section className="py-20" id="programs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-darkBlue relative inline-block">
            Creating Access to Education — Safely
            <span className="absolute -bottom-2 left-1/4 right-1/4 h-1 bg-amber-200/60 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Dotted line connector for desktop */}
          <div className="hidden lg:block absolute top-14 left-0 w-full h-0.5 border-t-2 border-dashed border-stone-300/50 -z-10" />
          
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};