import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "How long does it take to deliver my website?",
    a: "Most plans are delivered within 7–14 business days depending on the scope. We provide a clear timeline after gathering your content and requirements.",
  },
  {
    q: "Do you provide hosting and domain?",
    a: "We guide you in choosing and setting up hosting and domain, but the cost is not included in the plan. We can also manage it for you as an add-on.",
  },
  {
    q: "Can I request extra pages later?",
    a: "Yes, you can add extra pages anytime at ₹1,000 per page. The design will match your existing website perfectly.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. With our maintenance add-on, we handle updates, backups, and minor edits for a fixed monthly fee.",
  },
  {
    q: "What if I need custom features?",
    a: "We offer custom development services. Let us know your requirements, and we’ll provide a tailored quote.",
  },
];

// Parent fade-up for entire section
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Stagger for each FAQ item
const listVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariant = {
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <motion.section
      className="bg-white py-20 px-4 sm:px-8 md:px-16 font-sans"
      variants={sectionVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-semibold tracking-widest text-center mb-4"
        >
          FREQUENTLY ASKED QUESTIONS
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-center text-sm text-gray-600 mb-12 uppercase tracking-wide"
        >
          Find answers to common questions before you get started
        </motion.p>

        {/* FAQ Accordion */}
        <motion.div
          variants={listVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="border-t border-gray-300"
        >
          {faqs.map((itemData, idx) => (
            <motion.div
              key={idx}
              variants={itemVariant}
              className="border-b border-gray-200"
            >
              {/* Question */}
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between py-5 text-left group"
              >
                <span className="text-base md:text-lg font-medium text-black uppercase tracking-wide group-hover:text-gray-700 transition">
                  {itemData.q}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="text-gray-500"
                >
                  <FaChevronDown size={14} />
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === idx && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0, y: 20 }}
                    animate={{ height: "auto", opacity: 1, y: 0 }}
                    exit={{ height: 0, opacity: 0, y: 20 }}
                    transition={{ duration: 0.45, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="pb-6 pr-2 text-sm text-gray-700 leading-relaxed">
                      {itemData.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FAQSection;
