import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-supernatural-dark text-mystic-lavender overflow-x-hidden">
      {/* Cosmic Background Grid */}
      <div className="fixed inset-0 cosmic-grid opacity-10 pointer-events-none z-0"></div>
      
      {/* Optimized Background Elements */}
      <div className="fixed inset-0 pointer-events-none z-10">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${
              i % 3 === 0 ? 'bg-mystic-purple/30' :
              i % 3 === 1 ? 'bg-ethereal-blue/30' : 'bg-ethereal-pink/30'
            } rounded-full animate-pulse opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>
      
      {/* Subtle Aurora Lines */}
      <div className="fixed inset-0 pointer-events-none z-5">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-mystic-glow/10 to-transparent animate-pulse"
            style={{
              top: `${25 + i * 25}%`,
              left: `${20 + i * 10}%`,
              width: `60%`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>
      
      <div className="relative z-20">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
