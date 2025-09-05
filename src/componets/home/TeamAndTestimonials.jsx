import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ramesh Patel",
    role: "Founder, Global Export Co.",
    text: "“The team transformed our export vision into a stunning website that’s easy to manage and truly global in design.”",
    image: "https://i.pravatar.cc/80?img=32",
  },
  {
    name: "Anita Verma",
    role: "Operations Manager, AgriTrade",
    text: "“Working with them was effortless — clean design, fast delivery, and all within our budget. Highly recommended!”",
    image: "https://i.pravatar.cc/80?img=45",
  },
  {
    name: "Sandeep Rao",
    role: "CEO, CraftHub Exports",
    text: "“Our leads doubled after launch. Their export-focused features make managing products and clients seamless.”",
    image: "https://i.pravatar.cc/80?img=22",
  },
];

const TestimonialSection = ({ id }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.section
      id={id}
      className="bg-white py-28 px-6 md:px-16 font-sans"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-left md:text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            What Our Clients Say
          </p>
          <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight text-black">
            Trusted by Exporters <br className="hidden md:block" />
            <span className="font-semibold">Worldwide</span>
          </h2>
        </motion.div>

        {/* Testimonials */}
        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="flex flex-col items-center text-center px-4 md:px-12"
            >
              <motion.div
                initial={{ scale: 0.6, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <FaQuoteLeft className="text-black text-3xl mb-6" />
              </motion.div>

              <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed max-w-3xl">
                {testimonials[index].text}
              </p>

              <div className="flex items-center gap-4 mt-10">
                <motion.img
                  key={testimonials[index].image}
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  initial={{ scale: 0.7, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
                  className="w-14 h-14 rounded-full object-cover border border-gray-300 shadow-md"
                />
                <div className="text-left">
                  <p className="text-black font-medium">{testimonials[index].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3.5 h-3.5 rounded-full ${
                i === index ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
              }`}
              whileTap={{ scale: 0.8 }}
              animate={i === index ? { scale: 1.3 } : { scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default TestimonialSection;
