import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPaperPlane, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import axios from 'axios';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send to FastAPI backend
      await axios.post('http://localhost:8000/api/contact', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  const contactInfo = [
    {
      icon: FaEnvelope,
      title: 'Email',
      content: 'sonawaneganu3101@gmail.com',
      link: 'mailto:sonawaneganu3101@gmail.com'
    },
    {
      icon: FaLinkedin,
      title: 'LinkedIn',
      content: 'inevitable-gs',
      link: 'https://www.linkedin.com/in/inevitable-gs'
    },
    {
      icon: FaGithub,
      title: 'GitHub',
      content: 'inevitablegs',
      link: 'https://github.com/inevitablegs'
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/inevitable-gs',
      color: '#0077B5'
    },
    {
      icon: FaGithub,
      name: 'GitHub',
      url: 'https://github.com/inevitablegs',
      color: '#333'
    },
    {
      icon: FaTwitter,
      name: 'Twitter',
      url: 'https://twitter.com/inevitable_gs',
      color: '#1DA1F2'
    }
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Supernatural Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-supernatural-deep via-supernatural-dark to-supernatural-deep"></div>
      
      {/* Mystical Communication Patterns */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute ${
              i % 3 === 0 ? 'w-8 h-8' : 
              i % 3 === 1 ? 'w-6 h-6' : 'w-4 h-4'
            } ${
              i % 4 === 0 ? 'bg-gradient-to-br from-mystic-purple/20 to-ethereal-blue/20' :
              i % 4 === 1 ? 'bg-gradient-to-br from-ethereal-pink/20 to-mystic-lavender/20' :
              i % 4 === 2 ? 'bg-gradient-to-br from-cosmic-purple/20 to-ethereal-violet/20' :
              'bg-gradient-to-br from-mystic-glow/20 to-ethereal-blue/20'
            } rounded-full blur-sm`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 10 + Math.random() * 15,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Mystical Connection Lines */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-mystic-glow/20 to-transparent"
            style={{
              top: `${15 + i * 10}%`,
              left: `${Math.random() * 30}%`,
              width: `${40 + Math.random() * 40}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scaleX: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 1.2,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2, margin: "-80px" }}
          transition={{
            duration: 1.2,
            type: "spring",
            stiffness: 90,
            damping: 16
          }}
        >
          {/* Mystical Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 80, rotateX: 25 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ 
              duration: 1.1,
              type: "spring",
              stiffness: 110,
              damping: 14
            }}
          >
            <div className="mystical-window max-w-4xl mx-auto">
              <div className="mystical-header">
                <span className="text-ethereal-pink">◇</span> CONTACT
              </div>
              <div className="p-8">
                <h2 className="text-4xl md:text-6xl font-mystical font-bold mb-4 mystical-text">
                  Get In Touch
                </h2>
                <div className="w-32 h-1 bg-gradient-to-r from-mystic-purple via-ethereal-blue to-ethereal-pink mx-auto rounded-full mb-6"></div>
                <p className="text-lg text-mystic-lavender font-elegant">
                  Let's connect and discuss opportunities to work together
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mystical Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="mystical-window">
                <div className="mystical-header">
                  <span className="text-mystic-glow">◈</span> LET'S CONNECT
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-mystical font-bold text-ethereal-blue mb-6">
                    Ready to Collaborate
                  </h3>
                  <p className="text-mystic-lavender mb-8 leading-relaxed font-elegant">
                    I'm always open to discussing new projects and opportunities. 
                    Whether you have an idea for an app, need help with AI development, 
                    or want to collaborate on something creative, I'd love to hear from you.
                  </p>
                </div>
              </div>

              {/* Mystical Contact Info Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : '_self'}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      whileHover={{ scale: 1.02, x: 10, rotateY: 5 }}
                      className="flex items-center gap-4 mystical-window-sm hover:border-ethereal-blue/60 transition-all duration-500 group relative overflow-hidden"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-mystic-purple to-ethereal-blue rounded-full flex items-center justify-center group-hover:shadow-supernatural-glow transition-all duration-300 relative">
                        <IconComponent className="text-white text-xl relative z-10" />
                        <div className="absolute inset-0 bg-gradient-to-br from-ethereal-pink/20 to-mystic-glow/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                      </div>
                      <div className="relative z-10">
                        <h4 className="text-ethereal-blue font-mystical font-semibold group-hover:text-mystic-glow transition-colors duration-300">
                          {info.title}
                        </h4>
                        <p className="text-mystic-lavender font-elegant group-hover:text-ethereal-blue transition-colors duration-300">
                          {info.content}
                        </p>
                      </div>
                    </motion.a>
                  );
                })}
              </div>

              {/* Mystical Social Constellation */}
              <div className="pt-8">
                <div className="mystical-window-sm">
                  <div className="p-6">
                    <h4 className="text-ethereal-blue font-mystical font-semibold mb-4 text-center">
                      Connect With Me
                    </h4>
                    <div className="flex gap-6 justify-center">
                      {socialLinks.map((social, index) => {
                        const IconComponent = social.icon;
                        return (
                          <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0, rotate: 180 }}
                            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.2, y: -8, rotate: 360 }}
                            className="w-14 h-14 mystical-window-sm flex items-center justify-center text-mystic-lavender hover:text-ethereal-blue hover:border-mystic-glow/60 transition-all duration-500 group relative"
                          >
                            <IconComponent className="text-xl relative z-10" />
                            <div className="absolute inset-0 bg-gradient-to-br from-mystic-purple/20 to-ethereal-blue/20 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-300"></div>
                          </motion.a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mystical Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mystical-window"
            >
              <div className="mystical-header">
                <span className="text-ethereal-pink">◇</span> SEND MESSAGE
              </div>
              <div className="p-8">
                <h3 className="text-3xl font-mystical font-bold text-ethereal-blue mb-6 text-center">
                  Send Me a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 }}
                    >
                      <label htmlFor="name" className="block text-ethereal-blue font-elegant font-medium mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-supernatural-dark/50 border border-mystic-glow/30 rounded-lg text-mystic-lavender placeholder-mystic-lavender/50 focus:outline-none focus:border-ethereal-blue focus:ring-2 focus:ring-mystic-glow/30 transition-all duration-300 font-elegant backdrop-blur-sm"
                        placeholder="Your name"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-ethereal-blue font-elegant font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-supernatural-dark/50 border border-mystic-glow/30 rounded-lg text-mystic-lavender placeholder-mystic-lavender/50 focus:outline-none focus:border-ethereal-blue focus:ring-2 focus:ring-mystic-glow/30 transition-all duration-300 font-elegant backdrop-blur-sm"
                        placeholder="your.email@domain.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    <label htmlFor="subject" className="block text-ethereal-blue font-elegant font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-supernatural-dark/50 border border-mystic-glow/30 rounded-lg text-mystic-lavender placeholder-mystic-lavender/50 focus:outline-none focus:border-ethereal-blue focus:ring-2 focus:ring-mystic-glow/30 transition-all duration-300 font-elegant backdrop-blur-sm"
                      placeholder="What would you like to discuss?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <label htmlFor="message" className="block text-ethereal-blue font-elegant font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-supernatural-dark/50 border border-mystic-glow/30 rounded-lg text-mystic-lavender placeholder-mystic-lavender/50 focus:outline-none focus:border-ethereal-blue focus:ring-2 focus:ring-mystic-glow/30 transition-all duration-300 font-elegant backdrop-blur-sm resize-vertical"
                      placeholder="Tell me about your project or idea..."
                    />
                  </motion.div>

                  {/* Supernatural Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02, rotateX: 5 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full supernatural-button supernatural-button-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-mystic-purple/20 via-ethereal-blue/20 to-ethereal-pink/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin relative z-10"></div>
                          <span className="relative z-10 font-mystical">Sending...</span>
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                          <span className="relative z-10 font-mystical">Send Message</span>
                        </>
                      )}
                    </motion.button>
                  </motion.div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-4 mystical-window-sm border-mystic-glow/60"
                    >
                      <p className="text-mystic-glow font-elegant">
                        Message sent successfully! I'll get back to you soon.
                      </p>
                      <p className="text-mystic-lavender text-sm mt-2 font-elegant">
                        Thank you for reaching out. I'll respond as soon as possible.
                      </p>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center p-4 mystical-window-sm border-ethereal-pink/60"
                    >
                      <p className="text-ethereal-pink font-elegant">
                        Something went wrong. Please try again.
                      </p>
                      <p className="text-mystic-lavender text-sm mt-2 font-elegant">
                        There seems to be a connection issue. Please try again later.
                      </p>
                    </motion.div>
                  )}
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
