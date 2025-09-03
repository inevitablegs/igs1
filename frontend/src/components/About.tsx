import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGamepad, FaBrain } from 'react-icons/fa';

const About: React.FC = () => {
  const specializations = [
    {
      icon: FaBrain,
      title: 'AI/ML Engineer',
      description: 'Developing neural networks and machine learning models that push the boundaries of artificial intelligence.',
      skills: ['TensorFlow', 'PyTorch', 'Computer Vision', 'NLP']
    },
    {
      icon: FaGamepad,
      title: 'Game Developer',
      description: 'Creating immersive gaming experiences with cutting-edge technologies and innovative gameplay mechanics.',
      skills: ['Unity', 'C#', 'Game Design', '3D Graphics']
    },
    {
      icon: FaCode,
      title: 'Python Developer',
      description: 'Building robust backend systems and automation tools that power modern applications.',
      skills: ['FastAPI', 'Django', 'Automation', 'Data Processing']
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      {/* Neural Network Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="neural-network-bg"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Terminal Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="terminal-window max-w-2xl mx-auto mb-8">
            <div className="terminal-header">
              admin@inevitablegs:~$ cat about.txt
            </div>
            <div className="p-6 font-mono text-neon-green">
              <motion.h2 
                className="text-4xl md:text-5xl font-bold mb-4 glitch-text"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                SYSTEM_PROFILE.exe
              </motion.h2>
              <p className="text-neon-blue">
                &gt; Scanning neural pathways...
                <br />
                &gt; Analyzing skill matrix...
                <br />
                &gt; Profile loaded successfully.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Bio Terminal */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="terminal-window mb-16"
        >
          <div className="terminal-header">
            <FaCode className="inline mr-2" />
            root@matrix:~$ bio.sh --full-scan
          </div>
          <div className="p-8 font-mono text-neon-green leading-relaxed">
            <div className="mb-6">
              <span className="text-neon-pink">[IDENTITY]</span> Ganesh - Digital Architect & Code Wizard
            </div>
            <div className="mb-6">
              <span className="text-neon-blue">[MISSION]</span> Transforming ideas into intelligent digital realities through the power of code and creativity.
            </div>
            <div className="mb-6">
              <span className="text-neon-green">[EXPERTISE]</span> AI/ML Engineering, Game Development, Python Development
            </div>
            <div className="mb-6">
              <span className="text-neon-pink">[STATUS]</span> Currently pushing the boundaries of what's possible with technology.
            </div>
            <div className="text-neon-blue">
              <span className="text-neon-green">[ACCESS_LEVEL]</span> MAXIMUM | 
              <span className="text-neon-pink"> [ENCRYPTION]</span> AES-256 | 
              <span className="text-neon-blue"> [UPTIME]</span> 99.9%
            </div>
          </div>
        </motion.div>

        {/* Specializations Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {specializations.map((spec, index) => (
            <motion.div
              key={spec.title}
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="cyber-card group relative overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-green/20 via-transparent to-neon-pink/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Card Content */}
              <div className="relative z-10 p-8">
                {/* Icon with Circuit Effect */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-neon-green to-neon-blue flex items-center justify-center mb-4 group-hover:animate-pulse">
                    <spec.icon className="text-2xl text-black" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-20 h-20 border border-neon-green/30 rounded-full animate-spin-slow"></div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-neon-green glitch-text-small">
                  {spec.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {spec.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {spec.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-neon-green/20 to-neon-blue/20 border border-neon-green/30 rounded-full text-neon-green font-mono"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Data Stream Animation */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-full h-full bg-gradient-to-r from-neon-green to-neon-pink animate-pulse"></div>
                </div>
              </div>

              {/* Circuit Border Effect */}
              <div className="absolute inset-0 border border-neon-green/30 group-hover:border-neon-green/60 transition-colors duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* System Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 terminal-window"
        >
          <div className="terminal-header">
            <FaBrain className="inline mr-2" />
            system@matrix:~$ performance_metrics.py --real-time
          </div>
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 font-mono">
              {[
                { label: 'Projects Completed', value: '50+', unit: 'repos' },
                { label: 'Code Quality', value: '99.9%', unit: 'uptime' },
                { label: 'Learning Rate', value: 'MAX', unit: 'efficiency' },
                { label: 'Innovation Index', value: 'HIGH', unit: 'creativity' }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-neon-green mb-2 animate-neon-pulse">
                    {stat.value}
                  </div>
                  <div className="text-neon-blue text-sm mb-1">{stat.unit}</div>
                  <div className="text-gray-400 text-xs">{stat.label}</div>
                  <div className="w-full h-1 bg-gray-700 mt-2 rounded">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 2, delay: index * 0.3 }}
                      className="h-full bg-gradient-to-r from-neon-green to-neon-blue rounded"
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
