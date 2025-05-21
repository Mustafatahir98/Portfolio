import React from 'react';
import aboutImg from '../assets/about-4.jpg'; // Using the original image reference

const About = () => {
  const skills = [
    { name: 'WordPress/PHP' },
    { name: 'MERN Stack' },
    { name: 'Python/Flask' },
    { name: 'CI/CD Pipelines' },
    { name: 'Server Management' },
    { name: 'API Integration' },
  ];

  const achievements = [
    { icon: "🚀", title: "Performance First", desc: "Lighthouse-optimized solutions with 90+ scores" },
    { icon: "🔒", title: "Secure by Design", desc: "Enterprise-grade security implementations" },
    { icon: "🔄", title: "Scalable Architecture", desc: "Solutions that grow with your business" },
    { icon: "⚡", title: "Rapid Development", desc: "Agile workflow with continuous delivery" }
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Enhanced background effect */}
      <div className="absolute inset-0 [background:radial-gradient(circle_800px_at_100%_200px,#f9731625,transparent)]" />
      
      {/* Animated accent lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(3)].map((_, i) => (
          <div 
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-orange-500 to-transparent w-full opacity-70"
            style={{
              top: `${25 + i * 25}%`,
              left: 0,
              animation: `flow 8s ${i * 2}s infinite linear`
            }}
          />
        ))}
      </div>
      
      {/* Subtle floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.4,
              animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-sm font-semibold tracking-wider text-orange-400 uppercase mb-2">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent">
              Digital Craftsmanship
            </span>
          </h3>
          <div className="h-1 w-20 bg-gradient-to-r from-orange-400 to-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile content */}
          <div className="order-2 lg:order-1 space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Full-stack architect specializing in high-performance web solutions. With 3+ years of experience, 
              I bridge the gap between technical excellence and business value through innovative, robust, and scalable solutions.
            </p>

            {/* Skills showcase without percentages */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-white">Core Expertise</h4>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-xl border border-white/10 bg-black/30 backdrop-blur-sm hover:border-orange-400/40 hover:bg-black/40 transition-all group"
                  >
                    <span className="text-gray-300 group-hover:text-orange-400 transition-colors font-medium">
                      {skill.name}
                    </span>
                    <div className="mt-2 h-1 bg-gradient-to-r from-orange-400 to-red-600 rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>

            {/* Achievement cards with upgraded design */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-6">Development Philosophy</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {achievements.map((item, index) => (
                  <div 
                    key={index}
                    className="p-5 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10 hover:border-orange-400/30 transition-all group relative overflow-hidden"
                  >
                    {/* Glowing effect on hover */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-red-600 rounded-xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
                    
                    <div className="relative">
                      <div className="flex items-center mb-3">
                        <span className="text-2xl mr-3">{item.icon}</span>
                        <h5 className="text-orange-400 font-medium group-hover:text-orange-300 transition-colors">
                          {item.title}
                        </h5>
                      </div>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced image presentation */}
          <div className="order-1 lg:order-2">
            <div className="relative group perspective-1000">
              {/* Main image with creative framing */}
              <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/50 backdrop-blur-sm transform transition-all duration-700 hover:rotate-y-6">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-red-600/20 mix-blend-overlay" />
                
                {/* Image with proper reference */}
                <img 
                  src={aboutImg} 
                  alt="Profile" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Vignette effect */}
                <div className="absolute inset-0 [background:radial-gradient(circle_at_center,transparent_60%,#000_100%)]" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-orange-500/30 rounded-tr-2xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-orange-500/30 rounded-bl-2xl" />
              
              {/* Glow effect */}
              <div className="absolute -inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-3xl opacity-0 group-hover:opacity-15 blur-2xl transition-opacity duration-300" />
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
};

export default About;
