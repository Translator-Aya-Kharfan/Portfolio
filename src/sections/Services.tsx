import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-12 md:py-16 bg-white/40">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="font-serif text-4xl text-primary mb-6">How I Can Help</h2>
          <p className="text-foreground text-lg">
            I provide language solutions shaped around the content, audience, platform, and purpose of each project.
          </p>
        </div>

        {/* Group 1 */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <div className="w-2 h-2 bg-accent rounded-sm"></div>
            <h3 className="font-serif text-xl text-primary">Language Solutions</h3>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {[
              { title: "Translation / Localization", desc: "Adapting content for specific markets while preserving brand voice and technical accuracy." },
              { title: "Machine Translation Post-Editing", desc: "Refining AI-translated content to ensure natural flow, correctness, and style adherence." },
              { title: "Proofreading & Linguistic QA", desc: "Meticulous review of grammar, syntax, layout, and contextual accuracy." },
              { title: "Transcreation & Cultural Adaptation", desc: "Reimagining creative copy so it resonates emotionally with the target culture." },
              { title: "Terminology Management", desc: "Building and maintaining glossaries for consistent brand language." }
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants} className="pb-6 border-b border-border/60 flex items-start gap-4">
                <div className="w-2 h-2 border border-accent mt-2 shrink-0"></div>
                <div>
                  <h4 className="font-medium text-primary mb-1">{service.title}</h4>
                  <p className="text-sm text-foreground">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Group 2 */}
        <div>
          <div className="flex items-center gap-3 mb-8 border-b border-border pb-4">
            <div className="w-2 h-2 bg-accent rounded-sm"></div>
            <h3 className="font-serif text-xl text-primary">Learning & Language Support</h3>
          </div>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
          >
            {[
              { title: "Language Courses & Private Tutoring", desc: "Structured learning paths customized to individual goals and proficiency levels." },
              { title: "Academic Language Support", desc: "Guidance on academic writing, structure, and formal expression." },
              { title: "Content Review", desc: "Structural and stylistic editing to elevate written material." },
              { title: "Subtitling & Transcription", desc: "Accurate audio-to-text conversion and timed subtitle creation." }
            ].map((service, i) => (
              <motion.div key={i} variants={itemVariants} className="pb-6 border-b border-border/60 flex items-start gap-4">
                <div className="w-2 h-2 border border-accent mt-2 shrink-0"></div>
                <div>
                  <h4 className="font-medium text-primary mb-1">{service.title}</h4>
                  <p className="text-sm text-foreground">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Services;
