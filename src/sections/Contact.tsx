import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-primary text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-5xl md:text-6xl mb-8">Let's Work Together</h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-md">
              Whether you need translation, localization, machine translation, post-editing, linguistic quality assurance, multilingual content review, subtitling, terminology support, or personalized language learning, I'd be happy to discuss your project.
            </p>
          </motion.div>
          
          {/* Right Column: Contact Items */}
          <div className="flex flex-col justify-center">
            {[
              { label: "EMAIL", value: "ayaalikharfan@gmail.com", href: "mailto:ayaalikharfan@gmail.com", link: true },
              { label: "WHATSAPP", value: "+961 70 831 710", href: "tel:+96170831710", link: true },
              { label: "LOCATION", value: "Beirut & Baalbeck, Lebanon", href: "", link: false }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group border-b border-white/20 py-8 first:pt-0"
              >
                <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#8899AA] mb-2">
                  {item.label}
                </div>
                {item.link ? (
                  <a 
                    href={item.href} 
                    className="inline-flex items-center gap-3 text-2xl md:text-3xl hover:text-accent transition-colors"
                  >
                    {item.value}
                    <ArrowUpRight className="w-6 h-6 opacity-0 -translate-y-2 -translate-x-2 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                ) : (
                  <div className="text-2xl md:text-3xl text-white/90">
                    {item.value}
                  </div>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
