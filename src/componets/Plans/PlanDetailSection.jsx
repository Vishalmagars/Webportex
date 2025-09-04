import React from "react";

const PlanHeroSection = () => {
  return (
    <section className="bg-white text-black py-10 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Badge */}
        <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
          Plan Details
        </p>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight max-w-4xl">
          Growth Exporter Plan
        </h1>

        {/* Price */}
        <p className="text-2xl mt-6 font-semibold text-black">
          ₹29,999 <span className="text-gray-500 font-normal">+ Free Hosting</span>
        </p>

        {/* Description */}
        <p className="mt-6 text-base text-gray-700 max-w-3xl leading-relaxed">
          Unlock your global presence with a high-conversion website tailored for Indian exporters.
          Crafted for brands ready to showcase professionalism, attract overseas buyers, and build global credibility — without the complexity.
        </p>

        {/* Ideal For */}
        <div className="mt-4">
          <p className="text-sm tracking-wide uppercase text-gray-500 mb-1">Ideal For</p>
          <p className="text-base font-medium text-black">
            Garment, Handicraft, Food, Textile, Leather, and Lifestyle Exporters targeting USA, Europe, and Gulf markets.
          </p>
        </div>

       
      </div>
    </section>
  );
};

export default PlanHeroSection;
