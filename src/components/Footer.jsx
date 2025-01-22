import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import logoblack from "../assets/logoblack.png";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-white to-[#b9babd] text-black py-12">
      <div className="container  px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-12 font-semibold">
        {/* Logo and Description */}
        <div className="col-span-2 flex flex-col">
          <div className="flex items-center mb-4">
            <img
              src={logoblack}
              alt="Logo"
              className=" h-10 mr-3 "
            />
          </div>
          <p className="mb-6 text-sm text-black/90 leading-relaxed">
            Helping property owners, entrepreneurs, and real estate
            professionals transform and matchmake spaces into profitable
            coworking businesses.
          </p>
          <button className="px-6 py-2 bg-black text-[#FFD74B] font-semibold rounded-md transition">
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
          <div className="space-y-4 text-sm text-black/90">
            <p>
              <strong>India:</strong> 1st Floor LHPS Building, Sector-7, Vikas
              Nagar, Lucknow-226022
              <br />
              {/* <strong>Contact:</strong> +91-7007016231 */}
            </p>
            <p>
              <strong>Dubai:</strong> Building A1, Dubai Digital Park, Dubai
              Silicon Oasis, Dubai, UAE
              <br />
              {/* <strong>Contact:</strong> +91-9721080912 */}
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-black/50 pt-6 text-center px-16 lg:flex lg:justify-between lg:items-center text-sm text-black/80">
        <p className="mb-6 lg:mb-0">
          Privacy Policy | Terms and Conditions | Sitemap | © 2019 - 2025 Advert Furos
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-gray-950 transition">
            <FaLinkedin size={24} />
          </a>
          <a href="#" className="hover:text-gray-950 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-gray-950 transition">
            <FaFacebook size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
