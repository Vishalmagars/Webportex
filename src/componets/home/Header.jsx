import React, { useEffect, useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.pageYOffset - 80,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white text-black font-sans sticky top-0 z-50">
      <div className="hidden md:flex justify-between items-center px-4 lg:px-16 py-2 border-b border-gray-200 text-xs tracking-wide text-gray-600">
        <div className="flex items-center gap-6">
          <span>📞 +012 345 6789</span>
          <span>📧 info@example.com</span>
          <span>📍 123 Madison Ave, NY 1234</span>
          <span>🕐 Mon–Fri: 09:00–18:00</span>
        </div>
        <div className="flex items-center gap-4">
          <FaFacebookF className="cursor-pointer hover:text-black hover:scale-110 transition" />
          <FaTwitter className="cursor-pointer hover:text-black hover:scale-110 transition" />
          <FaInstagram className="cursor-pointer hover:text-black hover:scale-110 transition" />
          <FaLinkedinIn className="cursor-pointer hover:text-black hover:scale-110 transition" />
        </div>
      </div>

      <div className="flex justify-between items-center px-4 lg:px-16 py-4">
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png"
            alt="logo"
            className="w-9 h-9"
          />
          <span className="text-2xl font-bold tracking-wide">CRITO</span>
        </div>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-medium">
          <Link to="/#hero" className="hover:underline underline-offset-4">
            Home
          </Link>
          <Link to="/#about" className="hover:underline underline-offset-4">
            About
          </Link>
          <Link to="/#plans" className="hover:underline underline-offset-4">
            Plan
          </Link>
          <Link to="/#testimonials" className="hover:underline underline-offset-4">
            Testimonials
          </Link>
          <Link to="/contact" className="hover:underline underline-offset-4">
            Contact
          </Link>
        </nav>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="border border-black text-black text-sm font-medium uppercase px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
          >
            Get Consulting →
          </Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-black text-2xl focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white px-4 py-6 flex flex-col gap-4 text-sm uppercase tracking-widest font-medium border-t border-gray-200">
          <Link to="/#hero" className="hover:underline underline-offset-4" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </Link>
          <Link to="/#about" className="hover:underline underline-offset-4" onClick={() => setIsMobileMenuOpen(false)}>
            About
          </Link>
          <Link to="/#services" className="hover:underline underline-offset-4" onClick={() => setIsMobileMenuOpen(false)}>
            Plan
          </Link>
          <Link to="/#testimonials" className="hover:underline underline-offset-4" onClick={() => setIsMobileMenuOpen(false)}>
            Testimonials
          </Link>
          <Link to="/contact" className="hover:underline underline-offset-4" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;