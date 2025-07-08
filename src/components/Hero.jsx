import React, { useMemo, useCallback } from 'react';
import heroImg from '../assets/Image.jfif';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  // Memoize particle positions to prevent recalculation
  const particles = useMemo(() => 
    Array.from({ length: 40 }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
      size: Math.random() * 3 + 1
    })), []
  );

  // Memoize social links data
  const socialLinks = useMemo(() => [
    {
      name: 'github',
      href: 'https://github.com/Mustafatahir98',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: 'linkedin',
      href: 'https://www.linkedin.com/in/mustafa-tahir-952094229/',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'email',
      href: 'mailto:mustafatahir14.mt@gmail.com',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
        </svg>
      )
    }
  ], []);

  const handleScrollToContact = useCallback((e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-900 relative overflow-hidden pt-24 sm:pt-20">
      {/* Optimized animated particles */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((particle) => (
          <div 
            key={particle.id}
            className="absolute bg-gradient-to-r from-orange-400 to-red-500 rounded-full opacity-60 animate-pulse"
            style={{
              top: `${particle.top}%`,
              left: `${particle.left}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-red-500/10 to-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12 relative z-10">
        {/* Enhanced Image Container - Now first on mobile */}
        <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] mx-auto order-1 lg:order-1 mt-4 sm:mt-0">
          {/* Outer glow ring */}
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-full blur-2xl opacity-30 animate-pulse" />
          
          {/* Rotating border */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 p-1 animate-spin-slow">
            <div className="w-full h-full rounded-full bg-black" />
          </div>
          
          {/* Main image container */}
          <div className="relative aspect-square rounded-full overflow-hidden border-4 border-transparent bg-clip-padding backdrop-blur-xl group transform transition-all duration-700 hover:scale-105">
            <img 
              src={heroImg} 
              alt="Mustafa Tahir - Full Stack Developer" 
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
              loading="eager"
            />
            
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-orange-400 to-red-500 rounded-full animate-bounce opacity-80" />
          <div className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-red-400 to-orange-500 rounded-full animate-bounce opacity-80" style={{ animationDelay: '0.5s' }} />
        </div>

        {/* Enhanced Content Container */}
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-2">
          <div className="overflow-hidden">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-2 sm:mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-orange-300 via-red-400 to-orange-300 bg-clip-text text-transparent bg-300% animate-gradient">
                Mustafa Tahir
              </span>
            </h1>
          </div>

          <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium mb-4 sm:mb-6 min-h-[40px] sm:min-h-[50px] lg:min-h-[60px] flex items-center justify-center lg:justify-start">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'WordPress Expert',
                2000,
                'MERN Stack Specialist',
                2000,
                'PHP Developer',
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-gray-300 font-mono bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <p className="text-sm sm:text-base lg:text-lg text-gray-300/90 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
            Transforming ideas into exceptional digital experiences. 
            <span className="text-orange-400 font-medium"> 4 years of expertise</span> in 
            crafting scalable, high-performance web solutions that drive results.
          </p>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 justify-center lg:justify-start pt-4 sm:pt-6">
            <a
              href="https://drive.google.com/file/d/1Z9ZVdLzwomfbAT2T_RdstW1lmjP0LluF/view"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30 hover:scale-105 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Download Resume</span>
              <svg className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            <button
              onClick={handleScrollToContact}
              className="group relative px-5 sm:px-6 md:px-8 py-3 sm:py-4 text-white font-semibold rounded-full border-2 border-orange-400/40 hover:border-orange-400 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/20 hover:scale-105 flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
            >
              <span className="relative z-10">Let's Connect</span>
              <div className="relative z-10 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse" />
            </button>
          </div>

          {/* Enhanced Social Links */}
          <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 pt-6 sm:pt-8 lg:pt-12">
            {socialLinks.map((social, index) => (
              <a 
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-2 sm:p-3 lg:p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:bg-white/10 hover:scale-110 hover:-translate-y-1 shadow-lg hover:shadow-xl"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-gray-300 group-hover:text-orange-400 transition-colors duration-300">
                  <div className="w-5 h-5 sm:w-6 sm:h-6">
                    {social.icon}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-gradient {
          background-size: 300% 300%;
          animation: gradient 4s ease infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .bg-300\\% {
          background-size: 300% 300%;
        }
      `}</style>
    </section>
  );
};

export default Hero;
