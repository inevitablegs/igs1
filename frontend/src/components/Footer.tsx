import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/inevitablegs', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/inevitable-gs', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/inevitable_gs', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:sonawaneganu3101@gmail.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Portal Origin', href: '#home' },
    { name: 'Ethereal Being', href: '#about' },
    { name: 'Mystical Arts', href: '#skills' },
    { name: 'Dimensional Works', href: '#projects' },
    { name: 'Cosmic Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden">
      {/* Supernatural Footer Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-supernatural-dark via-supernatural-deep to-supernatural-dark"></div>
      
      {/* Mystical Footer Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 4 === 0 ? 'w-3 h-3 bg-mystic-purple/30' :
              i % 4 === 1 ? 'w-2 h-2 bg-ethereal-blue/40' :
              i % 4 === 2 ? 'w-4 h-4 bg-ethereal-pink/20' :
              'w-2.5 h-2.5 bg-mystic-glow/35'
            } rounded-full blur-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 20 - 10],
              scale: [0.5, 1.2, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Supernatural Footer Grid Lines */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-mystic-glow/10 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
            }}
            animate={{
              opacity: [0.1, 0.3, 0.1],
              scaleX: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
            {/* Mystical Brand Section */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h3 className="text-3xl font-mystical font-bold mystical-text mb-4">
                ◈ GANESH SONAWANE ◈
              </h3>
              <p className="text-mystic-lavender font-elegant leading-relaxed max-w-md mb-6">
                ✦ Digital mystic weaving neural networks and ethereal experiences across dimensional realms. 
                Forever learning, forever creating, forever transcending the boundaries between 
                artificial intelligence and human imagination. ✦
              </p>

              {/* Supernatural Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0, rotate: 180 }}
                      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.3, y: -5, rotate: 360 }}
                      className="w-12 h-12 mystical-window-sm flex items-center justify-center text-mystic-lavender hover:text-ethereal-blue hover:border-mystic-glow/60 transition-all duration-500 group relative overflow-hidden"
                    >
                      <IconComponent className="text-lg relative z-10" />
                      <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/20 to-ethereal-blue/20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Mystical Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h4 className="text-lg font-mystical font-semibold text-ethereal-blue mb-4">
                ◇ Dimensional Navigation ◇
              </h4>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ x: 8, scale: 1.05 }}
                    className="block text-mystic-lavender hover:text-ethereal-blue transition-all duration-300 font-elegant group relative"
                  >
                    <span className="text-ethereal-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300 mr-2">◈</span>
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </motion.div>

            {/* Supernatural Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h4 className="text-lg font-mystical font-semibold text-ethereal-blue mb-4">
                ◇ Ethereal Communication ◇
              </h4>
              <div className="space-y-3">
                <motion.div 
                  className="text-mystic-lavender font-elegant"
                  whileHover={{ x: 3, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm flex items-center gap-2">
                    <span className="text-ethereal-pink">◈</span> sonawaneganu3101@gmail.com
                  </p>
                </motion.div>
                <motion.div 
                  className="text-mystic-lavender font-elegant"
                  whileHover={{ x: 3, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm flex items-center gap-2">
                    <span className="text-ethereal-blue">◇</span> +91 8010100628
                  </p>
                </motion.div>
                <motion.div 
                  className="text-mystic-lavender font-elegant"
                  whileHover={{ x: 3, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm flex items-center gap-2">
                    <span className="text-mystic-glow">✦</span> GCOEARA, Pune
                  </p>
                </motion.div>
              </div>

              {/* Supernatural Status Indicator */}
              <motion.div 
                className="mt-6 flex items-center gap-3 p-3 mystical-window-sm"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(139, 92, 246, 0.1)",
                    "0 0 30px rgba(139, 92, 246, 0.2)",
                    "0 0 20px rgba(139, 92, 246, 0.1)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.div 
                  className="w-3 h-3 bg-mystic-glow rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-mystic-glow text-sm font-elegant font-medium">
                  ✦ Open for ethereal collaborations ✦
                </span>
              </motion.div>
            </motion.div>
          </div>

          {/* Mystical Divider */}
          <motion.div 
            className="border-t border-mystic-glow/20 pt-8 relative"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <motion.div
                className="w-4 h-4 bg-gradient-to-br from-mystic-purple to-ethereal-blue rounded-full"
                animate={{
                  rotate: 360,
                  scale: [1, 1.2, 1],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              />
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Supernatural Copyright */}
              <motion.div 
                className="flex items-center gap-2 text-mystic-lavender text-sm font-elegant"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <span>◈ {currentYear} Ganesh Sonawane. Crafted with</span>
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{ duration: 1, repeat: Infinity, delay: 1 }}
                >
                  <FaHeart className="text-ethereal-pink" />
                </motion.div>
                <span>and mystical energy ✦</span>
              </motion.div>

              {/* Supernatural Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.1, y: -3, rotateY: 10 }}
                whileTap={{ scale: 0.95 }}
                className="supernatural-button-outline flex items-center gap-3 group relative overflow-hidden"
              >
                <span className="text-sm font-elegant relative z-10">Return to Origin</span>
                <div className="w-8 h-8 bg-gradient-to-br from-mystic-purple/20 to-ethereal-blue/20 border border-mystic-glow/30 rounded-lg flex items-center justify-center relative z-10 group-hover:shadow-supernatural-glow transition-all duration-300">
                  <motion.div
                    animate={{ y: [0, -2, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaArrowUp className="text-xs text-ethereal-blue" />
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-mystic-purple/10 via-ethereal-blue/10 to-ethereal-pink/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.button>
            </div>
          </motion.div>

          {/* Supernatural Tech Stack Easter Egg */}
          <motion.div 
            className="text-center mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-mystic-lavender/60 text-xs font-elegant">
              ✦ Forged with React, TypeScript, Tailwind CSS, Framer Motion & Ethereal Magic ✦
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Supernatural Action Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.2, rotate: 10 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-br from-mystic-purple via-ethereal-blue to-ethereal-pink text-white rounded-full shadow-supernatural-glow flex items-center justify-center md:hidden z-50 group relative overflow-hidden"
      >
        <motion.div
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <FaArrowUp className="relative z-10" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-mystic-glow/20 to-ethereal-pink/20 scale-0 group-hover:scale-110 transition-transform duration-300"></div>
      </motion.button>
    </footer>
  );
};

export default Footer;
