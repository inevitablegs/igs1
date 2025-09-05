import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
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
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'mystical-window-sm backdrop-blur-xl shadow-supernatural-glow'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Mystical Logo */}
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0"
          >
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#home');
              }}
              className="text-2xl font-mystical font-bold mystical-text hover:text-ethereal-blue transition-all duration-300 relative group"
            >
              ◈ DIMENSIONAL PORTFOLIO ◈
              <div className="absolute inset-0 bg-gradient-to-r from-mystic-glow/20 via-transparent to-mystic-glow/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded"></div>
            </a>
          </motion.div>

          {/* Supernatural Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  className="text-mystic-lavender hover:text-ethereal-blue px-4 py-2 rounded-full text-sm font-elegant transition-all duration-300 hover:bg-mystic-purple/20 relative group border border-transparent hover:border-mystic-glow/30"
                  whileHover={{ y: -3, scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {item.name}
                  <motion.span 
                    className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-mystic-purple via-ethereal-blue to-ethereal-pink transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"
                    layoutId={`underline-${item.name}`}
                  ></motion.span>
                  {/* Mystical glow effect */}
                  <div className="absolute inset-0 rounded-full bg-mystic-glow/5 transform scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Mystical Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-mystic-lavender hover:text-ethereal-blue p-3 rounded-full transition-all duration-300 border border-mystic-glow/30 hover:border-ethereal-blue/50 supernatural-button"
            >
              {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mystical Mobile Navigation */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="md:hidden overflow-hidden mystical-window-sm mx-2 mt-2 rounded-xl"
      >
        <div className="px-4 pt-4 pb-4 space-y-2">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.href);
              }}
              className="text-mystic-lavender hover:text-ethereal-blue block px-4 py-3 rounded-lg text-base font-elegant transition-all duration-300 hover:bg-mystic-purple/20 border border-transparent hover:border-mystic-glow/30 group relative"
              initial={{ x: -50, opacity: 0 }}
              animate={isOpen ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ x: 5 }}
            >
              <span className="relative z-10">◇ {item.name}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-mystic-purple/10 via-ethereal-blue/10 to-transparent rounded-lg transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
