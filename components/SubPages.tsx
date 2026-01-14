import React from 'react';
import { Button } from './Button';

// -- ABOUT US SUB-PAGES --

export const MissionStatement: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-12 text-center sm:text-left">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Our Mission</h3>
    <div className="prose prose-lg text-stone-600 leading-relaxed">
      <p>
        Women's Empowerment Through Education (WETE) is dedicated to providing accessible, safe, and quality education to women and girls who have been denied their fundamental right to learn.
      </p>
      <p>
        Our mission is to dismantle barriers to learning and create safe pathways for academic and personal growth. We believe that by equipping women with knowledge and skills, we not only transform individual lives but uplift entire communities.
      </p>
    </div>
  </div>
);

export const Vision: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-12 text-center sm:text-left">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Our Vision</h3>
    <div className="prose prose-lg text-stone-600 leading-relaxed">
      <p className="text-xl font-medium text-brand-teal mb-8">
        "A world where every woman has the agency to shape her own future through education."
      </p>
      <p>
        We envision a society where knowledge is accessible to all, regardless of gender or geography. We strive for a future where Afghan women can participate fully in society, contribute to the economy, and lead with confidence.
      </p>
    </div>
  </div>
);

export const WhoWeAre: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-12 text-center sm:text-left">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Who We Are</h3>
    <div className="prose prose-lg text-stone-600 leading-relaxed">
      <p>
        WETE is a collective of educators, activists, and community organizers united by a shared belief in the transformative power of education. Based in Canada, we work directly with trusted partners on the ground to deliver impact where it is needed most.
      </p>
      <p>
        We operate with transparency, integrity, and an unwavering commitment to the safety of our students and staff.
      </p>
    </div>
  </div>
);

export const RegistrationStatus: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-12 text-center sm:text-left">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Legal Status</h3>
    <div className="prose prose-lg text-stone-600 leading-relaxed bg-white/50 p-8 rounded-lg border border-stone-200">
      <p className="mb-4">
        Women's Empowerment Through Education (WETE) is a registered Non-Profit Organization in Canada. We comply with all Canadian regulations regarding non-profit governance and financial transparency.
      </p>
      <div className="inline-block bg-brand-sand/50 px-6 py-3 rounded-md border border-brand-accent/30">
        <span className="font-bold text-brand-darkBlue">Registration Number:</span> 
        <span className="font-mono text-brand-teal ml-2">768964462RR0001</span>
      </div>
    </div>
  </div>
);

// -- PROGRAMS SUB-PAGES --

export const OurFirstProject: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Project: Literacy for All</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="prose text-stone-600 leading-relaxed">
        <p className="mb-4">
          Our inaugural initiative focuses on providing basic literacy and numeracy education to girls in rural provinces who currently have no access to formal schooling.
        </p>
        <p>
          Utilizing safe, home-based classrooms, we connect students with qualified female teachers. The curriculum includes reading, writing, basic mathematics, and critical thinking skills.
        </p>
        <ul className="list-disc pl-5 space-y-2 mt-4 text-brand-darkBlue">
          <li>Safe, home-based learning environments</li>
          <li>Qualified female educators</li>
          <li>Provided learning materials (books, stationery)</li>
        </ul>
      </div>
      <div className="bg-brand-sand/30 p-6 rounded-xl border border-white">
        <img src="https://wete.ca/wp-content/uploads/2021/05/IMG_6448-2-scaled.jpg" alt="Literacy Class" className="rounded-lg shadow-md mb-4 w-full h-48 object-cover" />
        <p className="text-sm text-stone-500 italic text-center">Students engaging in reading exercises.</p>
      </div>
    </div>
  </div>
);

export const Funding: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-12 text-center sm:text-left">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">How We Are Funded</h3>
    <div className="prose prose-lg text-stone-600 leading-relaxed">
      <p>
        WETE relies entirely on the generosity of private individuals, international grants, and fundraising events. We do not receive government funding, allowing us to remain independent and agile in our operations.
      </p>
      <p>
        <strong>Transparency Pledge:</strong> We are committed to ensuring that the maximum possible percentage of every donation goes directly to educational programs, teacher salaries, and student supplies.
      </p>
    </div>
  </div>
);

export const BecomeDonor: React.FC = () => {
  const handleDonate = () => {
    window.open("https://gofund.me/5233f0ce", "_blank");
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 text-center">
      <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Become a Donor</h3>
      <p className="text-stone-600 mb-8 max-w-xl mx-auto">
        Your consistent support is the lifeline of our programs. By becoming a monthly donor, you ensure that a girl in Afghanistan can continue her education without interruption.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="donate" className="text-lg px-8 py-4" onClick={handleDonate}>
          Donate Online
        </Button>
      </div>
      <p className="text-sm text-stone-500 mt-6">
        Tax receipts are issued for all eligible donations at the end of the fiscal year.
      </p>
    </div>
  );
};

