import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaHospital, FaMedal, FaUsers , FaChalkboardTeacher } from 'react-icons/fa';

const highlights = [
  {
    icon: <FaUsers size={28} />,
    title: "25,000+ Professionals Trained",
    description: "Across India and globally in clinical sonography.",
  },
  {
    icon: <FaHospital size={28} />,
    title: "International Institutional Presence",
    description: "Centers in India, Australia & CIS countries.",
  },
  {
    icon: <FaUserGraduate size={28} />,
    title: "20+ Years of Experience",
    description: "MBBS, MD Radiology with dual clinical and academic expertise.",
  },
  {
    icon: <FaMedal size={28} />,
    title: "National Leadership",
    description: "President of AICS & FICS — pioneering ethical sonology.",
  },
  {
    icon: <FaChalkboardTeacher size={28} />,
    title: "Curriculum Developer",
    description: "Created structured ultrasound learning paths for clinicians.",
  },
];

const KeyHighlights = () => {
  return (
    <section className="bg-gradient-to-br from-black via-neutral-900 to-black text-white py-24 px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">
          <span className="text-blue-500">Key Highlights</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm">
          A snapshot of Dr. Wani’s legacy, impact, and leadership in medical education and sonology.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {highlights.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            className="relative bg-neutral-900 p-6 rounded-2xl border border-blue-500/20 shadow-[0_0_30px_#007BFF22] hover:shadow-[0_0_40px_#007BFF55] group transition duration-300"
          >
            <div className="text-blue-400 mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
            <p className="text-sm text-gray-400 mt-2">{item.description}</p>

            {/* Optional glowing ring */}
            <div className="absolute -top-2 -right-2 w-5 h-5 bg-blue-500 rounded-full blur-sm opacity-70 animate-pulse group-hover:scale-125 transition" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default KeyHighlights;
