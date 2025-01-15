import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-orange-500 to-yellow-400 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-5 gap-12">
        {/* Logo and Description */}
        <div className="col-span-2 flex flex-col">
          <div className="flex items-center mb-4">
            <img
              src="https://via.placeholder.com/50" // Replace with your logo URL
              alt="Logo"
              className="h-14 w-14 mr-3 rounded-full border-2 border-white"
            />
            <h1 className="text-3xl font-bold">Your Company</h1>
          </div>
          <p className="mb-6 text-sm text-white/90 leading-relaxed">
            Helping property owners, entrepreneurs, and real estate
            professionals transform and matchmake spaces into profitable
            coworking businesses.
          </p>
          <button className="px-6 py-2 bg-white text-orange-500 font-semibold rounded-md hover:bg-orange-500 hover:text-white transition">
            Learn More
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["About Us", "Services", "Portfolio", "Careers"].map(
              (link, index) => (
                <li
                  key={index}
                  className="hover:underline cursor-pointer transition hover:text-yellow-200"
                >
                  {link}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Menu */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            {["Blog", "Training", "Contact Us"].map((link, index) => (
              <li
                key={index}
                className="hover:underline cursor-pointer transition hover:text-yellow-200"
              >
                {link}
              </li>
            ))}
          </ul>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Addresses</h3>
          <div className="space-y-4 text-sm text-white/90">
            <p>
              <strong>India:</strong> 1st Floor LHPS Building, Sector-7, Vikas
              Nagar, Lucknow-226022
              <br />
              <strong>Contact:</strong> +91-7007016231
            </p>
            <p>
              <strong>Dubai:</strong> Building A1, Dubai Digital Park, Dubai
              Silicon Oasis, Dubai, UAE
              <br />
              <strong>Contact:</strong> +91-9721080912
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-white/50 pt-6 text-center lg:flex lg:justify-between lg:items-center text-sm text-white/80">
        <p className="mb-6 lg:mb-0">
          Privacy Policy | Terms and Conditions | Sitemap | © 2025 Your Company
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-300 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-300 transition">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
