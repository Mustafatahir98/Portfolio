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
    const onScroll = () => {
      setScroll(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (nav) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [nav]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scroll ? 'backdrop-blur-xl bg-black/80 py-3' : 'backdrop-blur-lg bg-black/40 py-4'
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
            <div className="relative w-10 h-10 transition-transform duration-500 group-hover:rotate-[30deg]">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-rose-500 rounded-full blur opacity-30 animate-pulse"></div>
              <img
                src={logo}
                alt="Logo"
                className="relative z-10 w-full h-full object-contain p-1"
              />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-rose-500 bg-clip-text text-transparent">
              Mustafa Tahir
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['about', 'work', 'contact'].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                onClick={(e) => scrollToSection(e, section)}
                className="relative px-4 py-2 text-gray-300 hover:text-white transition-all group"
              >
                <span className="relative z-10 capitalize">{section}</span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-amber-400 to-rose-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={handleNav}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {nav ? (
              <AiOutlineClose className="w-6 h-6 text-amber-400" />
            ) : (
              <AiOutlineMenu className="w-6 h-6 text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Right Sidebar with Glowy Gradient */}
      <div
        className={`fixed top-0 right-0 h-screen z-50 transform transition-transform duration-300 ease-in-out
          w-[70vw] rounded-l-3xl
          bg-gradient-to-br from-amber-400 via-orange-300 to-rose-500
          shadow-lg drop-shadow-xl
          backdrop-blur-md
          ${
            nav ? 'translate-x-0' : 'translate-x-full'
          }
        `}
      >
        <button
          onClick={handleNav}
          className="self-end m-6 text-white text-3xl hover:text-gray-900 transition-colors"
          aria-label="Close menu"
        >
          <AiOutlineClose />
        </button>
        <nav className="flex flex-col justify-center items-center h-[calc(100vh-72px)] space-y-10 text-white text-2xl font-semibold px-8">
          {['home', 'about', 'work', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => scrollToSection(e, section)}
              className="hover:text-gray-900 transition-colors"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
