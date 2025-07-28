import React from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    pages: "1 (Single Page)",
    design: "Basic",
    responsive: true,
    seo: true,
    cms: false,
    ecommerce: false,
    support: "Email",
    delivery: "7 Days",
  },
  {
    name: "Professional",
    price: "₹11,999",
    pages: "6 Pages",
    design: "Advanced",
    responsive: true,
    seo: true,
    cms: true,
    ecommerce: false,
    support: "Email + Chat",
    delivery: "10 Days",
  },
  {
    name: "Business",
    price: "₹19,999",
    pages: "10 Pages (Dynamic)",
    design: "Full",
    responsive: true,
    seo: true,
    cms: true,
    ecommerce: true,
    support: "Phone + Chat",
    delivery: "14 Days",
  },
  {
    name: "Enterprise",
    price: "Custom",
    pages: "15+ Pages (Dynamic)",
    design: "Fully Custom",
    responsive: true,
    seo: true,
    cms: true,
    ecommerce: true,
    support: "Dedicated Manager",
    delivery: "Custom",
  },
];

const FeatureRow = ({ label, values }) => (
  <tr className="border-t">
    <td className="px-3 py-4 font-medium text-gray-700">{label}</td>
    {values.map((val, idx) => (
      <td key={idx} className="px-3 py-4 text-center">
        {typeof val === "boolean" ? (
          val ? (
            <FaCheckCircle className="text-green-600 mx-auto" />
          ) : (
            <FaTimesCircle className="text-red-500 mx-auto" />
          )
        ) : (
          <span>{val}</span>
        )}
      </td>
    ))}
  </tr>
);

const PlanComparison = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
          Compare Our Plans
        </h2>

        {/* Table view for large screens */}
        <div className="hidden lg:block overflow-x-auto border rounded-lg shadow-sm">
          <table className="min-w-full text-sm border-collapse">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-3 py-4 text-left font-semibold text-gray-800">
                  Feature / Plan
                </th>
                {plans.map((plan, idx) => (
                  <th
                    key={idx}
                    className="px-3 py-4 font-semibold text-gray-800 text-center"
                  >
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white">
              <FeatureRow label="Price" values={plans.map((p) => p.price)} />
              <FeatureRow label="Pages Included" values={plans.map((p) => p.pages)} />
              <FeatureRow label="Design Customization" values={plans.map((p) => p.design)} />
              <FeatureRow label="Mobile Responsive" values={plans.map((p) => p.responsive)} />
              <FeatureRow label="SEO Optimization" values={plans.map((p) => p.seo)} />
              <FeatureRow label="CMS Integration" values={plans.map((p) => p.cms)} />
              <FeatureRow label="E‑commerce" values={plans.map((p) => p.ecommerce)} />
              <FeatureRow label="Support" values={plans.map((p) => p.support)} />
              <FeatureRow label="Delivery Time" values={plans.map((p) => p.delivery)} />
            </tbody>
          </table>
        </div>

        {/* Card view for mobile / tablets */}
        <div className="grid gap-8 lg:hidden mt-6">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-black mb-1">{plan.name}</h3>
              <p className="text-lg font-semibold text-gray-800 mb-3">{plan.price}</p>
              <ul className="text-sm space-y-2 text-gray-700 mb-4">
                <li>
                  <strong>Pages:</strong> {plan.pages}
                </li>
                <li>
                  <strong>Design:</strong> {plan.design}
                </li>
                <li className="flex items-center gap-2">
                  <strong>Mobile:</strong>{" "}
                  {plan.responsive ? (
                    <FaCheckCircle className="text-green-600" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                </li>
                <li className="flex items-center gap-2">
                  <strong>SEO:</strong>{" "}
                  {plan.seo ? (
                    <FaCheckCircle className="text-green-600" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                </li>
                <li className="flex items-center gap-2">
                  <strong>CMS:</strong>{" "}
                  {plan.cms ? (
                    <FaCheckCircle className="text-green-600" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                </li>
                <li className="flex items-center gap-2">
                  <strong>E‑commerce:</strong>{" "}
                  {plan.ecommerce ? (
                    <FaCheckCircle className="text-green-600" />
                  ) : (
                    <FaTimesCircle className="text-red-500" />
                  )}
                </li>
                <li>
                  <strong>Support:</strong> {plan.support}
                </li>
                <li>
                  <strong>Delivery:</strong> {plan.delivery}
                </li>
              </ul>
              <button className="w-full py-2 px-4 border border-black rounded-md text-black font-semibold hover:bg-gray-100 transition">
                Choose {plan.name}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlanComparison;
