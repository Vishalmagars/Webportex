import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AddOnFeaturesTable = () => {
  const navigate = useNavigate();

  const addOns = [
    {
      feature: "Multi‑Language Support",
      detail: "Serve global customers in their preferred language.",
      price: "$10",
      unit: "per language per page",
    },
    {
      feature: "AI‑Powered Chatbot",
      detail: "24/7 automated assistant trained for export‑import inquiries.",
      price: "$99",
      unit: "one‑time setup",
    },
    {
      feature: "Extra Custom Page",
      detail: "Add additional content pages for products or campaigns.",
      price: "$10",
      unit: "per page",
    },
    {
      feature: "Advanced Reporting",
      detail: "Custom dashboards with export‑specific metrics.",
      price: "$50",
      unit: "per module",
    },
  ];

  return (
    <section className="bg-white text-gray-800 py-20 px-4 sm:px-8 md:px-16 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Add‑On Features & Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl">
            Select from our optional modules to expand your export‑import website.
            Transparent pricing, clear deliverables.
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden md:block border border-gray-200 rounded-xl shadow-sm overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Feature
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Description
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold text-gray-900 uppercase tracking-wider">
                  Price
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {addOns.map((item, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-gray-50 hover:bg-[#ffc370]/10" : "hover:bg-[#ffc370]/10"}
                >
                  <td className="px-6 py-4 text-base font-medium text-gray-900">{item.feature}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{item.detail}</td>
                  <td className="px-6 py-4 text-right text-base font-semibold text-gray-900">
                    {item.price}
                    <span className="block text-xs text-gray-500">{item.unit}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="space-y-6 md:hidden">
          {addOns.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50 hover:bg-[#ffc370]/10 transition"
            >
              <div className="mb-2">
                <span className="block text-sm font-semibold text-gray-500">Feature</span>
                <span className="text-lg font-bold text-gray-900">{item.feature}</span>
              </div>
              <div className="mb-2">
                <span className="block text-sm font-semibold text-gray-500">Description</span>
                <span className="text-sm text-gray-700">{item.detail}</span>
              </div>
              <div>
                <span className="block text-sm font-semibold text-gray-500">Price</span>
                <span className="text-lg font-bold text-gray-900">
                  {item.price}
                  <span className="block text-xs text-gray-500">{item.unit}</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm p-6">
          <div className="text-base sm:text-lg text-gray-700">
            Build a tailored plan that scales with your international operations.
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            onClick={() => navigate("/contact")}
            className="bg-[#ffc370] hover:bg-[#e6ae60] text-gray-900 font-semibold px-8 py-3 rounded-full shadow-md flex items-center gap-2 self-start sm:self-auto"
          >
            Configure Add‑Ons <FaArrowRight />
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default AddOnFeaturesTable;
