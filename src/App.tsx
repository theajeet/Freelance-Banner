import React from 'react';
import FreelancerBanner from './components/FreelancerBanner';

function App() {
  // Replace with your actual contact information
  const contactInfo = {
    name: "Ajeet Kuntal",
    title: "Freelance Web Developer",
    phone: "+91 8171956052",
    email: "ajeetkuntal0005@gmail.com",
    linkedin: "https://www.linkedin.com/in/ajeet-kuntal-301a50286/",
    portfolio: "#"
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero section with banner */}
      <section className="w-full bg-gradient-to-b from-gray-900 to-gray-800 py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <FreelancerBanner contactInfo={contactInfo} />
        </div>
      </section>
      
      {/* Additional content section */}
      <section className="max-w-7xl mx-auto py-12 px-4 sm:px-6">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">About My Services</h2>
          <p className="text-gray-600 mb-6">
            I specialize in creating modern, responsive websites and web applications
            tailored to meet your specific business needs. With expertise in the latest
            web technologies, I deliver high-quality solutions that help your business thrive online.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <ServiceCard 
              title="Frontend Development" 
              description="Creating beautiful, responsive user interfaces with React, and other modern frameworks."
            />
            <ServiceCard 
              title="Backend Development" 
              description="Building robust APIs and server-side applications using Node.js, Express, and databases."
            />
            <ServiceCard 
              title="Full-Stack Solutions" 
              description="End-to-end web application development from concept to deployment."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 hover:shadow-md transition-shadow duration-300">
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default App;