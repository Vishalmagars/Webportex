import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faRocket, faMoneyBillWave, faShieldAlt } from '@fortawesome/free-solid-svg-icons';

const features = [
  {
    icon: faBriefcase,
    title: 'Business Advice',
    desc: 'Essentially formula for how a business is going to compete.',
  },
  {
    icon: faRocket,
    title: 'Startup Business',
    desc: 'Essentially formula for how a business is going to compete.',
  },
  {
    icon: faMoneyBillWave,
    title: 'Financial Advice',
    desc: 'Essentially formula for how a business is going to compete.',
  },
  {
    icon: faShieldAlt,
    title: 'Risk Management',
    desc: 'Essentially formula for how a business is going to compete.',
  },
];

const FeaturesSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-white py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 border border-gray-200 rounded-lg p-8 md:p-12 shadow-sm">
        
        {/* Left Side */}
        <div className="md:w-1/2 space-y-6">
          <p className="text-sm text-orange-500 font-semibold uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Less Accounting is trusted by thousands of companies
          </h2>
          <p className="text-gray-600 text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias expedita ullam inventore nesciunt laboriosam ad. Provident, impedit magnam ipsam nulla nisi corrupti non mollitia vel dolorum officia ea iste doloribus?
          </p>
          <button
            onClick={() => navigate('/features')}
            className="mt-4 bg-[#ffc370] hover:bg-[#ffc370] text-black font-semibold px-6 py-3 rounded-md transition-all"
          >
            Learn More →
          </button>
        </div>

        {/* Right Grid */}
       <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
  {features.map((feature, idx) => (
    <div
      key={idx}
      className="flex flex-col justify-between h-full border border-gray-100 p-4 sm:p-6 rounded-md hover:shadow-md transition bg-white"
    >
      <div>
        <FontAwesomeIcon icon={feature.icon} className="text-gray-500 text-2xl mb-2" />
        <h4 className="text-lg font-semibold text-gray-800">{feature.title}</h4>
        <p className="text-sm text-gray-500 mt-1">{feature.desc}</p>
      </div>
    </div>
  ))}
</div>


      </div>
    </section>
  );
};

export default FeaturesSection;
