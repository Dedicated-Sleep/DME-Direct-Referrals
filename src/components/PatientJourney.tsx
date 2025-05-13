import React, { useState, useEffect, useRef } from 'react';
import { ActivityIcon, UsersIcon, MessageCircleIcon, CheckCircleIcon, PlayCircleIcon, FlagIcon, ChevronDownIcon } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

interface JourneyStep {
  id: string;
  title: string;
  description: string;
  note: string;
  icon: React.ReactNode;
  color: string;
}

const PatientJourney: React.FC = () => {
  const [expandedNote, setExpandedNote] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const steps: JourneyStep[] = [
    {
      id: 'navigator',
      title: 'Navigator Onboards Patient',
      description: 'Dedicated Sleep Navigator contacts the patient and ensures onboarding through protocol.',
      note: 'Patients receive help with scheduling, education, and expectations.',
      icon: <MessageCircleIcon className="h-5 w-5" />,
      color: 'bg-blue-700'
    },
    {
      id: 'acceptance',
      title: 'Patient Accepts OAT Treatment',
      description: 'The patient agrees to begin oral appliance therapy for sleep issues.',
      note: 'Acceptance allows us to proceed to clinical matching and care initiation.',
      icon: <CheckCircleIcon className="h-5 w-5" />,
      color: 'bg-blue-800'
    },
    {
      id: 'provider',
      title: 'Introduced to Dental Provider',
      description: 'The patient is connected with a vetted Network Dental Provider.',
      note: 'We match patients based on insurance, availability, and treatment needs.',
      icon: <UsersIcon className="h-5 w-5" />,
      color: 'bg-blue-900'
    },
    {
      id: 'treatment',
      title: 'Treatment Initiated',
      description: 'Oral appliance therapy begins through the dental provider.',
      note: 'Provider delivers appliance and begins therapy plan.',
      icon: <ActivityIcon className="h-5 w-5" />,
      color: 'bg-blue-600'
    }
  ];

  return (
    <section ref={sectionRef} id="patient-journey" className="relative py-12 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <AnimatedSection animation="fade-up">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-blue-900 mb-2">The Patient's Journey</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-sky-400 mx-auto mb-3"></div>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Our streamlined process ensures patients receive the care they need while keeping physicians informed every step of the way.
            </p>
          </div>
        </AnimatedSection>

        <div className="max-w-5xl mx-auto pb-12">
          <div className="relative">
            <AnimatedSection animation="fade-up" className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center">
              <div className="inline-flex items-center bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-1.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <PlayCircleIcon className="h-4 w-4 mr-1.5" />
                <span className="font-semibold text-sm">Journey Start</span>
              </div>
            </AnimatedSection>

            <div className="absolute left-1/2 transform -translate-x-1/2 top-10 h-full w-1 bg-gradient-to-b from-blue-200 to-blue-400 rounded-full"></div>

            <div className="pt-14">
              {steps.map((step, index) => (
                <AnimatedSection
                  key={step.id}
                  animation={index % 2 === 0 ? 'fade-left' : 'fade-right'}
                  delay={index * 200}
                  className="mb-8 last:mb-0"
                >
                  <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-4' : 'pl-4'}`}>
                      <div className="relative group">
                        <div 
                          className={`relative ${step.color} rounded-lg p-4 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer transform hover:-translate-y-1`}
                          onClick={() => setExpandedNote(expandedNote === step.id ? null : step.id)}
                        >
                          <div className="flex items-center text-white mb-2 gap-2">
                            <div className="bg-white/10 rounded-lg p-1.5">
                              {step.icon}
                            </div>
                            <h3 className="text-base font-bold">{step.title}</h3>
                          </div>
                          <p className="text-blue-50 text-xs leading-relaxed">{step.description}</p>
                          
                          <div className="absolute bottom-2 right-2">
                            <ChevronDownIcon 
                              className={`h-4 w-4 text-white/70 transition-transform duration-300 ${
                                expandedNote === step.id ? 'rotate-180' : ''
                              }`}
                            />
                          </div>
                        </div>

                        {expandedNote === step.id && (
                          <div className="absolute left-0 right-0 top-full mt-2 z-20 transform transition-all duration-300 scale-in">
                            <div className="bg-white rounded-lg shadow-xl p-3 border border-blue-100">
                              <p className="text-gray-700 text-sm">{step.note}</p>
                              <div className="mt-2 flex items-center gap-2 text-blue-600 bg-blue-50 p-2 rounded-lg">
                                <ActivityIcon className="h-4 w-4 flex-shrink-0" />
                                <p className="text-xs font-medium">
                                  The prescribing physician receives timely updates and maintains Continuity of Care
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="relative w-6">
                      <div className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 ${step.color} rounded-full border-3 border-white shadow-lg`}></div>
                    </div>

                    <div className="w-1/2"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection animation="fade-up" className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 text-center pt-12">
              <div className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-1.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ">
                <FlagIcon className="h-4 w-4 mr-1.5" />
                <span className="font-semibold text-sm">Journey Complete</span>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientJourney;