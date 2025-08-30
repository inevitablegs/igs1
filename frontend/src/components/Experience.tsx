import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      duration: '2023 - Present',
      description: [
        'Led development of scalable web applications using React, Node.js, and MongoDB',
        'Implemented CI/CD pipelines reducing deployment time by 70%',
        'Mentored junior developers and conducted code reviews',
        'Architected microservices infrastructure handling 1M+ daily requests'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker', 'TypeScript']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations Ltd.',
      location: 'New York, NY',
      duration: '2022 - 2023',
      description: [
        'Developed and maintained multiple client projects using modern web technologies',
        'Collaborated with UI/UX designers to implement pixel-perfect designs',
        'Optimized application performance resulting in 40% faster load times',
        'Integrated third-party APIs and payment systems'
      ],
      technologies: ['Vue.js', 'Python', 'PostgreSQL', 'Redis', 'GraphQL']
    },
    {
      title: 'Frontend Developer',
      company: 'StartupFlow',
      location: 'San Francisco, CA',
      duration: '2021 - 2022',
      description: [
        'Built responsive web applications with React and modern CSS frameworks',
        'Collaborated with backend team to design and implement RESTful APIs',
        'Implemented state management solutions using Redux and Context API',
        'Participated in agile development processes and sprint planning'
      ],
      technologies: ['React', 'Redux', 'Tailwind CSS', 'JavaScript', 'REST APIs']
    },
    {
      title: 'Junior Web Developer',
      company: 'WebCraft Agency',
      location: 'Austin, TX',
      duration: '2020 - 2021',
      description: [
        'Developed responsive websites for small to medium businesses',
        'Learned and applied modern web development best practices',
        'Worked with content management systems and e-commerce platforms',
        'Provided technical support and maintenance for client websites'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'WordPress', 'PHP']
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
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
              Work Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-700 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              My professional journey in software development and the amazing projects I've worked on
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-700"></div>

            {/* Experience Cards */}
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-dark-300 shadow-glow z-10"></div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="bg-dark-200/50 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-6 glass hover:border-primary-400/40 transition-all duration-300"
                    >
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex items-center gap-2 text-primary-400 text-sm mb-2">
                          <FaCalendarAlt />
                          <span>{exp.duration}</span>
                        </div>
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-gray-400">
                          <div className="flex items-center gap-1">
                            <FaBriefcase className="text-sm" />
                            <span>{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FaMapMarkerAlt className="text-sm" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <div className="mb-6">
                        <ul className="space-y-2">
                          {exp.description.map((item, i) => (
                            <li key={i} className="text-gray-300 text-sm flex items-start gap-2">
                              <span className="w-1 h-1 bg-primary-400 rounded-full mt-2 flex-shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <motion.span
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: i * 0.1 }}
                            className="px-3 py-1 bg-primary-500/20 text-primary-300 rounded-full text-xs font-medium border border-primary-500/30 hover:bg-primary-500/30 transition-colors duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="bg-dark-200/30 backdrop-blur-sm border border-primary-500/20 rounded-2xl p-8 glass">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready for New Challenges
              </h3>
              <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                I'm always excited to take on new projects and collaborate with innovative teams. 
                Let's build something amazing together!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:from-primary-600 hover:to-primary-800 hover:shadow-glow"
              >
                Get In Touch
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
