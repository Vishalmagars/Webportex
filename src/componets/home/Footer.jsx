import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0e0e0e] text-white py-20 font-sans relative">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 text-sm tracking-wider">
        {/* Brand */}
        <div>
          <h2 className="text-2xl md:text-3xl font-light uppercase tracking-wide mb-4">Crito</h2>
          <p className="text-gray-400 max-w-xs leading-relaxed">
            Business solution agency helping exporters go global with digital confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Quick Links</h3>
          <ul className="space-y-3">
            {['Home', 'About', 'Plan', 'Blog', 'Contact'].map((link, i) => (
              <li key={i}>
                <Link
                  to={link === 'Contact' ? '/contact' : `/#${link.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Resources</h3>
          <ul className="space-y-3">
            {['Privacy Policy', 'Terms & Conditions', 'Support', 'FAQs'].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-6">Follow Us</h3>
          <div className="flex gap-4 text-white text-lg">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="hover:text-gray-400 transition-colors duration-300"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 text-center text-xs text-gray-500 tracking-wider">
        © {new Date().getFullYear()} Crito. All rights reserved.
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-black text-white p-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;