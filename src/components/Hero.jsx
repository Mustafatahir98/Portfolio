import React from 'react';
import heroImg from '../assets/Image.jfif';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16">
        {/* Image Container */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-64 h-64 lg:w-96 lg:h-96 mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-600 rounded-full animate-spin-slow blur-xl opacity-30" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-transparent bg-clip-padding backdrop-blur-xl bg-gray-800/30 shadow-2xl">
            <img 
              src={heroImg} 
              alt="Mustafa Tahir" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Content Container */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500 mb-4"
          >
            Mustafa Tahir
          </motion.h1>

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
              className="text-gray-100"
              cursor={true}
              repeat={Infinity}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            Full-stack developer with 3+ years crafting digital experiences. Expertise in WordPress, MERN stack, and Python, complemented by server management skills and client-focused solutions.
          </motion.p>

          {/* Buttons & Socials */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <a
              href="https://drive.google.com/file/d/1ke9JYe_oFKXzc91tAEv70zoKrvKp0ta3/view?usp=sharing"
              download
              className="px-8 py-3.5 rounded-xl bg-gradient-to-br from-orange-500 to-red-600 text-white font-medium hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 flex items-center gap-2"
            >
              <span>Download CV</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            <a
              href="#contact"
              className="px-8 py-3.5 rounded-xl border border-gray-600 hover:border-transparent bg-gray-800/50 hover:bg-gradient-to-br from-orange-500 to-red-600 text-white font-medium hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300"
            >
              Let's Connect
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center lg:justify-start gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
              <FiGithub size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
              <FiLinkedin size={24} />
            </a>
            <a href="mailto:your@email.com" className="text-gray-400 hover:text-orange-400 transition-colors">
              <FiMail size={24} />
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
