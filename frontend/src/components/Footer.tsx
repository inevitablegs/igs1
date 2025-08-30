import React from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaArrowUp } from 'react-icons/fa';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/username', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://linkedin.com/in/username', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com/username', label: 'Twitter' },
    { icon: FaEnvelope, href: 'mailto:your.email@example.com', label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-dark-300/50 backdrop-blur-sm border-t border-primary-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent mb-4">
                Your Name
              </h3>
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Passionate full-stack developer creating digital experiences that matter. 
                Always learning, always building, always pushing the boundaries of what's possible.
              </p>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ scale: 1.2, y: -3 }}
                      className="w-10 h-10 bg-dark-200/50 border border-primary-500/20 rounded-lg flex items-center justify-center text-gray-400 hover:text-primary-400 hover:border-primary-400/40 transition-all duration-300"
                    >
                      <IconComponent className="text-lg" />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <nav className="space-y-2">
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
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="block text-gray-400 hover:text-primary-400 transition-all duration-300"
                  >
                    {link.name}
                  </motion.a>
                ))}
              </nav>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
              <div className="space-y-3">
                <div className="text-gray-400">
                  <p className="text-sm">📧 sonawaneganu3101@gmail.com</p>
                </div>
                <div className="text-gray-400">
                  <p className="text-sm">📱 +91 8010100628</p>
                </div>
                <div className="text-gray-400">
                  <p className="text-sm">📍 GCOEARA, Pune</p>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="mt-4 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 text-sm font-medium">Available for freelance</span>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-primary-500/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <span>© {currentYear} Ganesh. Made with</span>
                <FaHeart className="text-red-400" />
                <span>and lots of ☕</span>
              </div>

              {/* Scroll to Top */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="flex items-center gap-2 text-gray-400 hover:text-primary-400 transition-colors duration-300"
              >
                <span className="text-sm">Back to top</span>
                <div className="w-8 h-8 bg-primary-500/20 border border-primary-500/30 rounded-lg flex items-center justify-center">
                  <FaArrowUp className="text-xs" />
                </div>
              </motion.button>
            </div>
          </div>

          {/* Hidden Easter Egg */}
          <div className="text-center mt-4">
            <p className="text-gray-600 text-xs">
              Built with React, TypeScript, Tailwind CSS, and Framer Motion ✨
            </p>
          </div>
        </motion.div>
      </div>

      {/* Floating Action Button for Mobile */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary-500 to-primary-700 text-white rounded-full shadow-glow flex items-center justify-center md:hidden z-50"
      >
        <FaArrowUp />
      </motion.button>
    </footer>
  );
};

export default Footer;
