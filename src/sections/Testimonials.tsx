import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Aya consistently delivered high-quality localization work with excellent attention to detail. Her translations were accurate, consistent, and always submitted on time.",
    author: "Localization Project Team",
    org: "RWS",
  },
  {
    quote:
      "Aya demonstrated strong linguistic accuracy and an excellent understanding of travel and hospitality content, ensuring natural and user-friendly Arabic localization.",
    author: "Localization Team",
    org: "Booking.com",
  },
  {
    quote:
      "Aya approached every translation task with professionalism and cultural sensitivity. Her work reflected accuracy, clarity, and commitment to high-quality multilingual communication.",
    author: "Project Team",
    org: "UNDP",
  },
  {
    quote:
      "Aya's professionalism, communication skills, and dedication made her a valuable contributor. She consistently delivered reliable work while supporting humanitarian initiatives.",
    author: "Management Team",
    org: "Karama Humanitarian Association",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-12 md:py-16 bg-background">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-serif text-4xl text-primary mb-3">What Clients Say</h2>
          <p className="text-foreground/70 text-base max-w-xl">
            Feedback from teams and organizations I have had the pleasure of working with.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="bg-background p-8 flex flex-col gap-6 group hover:bg-[#F0EDE9] transition-colors duration-300"
            >
              {/* Opening mark */}
              <span
                className="block font-serif text-5xl leading-none select-none"
                style={{ color: "#C85A54", opacity: 0.35 }}
                aria-hidden="true"
              >
                "
              </span>

              {/* Quote */}
              <p className="font-serif text-[17px] text-primary leading-relaxed -mt-4">
                {t.quote}
              </p>

              {/* Attribution */}
              <div className="mt-auto pt-5 border-t border-border flex items-center gap-3">
                {/* Decorative dot */}
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#C85A54" }}
                />
                <div>
                  <div className="text-[13px] font-semibold text-primary/80">
                    {t.author}
                  </div>
                  <div className="text-[12px] tracking-[0.1em] uppercase text-foreground/50 mt-0.5">
                    {t.org}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
