import React from 'react';
import { PhoneIcon, MailIcon } from 'lucide-react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PatientJourney from './components/PatientJourney';
import './App.css';

function App() {
  return (
    <div className="font-sans bg-sky-50 min-h-screen">
      <main>
        <Hero />
        <HowItWorks />
        <PatientJourney />
        <section className="bg-gradient-to-r from-blue-800 to-blue-900 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Have questions or ready to partner?</h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 max-w-2xl mx-auto">
              <a href="tel:850-398-5533" className="flex items-center gap-3 text-xl hover:text-blue-200 transition-colors">
                <PhoneIcon className="h-6 w-6" />
                850-398-5533
              </a>
              <a href="mailto:referrals@dedicatedsleep.net" className="flex items-center gap-3 text-xl hover:text-blue-200 transition-colors">
                <MailIcon className="h-6 w-6" />
                referrals@dedicatedsleep.net
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;