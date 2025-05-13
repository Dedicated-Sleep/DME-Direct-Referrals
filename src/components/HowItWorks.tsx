import React from 'react';
import { ClipboardCheckIcon, UserIcon, DollarSignIcon, CheckCircleIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <ClipboardCheckIcon className="h-6 w-6" />,
      title: "Dedicated Handles Everything",
      items: [
        "Screening",
        "Sleep Study",
        "Prescription",
        "Insurance Verification & Authorizations",
        "DME setup, patient payments, and financing"
      ]
    },
    {
      icon: <UserIcon className="h-6 w-6" />,
      title: "You Handle the Treatment",
      items: [
        "OA Exam",
        "Impressions / Bite Registration",
        "Device & DME Delivery",
        "Follow-up as needed"
      ]
    },
    {
      icon: <DollarSignIcon className="h-6 w-6" />,
      title: "We Pay You",
      items: [
        "Monthly payouts for all services rendered the prior month"
      ]
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-white to-sky-50/50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">How It Works – Easy as 1, 2, 3!</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto"></div>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <AnimatedSection
              key={index}
              animation="fade-up"
              delay={index * 150}
              className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-blue-800 to-blue-900 p-4 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative bg-white/10 rounded-full p-3 text-white transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  {step.icon}
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-blue-900 mb-3 text-center group-hover:text-blue-700 transition-colors duration-300">
                  {step.title}
                </h3>
                <ul className="space-y-2">
                  {step.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-2 group/item">
                      <CheckCircleIcon className="h-4 w-4 text-blue-600 flex-shrink-0 mt-1 group-hover/item:text-blue-500 transition-colors duration-300" />
                      <span className="text-sm text-gray-700 group-hover/item:text-gray-900 transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;