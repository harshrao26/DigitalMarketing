import React from "react";
import { Link } from "react-router-dom";
const LetsTalk = () => {
  return (
    <div className="text-white bg-black py-16 sm:py-20 max-w-8xl mx-auto px-6 sm:px-8 lg:px-16 flex flex-col md:flex-row gap-8 md:gap-16">
      {/* Left Section */}
      <div className="md:w-3/4 flex flex-col gap-6">
        <p className="text-start underline text-base">Let’s work together.</p>
        <p className="text-3xl sm:text-4xl font-semibold leading-snug">
          Wanna get in touch?{" "}
          <span className="text-[#FFD74B] font-semibold">Let’s talk</span>
        </p>
        <p className="text-base sm:text-lg">
          We offer exceptional services tailored to a wide range of businesses
          that want to improve the effectiveness of their digital marketing
          activities with discernible returns on investment. We aim to get back
          to all enquiries rapidly.
        </p>
        <p className="text-lg sm:text-xl">
          Interested in working with us?{" "}
          <span className="font-semibold text-[#FFD74B]">
            <Link to="/contact">Contact Us</Link>
          </span>
        </p>
      </div>

      {/* Right Section */}
      <div className="md:w-1/4 flex flex-col gap-6">
        <p className="text-base sm:text-lg">
          Fill in our simple quotation request form for an indication of just
          how cost-effective we can be. We aim to have pricing available to
          review within 24 hours.
        </p>
        <button className="text-left text-2xl sm:text-4xl font-semibold leading-tight transition-all duration-500 hover:text-[#ffd74b]">
          <Link to="/contact">Start A Project</Link>
        </button>
      </div>
    </div>
  );
};

export default LetsTalk;
