import React from 'react';
import { CheckCircleIcon, ArrowRightIcon } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-blue-900 to-blue-700 flex items-center justify-center text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/3846035/pexels-photo-3846035.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundBlendMode: "overlay" 
          }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight fade-in">
            Receive Qualified OA Referrals
            <span className="block mt-2 text-sky-300">from the Largest OA Provider in the United States</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 fade-in opacity-90" style={{ animationDelay: '0.2s' }}>
            Dedicated Sleep has removed all friction from the process so you can focus on patient care. 
            We refer pre-qualified patients to your local office who are screened, diagnosed, and ready 
            for oral appliance therapy. You treat them — we handle everything else.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10 fade-in" style={{ animationDelay: '0.4s' }}>
            {[
              'Billing, DME & Claims',
              'Financial Verification & Patient Financing',
              'No patient hunting — just care and compensation'
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4">
                <CheckCircleIcon className="h-6 w-6 text-sky-300 flex-shrink-0" />
                <span className="text-left text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>
          
          <a 
            href="https://form.asana.com/?k=wTpMhH-4QVf3z-rJUpc7ug&d=114317148620698"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-4 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 fade-in flex items-center gap-2 mx-auto inline-flex"
            style={{ animationDelay: '0.6s' }}
          >
            Join the Network
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;