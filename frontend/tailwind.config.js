/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Lavender Purple Supernatural Theme
        mystic: {
          purple: '#9d8df1',
          lavender: '#c8b5ff',
          deep: '#6b46c1',
          light: '#e0d4ff',
          glow: '#b794f6',
          dark: '#1e1b4b',
          darker: '#0f0f23',
        },
        ethereal: {
          blue: '#7c3aed',
          pink: '#c084fc',
          violet: '#8b5cf6',
          indigo: '#6366f1',
          purple: '#a855f7',
        },
        supernatural: {
          dark: '#1e1b4b',
          darker: '#0f0f23',
          deep: '#312e81',
          cosmic: '#4c1d95',
        },
        cosmic: {
          purple: '#8b5cf6',
          lavender: '#ddd6fe',
          deep: '#581c87',
          glow: '#a78bfa',
        },
        primary: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7c3aed',
          800: '#6b21a8',
          900: '#581c87',
        },
        accent: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
      },
      animation: {
        // Supernatural animations
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
        'shimmer': 'shimmer 4s ease-in-out infinite',
        'pulse-mystic': 'pulseMystic 4s ease-in-out infinite',
        'ethereal-drift': 'etherealDrift 8s ease-in-out infinite',
        'cosmic-rotation': 'cosmicRotation 20s linear infinite',
        'mystical-wave': 'mysticalWave 5s ease-in-out infinite',
        'aurora': 'aurora 10s ease-in-out infinite',
        'starfall': 'starfall 3s ease-out infinite',
        'magic-sparkle': 'magicSparkle 2s ease-in-out infinite',
        'supernatural-pulse': 'supernaturalPulse 3s ease-in-out infinite',
        'cosmic-breathe': 'cosmicBreathe 4s ease-in-out infinite',
        'ethereal-float': 'etherealFloat 7s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { 
            boxShadow: '0 0 20px rgba(157, 141, 241, 0.5), 0 0 40px rgba(157, 141, 241, 0.3)',
            textShadow: '0 0 10px rgba(157, 141, 241, 0.8)'
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(157, 141, 241, 0.8), 0 0 80px rgba(157, 141, 241, 0.6)',
            textShadow: '0 0 20px rgba(157, 141, 241, 1)'
          },
        },
        shimmer: {
          '0%': { opacity: 0.5, transform: 'translateX(-100%)' },
          '50%': { opacity: 1 },
          '100%': { opacity: 0.5, transform: 'translateX(100%)' },
        },
        pulseMystic: {
          '0%, 100%': { 
            opacity: 0.8,
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: 1,
            transform: 'scale(1.05)',
          },
        },
        etherealDrift: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-10px) translateX(5px)' },
          '50%': { transform: 'translateY(-5px) translateX(-5px)' },
          '75%': { transform: 'translateY(-15px) translateX(3px)' },
        },
        cosmicRotation: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        mysticalWave: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        aurora: {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, rgba(157, 141, 241, 0.1), rgba(192, 132, 252, 0.1))',
          },
          '50%': { 
            background: 'linear-gradient(45deg, rgba(192, 132, 252, 0.2), rgba(139, 92, 246, 0.2))',
          },
        },
        starfall: {
          '0%': { 
            transform: 'translateY(-100vh) translateX(0px) rotate(0deg)',
            opacity: 1,
          },
          '100%': { 
            transform: 'translateY(100vh) translateX(-50px) rotate(180deg)',
            opacity: 0,
          },
        },
        magicSparkle: {
          '0%, 100%': { 
            opacity: 0,
            transform: 'scale(0)',
          },
          '50%': { 
            opacity: 1,
            transform: 'scale(1)',
          },
        },
        supernaturalPulse: {
          '0%, 100%': { 
            boxShadow: '0 0 0 0 rgba(139, 92, 246, 0.7)',
            transform: 'scale(1)'
          },
          '50%': { 
            boxShadow: '0 0 0 20px rgba(139, 92, 246, 0)',
            transform: 'scale(1.02)'
          },
        },
        cosmicBreathe: {
          '0%, 100%': { 
            opacity: 0.7,
            transform: 'scale(1)',
          },
          '50%': { 
            opacity: 1,
            transform: 'scale(1.03)',
          },
        },
        etherealFloat: {
          '0%, 100%': { transform: 'translateY(0px) rotateY(0deg)' },
          '33%': { transform: 'translateY(-15px) rotateY(5deg)' },
          '66%': { transform: 'translateY(-10px) rotateY(-5deg)' },
        },
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
        'mystical': ['Cinzel', 'serif'],
        'elegant': ['Poppins', 'sans-serif'],
        'cosmic': ['Orbitron', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 20px rgba(157, 141, 241, 0.5)',
        'glow-lg': '0 0 40px rgba(157, 141, 241, 0.7)',
        'mystic': '0 0 30px rgba(139, 92, 246, 0.6)',
        'ethereal': '0 10px 50px rgba(124, 58, 237, 0.4)',
        'cosmic': '0 0 60px rgba(168, 85, 247, 0.8)',
        'supernatural': '0 0 25px rgba(157, 141, 241, 0.6), 0 0 50px rgba(157, 141, 241, 0.4)',
        'lavender': '0 0 20px rgba(200, 181, 255, 0.5)',
        'purple-glow': '0 0 30px rgba(107, 70, 193, 0.7)',
      },
      backgroundImage: {
        'mystic-gradient': 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)',
        'ethereal-gradient': 'linear-gradient(45deg, #6b46c1, #8b5cf6, #a855f7, #c084fc)',
        'cosmic-gradient': 'radial-gradient(ellipse at center, #7c3aed 0%, #1e1b4b 70%)',
        'aurora-gradient': 'linear-gradient(90deg, #9d8df1, #c8b5ff, #b794f6, #8b5cf6)',
        'supernatural-grid': `
          linear-gradient(rgba(157, 141, 241, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(157, 141, 241, 0.1) 1px, transparent 1px)
        `,
        'mystical-pattern': `
          radial-gradient(circle at 20% 80%, rgba(157, 141, 241, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(192, 132, 252, 0.1) 0%, transparent 50%),
          radial-gradient(circle at 40% 40%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)
        `,
      }
    },
  },
  plugins: [],
}
