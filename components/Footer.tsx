
import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../constants';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-32 px-4 text-center border-t border-rose-900/10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="space-y-8"
      >
        <p className="text-2xl md:text-3xl font-serif text-rose-100 max-w-2xl mx-auto leading-relaxed italic">
          "{CONFIG.closingText}"
        </p>
        
        <div className="flex flex-col items-center gap-4">
          <Heart className="text-rose-600 fill-rose-600 animate-pulse" size={32} />
          <div className="text-slate-500 text-sm tracking-widest uppercase">
            Made with ❤️ by Chi
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
