import React from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGraduationCap, FaHeart, FaCode } from 'react-icons/fa';

const About: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut' as const,
      },
    },
  };

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: FaCode },
    { number: '3+', label: 'Years Experience', icon: FaGraduationCap },
    { number: '100%', label: 'Client Satisfaction', icon: FaHeart },
    { number: '24/7', label: 'Support Available', icon: FaUser },
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-slate-900/50 to-slate-800/30">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/10 via-transparent to-primary-800/5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="prose prose-lg text-gray-300">
                <p className="text-lg leading-relaxed">
                  I'm passionate about crafting <span className="text-primary-400 font-semibold">smart applications</span> and 
                  <span className="text-primary-400 font-semibold"> engaging games</span> that solve real problems and entertain. 
                  Combining AI, full-stack development, and game design, I strive to create practical and enjoyable solutions.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Currently exploring <span className="text-primary-400 font-semibold">GenAIs and Agentic AIs</span>, 
                  developing games with <span className="text-primary-400 font-semibold">Unity</span>, and building scalable 
                  web apps with <span className="text-primary-400 font-semibold">Django</span>. I also experiment with 
                  Android app development using Kotlin and Java.
                </p>

                <p className="text-lg leading-relaxed">
                  When I'm not coding, you'll find me deepening my knowledge in AI (especially face detection and authentication), 
                  exploring multiplayer systems in Unity, and practicing clean, maintainable code for collaborative development.
                </p>
              </div>

              {/* Skills highlights */}
              <div className="flex flex-wrap gap-3 mt-8">
                {['Python', 'C#', 'Unity', 'Django', 'TensorFlow', 'OpenCV'].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium border border-primary-500/30 hover:bg-primary-500/30 transition-colors duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Right Content - Image/Visual */}
            <motion.div variants={itemVariants} className="relative">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-primary-700/20 rounded-3xl transform rotate-6"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/10 to-primary-800/10 rounded-3xl transform -rotate-3"></div>
                
                {/* Main content area */}
                <div className="relative bg-dark-200/50 backdrop-blur-sm border border-primary-500/20 rounded-3xl p-8 glass">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center shadow-glow">
                      <FaUser className="text-4xl text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Software Developer | Game Developer | AI Enthusiast</h3>
                    <p className="text-gray-400 mb-6">
                      Building smart applications and engaging games with modern technologies.
                    </p>
                    
                    {/* Achievements */}
                    <div className="bg-primary-500/10 border border-primary-500/30 rounded-lg p-4">
                      <p className="text-primary-300 text-sm mb-2 font-semibold">Recent Achievements:</p>
                      <p className="text-primary-300 text-xs">🥈 2nd Place - Quasar 3.0 National Hackathon (March 2025)</p>
                      <p className="text-primary-300 text-xs">🏆 Winner - HackToFuture 3.0 National Hackathon (April 2025)</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div className="bg-dark-200/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 glass hover:border-primary-400/40 transition-all duration-300">
                    <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center group-hover:shadow-glow transition-all duration-300">
                      <IconComponent className="text-xl text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                      {stat.number}
                    </div>
                    <div className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
