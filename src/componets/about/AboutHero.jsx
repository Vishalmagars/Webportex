import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const AboutHero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-white font-sans py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: TEXT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6 relative z-10"
        >
          <p className="text-xs uppercase tracking-widest text-orange-500 font-medium">
            About Company
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-snug">
            We Are <span className="font-bold">Business Consulting</span> Experts
          </h2>
          <p className="text-gray-600 text-base leading-relaxed">
            We help exporters create elegant digital presences that expand their
            reach globally. With a focus on minimalism and performance,
            everything we design is built to last.
          </p>
          <p className="text-gray-600 text-base leading-relaxed">
            Seamlessly crafted websites, sustainable strategies, and a touch of
            modern luxury in every detail.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/about")}
              className="px-6 py-3 bg-black text-white text-sm font-semibold rounded-md hover:bg-gray-800 transition"
            >
              Learn More →
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              className="px-6 py-3 border border-gray-400 text-sm font-medium rounded-md hover:bg-gray-100 transition"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>

        {/* RIGHT: SINGLE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=900&q=80"
              alt="Team Discussion"
              className="rounded-2xl shadow-xl w-full object-cover"
            />
            {/* Accent box behind image */}
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-gray-200 rounded-2xl -z-10"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
