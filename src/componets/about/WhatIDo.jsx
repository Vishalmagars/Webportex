import React from "react";
import { FaLightbulb, FaPalette, FaStar, FaCogs } from "react-icons/fa";
import { motion } from "framer-motion";

const WhatIDo = () => {
  const features = [
    {
      icon: <FaLightbulb className="text-white text-2xl" />,
      title: "Industry-Smart Strategy",
      desc: "We study your export niche, then build a website that speaks your buyer’s language and drives serious inquiries.",
      active: true,
    },
    {
      icon: <FaPalette className="text-gray-900 text-2xl" />,
      title: "Conversion Focused Design",
      desc: "Clean layouts, bold visuals, and persuasive flows that turn visitors into trusted trade partners.",
    },
    {
      icon: <FaStar className="text-gray-900 text-2xl" />,
      title: "SEO That Opens Doors",
      desc: "Built-in search optimization so your products rank higher and reach buyers worldwide.",
    },
    {
      icon: <FaCogs className="text-gray-900 text-2xl" />,
      title: "Maintenance That Scales",
      desc: "Ongoing updates and support so your site runs fast, secure, and ready for global growth.",
    },
  ];

  // Animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-white py-24 px-6 md:px-20 font-sans overflow-hidden">
      {/* Overlay Reveal Effect */}
      <motion.div
        initial={{ x: 0 }}
        whileInView={{ x: "100%" }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false }}
        className="absolute top-0 left-0 w-full h-full bg-black z-10"
      />

      <div className="relative z-20 max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT on desktop: Feature Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          className="order-2 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-8"
        >
          {features.map((f, i) => (
            <motion.div
              key={i}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              transition={{ delay: i * 0.2 }}
              className={`group border border-black/20 p-8 rounded-none hover:-translate-y-1 transition-transform duration-300 ${
                f.active ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <div className="mb-6">
                <div
                  className={`text-3xl ${
                    f.active ? "text-white" : "text-black"
                  }`}
                >
                  {f.icon}
                </div>
              </div>
              <h3
                className={`text-lg uppercase tracking-wide font-semibold mb-3 ${
                  f.active ? "text-white" : "text-black"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  f.active ? "text-gray-200" : "text-gray-600"
                }`}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* RIGHT on desktop: Text */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.3 }}
          className="order-1 lg:order-2 space-y-10 text-right"
        >
          <motion.h2
            variants={fadeInRight}
            className="text-5xl md:text-6xl font-light uppercase tracking-tight text-black leading-tight"
          >
            What We Do <br className="hidden md:block" /> For Exporters
          </motion.h2>
          <motion.p
            variants={fadeInRight}
            className="text-gray-700 text-base leading-relaxed max-w-lg ml-auto"
          >
            We don’t build generic websites. We create digital tools that help
            exporters and manufacturers in India win trust, showcase products,
            and open doors to new global markets. Every page is crafted to make
            your business look world-class and ready for international trade.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatIDo;
