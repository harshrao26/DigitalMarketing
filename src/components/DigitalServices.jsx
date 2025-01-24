import React from "react";
import { FaSearch, FaComments, FaGlobe, FaLaptopCode } from "react-icons/fa";

const DigitalServices = () => {
  return (
    <div className="py-10 px-6 md:px-16 bg-black">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side Content */}
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-8 leading-snug">
            Taking Your Business Ahead with{" "}
            <span className="text-[#FFD74B] font-semibold">
              Digital Services
            </span>
          </h1>
          <div className="space-y-8">
            {/* Row for SEO and SMO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SEO Service */}
              <ServiceCard
                title="Taking Your Business Ahead with SEO"
                description="Best digital marketing company, HomeSEO not only helps to improve your website user experience but also helps to increase your brand’s awareness & your website ranking in Google search results that help in your business growth & maintain brand’s goodwill. We are the finest SEO company in Lucknow."
                icon={<FaSearch />}
              />

              {/* SMO Service */}
              <ServiceCard
                title="Taking Your Business Ahead with SMO"
                description="Best digital marketing company, HomeSMO increases the online conformity of the customers and therefore helps to increase sales and increase profits. It helps to create your brand visibility and increase your business reach, engagement organically. We are the best SMO company in Lucknow."
                icon={<FaComments />}
              />
            </div>

            {/* Row for WhatsApp Chatbot and Website Development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp Chatbot Service */}
              <ServiceCard
                title="Taking Your Business Ahead with WhatsApp Chatbot"
                description="Businesses may use WhatsApp chatbot services to improve customer experiences, maximize tasks, and drive corporate growth by using the power of automation AI, and personal communication."
                icon={<FaGlobe />}
              />

              {/* Website Development Service */}
              <ServiceCard
                title="Taking Your Business Ahead with Website Development"
                description="Website development is a way to make people aware of the services and/or products you are offering, and see which of your company’s qualities set it apart from competitors. We are the best Website Development Company in Lucknow."
                icon={<FaLaptopCode />}
              />
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <img
            src="https://i.pinimg.com/originals/4e/d0/ce/4ed0ced35bb59c608dd31d8b2860a986.gif"
            alt="A futuristic digital concept for business growth"
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
    <div className="flex flex-col bg-black border-[1px] border-zinc-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
      <div className="flex items-center mb-3 text-white">
        <div className="text-[#FFD74B] text-2xl mr-3">{icon}</div>
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
};

export default DigitalServices;
