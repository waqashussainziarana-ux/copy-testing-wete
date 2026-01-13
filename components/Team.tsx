import React from 'react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio?: string;
  image: string;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, bio, image }) => (
  <div className="group text-center flex flex-col items-center h-full">
    <div className="relative mb-6 w-40 h-40 overflow-hidden rounded-full border-4 border-white/60 shadow-lg bg-brand-sand/30">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 bg-white/50"
      />
    </div>
    <h3 className="text-xl font-serif font-bold text-brand-darkBlue mb-1">{name}</h3>
    <p className="text-sm text-brand-teal font-bold uppercase tracking-wide mb-3">{role}</p>
    {bio && (
      <p className="text-stone-600 text-sm leading-relaxed max-w-xs mx-auto">
        {bio}
      </p>
    )}
  </div>
);

export const Team: React.FC = () => {
  // Faceless suit for male (Colorful style)
  const maleAvatar = "https://cdn-icons-png.flaticon.com/512/4042/4042356.png"; 
  // Faceless suit for female (Colorful style matching male)
  const femaleAvatar = "https://cdn-icons-png.flaticon.com/512/4042/4042422.png"; 

  const members = [
    {
      name: "Haroon Rahimi",
      role: "CEO & Founder",
      bio: "The Chief Executive Officer and founder of WETE has a degree in business as well as a diverse experience in entrepreneurship and management.",
      image: maleAvatar
    },
    {
      name: "Andreas Endresen",
      role: "Chief Operating Officer",
      bio: "The Chief Operating Officer of WETE has degrees in biology, psychology, and biotechnology as well as a diverse experience in operations and management.",
      image: maleAvatar
    },
    {
      name: "Sahar Shams",
      role: "Director of Advancement",
      bio: "The Director of Advancement at WETE has a diploma in Transportation Engineering Technology and has a diverse experience in human relations and customer services.",
      image: femaleAvatar
    },
    {
      name: "Laila M.",
      role: "Director of Public Relations",
      bio: "The Director of Public Relations at WETE studies psychology at York University in Toronto, Canada and has diverse work experiences from grassroots/non-profit organizations.",
      image: femaleAvatar
    },
    {
      name: "Haroon Rashid",
      role: "Ambassador",
      bio: "Director of Strategy & Development",
      image: maleAvatar
    }
  ];

  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-darkBlue mb-4">
            Meet Our Dedicated Team
          </h2>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Our diverse team of educators, activists, and coordinators work tirelessly to ensure education remains accessible to all.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-12 gap-x-8 justify-center">
          {members.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};