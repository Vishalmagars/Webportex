import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProcessSection = () => {
  const steps = [
    {
      title: "Business Advice",
      desc: "Deliver faster, more personalized support with shared screens and a Support Bot.",
      active: false,
    },
    {
      title: "Startup Business",
      desc: "Deliver faster, more personalized support with shared screens and a Support Bot.",
      active: true,
    },
    {
      title: "Financial Advice",
      desc: "Deliver faster, more personalized support with shared screens and a Support Bot.",
      active: false,
    },
    {
      title: "Risk Management",
      desc: "Deliver faster, more personalized support with shared screens and a Support Bot.",
      active: false,
    },
  ];

  return (
    <section className="bg-[#f8f6f2] py-24 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-20 gap-10">
          <div>
            <p className="text-xs uppercase tracking-widest text-orange-500 mb-3">
              Our Services
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 leading-tight">
              We Provide The Best <br className="hidden md:block" /> Service For Consulting
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet elit, sed do tempor incididunt ut dolore magna aliqua.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`group relative p-8 flex flex-col justify-between rounded-2xl border transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl ${
                step.active
                  ? "bg-[#ffc370] border-transparent text-gray-900"
                  : "bg-white border-gray-200 text-gray-900"
              }`}
            >
              <div>
                <h3 className="text-2xl font-medium mb-6 leading-snug">
                  {step.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    step.active ? "text-gray-800" : "text-gray-600"
                  }`}
                >
                  {step.desc}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <button
                  className={`w-12 h-12 flex items-center justify-center rounded-full border transition-colors duration-300 ${
                    step.active
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  <FaArrowRight className="text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button className="inline-flex items-center gap-3 border border-gray-500 px-8 py-3 rounded-full text-sm font-medium text-gray-800 uppercase tracking-wider hover:bg-gray-100 transition">
            Browse Services <FaArrowRight className="text-xs" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
