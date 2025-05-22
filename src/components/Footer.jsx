import React from 'react';
import logo from '../assets/favicon.png';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-gray-900 via-black to-gray-900 backdrop-blur-xl">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-600/20 opacity-10" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Branding */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <a 
              href="/" 
              className="group flex items-center space-x-3 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="relative w-12 h-12">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
                <img 
                  src={logo} 
                  alt="Logo" 
                  className="relative z-10 w-full h-full object-contain p-1.5" 
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                Mustafa Tahir
              </span>
            </a>
            <p className="text-sm text-gray-400 text-center md:text-left">
              Crafting digital excellence through innovative solutions
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">Get in Touch</h3>
            <a 
              href="mailto:mustafatahir14.@gmail.com" 
              className="text-gray-300 hover:text-orange-400 transition-colors relative group"
            >
              <span className="relative z-10">mustafatahir14.@gmail.com</span>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-orange-400/0 via-orange-400/50 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href="tel:+923146672465" 
              className="text-gray-300 hover:text-orange-400 transition-colors relative group"
            >
              <span className="relative z-10">+92 314 6672465</span>
              <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-orange-400/0 via-orange-400/50 to-orange-400/0 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <h3 className="text-lg font-semibold text-white mb-2">Connect With Me</h3>
            <div className="flex space-x-6">
              {['github', 'linkedin', 'email'].map((icon, index) => (
                <a 
                  key={index}
                  href="#"
                  className="p-3 rounded-xl bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl border border-white/10 hover:border-orange-400/30"
                >
                 {icon === 'github' && (
  <a 
    href="https://github.com/Mustafatahir98" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <svg 
      className="w-7 h-7 text-gray-300 hover:text-orange-400 transition-colors" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
  </a>
)}

                {icon === 'linkedin' && (
  <a 
    href="https://www.linkedin.com/in/mustafa-tahir-952094229/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    <svg 
      className="w-7 h-7 text-gray-300 hover:text-orange-400 transition-colors" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  </a>
)}

                {icon === 'email' && (
  <a 
    href="mailto:mustafatahir14.mt@gmail.com"
    target="_blank"
    rel="noopener noreferrer"
  >
    <svg 
      className="w-7 h-7 text-gray-300 hover:text-orange-400 transition-colors" 
      fill="currentColor" 
      viewBox="0 0 24 24"
    >
      <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
    </svg>
  </a>
)}

                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Mustafa Tahir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
