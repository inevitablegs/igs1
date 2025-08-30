import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaCode, FaRocket } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setShowScrollIndicator(scrollY < 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          {/* Profile Image */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-8"
          >
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-primary-700 p-1 shadow-glow">
              <div className="w-full h-full rounded-full bg-dark-300 flex items-center justify-center">
                <FaCode className="text-6xl text-primary-400" />
              </div>
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-4"
          >
            <span className="text-primary-400 text-lg font-medium">👋 Hi, I'm</span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary-200 to-primary-400 bg-clip-text text-transparent"
          >
            GS (Ganesh Sonawane)
          </motion.h1>

          {/* Typing Animation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mb-8"
          >
            <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
              <span className="text-primary-400">Software Developer</span> | 
              <span className="text-primary-400"> Game Developer</span> | 
              <span className="text-primary-400"> AI Enthusiast</span>
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            I'm passionate about crafting smart applications and engaging games that solve real problems and entertain. 
            Combining AI, full-stack development, and game design, I strive to create practical and enjoyable solutions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:from-primary-600 hover:to-primary-800"
            >
              <FaRocket className="text-lg" />
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary-500 text-primary-400 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:bg-primary-500/10 hover:border-primary-400"
            >
              <FaDownload className="text-lg" />
              Download CV
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center gap-6"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/inevitablegs', label: 'GitHub' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/inevitable-gs', label: 'LinkedIn' },
              { icon: FaTwitter, href: 'https://x.com/inevitable_gs', label: 'Twitter' },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -5 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-gray-400 hover:text-primary-400 transition-all duration-300 text-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 + index * 0.1 }}
                >
                  <IconComponent />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Floating particles or decorative elements instead of scroll indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            onClick={() => scrollToSection('#about')}
            className="cursor-pointer text-primary-400 text-2xl hover:text-primary-300 transition-colors duration-300"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Hero;
