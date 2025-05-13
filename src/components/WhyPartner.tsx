import React from 'react';
import { BadgeCheckIcon, HeartPulseIcon, DollarSignIcon, ArrowRightIcon } from 'lucide-react';

const WhyPartner: React.FC = () => {
  const benefits = [
    {
      title: "Increased Patient Satisfaction",
      icon: <HeartPulseIcon className="h-5 w-5" />,
      description: "By collaborating with Dedicated Sleep, DME providers can ensure their patients receive the care they need while maintaining 100% control over all CPAP services."
    },
    {
      title: "Therapy Adherence",
      icon: <BadgeCheckIcon className="h-5 w-5" />,
      description: "Seamless path to oral appliance therapy, improving overall treatment adherence rates."
    },
    {
      title: "Affordable Care",
      icon: <DollarSignIcon className="h-5 w-5" />,
      description: "Most insurance plans accepted, making alternative treatments accessible to more patients."
    },
    {
      title: "Easy Referrals",
      icon: <ArrowRightIcon className="h-5 w-5" />,
      description: "Simple CPAP alternative process with minimal administrative burden."
    }
  ];

  return (
    <section id="for-dmes" className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 py-6 px-8">
        <h2 className="text-2xl font-bold text-white">Why Partner with Dedicated Sleep?</h2>
      </div>
      
      <div className="p-8">
        <p className="text-gray-700 mb-8">
          Join our network of satisfied DME partners who trust us with their patient referrals for oral appliance therapy.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="benefit-card bg-blue-50 rounded-lg p-6 border border-blue-100"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow transition duration-300 inline-flex items-center">
            Join Our Network
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyPartner;