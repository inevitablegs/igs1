import React, { useEffect, useState } from 'react';

const CyberCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      
      // Add trail effect
      setTrail(prev => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY, id: Date.now() }];
        return newTrail.slice(-10); // Keep only last 10 positions
      });
    };

    window.addEventListener('mousemove', updateCursor);

    return () => {
      window.removeEventListener('mousemove', updateCursor);
    };
  }, []);

  return (
    <>
      {/* Cursor trail */}
      {trail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50"
          style={{
            left: point.x - 2,
            top: point.y - 2,
            width: 4,
            height: 4,
            background: '#00ff41',
            borderRadius: '50%',
            opacity: (index + 1) / trail.length * 0.5,
            transform: `scale(${(index + 1) / trail.length})`,
            boxShadow: '0 0 10px #00ff41',
          }}
        />
      ))}
      
      {/* Main cursor */}
      <div
        className="fixed pointer-events-none z-50 cyber-cursor"
        style={{
          left: position.x - 10,
          top: position.y - 10,
        }}
      />
      
      {/* Cursor ring */}
      <div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x - 15,
          top: position.y - 15,
          width: 30,
          height: 30,
          border: '1px solid #00ff41',
          borderRadius: '50%',
          background: 'transparent',
          animation: 'neon-pulse 1s ease-in-out infinite alternate',
        }}
      />
    </>
  );
};

export default CyberCursor;
