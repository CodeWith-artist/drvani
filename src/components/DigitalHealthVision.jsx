import React from 'react';

const features = [
  "Video Consultations",
  "E-Prescriptions",
  "AI-Assisted Triage Systems",
  "Rural-Urban Healthcare Bridge",
  "Next-Gen Digital Platform",
];

const stats = [
  { label: "Professionals Trained", value: "25,000+" },
  { label: "Institutional Presence", value: "Global" },
  { label: "Years Experience", value: "20+" },
  { label: "National Presidencies", value: "2" },
];

const DigitalHealthVision = () => {
  return (
    <section className="bg-black text-white py-24 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Visionary in Digital Healthcare
      </h2>

      <div className="bg-[#0c0c0c] border border-blue-500/20 rounded-2xl p-8 md:p-12 text-center max-w-5xl mx-auto shadow-[0_0_30px_#007BFF22]">
        <div className="inline-block mb-4 bg-blue-600/20 text-blue-400 text-xs px-4 py-1 rounded-full font-bold border border-blue-500/30">
          CEO – Consulto Pvt. Ltd.
        </div>

        <h3 className="text-2xl md:text-3xl font-bold mb-2">
          Building India’s Next-Gen Digital Consultation Platform
        </h3>

        <p className="text-gray-400 mb-6 text-sm md:text-base">
          Bridging rural–urban healthcare gaps through innovative technology solutions.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {features.map((feat, i) => (
            <div
              key={i}
              className="bg-white text-black text-sm px-4 py-2 rounded-xl font-semibold hover:bg-blue-100 transition"
            >
              {feat}
            </div>
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-neutral-900 rounded-xl mt-16 py-8 px-4 text-center max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, i) => (
          <div key={i}>
            <div className="text-2xl font-bold text-blue-500">{item.value}</div>
            <div className="text-sm text-gray-300">{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DigitalHealthVision;
