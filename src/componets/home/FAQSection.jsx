import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Why should exporters have a professional website?",
    answer:
      "A professional website builds credibility, showcases products globally, and attracts serious buyers with trust and confidence.",
  },
  {
    question: "Do you provide ongoing support after launch?",
    answer:
      "Yes, we offer maintenance packages to keep your site fast, secure, and updated for international standards.",
  },
  {
    question: "Can the website handle multiple languages & currencies?",
    answer:
      "Absolutely! We integrate multi-language and multi-currency features so you can connect with buyers worldwide.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Most export-focused websites are completed within 4–6 weeks, depending on project complexity and requirements.",
  },
];

const FAQSection = ({ id }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id={id} className="bg-gray-50 py-20 px-6 md:px-16 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Got Questions?
          </p>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-black">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-base mt-4 max-w-2xl mx-auto leading-relaxed">
            Quick answers to common queries about our process, features, and
            support for exporters.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-b border-gray-200 pb-6 cursor-pointer"
              onClick={() => toggleFAQ(idx)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-medium text-gray-900">
                  {faq.question}
                </h3>
                <div className="text-gray-500">
                  {openIndex === idx ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? "max-h-40 mt-3" : "max-h-0"
                }`}
              >
                <p className="text-gray-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
