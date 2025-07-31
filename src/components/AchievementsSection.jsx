import React from 'react';
import { motion } from 'framer-motion';

const achievements = [
  {
    title: "25,000+ Professionals Trained",
    description: "Across India and globally, Dr. Wani has upskilled gynecologists, radiologists, and clinicians with hands-on ultrasound training.",
  },
  {
    title: "1000+ CMEs & Webinars",
    description: "Led national and international masterclasses covering advanced sonography and diagnostic techniques.",
  },
  {
    title: "AI Ultrasound Simulation",
    description: "Pioneered Volutracer OPUS AI-based simulators for realistic scanning without live patients.",
  },
  {
    title: "Curriculum Developer",
    description: "Created structured, accredited ultrasound training paths aligned with global clinical standards.",
  },
  {
    title: "Global Institutional Footprint",
    description: "Bilmed and partner centers in India, Australia, CIS countries serve as hubs for education and teleconsultation.",
  },
];

const AchievementsSection = () => {
  return (
    <section className="bg-black text-white py-20 px-6" id="achievements">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white">
          Key Achievements & Contributions
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              className="bg-neutral-900 border border-gray-700 p-6 rounded-xl hover:shadow-xl hover:border-primaryBlue transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-primaryBlue mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
