import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
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
      setNav(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${scroll ? 'backdrop-blur-xl bg-black/80 py-3' : 'backdrop-blur-lg bg-black/40 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, 'home')}
            className="flex items-center space-x-2 group"
          >
            <div className="relative w-10 h-10 transition-transform duration-500 group-hover:rotate-[30deg]">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-full blur opacity-30 animate-pulse"></div>
              <img 
                src={logo} 
                alt="Logo" 
                className="relative z-10 w-full h-full object-contain p-1" 
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
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
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {nav ? (
              <AiOutlineClose className="w-6 h-6 text-orange-400" />
            ) : (
              <AiOutlineMenu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed inset-0 z-40 transition-transform duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${nav ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-black/95 backdrop-blur-2xl">
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-3xl font-medium text-gray-300 hover:text-orange-400 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="text-3xl font-medium text-gray-300 hover:text-orange-400 transition-colors"
            >
              About
            </a>
            <a 
              href="#work" 
              onClick={(e) => scrollToSection(e, 'work')}
              className="text-3xl font-medium text-gray-300 hover:text-orange-400 transition-colors"
            >
              Work
            </a>
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, 'contact')}
              className="text-3xl font-medium text-gray-300 hover:text-orange-400 transition-colors"
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
