import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import heroimg from '../assets/heroimg.png'
import sm from '../assets/sm.png'
const HeroSection = () => {
  return (
    <section className="bg-white relative flex items-center justify-center h-screen">
      <div className="container mx-auto flex flex-col-reverse md:flex-row items-center px-4 py-12 md:py-20 gap-8">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-sembold text-[#1C2F36] leading-tight">
            Empowering Your Business with <br />
            <span className="text-[#FFC802]">
              Cutting-Edge Digital Marketing Solutions
            </span>
          </h1>
          <p className="mt-4 text-gray-600">
            At Nextwave, we bring together innovation, strategy, and creativity
            to deliver personalized digital marketing solutions that drive real
            results.
          </p>
          <div className="mt-6 flex gap-4 text-sm">
            <Link
              to="/services"
              className="px-6 py-2 transition-all ease-in-out bg-[#FFC802] text-white rounded-full  shadow-md hover:bg-[#FFC802]"
            >
              Get Started
            </Link>
            <Link
              to="/about"
              className="px-6 py-2 transition-all ease-in-out border border-[#FFC802] text-[#FFC802] rounded-full  hover:bg-[#FFC802] hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center relative">
          <img
            src={heroimg}
            alt="Marketing Solutions"
            className="w-80 md:w-96 rounded-lg"
          />
          {/* Icons Overlay */}
          <div className="absolute bottom-0 right-4 flex flex-col  items-center gap-3 bg-white shadow-lg px-8 py-4 rounded-xl">
            <p>Advertising Plateform</p>
            <p className="flex gap-2">
              <img src={sm} alt="" className="h-8" />
            </p>
          </div>
          {/* Chart Overlay */}
          {/* <div className="absolute bottom-8 right-8 bg-[#FFC802] p-4 rounded-lg shadow-lg">
            <p className="text-gray-700 font-medium">Segmentation</p>
            <div className="w-24 h-16 bg-[#FFC802] rounded"></div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;