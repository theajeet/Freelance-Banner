import React from 'react';
import { Mail, Smartphone, Linkedin, Globe, ArrowRight } from 'lucide-react';

interface ContactInfo {
  name: string;
  title: string;
  phone: string;
  email: string;
  linkedin: string;
  portfolio: string;
}

interface FreelancerBannerProps {
  contactInfo: ContactInfo;
}

const FreelancerBanner: React.FC<FreelancerBannerProps> = ({ contactInfo }) => {
  const { name, title, phone, email, linkedin, portfolio } = contactInfo;

  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {/* Banner container with responsive padding */}
      <div className="p-6 md:p-8 lg:p-10">
        {/* Content wrapper */}
        <div className="max-w-5xl mx-auto bg-white/10 backdrop-blur-md rounded-lg p-6 md:p-8 shadow-lg border border-white/20">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            {/* Left section - Name and title */}
            <div className="space-y-2">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {name}
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-medium">
                {title}
              </p>
            </div>

            {/* Right section - Contact info */}
            <div className="space-y-3 w-full md:w-auto">
              {/* Contact links */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ContactLink 
                  icon={<Smartphone size={18} />} 
                  label="Mobile" 
                  value={phone} 
                  href={`tel:${phone.replace(/\s+/g, '')}`}
                />
                <ContactLink 
                  icon={<Mail size={18} />} 
                  label="Email" 
                  value={email} 
                  href={`mailto:${email}`}
                />
                <ContactLink 
                  icon={<Linkedin size={18} />} 
                  label="LinkedIn" 
                  value="Connect" 
                  href={linkedin}
                />
                <ContactLink 
                  icon={<Globe size={18} />} 
                  label="Portfolio" 
                  value="Visit" 
                  href={portfolio}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ContactLinkProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}

const ContactLink: React.FC<ContactLinkProps> = ({ icon, label, value, href }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 p-3 rounded-md bg-white/10 hover:bg-white/20 transition-all duration-300 group border border-white/10 hover:border-white/30"
    >
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white">
        {icon}
      </div>
      <div className="flex-grow min-w-0">
        <p className="text-xs text-white/70">{label}</p>
        <p className="text-sm font-medium text-white truncate">{value}</p>
      </div>
      <ArrowRight size={16} className="text-white/50 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300" />
    </a>
  );
};

export default FreelancerBanner;