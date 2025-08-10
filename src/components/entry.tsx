import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimationFrame } from 'framer-motion';

const EntryPage = ({ onEnter }: { onEnter: () => void }) => {
  const [isReady, setIsReady] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, vx: number, vy: number, size: number, opacity: number}>>([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [phase, setPhase] = useState(0);
  const particleId = useRef(0);

  // Create floating particles
  useEffect(() => {
    const createParticle = () => ({
      id: particleId.current++,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.5 + 0.2
    });

    const initialParticles = Array.from({ length: 50 }, createParticle);
    setParticles(initialParticles);

    const timer = setTimeout(() => setIsReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animate particles
  useAnimationFrame(() => {
    setParticles(prev => prev.map(particle => {
      let { x, y, vx, vy } = particle;
      
      x += vx;
      y += vy;
      
      if (x < 0 || x > window.innerWidth) vx *= -1;
      if (y < 0 || y > window.innerHeight) vy *= -1;
      
      return { ...particle, x, y, vx, vy };
    }));
    
    setPhase(prev => prev + 0.02);
  });

  // Glitch text effect
  const GlitchText = ({ children, className }: { children: string, className: string }) => {
    const [glitchActive, setGlitchActive] = useState(false);
    
    useEffect(() => {
      const interval = setInterval(() => {
        setGlitchActive(true);
        setTimeout(() => setGlitchActive(false), 150);
      }, 3000 + Math.random() * 2000);
      
      return () => clearInterval(interval);
    }, []);

    return (
      <div className="relative">
        <h1 className={`${className} relative z-10`}>{children}</h1>
        {glitchActive && (
          <>
            <h1 className={`${className} absolute top-0 left-0 text-red-400 opacity-80`} 
                style={{transform: 'translate(-2px, -2px)', clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'}}>
              {children}
            </h1>
            <h1 className={`${className} absolute top-0 left-0 text-blue-400 opacity-80`} 
                style={{transform: 'translate(2px, 2px)', clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)'}}>
              {children}
            </h1>
          </>
        )}
      </div>
    );
  };
  
  // --- FIX: Define full class names for Tailwind's JIT compiler ---
  const colorStyles: { [key: string]: string } = {
    cyan: 'bg-cyan-900/30 border-cyan-400 text-cyan-300',
    purple: 'bg-purple-900/30 border-purple-400 text-purple-300',
    green: 'bg-green-900/30 border-green-400 text-green-300',
    blue: 'bg-blue-900/30 border-blue-400 text-blue-300',
    pink: 'bg-pink-900/30 border-pink-400 text-pink-300',
  };

  const hoverShadows: { [key: string]: string } = {
    cyan: '0 0 30px rgba(0, 255, 255, 0.8)',
    purple: '0 0 30px rgba(192, 132, 252, 0.8)',
    green: '0 0 30px rgba(74, 222, 128, 0.8)',
    blue: '0 0 30px rgba(96, 165, 250, 0.8)',
    pink: '0 0 30px rgba(244, 114, 182, 0.8)',
  };

  return (
    <div className="relative w-screen h-screen bg-black flex flex-col items-center justify-center text-center p-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" 
             style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(139, 92, 246, 0.1) 0%, 
                  rgba(59, 130, 246, 0.1) 30%, 
                  rgba(236, 72, 153, 0.1) 60%, 
                  transparent 100%)`
             }} />
      </div>

      {/* Floating particles */}
      {particles.map(particle => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-cyan-400 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.opacity + Math.sin(phase * 2 + particle.id) * 0.2,
            scale: particle.size + Math.sin(phase * 3 + particle.id) * 0.5,
            boxShadow: '0 0 10px rgba(0, 255, 255, 0.8)'
          }}
        />
      ))}

      {/* Matrix rain effect */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-green-400 font-mono text-xs select-none"
            style={{ left: `${(i * 5) + Math.random() * 5}%` }}
            animate={{
              y: ['-100vh', '100vh'],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 10 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {Array.from({ length: 30 }).map((_, j) => 
              String.fromCharCode(0x30A0 + Math.random() * 96)
            ).join('')}
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {isReady && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateX: -90 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
              staggerChildren: 0.2
            }}
            className="flex flex-col items-center relative z-10"
          >
            {/* Holographic display */}
            <motion.div 
              className="relative mb-8"
              animate={{ 
                rotateY: Math.sin(phase) * 5,
                rotateX: Math.cos(phase * 0.7) * 3
              }}
            >
              <div className="absolute inset-0 border-2 border-cyan-400 opacity-50 rounded-xl"
                   style={{
                      background: 'linear-gradient(45deg, transparent 49%, rgba(0, 255, 255, 0.1) 50%, transparent 51%)',
                      backgroundSize: '20px 20px',
                      animation: 'scan 3s linear infinite'
                   }} />
              
              {/* --- EDIT: Increased container size --- */}
              <div className="w-[28rem] h-[20rem] relative perspective-1000">
                {[
                  // --- EDIT: Repositioned all items to fit new container ---
                  { code: 'React.js', x: 20, y: 20, delay: 0, color: 'cyan' },
                  { code: 'TypeScript', x: 130, y: 60, delay: 0.5, color: 'purple' },
                  { code: 'Node.js', x: 250, y: 30, delay: 1, color: 'green' },
                  { code: 'GraphDb', x: 200, y: 150, delay: 2, color: 'pink' },
                  { code: 'Go', x: 340, y: 90, delay: 2.5, color: 'cyan' },
                  { code: 'Azure', x: 160, y: 220, delay: 3, color: 'purple' },
                  { code: 'FastAPI', x: 280, y: 180, delay: 3.5, color: 'green' }
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    className={`absolute px-3 py-2 rounded-lg font-mono text-sm backdrop-blur-sm ${colorStyles[item.color]} max-w-[8rem] truncate whitespace-nowrap`}
                    style={{ left: item.x, top: item.y }}
                    animate={{
                      y: item.y + Math.sin(phase * 2 + item.delay) * 20,
                      rotateY: Math.sin(phase + item.delay) * 15,
                      rotateX: Math.cos(phase * 0.8 + item.delay) * 10,
                      scale: 1 + Math.sin(phase * 1.5 + item.delay) * 0.1
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotateY: 15,
                      boxShadow: hoverShadows[item.color]
                    }}
                  >
                    {item.code}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <GlitchText 
                className="text-4xl md:text-6xl font-black bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4"
              >
                PORTFOLIO-
              </GlitchText>
            </motion.div>

            <motion.div
              className="text-gray-300 mb-8 max-w-lg relative"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.p 
                className="font-mono text-lg"
                animate={{ textShadow: `0 0 20px rgba(0, 255, 255, ${0.5 + Math.sin(phase * 4) * 0.3})` }}
              >
                &gt; Initializing creative protocols...
                <motion.span 
                  className="inline-block w-2 h-5 bg-cyan-400 ml-1"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                />
              </motion.p>
              <motion.p 
                className="text-gray-400 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
              >
                Where algorithms meet artistry
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <motion.button
                onClick={onEnter}
                className="relative group px-8 py-4 font-bold text-black bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 40px rgba(0, 255, 255, 0.8), 0 0 60px rgba(128, 0, 255, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(0, 255, 255, 0.5)",
                    "0 0 30px rgba(128, 0, 255, 0.7)",
                    "0 0 20px rgba(0, 255, 255, 0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.div 
                  className="absolute inset-0 bg-white opacity-20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
                <span className="relative z-10">ENTER THE MATRIX</span>
              </motion.button>
            </motion.div>

            <motion.div
              className="absolute inset-0 pointer-events-none"
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @keyframes scan {
          0% { background-position: 0% 0%; }
          100% { background-position: 100% 100%; }
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(0, 0, 0, 0.5);
        }
        
        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default EntryPage;
