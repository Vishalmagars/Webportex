import React from 'react';
import { useNavigate } from 'react-router-dom';

const About = ({id}) => {
  const navigate = useNavigate();

  return (
    <section id={id} className="bg-white py-10 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* LEFT: Image with Testimonial Overlay */}
        <div className="relative">
          <img
            src="https://i.ibb.co/LXDFpKDC/Vishal-2.png"
            alt="Strategy Session"
            className="shadow-md w-full object-cover"
          />

          {/* Testimonial Overlay */}
          <div className="bg-white shadow-lg  p-5 flex items-start gap-4 max-w-sm mt-6 md:mt-0 md:absolute md:-bottom-10 md:-left-6">
            <img
              src="https://i.ibb.co/LXDFpKDC/Vishal-2.png"
              alt="Founder"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="text-sm text-gray-600 italic leading-relaxed">
                “Every project gets full attention, clear strategy, and a focus on results. That’s why clients stay with us.”
              </p>
              <p className="text-sm font-semibold mt-3 text-gray-900">
                Vishal Magar <span className="font-normal text-gray-500">— Founder</span>
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT: About Content */}
        <div className="space-y-6">
          <p className="text-sm tracking-widest uppercase text-gray-500 font-medium">
            About Implexy
          </p>
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-black leading-tight">
            Helping Exporters Build a Global Presence
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At <strong>Webportex</strong>, the mission is simple: create websites that help exporters and manufacturers in India
            look credible, connect with buyers, and grow faster in global markets.  
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            Every project is handled with personal attention and industry‑specific insight—combining modern design,
            technical precision, and a deep understanding of international trade.
          </p>

          {/* Highlight List */}
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✓</span>
              Export‑focused website expertise
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✓</span>
              Design that drives inquiries
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✓</span>
              Ongoing updates & support
            </li>
            <li className="flex items-center gap-2">
              <span className="text-green-600 text-lg">✓</span>
              Secure and future‑ready builds
            </li>
          </ul>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button
              onClick={() => navigate('/about')}
              className="bg-black text-white font-semibold px-6 py-3  hover:bg-gray-800 transition"
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
      </div>
    </section>
  );
};

export default About;
