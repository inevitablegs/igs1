import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaDownload, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero: React.FC = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Inevitable gs';
  
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'AI Developer',
    'Game Creator',
    'Python Developer',
    'Problem Solver'
  ];

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(roleInterval);
  }, [roles.length]);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cosmic Background */}
      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
      
      {/* Floating mystical particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-mystic-purple rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              x: [-10, 10],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          {/* Profile Image with Mystical Aura */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative w-48 h-48 mx-auto mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-mystic-purple via-mystic-lavender to-ethereal-violet animate-cosmic-rotation"></div>
            <div className="absolute inset-2 rounded-full bg-supernatural-dark border-2 border-mystic-glow overflow-hidden">
              <img
                src="/api/placeholder/180/180"
                alt="Ganesh"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-mystic-purple/30 via-transparent to-ethereal-blue/20 rounded-full"></div>
            </div>
            {/* Floating orbs around profile */}
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-3 h-3 bg-mystic-glow rounded-full"
                style={{
                  top: `${20 + Math.sin((i * Math.PI) / 3) * 60}px`,
                  left: `${20 + Math.cos((i * Math.PI) / 3) * 60}px`,
                }}
                animate={{
                  scale: [0.8, 1.2, 0.8],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>

          {/* Mystical Name with Typing Effect */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mystical-window max-w-4xl mx-auto mb-8"
          >
            <div className="mystical-header">
              <span className="text-mystic-glow">◈</span> WELCOME
            </div>
            <div className="p-8 font-elegant">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 mystical-text">
                {typedText}
                <span className="animate-pulse text-mystic-glow">|</span>
              </h1>
              <div className="text-2xl md:text-3xl font-mystical text-ethereal-blue mb-6">
                <motion.span
                  key={currentRole}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block ethereal-glow"
                >
                  {roles[currentRole]}
                </motion.span>
              </div>
            </div>
          </motion.div>

          {/* Mystical Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mystical-window max-w-4xl mx-auto mb-12"
          >
            <div className="mystical-header">
              <span className="text-ethereal-pink">◇</span> About Me
            </div>
            <div className="p-6 font-elegant text-mystic-lavender">
              <p className="mb-4 leading-relaxed text-lg">
                I build smart applications using AI and machine learning to solve real problems.
              </p>
              <p className="mb-4 leading-relaxed text-lg">
                I love creating games, web apps, and tools that make people's lives easier.
              </p>
              <p className="text-ethereal-blue">
                Currently focused on AI development and creating meaningful digital experiences.
              </p>
            </div>
          </motion.div>

          {/* Mystical Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
            className="flex flex-col sm:flex-row gap-8 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('#projects')}
              className="supernatural-button px-8 py-4 text-lg font-bold relative group"
            >
              <FaRocket className="inline mr-3 group-hover:animate-float" />
              View My Work
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="supernatural-button px-8 py-4 text-lg font-bold relative group border-ethereal-pink text-ethereal-pink hover:bg-ethereal-pink"
            >
              <FaDownload className="inline mr-3 group-hover:animate-float" />
              Download Resume
            </motion.button>
          </motion.div>

          {/* Mystical Social Constellation */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex justify-center gap-8"
          >
            {[
              { icon: FaGithub, href: 'https://github.com/inevitablegs', label: 'GitHub', color: 'text-mystic-purple', glow: 'supernatural-glow' },
              { icon: FaLinkedin, href: 'https://www.linkedin.com/in/inevitable-gs', label: 'LinkedIn', color: 'text-ethereal-blue', glow: 'ethereal-glow' },
              { icon: FaTwitter, href: 'https://x.com/inevitable_gs', label: 'Twitter', color: 'text-ethereal-pink', glow: 'mystical-text' },
            ].map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ 
                    scale: 1.3, 
                    y: -10, 
                    rotateY: 360,
                    filter: "brightness(1.5)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 glass-card hover-lift transition-all duration-300 text-3xl ${social.color} relative group rounded-full`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 2.4 + index * 0.2 }}
                >
                  <IconComponent className="group-hover:animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 rounded-full"></div>
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
