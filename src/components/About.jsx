import React from 'react';
import aboutImg from '../assets/about-4.jpg';

const About = () => {
  return (
    <section id="about" className="relative overflow-hidden py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Animated background elements */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Container */}
          <div className="relative group flex justify-center lg:justify-end">
            <div className="relative z-10 w-[450px] h-[450px] rounded-2xl overflow-hidden border-4 border-transparent bg-clip-padding backdrop-blur-xl bg-gray-800/30 shadow-2xl">
              <img 
                src={aboutImg} 
                alt="Mustafa Tahir" 
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <div className="absolute -inset-8 bg-gradient-to-r from-orange-400 to-red-600 rounded-2xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-300"></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient-shine">
                About Me
              </span>
            </h2>

            <ul className="space-y-6">
              {[
                "Proficient in WordPress, PHP, C++, Python, and the MERN Stack",
                "Skilled in Monday.com for task management and project execution",
                "Experienced in CI/CD workflows with GitHub Actions",
                "Backend development using Node.js and Python Flask",
                "WordPress speed optimization & custom plugin development",
                "OAuth 2.0 integrations & task automation"
              ].map((item, index) => (
                <li 
                  key={index}
                  className="flex items-start pl-8 relative before:absolute before:left-0 before:top-2 before:w-4 before:h-4 before:bg-gradient-to-r before:from-orange-400 before:to-red-600 before:rounded-full before:animate-pulse"
                >
                  <div className="bg-gradient-to-r from-orange-400/10 to-red-600/10 backdrop-blur-sm p-6 rounded-xl w-full transition-all duration-300 hover:translate-x-4 hover:shadow-xl hover:shadow-orange-500/10">
                    <p className="text-gray-300 text-lg leading-relaxed">{item}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes gradient-shine {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 0.8; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.95); }
        }

        .animate-gradient-shine {
          animation: gradient-shine 6s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
};

export default About;
