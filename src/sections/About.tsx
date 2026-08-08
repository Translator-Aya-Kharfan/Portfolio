import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
          
          {/* Left Column: Bio */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 lg:pr-12"
          >
            <div className="text-accent text-xs font-semibold tracking-[0.15em] uppercase mb-6">
              Language · Culture · Technology
            </div>
            <div className="prose prose-p:text-foreground prose-p:leading-relaxed">
              <p>
                I'm Aya Kharfan, a multilingual translator and localization specialist based in Lebanon. I work across Arabic, English, French, and Spanish, combining linguistic knowledge, cultural awareness, and language technology to create content that feels clear, accurate, and natural to its intended audience.
              </p>
              <p className="mt-4">
                With more than three years of professional experience, I have contributed to translation and localization projects across travel, technology, automotive, healthcare, legal, financial, educational, humanitarian, marketing, luxury, and digital-content fields.
              </p>
              <p className="mt-4">
                My work includes translation, localization, machine translation post-editing, proofreading, linguistic quality assurance, terminology management, transcription, subtitling, and multilingual content review.
              </p>
            </div>
          </motion.div>
          
          {/* Vertical Divider (Hidden on mobile) */}
          <div className="hidden lg:block lg:col-span-1 relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border"></div>
          </div>
          
          {/* Right Column: Approach */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-6 lg:pl-4"
          >
            <h3 className="font-serif text-2xl text-primary mb-10">My Approach</h3>
            
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Understand the Purpose",
                  desc: "Before translating, I identify the purpose, audience, subject matter, tone, terminology, and communication goals."
                },
                {
                  num: "02",
                  title: "Adapt, Not Just Translate",
                  desc: "I focus on transferring meaning, intent, tone, and user experience rather than replacing words literally."
                },
                {
                  num: "03",
                  title: "Review Every Detail",
                  desc: "I review grammar, terminology, consistency, formatting, punctuation, numbers, style, and overall fluency."
                },
                {
                  num: "04",
                  title: "Use Technology Thoughtfully",
                  desc: "I use CAT tools, translation memories, terminology resources, QA workflows, and AI-assisted technology."
                }
              ].map((item, index) => (
                <div key={item.num} className="pb-8 border-b border-border last:border-0 last:pb-0">
                  <div className="flex items-start gap-6">
                    <div className="font-serif text-4xl text-primary/80 mt-1">
                      {item.num}
                    </div>
                    <div>
                      <h4 className="font-medium text-primary text-lg mb-2">{item.title}</h4>
                      <p className="text-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
