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
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
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

      {/* Mobile Menu - Completely Redesigned */}
      {nav && (
        <div className="fixed inset-0 bg-black z-50">
          {/* Header */}
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-800">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8">
                <img src={logo} alt="Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-orange-400">
                Mustafa Tahir
              </span>
            </div>
            
            <button 
              onClick={handleNav}
              className="p-2 text-gray-400 hover:text-white"
              aria-label="Close menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          {/* Menu Items - Stack vertically with proper spacing */}
          <div className="px-6 py-8">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                onClick={(e) => scrollToSection(e, 'home')}
                className="block py-4 text-center text-2xl font-medium text-white border-b border-gray-800"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={(e) => scrollToSection(e, 'about')}
                className="block py-4 text-center text-2xl font-medium text-white border-b border-gray-800"
              >
                About
              </a>
              <a
                href="#work"
                onClick={(e) => scrollToSection(e, 'work')}
                className="block py-4 text-center text-2xl font-medium text-white border-b border-gray-800"
              >
                Work
              </a>
              <a
                href="#contact"
                onClick={(e) => scrollToSection(e, 'contact')}
                className="block py-4 text-center text-2xl font-medium text-white"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Social Icons - Fixed at bottom */}
          <div className="absolute bottom-12 left-0 w-full">
            <div className="flex justify-center space-x-8">
              <a href="#" className="p-3 rounded-full text-gray-400 hover:text-white">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="p-3 rounded-full text-gray-400 hover:text-white">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="p-3 rounded-full text-gray-400 hover:text-white">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Animated Border */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-400/50 to-transparent" />
    </nav>
  );
};

export default Navbar;
