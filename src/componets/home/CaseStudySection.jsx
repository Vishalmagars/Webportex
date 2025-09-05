import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const CASES = [
  {
    title: "Digital Luxury Expansion",
    description:
      "Scaled a heritage fashion brand into global e-commerce while preserving exclusivity.",
    image:
      "https://images.unsplash.com/photo-1519211975560-4ca611f5a72a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Crafted Stories in Global Markets",
    description:
      "An artisan collective entered premium markets with curated branding and storytelling.",
    image:
      "https://images.unsplash.com/photo-1642132652859-3ef5a1048fd1?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Next-Gen Agro Exports",
    description:
      "Traceability and smart tech tripled trust and global orders for an agro-exporter.",
    image:
      "https://images.unsplash.com/photo-1581090700227-4c4f50b6d2de?q=80&w=1200&auto=format&fit=crop",
  },
];

const CaseStudyPro = ({ id }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id={id}
      ref={containerRef}
      className="relative bg-black text-white h-[400vh] font-sans"
    >
      {/* Sticky Layout */}
      <div className="sticky top-0 h-screen grid grid-cols-1 sm:grid-cols-2">
        {/* Left Column */}
        <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20 bg-black">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight uppercase mb-6">
            Case Studies
          </h2>
          <p className="text-gray-400 text-base sm:text-lg max-w-md leading-relaxed">
            Explore how we’ve transformed exporter brands into global icons
            through design, storytelling, and digital growth strategies.
          </p>
        </div>

        {/* Right Column (Animated Cards) */}
        <div className="relative overflow-hidden">
          {CASES.map((study, idx) => {
            const start = idx / CASES.length;
            const end = (idx + 1) / CASES.length;

            const y = useTransform(scrollYProgress, [start, end], [200, 0]);
            const opacity = useTransform(
              scrollYProgress,
              [start, end - 0.1],
              [0, 1]
            );
            const exitOpacity = useTransform(
              scrollYProgress,
              [end - 0.1, end],
              [1, 0]
            );

            return (
              <motion.div
                key={idx}
                style={{ y, opacity }}
                className="absolute inset-0 flex items-center justify-center px-3 sm:px-10"
              >
                <motion.div
                  style={{ opacity: exitOpacity }}
                  className="w-full max-w-md sm:max-w-2xl overflow-hidden bg-black shadow-xl rounded-lg"
                >
                  <div className="relative h-[50vh] sm:h-[70vh] overflow-hidden group">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 group-hover:grayscale-0 grayscale"
                    />
                    {/* Text Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 sm:p-8 flex flex-col justify-end">
                      <h3 className="text-base sm:text-2xl lg:text-3xl font-light uppercase tracking-wide mb-2">
                        {study.title}
                      </h3>
                      <p className="text-gray-300 text-xs sm:text-base leading-relaxed max-w-lg line-clamp-3">
                        {study.description}
                      </p>
                      <a
                        href="#"
                        className="mt-2 sm:mt-4 inline-block text-xs sm:text-sm uppercase tracking-widest border-b border-gray-500 hover:border-white transition"
                      >
                        View Case →
                      </a>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="fixed bottom-0 left-0 w-full h-[3px] bg-gray-800"
        style={{
          scaleX: scrollYProgress,
          transformOrigin: "0%",
        }}
      >
        <div className="h-full bg-white" />
      </motion.div>
    </section>
  );
};

export default CaseStudyPro;
