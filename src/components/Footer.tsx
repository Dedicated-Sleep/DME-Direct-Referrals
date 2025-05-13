import React from 'react';
import { BedIcon, PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, LinkedinIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <BedIcon className="h-6 w-6 text-blue-300" />
              <span className="ml-2 text-xl font-bold">Dedicated Sleep</span>
            </div>
            <p className="text-blue-200 mb-4">
              Connecting patients with oral appliance therapy as an alternative to CPAP treatment for sleep apnea.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <FacebookIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-200 hover:text-white transition-colors">
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Patient Journey', 'Our Role', 'For DMEs', 'Provider Network', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {['For Patients', 'For Providers', 'For DMEs', 'Sleep Apnea Info', 'OAT vs CPAP', 'Insurance'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <PhoneIcon className="h-5 w-5 text-blue-300 mt-1 mr-3" />
                <span>(800) 555-1234</span>
              </li>
              <li className="flex items-start">
                <MailIcon className="h-5 w-5 text-blue-300 mt-1 mr-3" />
                <span>info@dedicatedsleep.com</span>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-blue-300 mt-1 mr-3" />
                <span>123 Sleep Center Dr.<br />Suite 100<br />Healthyville, CA 91234</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-8 text-center text-blue-300">
          <p>&copy; {new Date().getFullYear()} Dedicated Sleep. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;