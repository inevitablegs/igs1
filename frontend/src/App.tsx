import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import MatrixRain from './components/MatrixRain';
import CyberCursor from './components/CyberCursor';

function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Matrix Rain Background */}
      <MatrixRain />
      
      {/* Cyberpunk Cursor */}
      <CyberCursor />
      
      {/* Original Particle Background (for additional effects) */}
      <ParticleBackground />
      
      {/* Scan Lines Effect */}
      <div className="fixed inset-0 pointer-events-none z-10">
        <div className="scan-lines"></div>
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
