import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = ({
  title = "Want More Buyers From Around the World?",
  subtitle = "Implexy builds export‑ready websites that don’t just sit pretty—they work hard. Fast‑loading, mobile‑friendly, and built to turn curious visitors into serious inquiries. Tailored for exporters and manufacturers who are ready to grow.",
  imageSrc = "https://images.unsplash.com/photo-1678690832871-8b9993c76aa8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ",
}) => {
  const navigate = useNavigate();

  const [startTyping, setStartTyping] = useState(false);
  const [showFinalText, setShowFinalText] = useState(false);

  useEffect(() => {
    // Wait 0.5 sec before typing starts
    const delayStart = setTimeout(() => {
      setStartTyping(true);

      // Then stop typing after 2.5 seconds
      const stopTyping = setTimeout(() => {
        setShowFinalText(true);
      }, 2500);

      return () => clearTimeout(stopTyping);
    }, 500);

    return () => clearTimeout(delayStart);
  }, []);

  return (
    <section className="w-full min-h-screen bg-white text-neutral-900 px-6 md:px-20 py-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Column */}
        <div className="flex-1 text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="uppercase tracking-[0.2em] text-xs text-neutral-600 mb-4"
          >
            Websites That Sell. Not Just Show.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl uppercase md:text-6xl leading-tight font-light tracking-tight"
          >
            Want More <span className="font-semibold">Global Buyers</span>?<br />
            <span className="text-neutral-900">
              {showFinalText ? (
                "Start With a Website That Works."
              ) : startTyping ? (
                <Typewriter
                  words={["Start With a Website That Works."]}
                  loop={1}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={0}
                  delaySpeed={2500}
                />
              ) : (
                ""
              )}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-neutral-700 text-base md:text-lg max-w-xl mx-auto md:mx-0 leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <button
              onClick={() => navigate("/contact")}
              className="border border-neutral-900 text-neutral-900 px-8 py-3 text-sm font-semibold hover:bg-neutral-900 hover:text-white transition"
            >
              Build My Export Website
            </button>
            <button
              onClick={() => navigate("/services")}
              className="text-neutral-800 border-b border-neutral-700 inline-flex items-center gap-2 text-sm hover:text-neutral-900"
            >
              Show Me How <FaArrowRight />
            </button>
          </motion.div>
        </div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex-1 w-full"
        >
          <img
            src={imageSrc}
            alt="Elegant Export Website Preview"
            className="w-full h-auto rounded-sm object-cover shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
