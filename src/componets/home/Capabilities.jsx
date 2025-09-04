import React from "react";
import {
  FaEnvelopeOpenText,
  FaBell,
  FaComments,
  FaFileDownload,
  FaNewspaper,
  FaSearch,
  FaBoxes,
  FaEye,
  FaHeart,
  FaCalculator,
  FaStar,
  FaCertificate,
  FaBuilding,
  FaBookOpen,
  FaMobileAlt,
  FaAdjust,
  FaLanguage,
  FaDollarSign,
  FaUniversalAccess,
  FaChartLine,
  FaTasks,
  FaUsersCog,
  FaEdit,
  FaDatabase,
  FaWindowClose,
  FaThumbtack,
  FaCalendarAlt,
  FaSearchPlus,
  FaGoogle,
} from "react-icons/fa";

const featureGroups = [
  {
    category: "Communication & Engagement",
    items: [
      { title: "Email Notifications", desc: "Instant confirmations for customers and admins.", icon: <FaEnvelopeOpenText /> },
      { title: "Admin Alerts", desc: "Notify owners of new leads & orders instantly.", icon: <FaBell /> },
      { title: "Live Chat / WhatsApp", desc: "Enable direct buyer-seller conversations.", icon: <FaComments /> },
      { title: "Newsletter Signup", desc: "Grow your mailing list with opt-ins.", icon: <FaNewspaper /> },
      { title: "Downloadable PDFs", desc: "Auto-send catalogs & brochures.", icon: <FaFileDownload /> },
    ],
  },
  {
    category: "Product & Catalog Features",
    items: [
      { title: "Advanced Search + Filters", desc: "Find products by category, price, material.", icon: <FaSearch /> },
      { title: "Product Variants", desc: "Showcase size, packaging & MOQ options.", icon: <FaBoxes /> },
      { title: "Demo Product Showcase", desc: "Highlight trial/demo products.", icon: <FaEye /> },
      { title: "Favorites / Wishlist", desc: "Save products for later inquiries.", icon: <FaHeart /> },
      { title: "Export Pricing Calculator", desc: "Estimate cost including tax & shipping.", icon: <FaCalculator /> },
    ],
  },
  {
    category: "Trust & Branding",
    items: [
      { title: "Testimonials & Reviews", desc: "Display client trust stories.", icon: <FaStar /> },
      { title: "Certifications", desc: "Show ISO, CE, FDA & trade licenses.", icon: <FaCertificate /> },
      { title: "Client Logos", desc: "Highlight companies you work with.", icon: <FaBuilding /> },
      { title: "Case Studies", desc: "Success stories & authority building.", icon: <FaBookOpen /> },
    ],
  },
  {
    category: "User Experience",
    items: [
      { title: "Responsive Design", desc: "Perfect on all devices, mobile-first.", icon: <FaMobileAlt /> },
      { title: "Dark/Light Mode", desc: "Modern UI toggle option.", icon: <FaAdjust /> },
      { title: "Language Switcher", desc: "Multi-language support for global users.", icon: <FaLanguage /> },
      { title: "Currency Converter", desc: "Automatic pricing in INR, USD, EUR, etc.", icon: <FaDollarSign /> },
      { title: "Accessibility Features", desc: "Keyboard nav & screen reader friendly.", icon: <FaUniversalAccess /> },
    ],
  },
  {
    category: "Admin / Backend Features",
    items: [
      { title: "Dashboard Analytics", desc: "Monitor inquiries, orders, traffic.", icon: <FaChartLine /> },
      { title: "Leads Management", desc: "Mini CRM with lead status tracking.", icon: <FaTasks /> },
      { title: "Role-Based Access", desc: "Admin, staff & super-admin levels.", icon: <FaUsersCog /> },
      { title: "Content Manager", desc: "Easily edit text & images without coding.", icon: <FaEdit /> },
      { title: "Automatic Backups", desc: "Data protection with scheduled backups.", icon: <FaDatabase /> },
    ],
  },
  {
    category: "Conversion Boosters",
    items: [
      { title: "Exit Intent Popup", desc: "Offer a brochure before visitors leave.", icon: <FaWindowClose /> },
      { title: "Sticky CTA Buttons", desc: "Always-visible 'Get Quote' button.", icon: <FaThumbtack /> },
      { title: "Call Scheduling", desc: "Book meetings directly via form.", icon: <FaCalendarAlt /> },
      { title: "SEO Optimization", desc: "Meta tags & structured data setup.", icon: <FaSearchPlus /> },
      { title: "Google Analytics", desc: "Full site tracking integration.", icon: <FaGoogle /> },
    ],
  },
];

const FeaturesCatalog = ({ id }) => {
  return (
    <section id={id} className="bg-white py-28 px-6 md:px-16 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Sidebar Title */}
        <div className="md:col-span-1">
          <h2 className="text-4xl md:text-5xl font-light uppercase tracking-tight text-black">
            Capabilities
          </h2>
          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            A complete toolkit designed for exporters & manufacturers — 
            from simple engagement tools to powerful backend management.
          </p>
        </div>

        {/* Feature Groups */}
        <div className="md:col-span-3 space-y-16">
          {featureGroups.map((group, idx) => (
            <div key={idx} className="border-b border-gray-200 pb-10">
              <h3 className="text-lg uppercase font-medium tracking-wider text-gray-800 mb-8">
                {group.category}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                {group.items.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full border border-gray-300 bg-white shadow-sm text-gray-900">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-base font-medium text-gray-900 uppercase tracking-wide">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesCatalog;
