// ExportPlanExpandableGrid.jsx
import React, { useState } from "react";
import {
  FaWhatsapp,
  FaGlobe,
  FaRobot,
  FaSearch,
  FaGoogleDrive,
  FaLayerGroup,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const features = [
  {
    label: "5 Essential Export Pages",
    icon: <FaLayerGroup />,
    note: "Includes Homepage, About, Products, Contact & RFQ pages designed to convert global buyers.",
  },
  {
    label: "Static Website",
    icon: <FaGlobe />,
    note: "Super-fast, secure, and lightweight — no backend or CMS needed.",
  },
  {
    label: "Google Sheet Integration",
    icon: <FaGoogleDrive />,
    note: "Every inquiry is auto-logged into your preferred Google Sheet or CRM.",
  },
  {
    label: "AI Chatbot",
    icon: <FaRobot />,
    note: "Handles FAQs and captures leads around the clock, even while you sleep.",
  },
  {
    label: "WhatsApp Integration",
    icon: <FaWhatsapp />,
    note: "1-click to chat with buyers directly on mobile or desktop, globally accessible.",
  },
  {
    label: "SEO Friendly",
    icon: <FaSearch />,
    note: "Optimized with meta tags, mobile responsiveness, speed, and structured schema.",
  },
];

const ExportPlanExpandableGrid = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black px-6 md:px-24 py-24 font-sans">
      {/* Title */}
      <h2 className="text-4xl md:text-5xl font-light uppercase tracking-wide text-center mb-20">
        Growth Exporter Plan
      </h2>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-black p-6 transition-all duration-300"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-3">
                <div className="text-xl">{feature.icon}</div>
                <h3 className="text-lg font-semibold">{feature.label}</h3>
              </div>
              <button onClick={() => toggle(index)} aria-label="Toggle feature">
                {openIndex === index ? (
                  <FaMinus className="text-sm" />
                ) : (
                  <FaPlus className="text-sm" />
                )}
              </button>
            </div>

            {/* Expandable Note */}
            {openIndex === index && (
              <div className="text-sm text-gray-700 mt-2">
                {feature.note}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExportPlanExpandableGrid;
