import React from 'react';
import { motion } from 'framer-motion';

const Workspace = () => {
  const categories = [
    {
      title: "CAT Tools",
      tags: ["Trados Studio", "MemoQ", "Phrase", "XTM", "Memsource"]
    },
    {
      title: "AI & Quality",
      tags: ["Machine Translation Post-Editing", "Linguistic Quality Assurance", "Translation Memory", "Terminology Management", "Glossary Management", "AI-Assisted Translation Workflows"]
    },
    {
      title: "Workflow & Productivity",
      tags: ["Jira", "Canva", "Microsoft 365", "Google Workspace", "File Formatting", "Multilingual Content Review"]
    }
  ];

  return (
    <section id="workspace" className="py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-serif text-4xl text-primary mb-6">My Translation Workspace</h2>
          <p className="text-foreground text-lg">
            The right tools help me work efficiently. Careful linguistic decisions keep every translation natural, accurate, consistent, and appropriate for its intended audience.
          </p>
        </div>

        <div className="space-y-12">
          {categories.map((category, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-[250px_1fr] items-center gap-6 md:gap-10"
            >
              <div className="flex items-center w-full">
                <h3 className="font-serif text-xl text-primary shrink-0 mr-4">{category.title}</h3>
                <div className="h-[1px] w-full bg-border md:hidden"></div>
              </div>
              
              <div className="flex items-center gap-6">
                <div className="hidden md:block h-[1px] w-12 bg-border shrink-0"></div>
                <div className="flex flex-wrap gap-3">
                  {category.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-1.5 border border-border rounded-full text-[13px] text-foreground/80 whitespace-nowrap bg-white/50 hover:border-primary/30 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Workspace;
