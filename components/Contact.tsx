import React from 'react';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const comments = formData.get('comments');

    // Construct mailto link
    // Note: The 'email' field from the form is included in the body 
    // because mailto uses the user's default email client configuration for the 'From' address.
    const mailtoLink = `mailto:info@wete.ca?subject=${encodeURIComponent(subject as string)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${comments}`)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        
        {/* Contact Info Side */}
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-4">Contact Information</h3>
            <p className="text-stone-600 leading-relaxed">
              We are here to help. Reach out to us for any inquiries about our programs, partnerships, or how you can get involved.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start gap-4 p-5 bg-white/60 backdrop-blur-sm rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-brand-teal/10 rounded-full text-brand-teal flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-darkBlue mb-1 text-lg">Our Office</h4>
                <p className="text-stone-600 leading-relaxed">1000 Finch Ave West, North York,<br/>Ontario, Canada, M3J 2C7</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white/60 backdrop-blur-sm rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-brand-teal/10 rounded-full text-brand-teal flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-darkBlue mb-1 text-lg">Phone</h4>
                <a href="tel:+16475402575" className="text-stone-600 hover:text-brand-teal transition-colors block py-1">+1 647 540 2575</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white/60 backdrop-blur-sm rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-brand-teal/10 rounded-full text-brand-teal flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-darkBlue mb-1 text-lg">Email</h4>
                <a href="mailto:relations@wete.ca" className="text-stone-600 hover:text-brand-teal transition-colors block py-1">relations@wete.ca</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-white/60 backdrop-blur-sm rounded-xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="p-3 bg-brand-teal/10 rounded-full text-brand-teal flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-brand-darkBlue mb-1 text-lg">Office Hours</h4>
                <p className="text-stone-600">10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-stone-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-sand/30 rounded-bl-full -mr-12 -mt-12"></div>
          
          <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-2">Send us a Message</h3>
          <p className="text-stone-500 text-sm mb-6">Fill out the form below and we'll get back to you as soon as possible.</p>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-stone-700 mb-1">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all bg-stone-50"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-stone-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all bg-stone-50"
                placeholder="Enter your email"
              />
            </div>

             <div>
              <label htmlFor="subject" className="block text-sm font-medium text-stone-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                required 
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all bg-stone-50"
                placeholder="What is this regarding?"
              />
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-stone-700 mb-1">Comments</label>
              <textarea 
                id="comments" 
                name="comments" 
                rows={5} 
                required 
                className="w-full px-4 py-3 border border-stone-300 rounded-lg focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all bg-stone-50 resize-none"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <Button type="submit" className="w-full justify-center text-lg mt-2">
              Send Message <Send className="w-4 h-4 ml-2" />
            </Button>
            
            <p className="text-xs text-center text-stone-400 mt-4">
              This form will open your default email client to send a message to info@wete.ca
            </p>
          </form>
        </div>

      </div>
    </div>
  );
};