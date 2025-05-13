import React from 'react';
import { ShieldIcon, NetworkIcon, HeadphonesIcon } from 'lucide-react';

const IndustryRole: React.FC = () => {
  return (
    <section id="our-role" className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-blue-800 to-blue-900 py-6 px-8">
        <h2 className="text-2xl font-bold text-white">Our Role in the Industry</h2>
      </div>
      
      <div className="p-8">
        <p className="text-gray-700 mb-6">
          As a DME, you continue to provide home sleep testing or CPAP equipment. 
          <span className="font-semibold text-blue-900"> Dedicated Sleep's</span> sole 
          focus is to help your patient referrals access expert alternative care with the 
          national leader in oral appliances.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <NetworkIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-blue-900">Extensive Provider Network</h3>
              <p className="text-gray-600">Over 1,500 contracted dental sleep medicine providers.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <HeadphonesIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-blue-900">Seamless Patient Support</h3>
              <p className="text-gray-600">We handle benefit verifications and manage OOP costs, including financing.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <ShieldIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-semibold text-blue-900">Patient Data Protection</h3>
              <p className="text-gray-600">HIPAA-compliant processes and secure patient information handling.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <img 
            src="https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Healthcare professional with patient" 
            className="w-full h-48 object-cover rounded-lg shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default IndustryRole;