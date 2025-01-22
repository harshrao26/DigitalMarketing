import React from "react";
import work from "../assets/work.png";
import work1 from "../assets/work1.png";
import work2 from "../assets/work2.png";
import work4 from "../assets/work4.png";
import work6 from "../assets/work6.png";
import { FiChevronDown } from "react-icons/fi";

const CaseStudy = () => {
  const data = [
    {
      img: work,
      heading: "Project Alpha",
      para: "A revolutionary project focused on delivering outstanding performance.",
    },
    {
      img: work1,
      heading: "Innovative Design",
      para: "Crafting sleek and modern solutions tailored to our clients' needs.",
    },
    {
      img: work2,
      heading: "Sustainable Growth",
      para: "Ensuring sustainable growth strategies for long-term success.",
    },
    {
      img: work4,
      heading: "Cutting-Edge Technology",
      para: "Leveraging the latest technology to drive results.",
    },
    {
      img: work6,
      heading: "Customer Excellence",
      para: "Delivering exceptional results by focusing on customer satisfaction.",
    },
  ];

  return (
    <div className="bg-white pl-16 py-16 flex gap-8 h-screen overflow-hidden">
      {/* Left Section */}
      <div className="w-1/2 sticky top-16 left-0 z-10 h-full flex flex-col gap-4 pr-8">
        <p className="text-lg">Our Works</p>
        <p className="text-6xl font-semibold max-w-xl transition-all duration-500">
          Case Studies, a selection of successful projects.
        </p>
        <p className="max-w-md">
          We always put our clients first to deliver our best time after time.
          Below is some of our proudest work.
        </p>
        <p className="text-2xl uppercase underline transition-all ease-in-out cursor-pointer">
          View All Case Study
        </p>
      </div>

      {/* Right Section */}
      <div className="overflow-hidden h-screen bg-white flex justify-center items-center">
        {/* Scrollable Section */}
        <div className="overflow-y-auto w-[50vw] h-full scrollbar-hide relative">
          {/* Scroll Down Indicator */}
          <div className="absolute top-4 left-1/2 transform -translate-x-1/ z-10 animate-bounce">
            <p className="flex items-center text-xl font-semibold">
              Scroll Here <FiChevronDown className="text-3xl text-black" />
            </p>
          </div>

          {/* Scrollable Content */}
          <div className="grid grid-cols-1 gap-8 mt-12">
            {data.map((val, key) => (
              <div
                key={key}
                className="p-4 rounded-lg  transition-transform transform"
              >
                <img
                  src={val.img}
                  alt={val.heading}
                  className="rounded-md w-full object-cover"
                />
                <h3 className="text-xl font-semibold mt-4 hover:underline hover:ml-4 transition-all ease-in-out">
                  {val.heading}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{val.para}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
