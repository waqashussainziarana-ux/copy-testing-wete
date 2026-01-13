import React from 'react';

export const Gallery: React.FC = () => {
  const images = [
    {
      src: "https://wete.ca/wp-content/uploads/2021/05/IMG_6435-3-scaled.jpg",
      caption: "Learning in every environment"
    },
    {
      src: "https://wete.ca/wp-content/uploads/2021/05/IMG_6448-2-scaled.jpg",
      caption: "A future built on books"
    },
    {
      src: "https://wete.ca/wp-content/uploads/2021/05/IMG_6484-2-1-scaled.jpg",
      caption: "The power of the written word"
    },
    {
      src: "https://wete.ca/wp-content/uploads/2021/05/IMG_6457-2-1-scaled.jpg",
      caption: "Community and collaboration"
    }
  ];

  return (
    <section id="gallery" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-darkBlue mb-2">
              Our Work in Action
            </h2>
            <p className="text-stone-600">Glimpses into the daily impact of our programs for Afghan girls.</p>
          </div>
          <a href="#contact" className="text-brand-teal font-medium hover:text-brand-darkBlue transition-colors flex items-center gap-1">
            Contact &rarr;
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-md aspect-video border-4 border-white/60">
              <img 
                src={img.src} 
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-6 font-medium tracking-wide">{img.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};