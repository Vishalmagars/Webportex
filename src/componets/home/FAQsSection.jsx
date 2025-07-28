import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqs = [
  {
    q: "How long does it take to deliver my website?",
    a: "Most plans are delivered within 7–14 business days depending on the scope. We provide a clear timeline after gathering your content and requirements.",
  },
  {
    q: "Do you provide hosting and domain?",
    a: "We guide you in choosing and setting up hosting and domain, but the cost is not included in the plan. We can also manage it for you as an add‑on.",
  },
  {
    q: "Can I request extra pages later?",
    a: "Yes, you can add extra pages anytime at ₹1,000 per page. The design will match your existing website perfectly.",
  },
  {
    q: "Do you offer ongoing support?",
    a: "Yes. With our maintenance add‑on, we handle updates, backups, and minor edits for a fixed monthly fee.",
  },
  {
    q: "What if I need custom features?",
    a: "We offer custom development services. Let us know your requirements, and we’ll provide a tailored quote.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-16 font-sans">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-widest text-center mb-4">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <p className="text-center text-sm text-gray-600 mb-12 uppercase tracking-wide">
          Find answers to common questions before you get started
        </p>

        {/* FAQ Accordion */}
        <div className="border-t border-gray-300">
          {faqs.map((item, idx) => (
            <div key={idx} className="border-b border-gray-200">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between py-5 text-left"
              >
                <span className="text-base md:text-lg font-medium text-black uppercase tracking-wide">
                  {item.q}
                </span>
                <span className="text-gray-500">
                  {openIndex === idx ? <FaChevronUp size={14} /> : <FaChevronDown size={14} />}
                </span>
              </button>
              {openIndex === idx && (
                <div className="pb-6 pr-2 text-sm text-gray-700 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
