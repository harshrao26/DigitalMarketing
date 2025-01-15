import React from "react";
import { FaRegHandshake, FaUsers, FaClock, FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 to-yellow-500 flex flex-col items-center justify-center pt-20 text-white">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full bg-opacity-30"></div>

      {/* Content */}
      <div className="relative container mx-auto flex flex-col items-center justify-center text-center py-20 px-6 lg:px-16">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fadeInUp">
          Your Digital Marketing Partner in Lucknow
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 animate-fadeInUp delay-200">
          We provide all the digital solutions to help your business grow and
          thrive online.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold shadow-md hover:scale-105 transition-transform duration-300">
            Get Started
          </button>
          <button className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 hover:bg-white hover:text-blue-600 transition-all duration-300">
            Learn More <FaArrowRight />
          </button>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fadeInUp delay-400">
          {/* Exceptional Service */}
          <div className="flex flex-col items-center gap-4 text-center">
            <FaRegHandshake className="text-5xl sm:text-6xl rounded-full font-extralight text-black p-2 bg-white" />
            <h3 className="text-base sm:text-lg font-semibold">
              Exceptional Service
            </h3>
            <p className="text-sm sm:text-base text-gray-100">
              We go above and beyond to exceed your expectations.
            </p>
          </div>

          {/* Great Teamwork */}
          <div className="flex flex-col items-center gap-4 text-center">
            <FaUsers className="text-5xl sm:text-6xl rounded-full font-extralight text-black p-2 bg-white" />
            <h3 className="text-base sm:text-lg font-semibold">
              Great Teamwork
            </h3>
            <p className="text-sm sm:text-base text-gray-100">
              Our collaborative approach ensures outstanding results.
            </p>
          </div>

          {/* Deliver On Time */}
          <div className="flex flex-col items-center gap-4 text-center">
            <FaClock className="text-5xl sm:text-6xl rounded-full font-extralight text-black p-2 bg-white" />
            <h3 className="text-base sm:text-lg font-semibold">
              Deliver On Time
            </h3>
            <p className="text-sm sm:text-base text-gray-100">
              We meet deadlines without compromising on quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
