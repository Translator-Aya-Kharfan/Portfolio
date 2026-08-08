import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      <div className="bg-noise" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        
        {/* Left Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-xl"
        >
          <div className="text-accent text-[11px] font-semibold tracking-[0.2em] uppercase mb-6">
            Translator · Localization Specialist
          </div>
          
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] text-primary mb-8">
            Words,<br />
            carried<br />
            with <span className="italic text-accent">precision</span>.
          </h1>
          
          <p className="text-foreground text-lg leading-relaxed mb-10 max-w-md">I'm Aya Kharfan, a multilingual translator and language partner based in Lebanon. I help ideas travel clearly across languages, cultures, and industries—connecting people through precise and meaningful communication.</p>
          
          <div className="flex flex-wrap items-center gap-6">
            <a 
              href="#contact" 
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded hover:bg-primary/90 transition-colors font-medium flex items-center gap-2 group"
            >
              Start a conversation
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#services" 
              className="text-foreground hover:text-primary font-medium underline-offset-4 hover:underline transition-all"
            >
              See selected work
            </a>
          </div>
        </motion.div>
        
        {/* Right Column - Abstract Composition */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="relative h-[500px] w-full max-w-md mx-auto lg:ml-auto lg:mr-0 flex items-center justify-center"
        >
          {/* Main Teal Shape */}
          <div className="absolute inset-0 bg-[#3D8B7A] rounded-[40px] rounded-tr-[120px] rounded-bl-[80px] shadow-2xl opacity-90 overflow-hidden">
            {/* Inner texture */}
            <div className="bg-noise opacity-20 mix-blend-overlay" />
          </div>
          
          {/* Muted Rose Circle */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-12 -right-8 w-40 h-40 bg-[#B8907A] rounded-full mix-blend-multiply opacity-80"
          />
          
          {/* Sage Green Circle */}
          <motion.div 
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#A8B8A0] rounded-full mix-blend-multiply opacity-80"
          />
          
          {/* Floating White Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] bg-white/95 backdrop-blur shadow-xl rounded-xl p-8 border border-white/20"
          >
            <BookOpen className="w-6 h-6 text-accent mb-4 opacity-80" />
            <h2 className="font-serif text-3xl text-primary mb-2">
              Every word has a home.
            </h2>
            <div className="absolute top-6 right-8 font-serif text-5xl text-accent/20 select-none">
              لغة
            </div>
          </motion.div>
          
          {/* Bottom Label */}
          <div className="absolute bottom-8 left-8 right-8 text-white/90 text-[10px] tracking-[0.15em] font-medium border-t border-white/20 pt-4 uppercase">
            Aya Kharfan / Translator · Editor · Language Partner
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
