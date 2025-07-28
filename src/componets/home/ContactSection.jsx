import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const ContactSectionZara = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-20 font-sans">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
        
        {/* LEFT SIDE */}
        <div className="space-y-14">
          {/* Heading & Description */}
          <div>
            <h2 className="text-5xl md:text-6xl font-light uppercase tracking-tight leading-tight mb-6">
              Let’s Connect
            </h2>
            <p className="text-sm leading-relaxed text-gray-600 max-w-md">
              Whether you’re launching your first export website or upgrading to a global‑ready platform, I’m here to help. 
              Tell me what you need — together we’ll build a digital presence that wins buyers and grows your business.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-black text-base" />
              <div>
                <p className="text-xs uppercase tracking-widest font-medium">Call</p>
                <p className="text-sm text-gray-700">+91 860-560-7801</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-black text-base" />
              <div>
                <p className="text-xs uppercase tracking-widest font-medium">Email</p>
                <p className="text-sm text-gray-700">hello@webportex.in</p>
              </div>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-2">
            {[FaLinkedin, FaFacebookF, FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="w-9 h-9 flex items-center justify-center border border-black text-black hover:bg-black hover:text-white transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div>
          <h3 className="text-2xl font-medium uppercase tracking-widest mb-12">
            Send a Message
          </h3>
          <form className="space-y-8">
            {[
              {
                type: "text",
                placeholder: "Your Name*",
              },
              {
                type: "email",
                placeholder: "Your Email*",
              },
            ].map(({ type, placeholder }, i) => (
              <input
                key={i}
                type={type}
                placeholder={placeholder}
                className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 text-sm placeholder-gray-500 bg-transparent"
              />
            ))}

            <select className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 text-sm bg-transparent text-gray-700">
              <option value="">Choose a Plan*</option>
              <option>Single‑Page Launch Website (₹4,999)</option>
              <option>6‑Page Static Business Website (₹11,999)</option>
              <option>10‑Page Dynamic Export Platform (₹19,999)</option>
              <option>15+ Page Enterprise Website (Custom)</option>
            </select>

            <select className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 text-sm bg-transparent text-gray-700">
              <option value="">Select an Add‑On</option>
              <option>AI Chatbot Integration</option>
              <option>Extra Pages</option>
              <option>Logo Design</option>
              <option>Multi‑Language Support</option>
              <option>Monthly Maintenance</option>
            </select>

            <textarea
              rows="4"
              placeholder="Your Message*"
              className="w-full border-b border-gray-300 focus:border-black focus:outline-none py-2 text-sm placeholder-gray-500 bg-transparent"
            ></textarea>

            <button
              type="submit"
              className="text-sm uppercase tracking-widest border-b border-black hover:opacity-75 transition pb-1"
            >
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionZara;
