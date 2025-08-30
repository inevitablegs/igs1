import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from 'react-icons/fa';

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: 'Streesakhi',
      description: 'Pregnancy awareness platform with custom users & integrated educational videos.',
      longDescription: 'A comprehensive pregnancy awareness platform featuring custom user management, educational video integration, and personalized health tracking. Built to provide expectant mothers with reliable information and community support.',
      image: '/api/placeholder/600/400',
      category: 'Web App',
      technologies: ['Django', 'Python', 'HTML', 'CSS', 'JavaScript', 'SQLite'],
      github: 'https://github.com/inevitablegs/streesakhi',
      live: '#',
      featured: true
    },
    {
      id: 2,
      title: 'InsightHire',
      description: 'Interview management system with separate flows for interviewers and candidates.',
      longDescription: 'A complete interview management platform with distinct user flows for interviewers and candidates. Features include scheduling, video calls, assessment tools, and comprehensive reporting for recruitment processes.',
      image: '/api/placeholder/600/400',
      category: 'Web App',
      technologies: ['Django', 'Python', 'Bootstrap', 'JavaScript', 'PostgreSQL'],
      github: 'https://github.com/inevitablegs/insighthire',
      live: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Engineering Student',
      description: 'A 2D game simulating real student life challenges.',
      longDescription: 'An entertaining 2D game that simulates the daily challenges and experiences of engineering students. Features include academic tasks, social interactions, time management, and realistic campus scenarios.',
      image: '/api/placeholder/600/400',
      category: 'Game Dev',
      technologies: ['Python', 'Pygame', 'Game Design', 'Pixel Art'],
      github: 'https://github.com/inevitablegs/engineering-student-game',
      live: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Supply Chain Management with Blockchain',
      description: 'Blockchain-based supply chain platform with AI automation and secure payments.',
      longDescription: 'An innovative supply chain management system leveraging blockchain technology for transparency and security. Includes AI-powered automation, smart contracts, and secure payment processing for enhanced supply chain efficiency.',
      image: '/api/placeholder/600/400',
      category: 'Blockchain',
      technologies: ['Python', 'Blockchain', 'AI', 'Smart Contracts', 'Django'],
      github: 'https://github.com/inevitablegs/blockchain-supply-chain',
      live: '#',
      featured: false
    },
    {
      id: 5,
      title: 'AiTutor',
      description: 'AI-powered personalized learning platform using Django, Gemini, and Tailwind CSS.',
      longDescription: 'A personalized AI tutoring platform built with Django and Google Gemini API. Features subject filters, interactive quiz modes, dark mode support, and adaptive learning paths tailored to individual student needs.',
      image: '/api/placeholder/600/400',
      category: 'AI/ML',
      technologies: ['Django', 'Python', 'Gemini API', 'Tailwind CSS', 'AI'],
      github: 'https://github.com/inevitablegs/aitutor',
      live: '#',
      featured: true
    },
    {
      id: 6,
      title: 'readmegen-cli',
      description: 'A CLI tool that generates professional and structured README.md files for projects.',
      longDescription: 'A command-line interface tool that automatically generates professional README.md files by asking developers questions about their projects. Creates polished documentation with sections like Overview, Features, Installation, and Usage.',
      image: '/api/placeholder/600/400',
      category: 'CLI Tool',
      technologies: ['Python', 'CLI', 'File Generation', 'PyPI'],
      github: 'https://github.com/inevitablegs/readmegen-cli',
      live: 'https://pypi.org/project/readmegen-cli/',
      featured: false
    },
    {
      id: 7,
      title: 'gitpush',
      description: 'A smart Git CLI helper that checks if your local branch is ahead and pushes accordingly.',
      longDescription: 'A smart Git command-line helper that automatically checks if your local branch is ahead of the remote and pushes changes safely. Provides Git status insights and optionally opens GitHub when everything is synced.',
      image: '/api/placeholder/600/400',
      category: 'CLI Tool',
      technologies: ['Python', 'Git', 'CLI', 'Automation', 'PyPI'],
      github: 'https://github.com/inevitablegs/gitpush',
      live: 'https://pypi.org/project/gitpush-tool/',
      featured: false
    }
  ];

  const categories = ['All', 'Web App', 'Game Dev', 'AI/ML', 'Blockchain', 'CLI Tool'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const featuredProjects = projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-20 relative bg-gradient-to-b from-slate-900/50 to-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills and passion for development
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white shadow-glow'
                    : 'bg-dark-200/50 text-gray-400 hover:text-white hover:bg-primary-500/20 border border-primary-500/20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Projects */}
          <div className="mb-16">
            <motion.h3 
              className="text-2xl font-bold text-white mb-8 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              🌟 Featured Work
            </motion.h3>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="group relative bg-dark-200/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl overflow-hidden glass hover:border-primary-400/40 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center">
                    <FaCode className="text-6xl text-primary-400/50" />
                    <div className="absolute inset-0 bg-black/20"></div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30">
                        {project.category}
                      </span>
                      <div className="flex gap-2">
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                        >
                          <FaGithub size={20} />
                        </motion.a>
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                        >
                          <FaExternalLinkAlt size={18} />
                        </motion.a>
                      </div>
                    </div>

                    <h4 className="text-xl font-bold text-white mb-3 group-hover:text-primary-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.longDescription}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-dark-100/50 text-gray-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-dark-100/50 text-gray-300 rounded text-xs font-medium">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group relative bg-dark-200/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl overflow-hidden glass hover:border-primary-400/40 transition-all duration-300"
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-primary-700/20 flex items-center justify-center">
                    <FaCode className="text-4xl text-primary-400/50" />
                    
                    {/* Hover Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4"
                    >
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
                      >
                        <FaGithub size={20} />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-3 bg-primary-500 text-white rounded-full hover:bg-primary-600 transition-colors duration-300"
                      >
                        <FaEye size={20} />
                      </motion.a>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30">
                        {project.category}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-300 transition-colors duration-300">
                      {project.title}
                    </h4>
                    
                    <p className="text-gray-400 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-dark-100/50 text-gray-300 rounded text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-dark-100/50 text-gray-300 rounded text-xs font-medium">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16"
          >
            <div className="bg-dark-200/30 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 glass">
              <h3 className="text-2xl font-bold text-white mb-4">
                Want to See More?
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                Check out my GitHub profile for more projects and contributions to open source
              </p>
              <motion.a
                href="https://github.com/username"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:from-primary-600 hover:to-primary-800 hover:shadow-glow"
              >
                <FaGithub />
                View GitHub Profile
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
