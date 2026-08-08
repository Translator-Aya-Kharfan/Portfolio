import React from "react";
import { motion } from "framer-motion";

const Credentials = () => {
  const credentials = [
    {
      category: "AI & LANGUAGE TECHNOLOGY",
      title: "Linguistic AI Certification Training",
      provider: "RWS Group",
      year: "2026",
    },
    {
      category: "USER EXPERIENCE & DIGITAL CONTENT",
      title: "Google UX Design Certificate",
      provider: "Google · Coursera",
      year: "completed",
    },
    {
      category: "CAT TOOLS & TRANSLATION TECHNOLOGY",
      title: "Trados Studio 2024",
      provider: "RWS",
      year: "completed",
    },
    {
      category: "MULTILINGUAL COMMUNICATION",
      title: "Working in a Multilingual Environment",
      provider: "UNITAR",
      year: "completed",
    },
    {
      category: "TRANSLATION & LOCALIZATION",
      title: "Professional Translation and Localization Training",
      provider: "RWS Group",
      year: "completed",
    },
  ];

  return (
    <section id="credentials" className="py-12 md:py-16 bg-white/30">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="max-w-2xl mb-10">
          <h2 className="font-serif text-4xl text-primary mb-6">Credentials</h2>
          <p className="text-foreground text-lg">
            I continue developing my skills across language technology,
            localization, artificial intelligence, digital design, user
            experience, and multilingual communication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {credentials.map((cred, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border border-border bg-background p-8 rounded-sm hover:border-primary/20 hover:shadow-sm transition-all flex flex-col h-full group"
            >
              <div className="text-[10px] tracking-[0.15em] font-semibold text-accent uppercase mb-4">
                {cred.category}
              </div>
              <h3 className="font-serif text-xl text-primary mb-6 group-hover:text-primary transition-colors">
                {cred.title}
              </h3>

              <div className="mt-auto pt-6 border-t border-border flex justify-between items-end">
                <div className="text-sm text-foreground/80 font-medium">
                  {cred.provider}
                </div>
                <div className="text-xs text-foreground/60">{cred.year}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Credentials;
