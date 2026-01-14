import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from './Button';

export const Hero: React.FC = () => {
  const navigate = useNavigate();

  const handleDonate = () => {
    window.open("https://gofund.me/5233f0ce", "_blank");
  };

  const handleLearnMore = () => {
    navigate('/programs/our-first-project');
  };

  return (
    <section className="relative pt-12 pb-32 lg:pt-28 lg:pb-48 overflow-hidden">
      {/* 
         NOTE: Global fixed desert background is visible behind this section.
      */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content - Order 2 on mobile (bottom), Order 1 on desktop (left) */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
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

          {/* Image Area - Order 1 on mobile (top), Order 2 on desktop (right) */}
          <div className="relative flex justify-center lg:justify-end lg:mt-0 order-1 lg:order-2">
             {/* 
                New Image Layout: Arched Portrait 
                Replaces the previous 'scarves girls' illustration.
                Styled with an arch (rounded-t-full) to evoke Islamic architecture/windows 
                and blend better with the portrait aspect ratio.
             */}
             <div className="relative w-64 sm:w-80 lg:w-[26rem] xl:w-[30rem] mx-auto lg:mr-0 transition-all duration-500">
                  
                  {/* Decorative Background Blobs for blending */}
                  <div className="absolute -inset-4 bg-brand-sand/60 rounded-t-[12rem] rounded-b-3xl blur-md -z-10 transform rotate-3 scale-105"></div>
                  <div className="absolute -inset-4 bg-brand-teal/20 rounded-t-[12rem] rounded-b-3xl blur-md -z-10 transform -rotate-2 scale-105"></div>

                  {/* Main Image Container */}
                  <div className="relative rounded-t-[12rem] rounded-b-3xl overflow-hidden shadow-2xl border-[6px] border-white/90 group">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/en/b/b4/Sharbat_Gula.jpg" 
                        alt="Afghan Girl - Sharbat Gula" 
                        className="w-full h-auto object-cover transform scale-105 group-hover:scale-110 transition-transform duration-[2s]"
                      />
                      
                      {/* Overlays to blend with the site theme */}
                      <div className="absolute inset-0 bg-brand-darkBlue/10 mix-blend-overlay"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-darkBlue/50 via-transparent to-transparent opacity-80"></div>
                      
                      {/* Texture overlay */}
                      <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay" 
                           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/cream-paper.png")` }}>
                      </div>
                  </div>
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