export const MailDonations: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-12 text-center sm:text-left">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Donate by Mail</h3>
    <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200">
      <p className="text-stone-600 mb-6">
        We gratefully accept donations by cheque. Please make cheques payable to <strong>"Women's Empowerment Through Education"</strong> and mail them to our Canadian office:
      </p>
      <div className="bg-brand-sand/30 p-6 rounded-lg font-mono text-brand-darkBlue inline-block text-left">
        <p>WETE</p>
        <p>1000 Finch Ave West</p>
        <p>North York, Ontario</p>
        <p>Canada, M3J 2C7</p>
      </div>
      <p className="text-sm text-stone-500 mt-6">
        Please include your return address and email so we can send you a confirmation and tax receipt.
      </p>
    </div>
  </div>
);

// -- NETWORK SUB-PAGES --

export const NetworkWhoWeAre: React.FC = () => (
  <div className="max-w-3xl mx-auto px-4 py-12 text-center sm:text-left">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Our Network</h3>
    <div className="prose prose-lg text-stone-600 leading-relaxed">
      <p>
        We do not work in isolation. WETE is part of a global network of humanitarian organizations, academic institutions, and local community leaders.
      </p>
      <ul className="list-disc pl-5 space-y-3 mt-4">
        <li><strong>Local Partners:</strong> Trusted community elders and educators who manage day-to-day operations.</li>
        <li><strong>International NGOs:</strong> Partners who provide logistical support and advocacy.</li>
        <li><strong>Academic Advisors:</strong> Education specialists who help design our curriculum.</li>
      </ul>
    </div>
  </div>
);

// -- LEGAL / FOOTER PAGES --

export const PrivacyPolicy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Privacy Policy</h3>
    <div className="prose text-stone-600 leading-relaxed text-sm">
      <p className="mb-4">Last Updated: January 2026</p>
      <p className="mb-4">
        Women's Empowerment Through Education ("WETE", "we", "us") is committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information.
      </p>
      <h4 className="font-bold text-brand-darkBlue mt-4 mb-2">1. Information We Collect</h4>
      <p className="mb-4">
        We collect information you provide directly to us, such as when you donate, sign up for our newsletter, or contact us. This may include your name, email address, postal address, and payment information.
      </p>
      <h4 className="font-bold text-brand-darkBlue mt-4 mb-2">2. How We Use Your Information</h4>
      <p className="mb-4">
        We use your information to process donations, send tax receipts, communicate with you about our programs, and comply with legal obligations.
      </p>
      <h4 className="font-bold text-brand-darkBlue mt-4 mb-2">3. Data Security</h4>
      <p>
        We implement appropriate technical and organizational measures to protect your personal data against unauthorized access or disclosure.
      </p>
    </div>
  </div>
);

export const CookiePolicy: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Cookie Policy</h3>
    <div className="prose text-stone-600 leading-relaxed text-sm">
      <p className="mb-4">
        This website uses cookies to enhance your browsing experience and analyze site traffic.
      </p>
      <p className="mb-4">
        <strong>What are cookies?</strong> Cookies are small text files stored on your device when you visit a website.
      </p>
      <p>
        We use essential cookies to make our site work and analytics cookies to understand how visitors interact with our content. You can control cookies through your browser settings.
      </p>
    </div>
  </div>
);

export const TermsConditions: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-12">
    <h3 className="text-2xl font-serif font-bold text-brand-darkBlue mb-6">Terms and Conditions</h3>
    <div className="prose text-stone-600 leading-relaxed text-sm">
      <p className="mb-4">
        Welcome to the WETE website. By accessing this site, you agree to comply with these terms and conditions.
      </p>
      <h4 className="font-bold text-brand-darkBlue mt-4 mb-2">1. Use of Content</h4>
      <p className="mb-4">
        All content on this website, including text, images, and logos, is the property of WETE. You may not reproduce or distribute this content without our prior written permission.
      </p>
      <h4 className="font-bold text-brand-darkBlue mt-4 mb-2">2. Donations</h4>
      <p className="mb-4">
        All donations are final. If you believe an error has occurred in processing your donation, please contact us immediately.
      </p>
      <h4 className="font-bold text-brand-darkBlue mt-4 mb-2">3. Limitation of Liability</h4>
      <p>
        WETE is not liable for any damages arising from your use of this website.
      </p>
    </div>
  </div>
);