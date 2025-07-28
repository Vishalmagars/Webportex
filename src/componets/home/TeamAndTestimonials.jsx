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
    text: "“Our leads doubled after launch. Their export‑focused features make managing products and clients seamless.”",
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
    <section id={id} className="bg-white py-28 px-6 md:px-16 font-sans">
      <div className="max-w-5xl mx-auto">
        <div className="text-left md:text-center mb-20">
          <p className="text-xs uppercase tracking-widest text-gray-500 mb-2">
            What Our Clients Say
          </p>
          <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight text-black">
            Trusted by Exporters <br className="hidden md:block" />
            <span className="font-semibold">Worldwide</span>
          </h2>
        </div>

        <div className="relative overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col items-center text-center px-4 md:px-12"
            >
              <FaQuoteLeft className="text-black text-3xl mb-6" />
              <p className="text-lg md:text-xl text-gray-800 font-light leading-relaxed max-w-3xl">
                {testimonials[index].text}
              </p>
              <div className="flex items-center gap-4 mt-10">
                <img
                  src={testimonials[index].image}
                  alt={testimonials[index].name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-300"
                />
                <div className="text-left">
                  <p className="text-black font-medium">{testimonials[index].name}</p>
                  <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                i === index ? "bg-black" : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;