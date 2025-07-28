import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = ({
  title = "Want More Buyers From Around the World?",
  subtitle = "Webportex builds export‑ready websites that don’t just sit pretty—they work hard. Fast‑loading, mobile‑friendly, and built to turn curious visitors into serious inquiries. Tailored for exporters and manufacturers who are ready to grow.",
  imageSrc = "https://images.unsplash.com/photo-1609203599090-1bea00d207b9?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}) => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full h-[80vh] md:h-screen overflow-hidden font-sans text-white">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${imageSrc})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="uppercase tracking-widest text-sm text-gray-300 mb-3"
        >
          Websites That Sell. Not Just Show.
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl font-light leading-tight max-w-4xl"
        >
          Want More <span className="font-semibold">Global Buyers</span>?  
          Start With a Website That Works.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-gray-200 text-base md:text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-black px-8 py-3 text-sm font-medium hover:bg-gray-200 transition"
          >
            Build My Export Website
          </button>
          <button
            onClick={() => navigate("/services")}
            className="border border-white text-white px-8 py-3 text-sm font-medium hover:bg-black hover:border-black hover:text-white transition"
          >
            Show Me How <FaArrowRight className="inline-block ml-2" />
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
