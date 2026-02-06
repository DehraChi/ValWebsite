
import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../constants';
import { Heart } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-900/10 blur-[120px] rounded-full -z-10"></div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="space-y-6"
      >
        <div className="flex justify-center mb-2">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          >
            <Heart className="text-rose-500 fill-rose-500/20" size={32} />
          </motion.div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-rose-50 tracking-tight">
          {CONFIG.coupleName}
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-lg md:text-xl text-slate-400 font-light max-w-lg mx-auto leading-relaxed"
        >
          {CONFIG.heroSubtitle}
        </motion.p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12"
      >
        <div className="w-px h-16 bg-gradient-to-b from-rose-500/50 to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
