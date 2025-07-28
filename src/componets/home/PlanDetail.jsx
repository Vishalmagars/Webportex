import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTimesCircle,
  FaLaptopCode,
  FaGlobe,
  FaEnvelope,
  FaPaintBrush,
} from "react-icons/fa";

const SinglePlanPage = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white font-sans text-black">
      {/* HEADER */}
      <section className="py-20 px-6 sm:px-12 md:px-20 border-b border-gray-200 text-center">
        <h1 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight mb-4">
          6‑Page Professional Export Website
        </h1>
        <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto mb-3">
          Perfect for growing export businesses that need a strong, trustworthy online presence.
        </p>
        <p className="text-2xl font-semibold text-black">₹11,999 (one‑time)</p>
      </section>

      {/* PLAN OVERVIEW */}
      <section className="py-16 px-6 sm:px-12 md:px-20 border-b border-gray-100 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-6">
          <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight mb-6">
            Why This Plan Works
          </h2>
          <p className="text-gray-800 text-base leading-relaxed">
            The <strong>6‑Page Professional Export Website</strong> is built for exporters and SMEs who need a
            <em> clean, conversion‑focused</em> online presence to build trust and attract international buyers.
          </p>
          <p className="text-gray-800 text-base leading-relaxed">
            We combine <strong>responsive design</strong>, <strong>SEO-ready structure</strong>, and
            <strong> action-driving forms</strong> to create a digital presence that’s simple, effective,
            and business-ready.
          </p>
          <p className="text-gray-800 text-base leading-relaxed">
            Whether you need to display certifications, offer quote forms, or simply make your business look
            professional online, this plan is the <em>affordable and effective</em> way to get there.
          </p>
        </div>
      </section>

      {/* WHO NEEDS THIS PLAN */}
      <section className="py-16 px-6 sm:px-12 md:px-20 border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight mb-10">
            Who Needs This Plan?
          </h2>
          <ul className="space-y-3 text-gray-800 text-base">
            {[
              "✔️ Small Exporters who want a global presence without technical hassle",
              "✔️ Manufacturers showcasing products and compliance documents",
              "✔️ Export Trading Agencies offering services across markets",
              "✔️ Freelance Export Agents building credibility and trust online",
              "✔️ New Businesses wanting to impress overseas buyers from day one",
            ].map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* SUMMARY GRID */}
      <section className="py-16 px-6 sm:px-12 md:px-20 border-b border-gray-100">
        <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight text-center mb-12">
          Quick Plan Summary
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            ["Price", "₹11,999"],
            ["Timeline", "7–10 Days"],
            ["Includes", "6 Pages + SEO + Forms"],
            ["Best For", "SMEs & Exporters"],
          ].map(([title, value]) => (
            <div
              key={title}
              className="p-6 border border-gray-200 rounded-md text-center bg-white shadow-sm"
            >
              <p className="text-xs uppercase text-gray-500 mb-2">{title}</p>
              <p className="text-lg font-semibold text-black">{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT’S INCLUDED */}
      <section className="py-20 px-6 sm:px-12 md:px-20 border-b border-gray-100 max-w-6xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight mb-14">
          What’s Included
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: <FaPaintBrush className="text-xl text-black" />,
              title: "Design Features",
              items: [
                "✔ Custom homepage & interior designs",
                "✔ Up to 6 pages (Home, About, Products, Contact, etc.)",
                "✔ Mobile & tablet responsive",
                "✔ Clean layout with intuitive UX",
              ],
            },
            {
              icon: <FaLaptopCode className="text-xl text-black" />,
              title: "Technical Setup",
              items: [
                "✔ Static HTML or lightweight CMS",
                "✔ SSL (HTTPS) setup",
                "✔ SEO‑friendly meta, URL, structure",
              ],
            },
            {
              icon: <FaEnvelope className="text-xl text-black" />,
              title: "Interaction & Forms",
              items: [
                "✔ Contact form to Google Sheets",
                "✔ Quote request form",
                "✔ Clear CTAs across pages",
              ],
            },
            {
              icon: <FaGlobe className="text-xl text-black" />,
              title: "Extras",
              items: [
                "✔ Google Maps integration",
                "✔ Basic on-page SEO",
                "✔ Social links + compliance badge space",
              ],
            },
          ].map(({ icon, title, items }) => (
            <div key={title}>
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                {icon}
                {title}
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                {items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* NOT INCLUDED */}
      <section className="py-20 px-6 sm:px-12 md:px-20 border-b border-gray-100 max-w-4xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight mb-10">
          What’s Not Included
        </h2>
        <ul className="space-y-3 text-gray-700 text-sm">
          {[
            "Logo design (available as an add‑on)",
            "Hosting & domain (we guide you, but separate)",
            "Ongoing maintenance (available separately)",
          ].map((text, idx) => (
            <li key={idx} className="flex gap-3 items-start">
              <FaTimesCircle className="text-red-500 mt-0.5" />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 sm:px-12 md:px-20 text-center">
        <p className="text-lg text-gray-800 mb-8 font-medium max-w-xl mx-auto">
          Ready to elevate your export business with a professional web presence?
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          <button
            onClick={() => navigate("/contact")}
            className="bg-black text-white px-8 py-3 rounded-md text-sm uppercase tracking-wide font-semibold hover:bg-gray-900 transition"
          >
            Get This Plan →
          </button>
          <button
            onClick={() => navigate("/services")}
            className="border border-gray-400 px-8 py-3 rounded-md text-sm uppercase tracking-wide font-semibold hover:bg-gray-100 transition"
          >
            Back to Plans
          </button>
        </div>
      </section>
    </div>
  );
};

export default SinglePlanPage;
