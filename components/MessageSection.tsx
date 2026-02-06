
import React from 'react';
import { motion } from 'framer-motion';
import { CONFIG } from '../constants';
import { Quote } from 'lucide-react';

const MessageSection: React.FC = () => {
  // Animation variants for the message cards
  const cardVariants = {
    hidden: (index: number) => ({
      opacity: 0,
      y: 40,
      x: index % 2 === 0 ? -20 : 20,
      scale: 0.95,
    }),
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 20,
        duration: 1.2,
      },
    },
  };

  return (
    <section className="py-32 px-4 bg-slate-950/50 relative overflow-hidden">
      {/* Decorative background element for the section */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-rose-900/40 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-900/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto space-y-24 relative z-10">
        {CONFIG.messages.map((msg, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3, margin: "0px 0px -50px 0px" }}
            variants={cardVariants}
            className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
          >
            <div className="glass-card p-10 md:p-14 rounded-[2.5rem] max-w-2xl relative rose-glow transition-all duration-700 hover:border-rose-500/30 group">
              {/* Animated Quote icon */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-6 -left-6 bg-slate-950 p-3 rounded-2xl border border-rose-500/20 shadow-xl"
              >
                <Quote 
                  className="text-rose-500/60 group-hover:text-rose-500 transition-colors duration-500" 
                  size={32} 
                />
              </motion.div>
              
              <p className="text-xl md:text-2xl leading-relaxed text-slate-100 font-serif italic font-light selection:bg-rose-500/40">
                "{msg}"
              </p>
              
              {/* Subtle accent line that appears on hover */}
              <div className="absolute bottom-6 right-10 w-0 h-px bg-gradient-to-l from-rose-500/40 to-transparent group-hover:w-24 transition-all duration-700 ease-out"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MessageSection;
