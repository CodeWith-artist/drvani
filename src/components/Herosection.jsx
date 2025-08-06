import React from 'react';
import { motion } from 'framer-motion';
import SaveContactButton from './SaveContactButton';
import Photo from '../assets/photo.png'
import SocialmediaIcons from './SocialmediaIcons';

const HeroSection = () => {
  return (
    <section className="h-screen bg-black text-white flex items-center justify-center px-16md:flex-row flex-col">
      <motion.div
        initial={{ opacity: 0 , y: -50 }}
        animate={{ opacity: 1 , y: 0 }}
        transition={{ duration: 0.8 }}      
      >
        <img src={Photo} alt="Dr. AB. Wani" className='rounded-ful w-96 md:w-80 '/>
      </motion.div>
      <div className="max-w-5xl w-full text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Dr. A. B. Wani
        </motion.h1>

        <motion.p 
          className="mt-4 text-lg md:text-2xl text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Visionary Radiologist • CEO, Bilmed Group • President, AICS & FICS
        </motion.p>

        <motion.p 
          className="mt-4 text-sm md:text-base text-gray-400 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Transforming medical education globally with over 25,000 trained professionals, pioneering hands-on ultrasound training, and leading digital healthcare innovation.
        </motion.p>

        <motion.div 
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <SocialmediaIcons />
         <SaveContactButton />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
