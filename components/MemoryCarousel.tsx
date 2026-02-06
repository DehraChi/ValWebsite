
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CONFIG } from '../constants';

const MemoryCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % CONFIG.memories.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + CONFIG.memories.length) % CONFIG.memories.length);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft') {
        prev();
      } else if (event.key === 'ArrowRight') {
        next();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [next, prev]);

  return (
    <section className="py-32 px-4 overflow-hidden bg-gradient-to-b from-slate-950 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-serif text-rose-50 mb-4">Cherished Moments</h2>
          <div className="w-24 h-1 bg-rose-600 mx-auto rounded-full opacity-50"></div>
          <p className="text-slate-500 text-xs mt-4 uppercase tracking-widest hidden md:block">Use arrow keys to navigate</p>
        </div>

        <div className="relative h-[450px] md:h-[600px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.95, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -50 }}
              whileHover={{ scale: 1.03 }}
              transition={{ 
                duration: 0.6, 
                ease: "anticipate",
                scale: { duration: 0.4 } // Faster transition for hover scale
              }}
              className="w-full max-w-lg md:max-w-2xl aspect-[4/5] md:aspect-[16/10] relative group cursor-pointer"
            >
              {/* Card Container */}
              <div className="w-full h-full rounded-3xl overflow-hidden glass-card rose-glow border border-white/10 relative transition-all duration-500 group-hover:shadow-[0_0_50px_rgba(225,29,72,0.4)] group-hover:border-rose-500/30">
                <img 
                  src={CONFIG.memories[currentIndex].url} 
                  alt={CONFIG.memories[currentIndex].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay text */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-serif text-white mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {CONFIG.memories[currentIndex].title}
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base font-light translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    {CONFIG.memories[currentIndex].caption}
                  </p>
                </div>
              </div>

              {/* Glowing Background Effect - intensified on hover */}
              <div className="absolute -inset-4 bg-rose-600/5 blur-3xl -z-10 rounded-full transition-opacity duration-500 group-hover:opacity-100 opacity-60"></div>
              <div className="absolute -inset-12 bg-rose-900/10 blur-[80px] -z-20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 flex items-center z-10">
            <button 
              onClick={prev}
              aria-label="Previous memory"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-90"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 flex items-center z-10">
            <button 
              onClick={next}
              aria-label="Next memory"
              className="p-3 rounded-full bg-white/5 hover:bg-white/10 text-white backdrop-blur-md border border-white/10 transition-all hover:scale-110 active:scale-90"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        {/* Indicators - Rose Themed Circular Indicators */}
        <div className="flex justify-center mt-16 space-x-6 items-center">
          {CONFIG.memories.map((_, i) => {
            const isActive = i === currentIndex;
            return (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                aria-label={`Go to memory ${i + 1}`}
                className="relative flex items-center justify-center transition-all duration-300"
              >
                {/* Outer Glow Ring for Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="absolute -inset-3 rounded-full bg-rose-500/20 blur-md"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                  />
                )}
                
                {/* The Indicator Circle itself */}
                <motion.div
                  animate={{
                    scale: isActive ? 1.5 : 1,
                    backgroundColor: isActive ? '#f43f5e' : '#1e293b', // rose-500 vs slate-800
                    boxShadow: isActive ? '0 0 15px rgba(244, 63, 94, 0.6)' : '0 0 0px rgba(0,0,0,0)',
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="w-3 h-3 rounded-full z-10 border border-white/5"
                />
                
                {/* Decorative Petal Accent for Active Slide */}
                {isActive && (
                  <motion.div
                    initial={{ rotate: 0, opacity: 0 }}
                    animate={{ rotate: 360, opacity: 1 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-4 border border-rose-500/10 rounded-full border-dashed"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MemoryCarousel;
