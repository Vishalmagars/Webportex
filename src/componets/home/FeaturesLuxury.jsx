import { FaHandshake, FaLightbulb, FaMoneyCheckAlt, FaShieldAlt } from "react-icons/fa";

export default function FeaturesLuxury() {
  return (
    <section className="bg-gradient-to-br from-white to-gray-50 py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Features Intro */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <p className="text-sm uppercase tracking-widest text-yellow-700 font-medium mb-2">
              Features
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
              Less Accounting is trusted by <span className="text-yellow-600">thousands of companies</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We provide end-to-end business advisory solutions, crafted with attention to detail and built for long-term growth.
            </p>
            <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg shadow-md transition">
              Learn More →
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <FaHandshake className="text-yellow-600 text-3xl mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Business Advice</h3>
              <p className="text-sm text-gray-600">Tailored guidance to help your business thrive in competitive markets.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <FaLightbulb className="text-yellow-600 text-3xl mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Startup Business</h3>
              <p className="text-sm text-gray-600">Strategies to launch and scale your startup with confidence.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <FaMoneyCheckAlt className="text-yellow-600 text-3xl mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Financial Advice</h3>
              <p className="text-sm text-gray-600">Optimize cash flow and plan financial strategies for long-term success.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition">
              <FaShieldAlt className="text-yellow-600 text-3xl mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Risk Management</h3>
              <p className="text-sm text-gray-600">Minimize risks with our proven frameworks and expert oversight.</p>
            </div>
          </div>
        </div>

        {/* About Company */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/your-image.jpg"
              alt="Team celebrating success"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute bottom-4 left-4 bg-white shadow-md rounded-lg p-4 text-sm">
              <p className="italic text-gray-600 mb-2">
                “Grass face saw beginning meat foot creeping even dominion intercom created behold.”
              </p>
              <p className="font-semibold text-gray-900">Forman Cobeid, Founder</p>
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-widest text-yellow-700 font-medium mb-2">
              About Company
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6">
              We Are Business Consulting & Credit Repair Experts
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We combine decades of experience with data‑driven insights to empower your business with sustainable growth strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-black hover:bg-gray-800 text-white font-semibold px-6 py-3 rounded-lg transition">
                Learn More →
              </button>
              <button className="flex items-center gap-2 border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100 transition text-gray-700 font-medium">
                📺 Intro Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
