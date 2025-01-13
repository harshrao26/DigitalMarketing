import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home"); // Track the active link

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsOpen(false); // Close the mobile menu after clicking a link
  };

  return (
    <nav className="bg-white  fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-[#FFC802]">Advert Furos</div>

        {/* Links */}
        <div className="hidden md:flex space-x-2 text-sm">
          {[
            { name: "Home", href: "#home" },
            { name: "Services", href: "#services" },
            { name: "Projects", href: "#projects" },
            { name: "About Us", href: "#about" },
            { name: "Career", href: "#career" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`py-2 px-4 rounded-full ${
                activeLink === link.href
                  ? "bg-[#FFC802] text-white"
                  : "text-gray-700 hover:text-[#FFC802]"
              }`}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact Us Button */}
        <a
          href="#contact"
          className={`hidden md:block py-2 px-4 rounded-lg ${
            activeLink === "#contact"
              ? "bg-[#FFC802] text-white"
              : "bg-gray-200 hover:bg-[#FFC802] text-gray-700"
          }`}
          onClick={() => handleLinkClick("#contact")}
        >
          Contact Us
        </a>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="flex flex-col items-center space-y-4 py-4">
            {[
              { name: "Home", href: "#home" },
              { name: "Services", href: "#services" },
              { name: "Projects", href: "#projects" },
              { name: "About Us", href: "#about" },
              { name: "Career", href: "#career" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`py-2 px-4 rounded-lg ${
                  activeLink === link.href
                    ? "bg-[#FFC802] text-white"
                    : "text-gray-700 hover:text-[#FFC802]"
                }`}
                onClick={() => handleLinkClick(link.href)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className={`py-2 px-4 rounded-lg ${
                activeLink === "#contact"
                  ? "bg-[#FFC802] text-white"
                  : "bg-gray-200 hover:bg-[#FFC802] text-gray-700"
              }`}
              onClick={() => handleLinkClick("#contact")}
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
