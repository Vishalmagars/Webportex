import React from "react";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const PricingDetails = () => {
  const navigate = useNavigate();

  const modules = [
    {
      title: "Mobile‑First Design & UX",
      description: "Adaptive layouts for all devices, ensuring global reach and consistent user experience.",
      cost: 250,
    },
    {
      title: "Enterprise‑Grade SEO",
      description: "Advanced SEO architecture, schema markup, and international optimization.",
      cost: 200,
    },
    {
      title: "Analytics & Insight Suite",
      description: "Integrated GA4, Meta Pixel, and dashboards for decision‑making.",
      cost: 180,
    },
    {
      title: "Security & Performance",
      description: "SSL, CDN, cloud image hosting and optimized performance for reliability.",
      cost: 220,
    },
    {
      title: "Lead Generation System",
      description: "Forms, CRM-ready integrations, and lead scoring to fuel sales pipelines.",
      cost: 300,
    },
    {
      title: "Content Management",
      description: "Enterprise CMS setup with training for your internal teams.",
      cost: 150,
    },
  ];

  const total = modules.reduce((sum, m) => sum + m.cost, 0);

  return (
    <section className="bg-gray-50 text-gray-800 py-20 px-6 sm:px-12 md:px-24 font-sans">
      <div className="max-w-6xl mx-auto space-y-14">
        {/* Header */}
        <div className="text-left">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            Enterprise‑Level Pricing Transparency
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl">
            Each module is carefully engineered for multinational demands — ensuring compliance, scalability,
            and measurable ROI. Below is a transparent breakdown of each deliverable with its respective cost.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((m, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4 }}
              className="bg-white border border-gray-200 rounded-xl shadow-sm p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start gap-3 mb-4">
                <FaCheckCircle className="text-[#ffc370] text-xl mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{m.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{m.description}</p>
                </div>
              </div>
              <div className="pt-4 mt-auto border-t border-gray-100 flex items-center justify-between">
                <span className="text-sm text-gray-500">Investment</span>
                <span className="text-2xl font-bold text-gray-900">₹{m.cost}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Total + CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-white border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="text-2xl font-bold text-gray-900">
            Total Strategic Investment: <span className="text-[#ffc370]">₹{total}</span>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() => navigate("/contact")}
            className="bg-[#ffc370] hover:bg-[#e6ae60] text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md flex items-center gap-2 self-start sm:self-auto"
          >
            Discuss Your Plan <FaArrowRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default PricingDetails;
