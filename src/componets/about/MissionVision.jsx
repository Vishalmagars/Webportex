import React from "react";
import { motion } from "framer-motion";

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const popImage = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: "easeOut" } },
};

// Background fade block
const BgFade = ({ color = "bg-gray-50" }) => (
  <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: false, amount: 0.2 }}
    transition={{ duration: 1 }}
    className={`absolute inset-0 ${color} -z-10`}
  />
);

const ZaraStyleMissionVision = () => {
  return (
    <section className="relative bg-white text-black px-4 md:px-20 py-20 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Intro Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          className="mb-24"
        >
          <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight">
            Mission & Vision
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl">
            We build elegant digital platforms that power global commerce for
            serious exporters. In a world where perception drives trust, we help
            Indian manufacturers stand tall with premium, performance-driven web
            identities.
          </p>
        </motion.div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row md:items-center mb-32 gap-10">
          <motion.div
            variants={popImage}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
              alt="Mission"
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="md:w-1/2"
          >
            <h3 className="text-3xl md:text-4xl font-light uppercase mb-6">
              Our Mission
            </h3>
            <p className="text-gray-800 text-base mb-4 leading-relaxed">
              To help Indian exporters break past borders by creating digital
              identities that speak the language of global trade — clarity,
              trust, and design excellence. We believe that your website
              shouldn't just look good; it should help you win business, close
              deals faster, and reduce buyer hesitation.
            </p>
            <p className="text-gray-800 text-base mb-4 leading-relaxed">
              Whether you're sending textiles to Europe or machinery to the
              Middle East, your digital front must feel world-class. That’s our
              mission — to equip you with tools that not only tell your story
              but convert your visitors into long-term buyers.
            </p>
            <ul className="mt-6 space-y-1 text-sm text-gray-600 uppercase tracking-widest">
              <li>— Clear architecture</li>
              <li>— Built for conversion</li>
              <li>— Designed with restraint</li>
              <li>— Trusted by modern buyers</li>
              <li>— Rooted in export priorities</li>
            </ul>
          </motion.div>
        </div>

        {/* Vision Section */}
        <div className="flex flex-col-reverse md:flex-row md:items-center gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="md:w-1/2"
          >
            <h3 className="text-3xl md:text-4xl font-light uppercase mb-6">
              Our Vision
            </h3>
            <p className="text-gray-800 text-base mb-4 leading-relaxed">
              We envision a future where Indian exporters no longer compete only
              on pricing, but lead with presence. A future where your website is
              not a brochure, but a negotiation tool — sharp, credible, and
              instantly impressive.
            </p>
            <p className="text-gray-800 text-base mb-4 leading-relaxed">
              Our goal is to reshape how the world views Indian manufacturing —
              as modern, agile, and reliable. Through strong UX, SEO, and
              performance-first design, we aim to help you become a brand buyers
              want to work with, not just a vendor.
            </p>
            <ul className="mt-6 space-y-1 text-sm text-gray-600 uppercase tracking-widest">
              <li>— Premium user experience</li>
              <li>— Strategic positioning</li>
              <li>— A global-first mindset</li>
              <li>— Reduction in dependency on portals</li>
              <li>— Digital presence as powerful as product quality</li>
            </ul>
          </motion.div>

          <motion.div
            variants={popImage}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.4 }}
            className="md:w-1/2"
          >
            <img
              src="https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80"
              alt="Vision"
              className="w-full h-[400px] object-cover rounded-lg shadow-md"
            />
          </motion.div>
        </div>
      </div>

      {/* Background wash */}
      <BgFade color="bg-gray-50" />
    </section>
  );
};

export default ZaraStyleMissionVision;
