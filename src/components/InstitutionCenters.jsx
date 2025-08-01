import React from 'react';
import { FaMapMarkerAlt, FaGlobeAsia, FaStethoscope, FaChalkboardTeacher } from 'react-icons/fa';

const indiaCenters = [
  {
    city: "Gurgaon (NCR)",
    locations: [
      "JMD Megapolis, Sohna Road",
      "ILD Trade Centre",
      "Central Park Flower Valley, Sohna",
    ],
  },
  {
    city: "New Delhi",
    locations: ["A-22, Janakpuri"],
  },
];

const globalCenters = [
  {
    city: "Sydney, Australia",
    description: "International ultrasound training hub",
  },
  {
    city: "Tashkent, CIS Countries",
    description: "Remote sonography education & consultation",
  },
];

const InstitutionCenters = () => {
  return (
    <section className="bg-black text-white py-24 px-6" id="institution-footprint">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
        Institutional Footprint
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        {/* India */}
        <div>
          <h3 className="text-2xl font-bold text-blue-500 mb-6 flex items-center gap-2">
            <FaMapMarkerAlt /> India (National)
          </h3>
          <div className="space-y-6">
            {indiaCenters.map((center, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-blue-500/30 rounded-2xl p-5"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">{center.city}</h4>
                <ul className="text-sm text-gray-400 list-disc list-inside space-y-1">
                  {center.locations.map((loc, idx) => (
                    <li key={idx}>{loc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Global */}
        <div>
          <h3 className="text-2xl font-bold text-blue-500 mb-6 flex items-center gap-2">
            <FaGlobeAsia /> Global Centers
          </h3>
          <div className="space-y-6">
            {globalCenters.map((center, i) => (
              <div
                key={i}
                className="bg-neutral-900 border border-blue-500/30 rounded-2xl p-5"
              >
                <h4 className="text-xl font-semibold mb-2 text-white">{center.city}</h4>
                <p className="text-sm text-gray-400">{center.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Tagline */}
      <div className="mt-16 text-center text-gray-400 text-sm max-w-3xl mx-auto">
        <div className="inline-flex items-center justify-center gap-2">
          <FaStethoscope />
          <span>Advanced Ultrasound Training</span>
        </div>
        <div className="inline-flex items-center justify-center gap-2 mt-2">
          <FaChalkboardTeacher />
          <span>Continuous Medical Education (CME) & Teleconsultation Services</span>
        </div>
      </div>
    </section>
  );
};

export default InstitutionCenters;
