import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaGamepad,
  FaBrain,
  FaRobot,
  FaChartLine,
  FaCode,
  FaDatabase,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaGithub
} from 'react-icons/fa';
import { 
  SiTensorflow,
  SiPytorch,
  SiJupyter,
  SiUnity,
  SiBlender,
  SiOpencv,
  SiScikitlearn,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiMongodb,
  SiPostgresql,
  SiMysql
} from 'react-icons/si';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', icon: FaPython, level: 95, color: '#3776AB' },
        { name: 'C/C++', icon: FaCode, level: 85, color: '#00599C' },
        { name: 'Java', icon: FaCode, level: 80, color: '#F89820' },
        { name: 'C#', icon: FaCode, level: 85, color: '#239120' },
      ]
    },
    {
      title: 'Machine Learning & AI',
      skills: [
        { name: 'TensorFlow', icon: SiTensorflow, level: 90, color: '#FF6F00' },
        { name: 'Scikit-learn', icon: SiScikitlearn, level: 88, color: '#F7931E' },
        { name: 'OpenCV', icon: SiOpencv, level: 85, color: '#5C3EE8' },
        { name: 'NLTK', icon: FaBrain, level: 80, color: '#4CAF50' },
        { name: 'spaCy', icon: FaRobot, level: 75, color: '#09A3D5' },
        { name: 'YOLO', icon: FaBrain, level: 80, color: '#FF5722' },
      ]
    },
    {
      title: 'Frameworks & Libraries',
      skills: [
        { name: 'Django', icon: FaCode, level: 90, color: '#092E20' },
        { name: 'Flask', icon: FaCode, level: 85, color: '#000000' },
        { name: 'Tkinter', icon: FaPython, level: 80, color: '#3776AB' },
        { name: 'Pandas', icon: SiPandas, level: 90, color: '#150458' },
        { name: 'NumPy', icon: SiNumpy, level: 88, color: '#013243' },
        { name: 'Ursina', icon: FaGamepad, level: 75, color: '#FF6B6B' },
      ]
    },
    {
      title: 'Game Development',
      skills: [
        { name: 'Unity', icon: SiUnity, level: 85, color: '#000000' },
        { name: 'PyGame', icon: FaPython, level: 80, color: '#3776AB' },
        { name: 'Game Design', icon: FaGamepad, level: 80, color: '#FF6B6B' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="skills" className="py-20 relative bg-gradient-to-b from-slate-800/30 to-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Here are the technologies and tools I work with to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                className="bg-dark-200/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 glass hover:border-primary-400/40 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-white mb-6 text-center">
                  {category.title}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ scale: 1.05 }}
                        className="group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <IconComponent 
                              className="text-2xl transition-all duration-300 group-hover:scale-110" 
                              style={{ color: skill.color }}
                            />
                            <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-300">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-primary-400 text-sm font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-dark-100 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.2, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className="h-full bg-gradient-to-r from-primary-500 to-primary-700 rounded-full relative"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}40, ${skill.color})`
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 rounded-full"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Info Section */}
          <motion.div
            variants={categoryVariants}
            className="mt-16 text-center"
          >
            <div className="bg-dark-200/30 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 glass">
              <h3 className="text-2xl font-bold text-white mb-4">
                Always Learning
              </h3>
              <p className="text-gray-400 mb-6 max-w-3xl mx-auto">
                Technology evolves rapidly, and so do I. I'm constantly exploring new frameworks, 
                tools, and methodologies to stay at the forefront of web development. Currently diving deep into 
                AI/ML integration, Web3 technologies, and advanced cloud architectures.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                {['AI/ML', 'Web3', 'Blockchain', 'Kubernetes', 'Microservices', 'Serverless'].map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-primary-500/20 to-primary-700/20 border border-primary-500/30 text-primary-300 rounded-full text-sm font-medium hover:from-primary-500/30 hover:to-primary-700/30 transition-all duration-300"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
