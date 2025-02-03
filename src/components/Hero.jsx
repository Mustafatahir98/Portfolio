import React from 'react';
import heroImg from '../assets/Image.jfif';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 sm:px-6 lg:px-8 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Container */}
        <div 
          className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto"
          style={{
            animation: 'float 6s ease-in-out infinite'
          }}
        >
          <div 
            className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-full"
            style={{
              animation: 'spin 12s linear infinite',
              filter: 'blur(20px)',
              opacity: '0.3'
            }}
          />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-clip-padding backdrop-blur-xl bg-gray-800/30 shadow-2xl">
            <img 
              src={heroImg} 
              alt="Mustafa Tahir" 
              className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-105"
              style={{
                boxShadow: '0 0 40px rgba(251, 146, 60, 0.2)'
              }}
            />
          </div>
        </div>

        {/* Content Container */}
        <div className="space-y-8 text-center lg:text-left">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            style={{
              background: 'linear-gradient(45deg, #fb923c, #dc2626)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '0 4px 20px rgba(251, 146, 60, 0.3)'
            }}
          >
            Mustafa Tahir
          </h1>

          <div className="text-xl lg:text-2xl font-medium text-gray-300 mb-6">
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
              style={{
                color: '#f3f4f6',
                textShadow: '0 2px 10px rgba(255,255,255,0.1)'
              }}
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <p className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0">
            Full-stack developer with 3+ years crafting digital experiences. Expertise in WordPress, MERN stack, and Python, complemented by server management skills and client-focused solutions.
          </p>

          {/* Buttons & Socials */}
          <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
            <a
              href="https://drive.google.com/file/d/1ke9JYe_oFKXzc91tAEv70zoKrvKp0ta3/view?usp=sharing"
              download
              className="px-8 py-3.5 rounded-xl text-white font-medium flex items-center gap-2 transition-all duration-300"
              style={{
                background: 'linear-gradient(45deg, #fb923c, #dc2626)',
                boxShadow: '0 4px 20px rgba(251, 146, 60, 0.3)'
              }}
              onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
              onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
            >
              <span>Download CV</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl border text-white font-medium transition-all duration-300 hover:border-transparent"
              style={{
                borderColor: '#374151',
                background: 'rgba(31, 41, 55, 0.5)',
                backdropFilter: 'blur(10px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'linear-gradient(45deg, #fb923c, #dc2626)';
                e.target.style.boxShadow = '0 4px 20px rgba(251, 146, 60, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(31, 41, 55, 0.5)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Let's Connect
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start gap-6 mt-8">
            {['github', 'linkedin', 'email'].map((icon, index) => (
              <a 
                key={index}
                href="#"
                className="text-gray-400 hover:text-orange-400 transition-colors duration-300"
                style={{
                  filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))'
                }}
              >
                {icon === 'github' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                )}
                {icon === 'linkedin' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                )}
                {icon === 'email' && (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
                  </svg>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default Hero;
