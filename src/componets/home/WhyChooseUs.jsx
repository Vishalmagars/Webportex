import React from "react";
import { FaGlobe, FaHandshake, FaSearch, FaUserTie } from "react-icons/fa";
import { motion } from "framer-motion";

const points = [
  {
    icon: <FaGlobe className="text-black text-xl" />,
    title: "Make Global Buyers Take You Seriously",
    desc: "First impressions matter. We craft modern websites that showcase your export readiness and inspire confidence from international clients.",
  },
  {
    icon: <FaHandshake className="text-black text-xl" />,
    title: "Turn Visits into Inquiries",
    desc: "We design your website like a sales funnel — built to convert visits into genuine business inquiries using trust-building layouts.",
  },
  {
    icon: <FaSearch className="text-black text-xl" />,
    title: "Show Up on Google — Not Just Portals",
    desc: "Stop depending only on B2B platforms. With built-in SEO, your website attracts organic buyers from Google and beyond.",
  },
  {
    icon: <FaUserTie className="text-black text-xl" />,
    title: "Local Support. Global Perspective.",
    desc: "You get clear, local support from someone who understands Indian exporters — and speaks the language of international trade.",
  },
];

// animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
};

const slideIn = (direction) => ({
  hidden: { opacity: 0, x: direction === "left" ? -60 : 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
});

const imageDrop = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const WhyChooseExportWeb = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-2">
            Why Exporters Choose Us
          </p>
          <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight">
            Built for Export Growth. Backed by Strategy.
          </h2>
          <p className="text-gray-700 text-base mt-4 leading-relaxed">
            Your digital presence shouldn't be your weakest link. We help Indian
            manufacturers and exporters go from invisible to in-demand — through
            smart, high-converting websites built for global trade.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-12">
          {points.map((item, idx) => (
            <motion.div
              key={idx}
              variants={slideIn(idx % 2 === 0 ? "left" : "right")}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              className="flex items-start gap-5"
            >
              <div className="text-black">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold uppercase tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Image */}
        <motion.div
          variants={imageDrop}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="mt-20"
        >
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Exporter Website Strategy"
            className="w-full h-[400px] object-cover rounded-xl shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseExportWeb;
