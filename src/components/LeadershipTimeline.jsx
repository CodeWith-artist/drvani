import React from 'react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';

const leadership = [
  {
    title: "CEO, Bilmed Group",
    year: "Present",
    caption: "Shaping India's premier ultrasound education empire.",
  },
  {
    title: "President, AICS & FICS",
    year: "Since 2020",
    caption: "Nationwide leadership in imaging & clinical sonology.",
  },
  {
    title: "Founder, HaleQad",
    year: "2017",
    caption: "Pioneered AI simulators for ethical sonography training.",
  },
  {
    title: "Founder & CEO, Consulto",
    year: "2015",
    caption: "Bridging rural-urban healthcare with digital vision.",
  },
];

const LeadershipShowcase = () => {
  return (
    <section className="relative z-10 bg-black py-24 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-20">
          Leadership Legacy
        </h2>

        <div className="flex flex-col gap-16">
          {leadership.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.2}
                glareColor="#007BFF"
                glarePosition="all"
                tiltMaxAngleX={10}
                tiltMaxAngleY={10}
                className="w-full max-w-full md:max-w-4xl mx-auto"
              >
                <div className="relative p-6 sm:p-8 rounded-3xl bg-white/5 border border-blue-600/30 shadow-[0_0_30px_#007BFF33] backdrop-blur-md text-white transition-all">
                  <span className="absolute -top-4 left-4 bg-blue-600 px-3 py-1 text-xs rounded-full font-bold shadow-md">
                    {item.year}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base">{item.caption}</p>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing blue backdrop */}
      <div className="absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-blue-500 opacity-10 blur-3xl rounded-full z-0" />
    </section>
  );
};

export default LeadershipShowcase;
