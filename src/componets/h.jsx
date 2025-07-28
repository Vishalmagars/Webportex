import React from "react";
import { FaCheckCircle, FaBullseye, FaChartLine } from "react-icons/fa";

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        {/* IMAGE */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
            alt="Team meeting"
            className="rounded-lg shadow-md w-full"
          />
        </div>
        {/* TEXT */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            It’s everything <br /> you’ll ever need.
          </h2>
          <p className="text-gray-600 mb-6">
            Create custom landing pages with Omega that converts more visitors
            than any website. With lots of unique blocks, you can easily build
            a page without coding.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <span className="text-gray-700">
                60+ Unique Design Blocks with Carefully Coded Components
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckCircle className="text-green-500 mt-1" />
              <span className="text-gray-700">
                Mobile First Design on Every Device
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* TEXT */}
        <div className="order-2 lg:order-1 space-y-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <FaBullseye className="text-orange-500 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Align Tactics with Objectives
              </h3>
              <p className="text-gray-600">
                Align digital marketing strategies that impact with your
                objectives. Whether it’s a small exporter or large enterprise,
                we consult and deliver solutions aligned with your business goals.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <FaChartLine className="text-blue-500 text-3xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Deliver Measurable Results
              </h3>
              <p className="text-gray-600">
                We design your site to drive results, track analytics, and
                enhance conversion. With performance‑oriented builds, your
                export‑import brand grows globally.
              </p>
            </div>
          </div>
        </div>

        {/* IMAGE */}
        <div className="order-1 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
            alt="Strategy session"
            className="rounded-lg shadow-md w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
