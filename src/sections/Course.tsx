import React, { useState } from "react";
import { motion } from "framer-motion";

const learnItems = [
  {
    icon: "📄",
    title: "Professional Translation Fundamentals",
    desc: "Core principles of professional translation and how to handle different text types with confidence.",
  },
  {
    icon: "💻",
    title: "Practical Translation with Office Tools",
    desc: "Hands-on translation using Word, Excel, and PowerPoint while preserving formatting and linguistic consistency.",
  },
  {
    icon: "🔍",
    title: "Terminology Research & Reliable Sources",
    desc: "How to research technical terms and evaluate the credibility of reference materials and glossaries.",
  },
  {
    icon: "📋",
    title: "Professional CV & LinkedIn Profile",
    desc: "Build a standout translator CV and a LinkedIn profile that attracts clients and agencies.",
  },
  {
    icon: "🎯",
    title: "Translation Strategies & Error Prevention",
    desc: "Proven strategies to improve accuracy, fluency, and consistency while avoiding the most common pitfalls.",
  },
  {
    icon: "💼",
    title: "Finding & Applying for Work Opportunities",
    desc: "How to identify freelance and full-time opportunities in translation and localization, and how to apply successfully.",
  },
  {
    icon: "⚙️",
    title: "Introduction to CAT Tools",
    desc: "Get started with industry-standard Computer-Assisted Translation tools and understand how they improve efficiency.",
  },
  {
    icon: "🌐",
    title: "Volunteer Platforms & Recognized Certificates",
    desc: "Discover international volunteering opportunities that build real experience and earn you credible credentials.",
  },
];

const features = [
  { icon: "🎓", label: "Practical & Applied Content" },
  { icon: "📁", label: "Ready-Made Templates & Training Files" },
  { icon: "🏅", label: "Course Completion Certificate" },
  { icon: "🎧", label: "Personal Support Throughout Training" },
];

const Course = () => {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="course"
      style={{ background: "linear-gradient(135deg, #1A0F3C 0%, #2D1B69 60%, #1E1040 100%)" }}
      className="py-14 md:py-20 relative overflow-hidden"
    >
      {/* Ambient blobs */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-24 w-[480px] h-[480px] rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 -left-16 w-[360px] h-[360px] rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #F59E0B 0%, transparent 70%)" }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="max-w-2xl mb-12"
        >
          {/* Exclusive badge */}
          <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-[0.14em] uppercase"
            style={{ borderColor: "#F59E0B55", color: "#F59E0B", background: "#F59E0B14" }}>
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: "#F59E0B" }} />
            Exclusive Offering
          </div>

          <h2 className="font-serif text-4xl md:text-5xl text-white mb-4 leading-tight">
            Practical Course for<br />
            <span style={{ color: "#C4B5FD" }}>Beginner Translators</span>
          </h2>
          <p className="text-lg" style={{ color: "#C4B5FD99" }}>
            From university to your first professional opportunity — with the skills, tools, and confidence to get there.
          </p>
        </motion.div>

        {/* What You'll Learn */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-2"
        >
          <h3 className="text-xs font-semibold tracking-[0.18em] uppercase mb-6"
            style={{ color: "#8B5CF6" }}>
            What You'll Learn
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px mb-12"
          style={{ background: "#FFFFFF12" }}>
          {learnItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="p-6 cursor-default transition-colors duration-300"
              style={{
                background: hovered === i ? "#FFFFFF0D" : "transparent",
              }}
            >
              <div className="text-2xl mb-3 select-none" aria-hidden="true">{item.icon}</div>
              <h4 className="font-semibold text-sm text-white mb-2 leading-snug">{item.title}</h4>
              <p className="text-xs leading-relaxed" style={{ color: "#A78BFA99" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Practical capstone callout */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-start gap-4 rounded-xl px-6 py-4 mb-12"
          style={{ background: "#F59E0B14", border: "1px solid #F59E0B33" }}
        >
          <span className="text-xl mt-0.5 select-none" aria-hidden="true">🎯</span>
          <p className="text-sm" style={{ color: "#FCD34D" }}>
            <strong className="font-semibold" style={{ color: "#FBBF24" }}>Practical capstone: </strong>
            Real-world exercises and a final project that simulates an actual professional translation workflow.
          </p>
        </motion.div>

        {/* Features + Details row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Course features */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#8B5CF6" }}>
              Course Features
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-lg"
                  style={{ background: "#FFFFFF0A", border: "1px solid #FFFFFF14" }}
                >
                  <span className="text-xl select-none" aria-hidden="true">{f.icon}</span>
                  <span className="text-sm font-medium text-white leading-snug">{f.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Course details */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h3 className="text-xs font-semibold tracking-[0.18em] uppercase mb-5"
              style={{ color: "#8B5CF6" }}>
              Course Details
            </h3>
            <div className="space-y-0 rounded-xl overflow-hidden"
              style={{ border: "1px solid #FFFFFF14" }}>
              {[
                { label: "Duration", value: "32 Training Hours" },
                { label: "Format", value: "Online or In-Person — your choice" },
                { label: "Seats", value: "Limited to ensure individual attention" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between gap-4 px-6 py-4"
                  style={{
                    borderBottom: i < 2 ? "1px solid #FFFFFF12" : "none",
                    background: i % 2 === 0 ? "#FFFFFF05" : "transparent",
                  }}
                >
                  <span className="text-xs font-semibold tracking-[0.12em] uppercase shrink-0"
                    style={{ color: "#8B5CF6" }}>{d.label}</span>
                  <span className="text-sm text-white text-right">{d.value}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-6">
              <a
                href="tel:+96170831710"
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #7C3AED, #A855F7)",
                  color: "white",
                  boxShadow: "0 4px 24px #7C3AED44",
                }}
              >
                <span>Inquire & Register</span>
                <span className="text-base" style={{ color: "#FCD34D" }}>→</span>
              </a>
              <p className="text-xs mt-3" style={{ color: "#FFFFFF55" }}>
                Contact: <span style={{ color: "#C4B5FD" }}>+961 70 831 710</span>
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Course;
