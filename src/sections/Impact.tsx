import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const StatCounter = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        
        // easeOutQuart
        const easeOut = 1 - Math.pow(1 - progress, 4);
        setCount(Math.floor(easeOut * end));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  // Format large numbers with commas
  const formattedCount = count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  return (
    <span ref={ref}>
      {formattedCount}{suffix}
    </span>
  );
};

const Impact = () => {
  const stats = [
    { value: 3, suffix: "+", label: "Years of Experience" },
    { value: 4, suffix: "", label: "Working Languages" },
    { value: 30, suffix: "+", label: "Global Brands & Organizations" },
    { value: 500000, suffix: "+", label: "Words Translated & Reviewed" },
    { value: 300, suffix: "+", label: "Translation & Localization Projects" }
  ];

  return (
    <section id="impact" className="py-12 md:py-16">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left: Title & Decorative */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-4xl text-primary mb-4">Impact in Numbers</h2>
              <p className="text-foreground">
                Measurable experience across languages, industries, and borders.
              </p>
            </motion.div>
            
            <div className="hidden lg:block mt-24">
              <div className="w-12 h-12 border border-accent/30 rotate-45 transform origin-bottom-left"></div>
            </div>
          </div>
          
          {/* Right: Stats Grid */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`py-8 border-b border-border ${i >= stats.length - 2 && i % 2 !== 0 ? 'md:border-b-0' : ''} ${i === stats.length - 1 ? 'border-b-0' : ''}`}
                >
                  <div className="font-serif text-5xl md:text-6xl text-primary mb-3">
                    <StatCounter end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-[11px] font-semibold tracking-[0.15em] uppercase text-foreground/70">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Impact;
