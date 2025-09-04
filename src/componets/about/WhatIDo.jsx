import React from "react";
import { FaLightbulb, FaPalette, FaStar, FaCogs } from "react-icons/fa";

const WhatIDo = () => {
  const features = [
    {
      icon: <FaLightbulb className="text-white text-2xl" />,
      title: "Industry‑Smart Strategy",
      desc: "We study your export niche, then build a website that speaks your buyer’s language and drives serious inquiries.",
      active: true,
    },
    {
      icon: <FaPalette className="text-gray-900 text-2xl" />,
      title: "Conversion Focused Design",
      desc: "Clean layouts, bold visuals, and persuasive flows that turn visitors into trusted trade partners.",
    },
    {
      icon: <FaStar className="text-gray-900 text-2xl" />,
      title: "SEO That Opens Doors",
      desc: "Built‑in search optimization so your products rank higher and reach buyers worldwide.",
    },
    {
      icon: <FaCogs className="text-gray-900 text-2xl" />,
      title: "Maintenance That Scales",
      desc: "Ongoing updates and support so your site runs fast, secure, and ready for global growth.",
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-start">
        {/* LEFT: Editorial-style intro */}
        <div className="space-y-10">
          <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight text-black leading-tight">
            What We Do <br className="hidden md:block" /> For Exporters
          </h2>
          <p className="text-gray-700 text-base leading-relaxed max-w-lg">
            We don’t build generic websites. We create digital tools that help
            exporters and manufacturers in India win trust, showcase products,
            and open doors to new global markets. Every page is crafted to make
            your business look world‑class and ready for international trade.
          </p>

          {/* Social Proof */}
          {/* <div className="flex items-center gap-6">
            <div className="flex -space-x-3">
              <img
                src="https://i.pravatar.cc/50?img=1"
                alt="user1"
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
              />
              <img
                src="https://i.pravatar.cc/50?img=2"
                alt="user2"
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
              />
              <img
                src="https://i.pravatar.cc/50?img=3"
                alt="user3"
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
              />
            </div>
            <div>
              <p className="text-xl font-medium text-black tracking-tight">5M+</p>
              <p className="text-sm text-gray-500">Trusted Worldwide</p>
            </div>
          </div> */}
        </div>

        {/* RIGHT: Minimalist grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group border border-black/20 p-8 rounded-none hover:-translate-y-1 transition-transform duration-300 ${
                f.active ? "bg-black text-white" : "bg-white text-black"
              }`}
            >
              <div className="mb-6">
                <div
                  className={`text-3xl ${
                    f.active ? "text-white" : "text-black"
                  }`}
                >
                  {f.icon}
                </div>
              </div>
              <h3
                className={`text-lg uppercase tracking-wide font-semibold mb-3 ${
                  f.active ? "text-white" : "text-black"
                }`}
              >
                {f.title}
              </h3>
              <p
                className={`text-sm leading-relaxed ${
                  f.active ? "text-gray-200" : "text-gray-600"
                }`}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIDo;
