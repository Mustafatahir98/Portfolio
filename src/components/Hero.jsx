import React from 'react';
import heroImg from '../assets/Image.jfif';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden pt-20">
      {/* Animated particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Circular Image Container */}
        <div className="relative w-full max-w-[500px] mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-full blur-3xl opacity-20 animate-pulse" />
          
          <div className="relative group aspect-square rounded-full overflow-hidden border-4 border-transparent bg-clip-padding backdrop-blur-xl">
            {/* Rotating outline */}
            <div className="absolute inset-0 rounded-full border-[3px] border-transparent animate-rotate-border">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-400 to-red-600 opacity-30" />
            </div>
            
            <img 
              src={heroImg} 
              alt="Mustafa Tahir" 
              className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-105"
            />
            
            {/* Floating effect */}
            <div className="absolute inset-0 rounded-full shadow-2xl animate-float-image" />
          </div>
          
          {/* Outer glow */}
          <div className="absolute -inset-8 bg-gradient-to-r from-orange-400 to-red-600 rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="space-y-8 text-center lg:text-left">
          <div className="overflow-hidden">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-300 via-red-400 to-orange-300 bg-clip-text text-transparent animate-text-glow">
                Mustafa Tahir
              </span>
            </h1>
          </div>

          <div className="text-xl lg:text-2xl font-medium mb-8 min-h-[60px]">
            <TypeAnimation
              sequence={[
                'Wordpress Developer',
                1500,
                'PHP Specialist',
                1500,
                'MERN Stack Expert',
                1500,
              ]}
              wrapper="div"
              speed={40}
              className="text-gray-300 font-mono bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text text-transparent"
              cursor={true}
              repeat={Infinity}
              style={{ display: 'inline-block' }}
            />
          </div>

          <p className="text-lg text-gray-300/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
            Crafting digital excellence through full-stack development expertise. 
            Specializing in high-performance solutions with 3+ years of experience 
            in modern web technologies and client-focused implementations.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mt-12">
            <a
              href="https://drive.google.com/file/d/1ke9JYe_oFKXzc91tAEv70zoKrvKp0ta3/view?usp=sharing"
              download
              className="relative px-8 py-4 rounded-full text-white font-medium flex items-center gap-3 group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-600 opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity mix-blend-overlay" />
              <span className="relative z-10">Download CV</span>
              <svg className="relative z-10 w-5 h-5 animate-bounce-vertical" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            <a
              href="#contact"
              className="relative px-8 py-4 rounded-full text-white font-medium flex items-center gap-3 group overflow-hidden border-2 border-orange-400/30 hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 to-red-600/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="relative z-10">Let's Connect</span>
              <div className="relative z-10 w-5 h-5 bg-orange-400 rounded-full animate-pulse" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-5 mt-16 animate-staggered-appear">
            {['github', 'linkedin', 'email'].map((icon, index) => (
              <a 
                key={index}
                href="#"
                className="p-3 rounded-full bg-white/5 backdrop-blur-lg hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 shadow-lg hover:shadow-xl border border-white/10 hover:border-orange-400/30"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {icon === 'github' && (
                  <svg className="w-7 h-7 text-gray-300 hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
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
                  <svg className="w-7 h-7 text-gray-300 hover:text-orange-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(251, 146, 60, 0); }
          50% { text-shadow: 0 0 20px rgba(251, 146, 60, 0.5); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-20px) scale(1.1); }
        }

        @keyframes float-image {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        @keyframes staggered-appear {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-rotate-border {
          animation: rotate-border 20s linear infinite;
        }

        .animate-text-glow {
          animation: text-glow 3s ease-in-out infinite;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-image {
          animation: float-image 6s ease-in-out infinite;
        }

        .animate-staggered-appear a {
          animation: staggered-appear 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Hero;
