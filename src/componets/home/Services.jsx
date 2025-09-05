import React from "react";
import { motion } from "framer-motion";

const industries = [
  {
    name: "Textiles & Garments",
    description:
      "Helping textile exporters showcase their fabric collections and reach global buyers.",
    features: [
      "Catalog-ready product pages",
      "High-quality image support",
      "SEO for fashion keywords",
    ],
    highlight: true,
  },
  {
    name: "Agriculture & Food Exports",
    description:
      "Web solutions for farmers, distributors, and food brands to attract international markets.",
    features: [
      "Product detail sections",
      "Export certifications display",
      "Multilingual options",
    ],
    highlight: false,
  },
  {
    name: "Machinery & Tools",
    description:
      "Designed for heavy industries and exporters of machinery, tools, and spare parts.",
    features: [
      "Detailed specifications layout",
      "Demo product sections",
      "Inquiry form integration",
    ],
    highlight: false,
  },
  {
    name: "Handicrafts & Lifestyle",
    description:
      "Perfect for artisans and handicraft exporters looking to attract boutique buyers worldwide.",
    features: [
      "Beautiful gallery layouts",
      "Story-driven brand sections",
      "Cross-border SEO optimization",
    ],
    highlight: false,
  },
  {
    name: "Pharmaceuticals & Chemicals",
    description:
      "Trusted web presence for exporters of pharma products and chemicals with compliance features.",
    features: [
      "Regulatory info sections",
      "Secure product catalogs",
      "Document download options",
    ],
    highlight: false,
  },
];

// Variants
const headerVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: (i) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Industries = ({ id }) => {
  return (
    <section
      id={id}
      className="relative bg-[#fafafa] py-20 px-4 sm:px-8 md:px-16 font-sans overflow-hidden"
    >
      <div className="relative z-20 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          transition={{ staggerChildren: 0.2 }}
          className="text-left md:text-center mb-16"
        >
          <motion.p
            variants={headerVariants}
            className="text-sm uppercase tracking-widest text-gray-500 mb-3"
          >
            Industries We Work With
          </motion.p>
          <motion.h2
            variants={headerVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-black leading-tight"
          >
            Powering Global Trade Across Sectors
          </motion.h2>
          <motion.p
            variants={headerVariants}
            className="text-gray-700 text-base mt-4 max-w-2xl md:mx-auto leading-relaxed"
          >
            We partner with diverse industries to help them succeed in the
            global export market—bringing their products to buyers worldwide.
          </motion.p>
        </motion.div>

        {/* Industry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }}
              variants={cardVariants}
              className={`flex flex-col justify-between border ${
                ind.highlight
                  ? "border-gray-400 bg-[#e4e4e4]"
                  : "border-gray-300 bg-white"
              } p-8 hover:shadow-lg hover:-translate-y-2 transition-transform duration-300`}
            >
              <div>
                <h3 className="text-lg font-medium uppercase tracking-wide mb-2">
                  {ind.name}
                </h3>
                <p className="text-sm leading-relaxed mb-6">
                  {ind.description}
                </p>
                <ul className="space-y-2">
                  {ind.features.map((f, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="mr-2 text-green-600">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="text-center"
        >
          <motion.button
            variants={buttonVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm uppercase tracking-widest border-b border-black hover:opacity-70"
          >
            Let’s Discuss Your Industry →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
