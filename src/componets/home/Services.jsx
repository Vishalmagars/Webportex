import React from 'react';
import { useNavigate } from 'react-router-dom';

const packages = [
  {
    name: 'Single‑Page Launch Website',
    price: '₹4,999',
    description:
      'Perfect for new exporters who need a clean, credible online presence to start conversations with global buyers.',
    features: [
      '7 Custom‑designed Sections',
      'Enquiry Form Integrated with Google Sheets',
      'Mobile‑Responsive & Cross‑Browser Tested',
      'Basic On‑Page SEO Setup',
      'Showcase up to 10 Products',
    ],
    highlight: false,
  },
  {
    name: '6‑Page Static Business Website',
    price: '₹11,999',
    description:
      'Ideal for growing manufacturers—present your services, product range, and company profile with clarity and impact.',
    features: [
      '6 Pages (Home, About, Services, Products, Product Detail, Contact)',
      'Smart Enquiry Form Linked to Google Sheets',
      'Lightweight, Fast & Mobile‑Optimized',
      'Essential SEO Foundations',
      'Display up to 20 Products',
    ],
    highlight: false,
  },
  {
    name: '8‑Page Professional Exporter Website',
    price: '₹15,999',
    description:
      'Designed for exporters looking to build trust and showcase certifications, logistics support, and more.',
    features: [
      '8 Pages (Home, About, Services, Products, Detail, Contact, Certificates, Logistics)',
      'Multiple Lead‑Capture Forms',
      'SEO‑Ready & Analytics‑Friendly',
      'Responsive & High‑Performance',
      'Showcase up to 30 Products',
    ],
    highlight: true,
  },
  {
    name: '10‑Page Dynamic Export Platform',
    price: '₹19,999',
    description:
      'A dynamic site with an admin panel to manage products and testimonials—ideal for scaling exporters.',
    features: [
      '10 Pages (Home, About, Services, Products, Detail, Contact, Certificates, Sourcing, Logistics Support, Testimonials)',
      'Dynamic Product Catalog with Unlimited Listings',
      'Secure Backend (Java Spring Boot & Spring Security)',
      'Admin Dashboard to Manage Content',
      'Enhanced SEO & Mobile‑Responsive Design',
    ],
    highlight: false,
  },
  {
    name: 'Full‑Scale Business Website (15+ Pages)',
    price: '₹34,999',
    description:
      'An enterprise‑grade presence with integrated automation, CRM features, and payment options—built to scale globally.',
    features: [
      '15+ Pages (Industries, Blog, Careers & More)',
      'Demo Product Booking with Google Pay Integration',
      'Order Management & Call Scheduling',
      'CRM Automation for Leads & Orders',
      'AI Chatbot Integration',
    ],
    highlight: false,
  },
  {
    name: 'Custom Enterprise Solution',
    price: 'Contact for Quote',
    description:
      'When your operations demand a fully tailored platform, we design and develop around your exact workflows.',
    features: [
      'Unlimited Custom Pages & Sections',
      'Advanced AI‑Driven Tools & Analytics',
      'Role‑Based User Access & Permissions',
      'Bespoke Admin Panel with Custom Modules',
      'Full CRM/ERP & Payment Integrations',
    ],
    highlight: false,
  },
];

const Services = ({id}) => {
  const navigate = useNavigate();

  return (
    <section  id={id} className="bg-[#fafafa] py-20 px-4 sm:px-8 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-left md:text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-gray-500 mb-3">
            Our Export Packages
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light uppercase tracking-tight text-black leading-tight">
            Websites That Win Global Business
          </h2>
          <p className="text-gray-700 text-base mt-4 max-w-2xl md:mx-auto leading-relaxed">
            Each package is built for exporters and manufacturers who need more than just a website—
            they need a growth engine that attracts international buyers and builds trust in every click.
          </p>
        </div>


        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {packages.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between border ${pkg.highlight
                  ? 'border-gray-400 bg-[#e4e4e4]'
                  : 'border-gray-300 bg-white'
                } p-8 hover:shadow-sm transition`}
            >
              <div>
                <h3 className="text-lg font-medium uppercase tracking-wide mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xl font-semibold mb-4">{pkg.price}</p>
                <p className="text-sm leading-relaxed mb-6">{pkg.description}</p>
                <ul className="space-y-2">
                  {pkg.features.map((f, i) => (
                    <li key={i} className="flex items-start text-sm">
                      <span className="mr-2 text-green-600">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <button
                onClick={() => navigate('/services')}
                className={`mt-8 text-sm uppercase tracking-widest border-b ${pkg.highlight
                    ? 'border-black text-black hover:opacity-70'
                    : 'border-gray-800 text-gray-800 hover:opacity-70'
                  } text-left`}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => navigate('/contact')}
            className="text-sm uppercase tracking-widest border-b border-black hover:opacity-70"
          >
            Get a Free Consultation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
