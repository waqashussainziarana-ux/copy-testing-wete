import React from 'react';
import { HeartHandshake, Users, Lock, Activity } from 'lucide-react';
import { StepProps } from '../types';

const StepCard: React.FC<StepProps> = ({ number, icon: Icon, title, description, isLast }) => (
  <div className="relative flex-1 p-6 text-center">
    {/* Arrow for desktop */}
    {!isLast && (
      <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 text-stone-300">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </div>
    )}
    
    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-brand-sand shadow-md mb-6 relative z-10">
      <Icon className="w-10 h-10 text-brand-darkBlue" />
      <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-brand-accent text-white font-bold flex items-center justify-center shadow-md border border-white">
        {number}
      </span>
    </div>
    
    <h3 className="text-lg font-serif font-bold text-brand-darkBlue mb-2">{number}. {title}</h3>
    <p className="text-stone-600 text-sm">{description}</p>
  </div>
);

export const Process: React.FC = () => {
  const steps: StepProps[] = [
    {
      number: 1,
      icon: HeartHandshake,
      title: "You Donate",
      description: "Your contribution funds education initiatives directly."
    },
    {
      number: 2,
      icon: Users,
      title: "Trusted Partners",
      description: "We work with experienced, vetted local educators."
    },
    {
      number: 3,
      icon: Lock,
      title: "Safe Learning",
      description: "Women and girls learn in secure, monitored ways."
    },
    {
      number: 4,
      icon: Activity,
      title: "Ongoing Monitoring",
      description: "We ensure safety protocols and educational progress."
    }
  ];

  return (
    <section className="py-20 border-y border-stone-200/50 bg-brand-sand/30 backdrop-blur-[2px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-darkBlue">
            How Your Support Makes Education Possible
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
};