import React from "react";

const DigitalServices = () => {
  return (
    <div className="py-10 px-16 bg-black">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Side Content */}
        <div>
          <h1 className="text-2xl md:text-4xl font-semibold text-white mb-6">
            Taking Your Business Ahead with{" "}
            <span className="text-[#FFD74B] font-semibold ">
              Digital Services
            </span>
          </h1>
          <div className="space-y-6">
            {/* Row for SEO and SMO */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* SEO Service */}
              <div className="flex flex-col bg-black border-[1px] border-zinc-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-lg md:text-lg font-semibold text-white mb-2">
                  Taking Your Business Ahead with SEO
                </h2>
                <p className="text-xs md:text-sm text-gray-400">
                  Best digital marketing company, HomeSEO not only helps to
                  improve your website user experience but also helps to
                  increase your brand’s awareness & your website ranking in
                  Google search results that help in your business growth &
                  maintain brand’s goodwill. We are the finest SEO company in
                  Lucknow.
                </p>
              </div>

              {/* SMO Service */}
              <div className="flex flex-col bg-black border-[1px] border-zinc-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-lg md:text-lg font-semibold text-white mb-2">
                  Taking Your Business Ahead with SMO
                </h2>
                <p className="text-xs md:text-sm text-gray-400">
                  Best digital marketing company, HomeSMO increases the online
                  conformity of the customers and therefore helps to increase
                  sales and increase profits. It helps to create your brand
                  visibility and increase your business reach, engagement
                  organically. We are the best SMO company in Lucknow.
                </p>
              </div>
            </div>

            {/* Row for WhatsApp Chatbot and Website Development */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* WhatsApp Chatbot Service */}
              <div className="flex flex-col bg-black border-[1px] border-zinc-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-lg md:text-lg font-semibold text-white mb-2">
                  Taking Your Business Ahead with WhatsApp Chatbot
                </h2>
                <p className="text-xs md:text-sm text-gray-400">
                  Best digital marketing company, HomeBusinesses may use Digital
                  Jugglers WhatsApp chatbot services to improve customer
                  experiences, maximize tasks, and drive corporate growth by
                  using the power of automation AI, and personal communication.
                </p>
              </div>

              {/* Website Development Service */}
              <div className="flex flex-col bg-black border-[1px] border-zinc-800 shadow-lg rounded-lg p-6 hover:shadow-xl transition duration-300 ease-in-out">
                <h2 className="text-lg md:text-lg font-semibold text-white mb-2">
                  Taking Your Business Ahead with Website Development
                </h2>
                <p className="text-xs md:text-sm text-gray-400">
                  Best digital marketing company, HomeWebsite development is a
                  way to make people aware of the services and/or products you
                  are offering, and see which of your company’s qualities set it
                  apart from competitors. We are the best Website Development
                  Company in Lucknow.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="relative">
          <img
            src="https://via.placeholder.com/600x400"
            alt="Digital Services"
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-20 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default DigitalServices;
