import React, { useState, useEffect } from 'react';
import logo from '../assets/favicon.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleNav = () => setNav(!nav);

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setNav(false); // Close the mobile menu after navigation
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [nav]);

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        scroll ? 'backdrop-blur-xl bg-black/80 py-2' : 'backdrop-blur-lg bg-black/40 py-3'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center space-x-2 group"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:rotate-[30deg]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-full blur opacity-30 animate-pulse"></div>
              <img
                src={logo}
                alt="Logo"
                className="relative z-10 w-full h-full object-contain p-1"
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Mustafa Tahir
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-all group"
            >
              <span className="relative z-10">About</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-red-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-all group"
            >
              <span className="relative z-10">Work</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-red-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="relative px-4 py-2 text-gray-300 hover:text-white transition-all group"
            >
              <span className="relative z-10">Contact</span>
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-red-600 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleNav}
            className="md:hidden flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              <span className={`absolute h-0.5 w-full bg-gray-300 transform transition-all duration-300 ${nav ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
              <span className={`absolute h-0.5 bg-gray-300 transform transition-all duration-300 ${nav ? 'opacity-0 w-0' : 'opacity-100 w-full'}`}></span>
              <span className={`absolute h-0.5 w-full bg-gray-300 transform transition-all duration-300 ${nav ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu - using a dialog-like approach for better accessibility */}
      <div 
        className={`fixed inset-0 z-40 transition-opacity duration-300 ${
          nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className="absolute inset-0 bg-black opacity-80"
          onClick={handleNav}
        ></div>
        
        <div 
          className={`fixed inset-y-0 right-0 w-full max-w-xs bg-gray-900 shadow-xl transform transition-transform duration-300 ease-in-out ${
            nav ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end p-4">
            <button 
              onClick={handleNav}
              className="p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close menu"
            >
              <svg className="w-6 h-6 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="flex flex-col px-4 pt-2 pb-8 h-full">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="py-4 text-xl font-medium text-gray-300 hover:text-orange-400 transition-colors border-b border-gray-800"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="py-4 text-xl font-medium text-gray-300 hover:text-orange-400 transition-colors border-b border-gray-800"
            >
              About
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className="py-4 text-xl font-medium text-gray-300 hover:text-orange-400 transition-colors border-b border-gray-800"
            >
              Work
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="py-4 text-xl font-medium text-gray-300 hover:text-orange-400 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />
    </nav>
  );
};

export default Navbar;
