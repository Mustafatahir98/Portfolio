import React from 'react';

const About = () => {
  const skills = [
    { name: 'WordPress/PHP', level: 95 },
    { name: 'MERN Stack', level: 90 },
    { name: 'Python/Flask', level: 85 },
    { name: 'CI/CD Pipelines', level: 88 },
    { name: 'Server Management', level: 92 },
    { name: 'API Integration', level: 90 },
  ];

  const achievements = [
    { icon: "💡", title: "Performance First", desc: "Lighthouse-optimized solutions with 90+ scores" },
    { icon: "🔒", title: "Secure by Design", desc: "Enterprise-grade security implementations" },
    { icon: "🔄", title: "Scalable Architecture", desc: "Solutions that grow with your business" },
    { icon: "⚡", title: "Rapid Development", desc: "Agile workflow with continuous delivery" }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 via-slate-950 to-purple-900/20" />
      
      {/* Animated accent lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-indigo-500 to-transparent w-full opacity-70"
            style={{
              top: `${25 + i * 25}%`,
              left: 0,
              animation: `flow 8s ${i * 2}s infinite linear`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold tracking-wider text-indigo-400 uppercase mb-2">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Digital Craftsmanship</h3>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile content */}
          <div className="order-2 lg:order-1 space-y-8">
            <p className="text-lg text-slate-300 leading-relaxed">
              Full-stack architect specializing in high-performance web solutions. With 3+ years of experience, 
              I bridge the gap between technical excellence and business value through innovative, robust, and scalable solutions.
            </p>

            {/* Skills showcase with more elegant visualization */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Core Expertise</h4>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-300">{skill.name}</span>
                      <span className="text-indigo-400">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                        style={{ width: `${skill.level}%`, transition: "width 1s ease-in-out" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement cards with clean, minimalist design */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Development Philosophy</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((item, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-indigo-500/30 transition-all group"
                  >
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{item.icon}</span>
                      <h5 className="text-indigo-400 font-medium group-hover:text-indigo-300 transition-colors">
                        {item.title}
                      </h5>
                    </div>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Modern image presentation */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-2xl overflow-hidden group">
              {/* Main image with overlay */}
              <div className="aspect-w-4 aspect-h-5 bg-slate-900 rounded-2xl overflow-hidden">
                <div className="w-full h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-tl from-indigo-600/20 to-purple-700/30 mix-blend-overlay z-10" />
                  {/* Note: In a real implementation, use next/image or proper image optimization */}
                  <img 
                    src="/profile-image.jpg" 
                    alt="Mustafa Tahir" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-indigo-500/30 rounded-tr-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-indigo-500/30 rounded-bl-2xl" />
              
              {/* Glowing accent */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2/3 h-1/2 bg-indigo-600/20 blur-3xl rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* CSS animations */}
      <style jsx>{`
        @keyframes flow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </section>
  );
};

export default About;
