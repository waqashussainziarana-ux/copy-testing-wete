import React from 'react';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const handleDonate = () => {
    window.open("https://gofund.me/5233f0ce", "_blank");
  };

  const handleLearnMore = () => {
    window.location.href = "#contact";
  };

  return (
    <section className="relative pt-12 pb-32 lg:pt-24 lg:pb-48 overflow-hidden">
      {/* 
         NOTE: Local background hills removed. 
         Now using the global fixed desert background from index.html 
      */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="font-serif text-4xl lg:text-5xl xl:text-6xl font-bold text-brand-darkBlue leading-[1.15]">
              Education Is Her Right — <br />
              <span className="text-brand-darkBlue">Even When It Is Denied</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-stone-600 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Supporting safe, discreet education programs for women and girls in Afghanistan.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button variant="primary" className="text-lg px-8 py-3 shadow-lg" onClick={handleDonate}>
                Donate Now
              </Button>
              <Button variant="secondary" className="text-lg px-8 py-3 shadow-lg" onClick={handleLearnMore}>
                Learn How We Help
              </Button>
            </div>
          </div>

          {/* Illustration / Image Area */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="relative w-full max-w-lg">
                <img 
                  src="https://wete.ca/wp-content/uploads/2026/01/ChatGPT-Image-Jan-13-2026-04_44_15-PM.png" 
                  alt="Afghan women reading illustration" 
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
                />
            </div>
          </div>
        </div>
      </div>
      
      {/* Smooth Transition to next section - reduced opacity to blend with global bg */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#F9F5EB]/50 to-transparent"></div>
    </section>
  );
};