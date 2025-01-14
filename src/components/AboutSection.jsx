import React from "react";

const HeroSection = () => {
  return (
    <section className="relative bg-white text-gray-800">
      {/* Container */}
      <div className="">
        {/* Left Content */}
        <div className="flex">
          <div className="">
            <img
              src="https://via.placeholder.com/400x300"
              alt="Marketing Team"
              className="w-64 h-48 md:w-96 md:h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h1 className=" font-extrabold text-yellow-500 mb-4">
              We Are the Best Digital Marketing Company in Lucknow
            </h1>
            <p className=" text-gray-600 mb-6 leading-relaxed">
              Looking for the best digital marketing company in Lucknow? Your
              search ends here! We specialize in delivering comprehensive
              digital solutions tailored to your business needs. From search
              engine optimization (SEO) to social media marketing, pay-per-click
              (PPC) advertising, and content creation, we ensure your brand gets
              the visibility and recognition it deserves.
            </p>
            <p className=" text-gray-600 mb-6 leading-relaxed">
              Our team of experienced professionals understands the local market
              dynamics and combines innovative strategies with proven techniques
              to drive measurable results. Whether you’re a startup or an
              established business, we are committed to helping you grow and
              stay ahead of the competition.
            </p>
          </div>
          <div className=" ">
            <img
              src="https://via.placeholder.com/400x300"
              alt="SEO Team"
              className="w-64 h-48 md:w-96 md:h-72 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

      </div>


    </section>
  );
};

export default HeroSection;
