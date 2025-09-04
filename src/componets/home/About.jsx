import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = ({ id }) => {
  const navigate = useNavigate();

  return (
    <section id={id} className="bg-white py-20 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        
        {/* LEFT: About Content */}
        <div className="space-y-8">
          <p className="text-sm tracking-widest uppercase text-gray-500 font-medium">
            About Webportex
          </p>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-black leading-tight">
            Helping Exporters Build <br className="hidden md:block" /> a Global Presence
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At <strong>Webportex</strong>, the mission is simple: create websites that help exporters and manufacturers in India
            look credible, connect with buyers, and grow faster in global markets.
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Every project is handled with personal attention and industry-specific insight—combining modern design,
            technical precision, and a deep understanding of international trade.
          </p>

          {/* Highlight List */}
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-gray-700">
            {[
              "Export-focused website expertise",
              "Design that drives inquiries",
              "Ongoing updates & support",
              "Secure and future-ready builds",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-green-600 text-lg">✓</span> {item}
              </li>
            ))}
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              onClick={() => navigate('/about')}
              className="bg-black text-white font-semibold px-6 py-3 hover:bg-gray-800 transition"
            >
              Learn More →
            </button>
            <button
              onClick={() => navigate('/video')}
              className="flex items-center gap-2 text-black border border-gray-300 px-6 py-3 hover:bg-gray-100 transition"
            >
              <span className="text-base">▶</span> Watch Intro
            </button>
          </div>
        </div>

        {/* RIGHT: Image with Floating Testimonial */}
        <div className="relative">
          <img
            src="https://i.ibb.co/LXDFpKDC/Vishal-2.png"
            alt="Founder"
            className="w-full object-cover shadow-lg"
          />
          <div className="bg-white shadow-xl p-6 md:p-8 max-w-sm md:absolute md:-bottom-12 md:-right-12 border border-gray-100">
            <p className="text-sm text-gray-600 italic leading-relaxed">
              “Every project gets full attention, clear strategy, and a focus on results. That’s why clients stay with us.”
            </p>
            <div className="flex items-center gap-3 mt-4">
              <img
                src="https://i.ibb.co/LXDFpKDC/Vishal-2.png"
                alt="Founder"
                className="w-10 h-10 rounded-full object-cover"
              />
              <p className="text-sm font-semibold text-gray-900">
                Vishal Magar <span className="font-normal text-gray-500">— Founder</span>
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
