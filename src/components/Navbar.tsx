import React, { useState, useEffect } from 'react';
import { BedIcon } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center">
          <BedIcon className="h-8 w-8 text-blue-800" />
          <span className={`ml-2 text-xl font-bold ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
            Dedicated Sleep
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;