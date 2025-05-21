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

      {/* Full Screen Mobile Menu with better design */}
      <div 
        className={`fixed inset-0 z-40 bg-black transition-all duration-500 ${
          nav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Header with logo and close button */}
        <div className="flex justify-between items-center px-6 py-6 border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <div className="relative w-8 h-8 transition-transform">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-full blur opacity-30"></div>
              <img
                src={logo}
                alt="Logo"
                className="relative z-10 w-full h-full object-contain p-1"
              />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-orange-400 to-red-600 bg-clip-text text-transparent">
              Mustafa Tahir
            </span>
          </div>
          
          <button 
            onClick={handleNav}
            className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
            aria-label="Close menu"
          >
            <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        {/* Menu Items with improved styling */}
        <div className="flex flex-col items-center justify-center h-[calc(100%-80px)]">
          <div className="w-full max-w-md px-8">
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, 'home')}
              className="flex items-center justify-center py-6 text-2xl font-medium text-white hover:text-orange-400 transition-colors border-b border-gray-800 relative group"
            >
              <span>Home</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="flex items-center justify-center py-6 text-2xl font-medium text-white hover:text-orange-400 transition-colors border-b border-gray-800 relative group"
            >
              <span>About</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, 'work')}
              className="flex items-center justify-center py-6 text-2xl font-medium text-white hover:text-orange-400 transition-colors border-b border-gray-800 relative group"
            >
              <span>Work</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-600 group-hover:w-full transition-all duration-300"></div>
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, 'contact')}
              className="flex items-center justify-center py-6 text-2xl font-medium text-white hover:text-orange-400 transition-colors relative group"
            >
              <span>Contact</span>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-400 to-red-600 group-hover:w-full transition-all duration-300"></div>
            </a>
          </div>
          
          {/* Social links at bottom */}
          <div className="absolute bottom-8 left-0 w-full flex justify-center space-x-6">
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white hover:text-orange-400"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white hover:text-orange-400"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a 
              href="#" 
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-white hover:text-orange-400"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
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
