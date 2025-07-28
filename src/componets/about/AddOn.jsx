import React, { useState } from "react";

const addOns = [
  {
    title: "Custom Logo Design",
    price: "₹3,999",
    description:
      "A professional logo designed to match your brand aesthetic and appeal to global buyers.",
  },
  {
    title: "Additional Pages",
    price: "₹1,000 / page",
    description:
      "Expand your site seamlessly with extra pages for services, products, or campaigns.",
  },
  {
    title: "Monthly Maintenance",
    price: "₹2,000 / month",
    description:
      "We handle updates, backups, and security so your site stays flawless every day.",
  },
  {
    title: "Advanced SEO",
    price: "₹4,999",
    description:
      "Keyword optimization, meta tags, and technical fixes to boost your search visibility.",
  },
  {
    title: "Security Hardening",
    price: "₹2,999",
    description:
      "Firewall setup, spam filtering, and SSL tuning to protect your data and users.",
  },
  {
    title: "Content Updates",
    price: "₹500 / update",
    description:
      "Quickly refresh your website with new products or content whenever you need.",
  },
];

const AddOnsGrid = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleCard = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-20 px-4 sm:px-8 md:px-16 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold tracking-widest text-center mb-4">
          ADD‑ONS
        </h2>
        <p className="text-center text-sm text-gray-600 mb-12 uppercase tracking-wide">
          Optional extras to elevate your website
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {addOns.map((item, idx) => (
            <div
              key={idx}
              className={`border border-gray-200 p-6 relative cursor-pointer transition-all duration-300 ${
                openIndex === idx ? "bg-gray-50" : "hover:bg-gray-50"
              }`}
              onClick={() => toggleCard(idx)}
            >
              <h3 className="text-base md:text-lg font-medium text-black uppercase tracking-wide">
                {item.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-500 tracking-wide mt-1">
                {item.price}
              </p>

              {/* Detail Panel */}
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === idx ? "max-h-40 mt-4" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Indicator */}
              <span className="absolute top-6 right-6 text-xs text-gray-500">
                {openIndex === idx ? "−" : "+"}
              </span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="border border-black text-black uppercase tracking-widest px-8 py-3 text-sm hover:bg-black hover:text-white transition">
            Discuss Add‑Ons
          </button>
        </div>
      </div>
    </section>
  );
};

export default AddOnsGrid;
