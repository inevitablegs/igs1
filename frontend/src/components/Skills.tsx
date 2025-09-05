import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaPython, 
  FaGamepad,
  FaBrain,
  FaRobot,
  FaCode
} from 'react-icons/fa';
import { 
  SiTensorflow,
  SiScikitlearn,
  SiOpencv,
  SiNumpy,
  SiPandas,
  SiUnity
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
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Supernatural Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-supernatural-deep via-supernatural-dark to-supernatural-deep"></div>
      
      {/* Optimized Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${
              i % 2 === 0 ? 'w-6 h-6' : 'w-4 h-4'
            } ${
              i % 3 === 0 ? 'bg-gradient-to-br from-mystic-purple/20 to-ethereal-blue/20' :
              'bg-gradient-to-br from-ethereal-pink/20 to-mystic-lavender/20'
            } rounded-full blur-sm opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Mystical Grid Lines */}
      <div className="absolute inset-0 opacity-10">
        <div className="cosmic-grid h-full w-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Section Header */}
          <motion.div variants={categoryVariants} className="text-center mb-16">
            <div className="mystical-window max-w-4xl mx-auto">
              <div className="mystical-header">
                <span className="text-mystic-glow">◈</span> SKILLS
              </div>
              <div className="p-8">
                <h2 className="text-4xl md:text-6xl font-mystical font-bold mb-4 mystical-text">
                  Technical Skills
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-mystic-purple via-ethereal-blue to-ethereal-pink mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-mystic-lavender font-elegant">
                  Technologies and tools I use to build innovative solutions
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mystical Skills Constellation */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={categoryVariants}
                whileHover={{ y: -5, rotateY: 5 }}
                className="mystical-window hover:border-ethereal-blue/60 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Mystical Category Header */}
                <div className="mystical-header">
                  <span className="text-ethereal-pink">◇</span> {category.title.toUpperCase()}
                </div>
                
                <div className="p-6 space-y-4">
                  {category.skills.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        variants={skillVariants}
                        whileHover={{ scale: 1.03, x: 5 }}
                        className="group/skill relative"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <div className="relative">
                              <IconComponent 
                                className="text-2xl transition-all duration-300" 
                                style={{ color: skill.color }}
                              />
                            </div>
                            <div>
                              <span className="text-mystic-lavender font-elegant group-hover/skill:text-ethereal-blue transition-colors duration-300">
                                {skill.name}
                              </span>
                            </div>
                          </div>
                          <span className="text-ethereal-pink text-sm font-elegant font-bold">
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-supernatural-dark/50 rounded-full h-2 overflow-hidden border border-mystic-glow/20">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.2, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.05,
                              ease: "easeOut"
                            }}
                            className="h-full rounded-full relative"
                            style={{
                              background: `linear-gradient(90deg, ${skill.color}60, ${skill.color}, #9d8df1)`
                            }}
                          >
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Continuous Learning Section */}
          <motion.div
            variants={categoryVariants}
            className="mt-20 text-center"
          >
            <div className="mystical-window max-w-4xl mx-auto">
              <div className="mystical-header">
                <span className="text-ethereal-pink">◇</span> LEARNING
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-mystical font-bold text-ethereal-blue mb-6">
                  Always Learning
                </h3>
                <p className="text-mystic-lavender mb-8 font-elegant leading-relaxed">
                  Technology evolves rapidly, and I stay current with emerging trends and tools. 
                  I believe in continuous learning and adapting to new technologies that can create 
                  better solutions and experiences.
                </p>
                
                <div className="flex flex-wrap justify-center gap-4">
                  {['Machine Learning', 'Web Development', 'Cloud Computing', 'Mobile Apps', 'DevOps', 'Blockchain'].map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1
                      }}
                      className="px-4 py-2 supernatural-button-outline text-ethereal-blue font-elegant text-sm cursor-pointer"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
