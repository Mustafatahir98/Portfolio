import React from 'react';
import aboutImg from '../assets/about-4.jpg';

const About = () => {
  const skills = [
    { name: 'WordPress/PHP', level: 95 },
    { name: 'MERN Stack', level: 90 },
    { name: 'Python/Flask', level: 85 },
    { name: 'CI/CD Pipelines', level: 88 },
    { name: 'Server Management', level: 92 },
    { name: 'API Integration', level: 90 },
  ];

  return (
    <section id="about" className="relative overflow-hidden py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Holographic grid background */}
      <div className="absolute inset-0 z-0 opacity-20 [background:radial-gradient(circle_800px_at_100%_200px,#f9731625,transparent)]" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0 animate-fade-in">
        {[...Array(30)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s infinite`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Holographic image panel */}
          <div className="relative group perspective-1000">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-xl transform transition-all duration-700 hover:rotate-x-12 hover:rotate-y-12">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-600/20" />
              <img 
                src={aboutImg} 
                alt="Mustafa Tahir" 
                className="w-full h-full object-cover opacity-90 mix-blend-luminosity"
              />
              <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_60%,#000_100%)]" />
              <div className="absolute -inset-8 bg-gradient-to-r from-orange-400 to-red-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-300" />
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8">
            <h2 className="text-5xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
                Digital Craftsmanship
              </span>
              <div className="h-1 w-24 bg-gradient-to-r from-orange-400 to-red-600 mt-4 rounded-full" />
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Full-stack architect specializing in high-performance web solutions. With 3+ years of experience, I bridge the gap between technical excellence and business value through:
            </p>

            {/* Skill matrix */}
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="p-4 rounded-xl border border-white/10 bg-gradient-to-b from-black/30 to-transparent hover:border-orange-400/30 transition-all group"
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300 group-hover:text-orange-400 transition-colors">
                      {skill.name}
                    </span>
                    <span className="text-orange-400/80">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-orange-400 to-red-600 rounded-full transition-all duration-500"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Unique selling points */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 rounded-xl border border-white/10 bg-black/20 hover:bg-black/40 transition-all">
                <h3 className="text-orange-400 mb-2">🚀 Performance First</h3>
                <p className="text-sm text-gray-300">Lighthouse-optimized solutions with 90+ scores</p>
              </div>
              <div className="p-4 rounded-xl border border-white/10 bg-black/20 hover:bg-black/40 transition-all">
                <h3 className="text-orange-400 mb-2">🔒 Secure by Design</h3>
                <p className="text-sm text-gray-300">Enterprise-grade security implementations</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-x-12 {
          transform: rotateX(12deg);
        }

        .rotate-y-12 {
          transform: rotateY(12deg);
        }
      `}</style>
    </section>
  );
};

export default About;
