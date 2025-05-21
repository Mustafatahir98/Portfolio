import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import react from '../assets/react.png'
import node from '../assets/node.png'

const Skills = () => {
  const skills = [
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'JavaScript', icon: javascript },
    { name: 'React', icon: react },
    { name: 'Node.js', icon: node },
    { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs/000000/fff.svg' },
    { name: 'PHP', icon: 'https://cdn.simpleicons.org/php/777BB4/fff.svg' },
    { name: 'AWS', icon: 'https://cdn.simpleicons.org/amazonaws/FF9900/fff.svg' },
    { name: 'Azure', icon: 'https://cdn.simpleicons.org/microsoftazure/0089D6/fff.svg' },
    { name: 'HubSpot', icon: 'https://cdn.simpleicons.org/hubspot/FF7A59/fff.svg' },
    { name: 'SalesMessage', icon: 'https://cdn.simpleicons.org/salesforce/1796E5/fff.svg' }, // Approximation
    { name: 'Express', icon: 'https://cdn.simpleicons.org/express/000000/fff.svg' },
    { name: 'WordPress', icon: 'https://cdn.simpleicons.org/wordpress/21759B/fff.svg' },
  ]

  return (
    <div className="relative py-12 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl border border-white/10 p-8 shadow-2xl backdrop-blur-xl">
          {/* Animated background elements */}
          <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-red-600/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-gradient-to-r from-red-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-orange-400 via-red-500 to-orange-400 bg-clip-text text-transparent bg-300% animate-gradient-shine">
              Tech Stack
            </span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index}
                className="group relative flex flex-col items-center p-6 rounded-2xl transition-all duration-300 hover:bg-white/5 hover:-translate-y-2"
              >
                <div className="absolute inset-0 border border-white/10 rounded-2xl group-hover:border-orange-500/30 transition-colors duration-300"></div>
                <div className="relative z-10 mb-4 w-20 h-20 md:w-24 md:h-24 p-4 bg-gradient-to-br from-gray-800 to-black rounded-xl shadow-lg flex items-center justify-center">
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-orange-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <span className="text-gray-300 text-sm md:text-base font-medium transition-colors duration-300 group-hover:text-orange-400">
                  {skill.name}
                </span>
              </div>
            ))}
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
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }

        .animate-gradient-shine {
          animation: gradient-shine 6s ease infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  )
}

export default Skills
