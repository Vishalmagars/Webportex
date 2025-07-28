import React, { useState } from "react";
import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const addons = [
  {
    label: "Custom Web Development",
    icon: <FaCode />,
    price: "$1500",
    description:
      "Bespoke website tailored exactly to your brand and business goals, fully responsive and SEO optimized.",
  },
  {
    label: "Mobile App Integration",
    icon: <FaMobileAlt />,
    price: "$1200",
    description:
      "Seamless integration with native or cross-platform mobile applications to boost your reach.",
  },
  {
    label: "Cloud Hosting & Maintenance",
    icon: <FaCloud />,
    price: "$300/mo",
    description:
      "Reliable, scalable cloud hosting with proactive maintenance and 24/7 monitoring.",
  },
  {
    label: "Security & SSL Setup",
    icon: <FaShieldAlt />,
    price: "$400",
    description:
      "Enterprise-grade security measures, SSL certificates, and ongoing vulnerability assessments.",
  },
  {
    label: "Performance & SEO Audit",
    icon: <FaChartLine />,
    price: "$600",
    description:
      "Comprehensive audit to improve website speed, accessibility, and search engine ranking.",
  },
];

const ZaraStyleAgencyAddOns = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-24 bg-white text-black font-sans">
      <h2 className="text-5xl font-light uppercase tracking-widest text-center mb-20 border-b border-black pb-6">
        Additional Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {addons.map(({ label, icon, price, description }, i) => (
          <div
            key={i}
            onClick={() => toggle(i)}
            role="button"
            tabIndex={0}
            aria-expanded={openIndex === i}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") toggle(i);
            }}
            className={`relative cursor-pointer border border-black p-8 flex flex-col transition-shadow duration-300 hover:shadow-lg select-none`}
            style={{ paddingTop: "3rem" }} // add top padding so price doesn't overlap
          >
            {/* Price Badge top-right */}
            <div
              className="absolute top-3 right-6 text-black text-sm font-semibold px-5 py-1 tracking-widest rounded-sm"
              style={{ letterSpacing: "0.2em" }}
            >
              {price}
            </div>

            {/* Icon and Label */}
            <div className="flex items-center gap-4 mb-4 uppercase font-semibold text-lg tracking-wide text-black">
              <div className="text-3xl">{icon}</div>
              <div className="flex items-center gap-2">
                <span>{label}</span>
                <span className="text-xl">
                  {openIndex === i ? <FaMinus /> : <FaPlus />}
                </span>
              </div>
            </div>

            {/* Description */}
            {openIndex === i && (
              <p className="text-gray-800 text-base tracking-tight leading-relaxed mt-2">
                {description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ZaraStyleAgencyAddOns;
