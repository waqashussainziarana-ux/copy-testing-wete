import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; toggle: () => void }> = ({ item, isOpen, toggle }) => {
  return (
    <div className="border-b border-stone-200 last:border-0">
      <button 
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={toggle}
      >
        <span className={`text-lg font-serif font-medium transition-colors ${isOpen ? 'text-brand-teal' : 'text-brand-darkBlue group-hover:text-brand-teal'}`}>
          {item.question}
        </span>
        <span className="ml-6 flex-shrink-0 text-brand-accent">
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-stone-600 leading-relaxed">
          {item.answer}
        </p>
      </div>
    </div>
  );
};

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    {
      question: "What is the mission of WETE?",
      answer: "Women's Empowerment Through Education (WETE) is dedicated to providing accessible, safe, and quality education to women and girls in Afghanistan who have been denied their fundamental right to learn. We aim to increase literacy and empower women to address poverty and violence."
    },
    {
      question: "Is WETE a registered organization?",
      answer: "Yes, WETE is a registered Non-Profit organization in Canada (Registration Number: 768964462RR0001). We operate with full transparency and compliance with Canadian non-profit regulations."
    },
    {
      question: "How does WETE ensure the safety of its students?",
      answer: "Safety is our absolute priority. We utilize discreet, home-based learning environments and secure remote communication tools. All programs are designed with strict confidentiality protocols to protect the identities of both students and educators."
    },
    {
      question: "Where do my donations go?",
      answer: "Your donations directly fund our educational programs. This includes providing learning materials (books, stationery), supporting teacher salaries, maintaining secure learning spaces, and developing remote learning infrastructure."
    },
    {
      question: "Can I volunteer with WETE?",
      answer: "Yes! We welcome passionate individuals who want to contribute their skills. Whether you have expertise in education, fundraising, social media, or administration, please contact us at relations@wete.ca to discuss how you can help."
    },
    {
      question: "How can I contact WETE?",
      answer: "You can reach us by email at relations@wete.ca or by phone at +1 647 540 2575. Our office is located at 1000 Finch Ave West, North York, Ontario, Canada, M3J 2C7."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-brand-darkBlue mb-4">
            Commonly Asked Questions
          </h2>
          <p className="text-stone-600">
            Learn more about our work, our mission, and how you can make a difference.
          </p>
        </div>

        <div className="bg-white/40 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-sm border border-stone-100">
          {faqs.map((faq, index) => (
            <FAQItemComponent 
              key={index} 
              item={faq} 
              isOpen={openIndex === index} 
              toggle={() => toggleFAQ(index)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};