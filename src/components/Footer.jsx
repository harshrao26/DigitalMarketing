import React from "react";
import { FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import logoblack from "../assets/logox.png";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-gradient-to-tr from-white to-[#b9babd] text-black py-12">
      <div className="container  px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-5 gap-12 font-semibold">
        {/* Logo and Description */}
        <div className="col-span-2 flex flex-col">
          <div className="flex items-center mb-4">
            <img src={logoblack} alt="Logo" className=" h-20 mr-3 " />
          </div>
          <p className="mb-6 text-sm text-black/90 leading-relaxed">
            A multi award-winning Full Service Digital Marketing Agency
            providing a broad spectrum of digital solutions. Our headquarters
            are in the UK, with branches in multiple locations around the world.
          </p>
          <button className="px-6 py-2 bg-black text-[#FFD74B] font-semibold rounded-md transition">
            Learn More
          </button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {["About", "Services", "Career"].map((link, index) => (
              <li key={index}>
                <Link
                  to={`/${link.toLowerCase().replace(" ", "-")}`}
                  className="hover:underline cursor-pointer transition hover:text-zinc-600"
                >
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu */}
        <div>
          {/* <h3 className="text-lg font-semibold mb-4">Menu</h3>
          <ul className="space-y-2">
            {["Blog", "Training", "Contact Us"].map((link, index) => (
              <li
                key={index}
                className="hover:underline cursor-pointer transition hover:text-zinc-600"
              >
                {link}
              </li>
            ))}
          </ul> */}
        </div>

        {/* Address */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Addresses</h3>
          <div className="space-y-4 text-sm text-black/90">
            <p>
              <strong>Dubai:</strong> Building A1, Dubai Digital Park, Dubai
              Silicon Oasis, Dubai, UAE
              <br />
              <strong>Contact:</strong> +971 56 932 7062
            </p>
            <p>
              <strong>India:</strong> 1st Floor LHPS Building, Sector-7, Vikas
              Nagar, Lucknow-226022
              <br />
              <strong>Contact:</strong> +91-7007016231
            </p>
          </div>
          <div className="mt-6  text-black/90 text-2xl">
            <p>media@advertfuros.com</p>
          </div>
       <div className="mt-8">
       <a
            href="https://www.instagram.com/advertfuros/"
            className="hover:text-gray-950 transition"
          >
            <FaInstagram size={24} />
          </a>
       </div>
        </div>

       
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-black/50 pt-6 text-center px-16 lg:flex lg:justify-between lg:items-center text-sm text-black/80">
        <p className="mb-6 lg:mb-0">
          Privacy Policy | Terms and Conditions | Sitemap | © 2019 - 2025 Advert
          Furos
        </p>
       
      </div>
    </footer>
  );
};

export default Footer;
