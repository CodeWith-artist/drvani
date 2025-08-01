import React, { useState } from 'react';
import { FaChalkboardTeacher, FaRobot, FaCertificate, FaVideo, FaChevronDown } from 'react-icons/fa';
import { AnimatePresence, motion } from 'framer-motion';

const contributions = [
  {
    title: "Hands-On Practical Training",
    icon: <FaChalkboardTeacher size={24} />,
    subpoints: [
      "Small-group scanning with expert supervision",
      "Bridges theory and clinical application",
      "Focus on patient-like practical scenarios",
    ],
  },
  {
    title: "1000+ CMEs, Webinars & Masterclasses",
    icon: <FaVideo size={24} />,
    subpoints: [
      "Advanced obstetric & gynecological scanning",
      "Infertility imaging",
      "Early pregnancy complications",
      "Fetal anomaly detection",
      "Emergency & abdominal ultrasound",
    ],
  },
  {
    title: "AI-Enabled Simulation Training",
    icon: <FaRobot size={24} />,
    subpoints: [
      "Introduced Volutracer OPUS AI Simulators",
      "Training without live patients",
      "Highly ethical & scalable model",
    ],
  },
  {
    title: "Curriculum Development",
    icon: <FaCertificate size={24} />,
    subpoints: [
      "Accredited modules for MBBS & MD practitioners",
      "Aligned with global standards",
      "Emphasis on ethical, hands-on learning paths",
    ],
  },
];

const SonographyContributions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-black text-white py-24 px-6" id="sonography-contributions">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Contributions to Sonography Education
      </h2>

      <div className="max-w-5xl mx-auto space-y-6">
        {contributions.map((item, i) => (
          <div
            key={i}
            className="bg-neutral-900 border border-blue-500/30 p-6 rounded-2xl shadow-lg"
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleDropdown(i)}
            >
              <div className="flex items-center gap-4">
                <div className="text-blue-500">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <FaChevronDown
                className={`transition-transform text-blue-400 duration-300 ${activeIndex === i ? 'rotate-180' : ''}`}
              />
            </div>

            <AnimatePresence initial={false}>
              {activeIndex === i && (
                <motion.ul
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden mt-4 text-sm text-gray-300 list-disc list-inside space-y-1"
                >
                  {item.subpoints.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SonographyContributions;
