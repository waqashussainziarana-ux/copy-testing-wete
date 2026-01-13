import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleDonate = () => {
    window.open("https://gofund.me/5233f0ce", "_blank");
  };

  const handleLearnMore = () => {
    navigate('/programs');
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
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-darkBlue leading-tight">
              Education Is Her Right <br />
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
            {/* 
                Mobile: w-[150%] -ml-[25%] -> Large on mobile
                Tablet (sm): w-full max-w-xl -> Reset to contained
                Desktop (lg): w-[110%] -mr-[5%] -> Reduced slightly to fix proportion
                XL: w-[120%] -mr-[10%] -> Reduced slightly
            */}
            <div className="relative w-[150%] -ml-[25%] sm:w-full sm:ml-0 sm:max-w-xl lg:max-w-none lg:w-[110%] lg:-mr-[5%] xl:w-[120%] xl:-mr-[10%] transition-all duration-500">
                <img 
                  src="https://wete.ca/wp-content/uploads/2026/01/ChatGPT-Image-Jan-13-2026-04_44_15-PM.png" 
                  alt="Afghan women reading illustration" 
                  className="w-full h-auto object-contain drop-shadow-2xl rounded-xl"
                />
            </div>
          </div>
        </div>
      </div>
      
      {/* Curved Separator at the bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-20">
        <svg 
          className="relative block w-full h-[50px] md:h-[100px]" 
          data-name="Layer 1" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,42.7C672,32,768,32,864,42.7C960,53,1056,75,1152,80C1248,85,1344,75,1392,69.3L1440,64L1440,320L0,320Z" 
            className="fill-white/30"
          ></path>
        </svg>
      </div>
    </section>
  );
};