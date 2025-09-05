import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Streesakhi',
      description: 'Empowering expectant mothers with reliable pregnancy guidance and community support.',
      longDescription: 'Created a comprehensive pregnancy awareness platform that connects expectant mothers with personalized health insights, educational resources, and supportive community features to guide them through their journey.',
      image: '/api/placeholder/600/400',
      category: 'Health Tech',
      technologies: ['Django', 'Python', 'JavaScript', 'SQLite'],
      github: 'https://github.com/inevitablegs/streesakhi',
      live: '#',
      featured: true,
      impact: 'Helping mothers make informed decisions during pregnancy'
    },
    {
      id: 2,
      title: 'InsightHire',
      description: 'Transforming recruitment with intelligent interview management and candidate experience.',
      longDescription: 'Built an intuitive interview management platform that streamlines recruitment processes, enhances candidate experience, and provides actionable insights for hiring decisions through smart automation.',
      image: '/api/placeholder/600/400',
      category: 'HR Tech',
      technologies: ['Django', 'Python', 'Bootstrap', 'PostgreSQL'],
      github: 'https://github.com/inevitablegs/insighthire',
      live: '#',
      featured: true,
      impact: 'Making hiring processes more efficient and fair'
    },
    {
      id: 3,
      title: 'Engineering Student',
      description: 'Bringing student life challenges to an engaging 2D game experience.',
      longDescription: 'Designed an entertaining game that captures the authentic engineering student experience - from juggling assignments to managing social life - creating relatability through interactive storytelling.',
      image: '/api/placeholder/600/400',
      category: 'Gaming',
      technologies: ['Python', 'Pygame', 'Game Design'],
      github: 'https://github.com/inevitablegs/engineering-student-game',
      live: '#',
      featured: true,
      impact: 'Creating connections through shared experiences'
    },
    {
      id: 4,
      title: 'Supply Chain Transparency',
      description: 'Building trust in supply chains through blockchain technology and automation.',
      longDescription: 'Developed a transparent supply chain solution using blockchain to track products from origin to consumer, ensuring authenticity and ethical sourcing while automating compliance processes.',
      image: '/api/placeholder/600/400',
      category: 'Blockchain',
      technologies: ['Python', 'Blockchain', 'Smart Contracts', 'Django'],
      github: 'https://github.com/inevitablegs/blockchain-supply-chain',
      live: '#',
      featured: false,
      impact: 'Promoting ethical and transparent business practices'
    },
    {
      id: 5,
      title: 'AiTutor',
      description: 'Personalizing education with AI-powered learning experiences.',
      longDescription: 'Created an adaptive learning platform that understands each student\'s unique learning style and pace, providing personalized tutoring experiences that make complex concepts accessible and engaging.',
      image: '/api/placeholder/600/400',
      category: 'Education Tech',
      technologies: ['Django', 'Python', 'Gemini API', 'Tailwind CSS'],
      github: 'https://github.com/inevitablegs/aitutor',
      live: '#',
      featured: true,
      impact: 'Making quality education accessible to everyone'
    },
    {
      id: 6,
      title: 'ReadmeGen CLI',
      description: 'Simplifying documentation with intelligent README generation.',
      longDescription: 'Built a command-line tool that transforms project setup into professional documentation, helping developers share their work effectively and encouraging open-source contributions.',
      image: '/api/placeholder/600/400',
      category: 'Developer Tools',
      technologies: ['Python', 'CLI', 'PyPI'],
      github: 'https://github.com/inevitablegs/readmegen-cli',
      live: 'https://pypi.org/project/readmegen-cli/',
      featured: false,
      impact: 'Empowering developers to share their work better'
    },
    {
      id: 7,
      title: 'GitPush Smart Helper',
      description: 'Streamlining Git workflows with intelligent automation.',
      longDescription: 'Created a smart Git assistant that understands your workflow patterns and automates repetitive tasks while keeping you informed about your repository status and changes.',
      image: '/api/placeholder/600/400',
      category: 'Developer Tools',
      technologies: ['Python', 'Git', 'CLI', 'PyPI'],
      github: 'https://github.com/inevitablegs/gitpush',
      live: 'https://pypi.org/project/gitpush-tool/',
      featured: false,
      impact: 'Saving developers time and reducing workflow friction'
    }
  ];

  const categories = ['All', 'Health Tech', 'HR Tech', 'Gaming', 'Education Tech', 'Blockchain', 'Developer Tools'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Supernatural Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-supernatural-dark via-supernatural-deep to-supernatural-dark"></div>
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className={`absolute ${
              i % 2 === 0 ? 'w-16 h-16' : 'w-12 h-12'
            } ${
              i % 3 === 0 ? 'bg-gradient-to-br from-mystic-purple/10 to-ethereal-blue/10' :
              'bg-gradient-to-br from-ethereal-pink/10 to-mystic-lavender/10'
            } rounded-full blur-sm opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Subtle Constellation Lines */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-mystic-glow/20 to-transparent opacity-30"
            style={{
              top: `${30 + i * 20}%`,
              left: `${20}%`,
              width: `60%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mystical-window max-w-4xl mx-auto">
              <div className="mystical-header">
                <span className="text-ethereal-pink">◇</span> PROJECTS
              </div>
              <div className="p-8">
                <h2 className="text-4xl md:text-6xl font-mystical font-bold mb-4 mystical-text">
                  My Projects
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-mystic-purple via-ethereal-blue to-ethereal-pink mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-mystic-lavender font-elegant">
                  Digital solutions crafted to solve real problems and create meaningful impact
                </p>
              </div>
            </div>
          </motion.div>

          {/* Mystical Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-elegant font-medium transition-all duration-300 relative group ${
                  filter === category
                    ? 'bg-gradient-to-r from-mystic-purple to-ethereal-blue text-white shadow-supernatural-glow border border-mystic-glow'
                    : 'mystical-window-sm text-mystic-lavender hover:text-white hover:border-ethereal-pink/40'
                }`}
              >
                <span className="relative z-10">{category}</span>
                {filter === category && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-mystic-purple to-ethereal-blue rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Horizontal Scrolling Featured Projects */}
          <div className="mb-20">
            <motion.div 
              className="mystical-window max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mystical-header">
                <span className="text-mystic-glow">◈</span> FEATURED WORK
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-mystical font-bold text-ethereal-blue mb-2">
                  Featured Work
                </h3>
                <p className="text-mystic-lavender font-elegant">
                  Explore key projects that showcase innovation and impact
                </p>
              </div>
            </motion.div>
            
            <div className="overflow-x-auto scrollbar-supernatural pb-4">
              <div className="flex gap-8 w-max px-4">
                {featuredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    whileHover={{ y: -10, rotateY: 5 }}
                    className="group relative w-96 mystical-window overflow-hidden hover:border-ethereal-blue/60 transition-all duration-500"
                    style={{ minWidth: '384px' }}
                  >
                    {/* Project Image */}
                    <div className="relative h-56 bg-gradient-to-br from-mystic-purple/20 via-ethereal-blue/20 to-cosmic-purple/20 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 cosmic-grid opacity-20"></div>
                      <div className="text-6xl text-mystic-glow/60 relative z-10">
                        <FaCode />
                      </div>

                      {/* Hover Overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        className="absolute inset-0 bg-supernatural-dark/80 backdrop-blur-sm flex items-center justify-center gap-4"
                      >
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 supernatural-button text-white rounded-full"
                        >
                          <FaGithub size={20} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 supernatural-button text-white rounded-full border-ethereal-pink text-ethereal-pink"
                        >
                          <FaEye size={20} />
                        </motion.a>
                      </motion.div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-mystic-purple/20 text-ethereal-blue rounded-full text-xs font-elegant border border-mystic-glow/30">
                          {project.category}
                        </span>
                        <div className="flex gap-3">
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-mystic-lavender hover:text-mystic-glow transition-colors duration-300"
                          >
                            <FaGithub size={18} />
                          </motion.a>
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.2, y: -2 }}
                            whileTap={{ scale: 0.9 }}
                            className="text-mystic-lavender hover:text-ethereal-pink transition-colors duration-300"
                          >
                            <FaExternalLinkAlt size={16} />
                          </motion.a>
                        </div>
                      </div>

                      <h4 className="text-xl font-mystical font-bold text-white mb-3 group-hover:text-ethereal-blue transition-colors duration-300">
                        {project.title}
                      </h4>
                      
                      <p className="text-mystic-lavender text-sm mb-4 line-clamp-3 font-elegant">
                        {project.longDescription}
                      </p>
                      
                      {project.impact && (
                        <p className="text-ethereal-pink text-xs mb-4 font-elegant italic">
                          💫 {project.impact}
                        </p>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, i) => (
                          <motion.span
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="px-2 py-1 bg-supernatural-dark/50 text-ethereal-blue rounded text-xs font-elegant border border-mystic-glow/20"
                          >
                            {tech}
                          </motion.span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-2 py-1 bg-supernatural-dark/50 text-ethereal-pink rounded text-xs font-elegant border border-mystic-glow/20">
                            +{project.technologies.length - 4} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Mystical Projects Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                  animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, rotateX: 5 }}
                  className="group relative mystical-window overflow-hidden hover:border-ethereal-blue/60 transition-all duration-500"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-mystic-purple/20 via-ethereal-blue/20 to-cosmic-purple/20 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 cosmic-grid opacity-20"></div>
                    <div className="text-4xl text-mystic-glow/60 relative z-10">
                      <FaCode />
                    </div>
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-supernatural-dark/80 backdrop-blur-sm flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 supernatural-button text-white rounded-full"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 supernatural-button text-white rounded-full border-ethereal-pink text-ethereal-pink"
                      >
                        <FaEye size={20} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-mystic-purple/20 text-ethereal-blue rounded-full text-xs font-elegant border border-mystic-glow/30">
                        {project.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-mystical font-bold text-white mb-2 group-hover:text-ethereal-blue transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-mystic-lavender text-sm mb-4 font-elegant">
                      {project.description}
                    </p>
                    
                    {project.impact && (
                      <p className="text-ethereal-pink text-xs mb-3 font-elegant italic">
                        💫 {project.impact}
                      </p>
                    )}

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ scale: 1.05 }}
                          className="px-2 py-1 bg-supernatural-dark/50 text-ethereal-blue rounded text-xs font-elegant border border-mystic-glow/20"
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-supernatural-dark/50 text-ethereal-pink rounded text-xs font-elegant border border-mystic-glow/20">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Mystical Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <div className="mystical-window max-w-3xl mx-auto">
              <div className="mystical-header">
                <span className="text-ethereal-pink">◇</span> MORE PROJECTS
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-mystical font-bold text-ethereal-blue mb-4">
                  Want to See More?
                </h3>
                <p className="text-mystic-lavender mb-8 font-elegant leading-relaxed">
                  Explore my GitHub to discover additional projects and contributions to the open-source community
                </p>
                <motion.a
                  href="https://github.com/inevitablegs"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 supernatural-button px-8 py-4 font-elegant font-semibold text-lg relative group"
                >
                  <FaGithub />
                  Visit My GitHub
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
