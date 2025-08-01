import React from 'react';
import { FaEnvelope, FaGlobe } from 'react-icons/fa';

const ContactEnquiry = () => {
  return (
    <section className="relative bg-black py-32 px-6 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="bg-white/5 border border-blue-500/30 backdrop-blur-xl shadow-[0_20px_60px_#007BFF33] rounded-3xl p-10 md:p-16 text-white text-center transform hover:scale-[1.015] transition duration-500">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let’s Connect
          </h2>
          <p className="text-gray-300 text-sm md:text-base mb-8">
            For training, collaborations, or inquiries regarding sonography education or digital health platforms, reach out using the details below.
          </p>

          {/* Contact Cards */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="bg-black/50 border border-gray-600 p-4 rounded-xl w-full sm:w-auto hover:border-blue-500 transition">
              <div className="flex items-center gap-2 justify-center mb-2 text-blue-400">
                <FaEnvelope />
                <span className="text-sm font-medium">Emails</span>
              </div>
              <p className="text-gray-300 text-xs">
                <a href="mailto:admin@bilmedgroup.com" className="hover:underline">admin@bilmedgroup.com</a><br />
                <a href="mailto:contact@haleqad.net" className="hover:underline">contact@haleqad.net</a>
              </p>
            </div>

            <div className="bg-black/50 border border-gray-600 p-4 rounded-xl w-full sm:w-auto hover:border-blue-500 transition">
              <div className="flex items-center gap-2 justify-center mb-2 text-blue-400">
                <FaGlobe />
                <span className="text-sm font-medium">Websites</span>
              </div>
              <p className="text-gray-300 text-xs">
                <a href="https://www.bilmed.net" target="_blank" rel="noreferrer" className="hover:underline">www.bilmed.net</a><br />
                <a href="https://www.bilmedgroup.com" target="_blank" rel="noreferrer" className="hover:underline">www.bilmedgroup.com</a><br />
                <a href="https://www.haleqad.net" target="_blank" rel="noreferrer" className="hover:underline">www.haleqad.net</a>
              </p>
            </div>
          </div>

          <div className="mt-8">
            <a
              href="mailto:admin@bilmedgroup.com"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-500 transition"
            >
              Send an Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactEnquiry;
