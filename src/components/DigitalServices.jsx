import React from "react";
import { FaSearch, FaComments, FaGlobe, FaLaptopCode } from "react-icons/fa";

const DigitalServices = () => {
  return (
    <div className="py-10 px-6 sm:px-12 lg:px-16 bg-black">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div>
          <h1 className="text-3xl sm:text-4xl font-semibold text-white mb-8 leading-snug">
            Taking Your Business Ahead with{" "}
            <span className="text-[#FFD74B] font-semibold">
              Digital Services
            </span>
          </h1>

          <div className="space-y-6">
            {/* First Row: SEO & SMO */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceCard
                title="SEO Optimization"
                description="Boost your search rankings and drive organic traffic to your website with our expert SEO strategies."
                icon={<FaSearch />}
              />
              <ServiceCard
                title="Social Media Optimization"
                description="Enhance brand engagement, grow your audience, and maximize reach with our social media strategies."
                icon={<FaComments />}
              />
            </div>

            {/* Second Row: WhatsApp Chatbot & Website Development */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceCard
                title="WhatsApp Chatbot"
                description="Automate responses, improve engagement, and scale customer interactions with AI-powered WhatsApp chatbots."
                icon={<FaGlobe />}
              />
              <ServiceCard
                title="Website Development"
                description="Build a stunning and high-performing website that converts visitors into customers."
                icon={<FaLaptopCode />}
              />
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/originals/4e/d0/ce/4ed0ced35bb59c608dd31d8b2860a986.gif"
            alt="Digital Transformation Concept"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-10 md:opacity-20 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

// Reusable Service Card Component
const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col bg-[#1a1a1a] border border-zinc-700 shadow-lg rounded-lg p-6 hover:shadow-xl transition-transform transform hover:scale-105 duration-300">
      <div className="flex items-center mb-3 text-white">
        <div className="text-[#FFD74B] text-2xl mr-3">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default DigitalServices;
