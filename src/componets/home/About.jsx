import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mql = window.matchMedia("(max-width: 767px)");
    const onChange = (e) => setIsMobile(e.matches);
    setIsMobile(mql.matches);
    // addEventListener fallback for older browsers
    if (mql.addEventListener) mql.addEventListener("change", onChange);
    else mql.addListener(onChange);
    return () => {
      if (mql.removeEventListener) mql.removeEventListener("change", onChange);
      else mql.removeListener(onChange);
    };
  }, []);
  return isMobile;
};

const About = ({ id }) => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // bind scroll to this section only
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    // start when top of section hits bottom of viewport,
    // end when bottom of section hits top of viewport
    offset: ["start end", "end start"],
  });

  // map scroll progress: 0 -> side, 0.5 -> center, 1 -> side (reversible)
  const leftXRaw = useTransform(scrollYProgress, [0, 0.5, 1], [-120, 0, -120]);
  const rightXRaw = useTransform(scrollYProgress, [0, 0.5, 1], [120, 0, 120]);

  // spring it for buttery motion
  const leftX = useSpring(leftXRaw, { stiffness: 140, damping: 18, mass: 0.2 });
  const rightX = useSpring(rightXRaw, { stiffness: 140, damping: 18, mass: 0.2 });

  return (
    <section
      id={id}
      className="bg-white py-20 px-6 md:px-20 font-sans overflow-hidden"
    >
      <div
        ref={sectionRef}
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center"
      >
        {/* LEFT: About Content */}
        <motion.div
          style={!isMobile ? { x: leftX } : {}}
          initial={isMobile ? { opacity: 0, y: 32 } : undefined}
          whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
          transition={isMobile ? { duration: 0.6, ease: "easeOut" } : undefined}
          viewport={{ once: false, amount: 0.3 }}
          className="space-y-8"
        >
          <p className="text-sm tracking-widest uppercase text-gray-500 font-medium">
            About Webportex
          </p>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-black leading-tight">
            Helping Exporters Build <br className="hidden md:block" /> a Global Presence
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At <strong>Webportex</strong>, the mission is simple: create websites that help exporters and manufacturers in India
            look credible, connect with buyers, and grow faster in global markets.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Every project is handled with personal attention and industry-specific insight—combining modern design,
            technical precision, and a deep understanding of international trade.
          </p>

          {/* Highlight List */}
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
            {[
              "Export-focused website expertise",
              "Design that drives inquiries",
              "Ongoing updates & support",
              "Secure and future-ready builds",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-600 text-lg">✓</span> {item}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={() => navigate("/about")}
              className="bg-black text-white font-semibold px-6 py-3 hover:bg-gray-800 transition"
            >
              Learn More →
            </button>
            <button
              onClick={() => navigate("/video")}
              className="flex items-center gap-2 text-black border border-gray-300 px-6 py-3 hover:bg-gray-100 transition"
            >
              <span className="text-base">▶</span> Watch Intro
            </button>
          </div>
        </motion.div>

        {/* RIGHT: Image with Floating Testimonial */}
        <motion.div
          style={!isMobile ? { x: rightX } : {}}
          initial={isMobile ? { opacity: 0, y: 32 } : undefined}
          whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
          transition={isMobile ? { duration: 0.6, ease: "easeOut" } : undefined}
          viewport={{ once: false, amount: 0.3 }}
          className="relative"
        >
          <img
            src="https://i.ibb.co/LXDFpKDC/Vishal-2.png"
            alt="Founder"
            className="w-full object-cover shadow-lg"
          />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.3 }}
            className="bg-white shadow-xl p-6 md:p-8 max-w-sm md:absolute md:-bottom-12 md:-right-12 border border-gray-100"
          >
            <p className="text-sm text-gray-600 italic leading-relaxed">
              “Every project gets full attention, clear strategy, and a focus on results. That’s why clients stay with us.”
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src="https://i.ibb.co/LXDFpKDC/Vishal-2.png"
                alt="Founder"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-sm font-semibold text-gray-900">
                Vishal Magar <span className="font-normal text-gray-500">— Founder</span>
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
