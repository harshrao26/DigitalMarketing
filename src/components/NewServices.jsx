import React from "react";
import { FaCheck } from "react-icons/fa";
import {
  FaSearch,
  FaDesktop,
  FaUsers,
  FaChartLine,
  FaPaintBrush,
  FaShoppingCart,
  FaMobileAlt,
} from "react-icons/fa";
import InfiniteMarquee from "./InfiniteMarquee";

const NewServices = () => {
  const data = [
    {
      heading: "SEO",
      link: "/seo",
      icon: <FaSearch className="text-yellow-400 text-5xl mb-2" />,
      para: [
        "Optimize your website for search engines.",
        "Increase organic traffic to your site.",
        "Improve search rankings and visibility.",
      ],
    },
    {
      heading: "Web Design",
      link: "/web-design",
      icon: <FaDesktop className="text-blue-400 text-5xl mb-2" />,
      para: [
        "Create responsive and user-friendly designs.",
        "Enhance user experience with creative layouts.",
        "Design tailored to your brand's identity.",
      ],
    },
    {
      heading: "Social Media Management",
      link: "/social-media-management",
      icon: <FaUsers className="text-purple-400 text-5xl mb-2" />,
      para: [
        "Manage your brand's online presence.",
        "Engage effectively with your audience.",
        "Boost reach with targeted strategies.",
      ],
    },
    {
      heading: "Lead Generation",
      link: "/lead-generation",
      icon: <FaChartLine className="text-green-400 text-5xl mb-2" />,
      para: [
        "Generate quality leads for your business.",
        "Increase sales opportunities.",
        "Streamline the lead capture process.",
      ],
    },
    {
      heading: "Graphic Designing",
      link: "/graphic-designing",
      icon: <FaPaintBrush className="text-red-400 text-5xl mb-2" />,
      para: [
        "Create visually appealing graphics.",
        "Enhance branding with unique designs.",
        "Deliver high-quality marketing materials.",
      ],
    },
    {
      heading: "E-commerce Solutions",
      link: "/ecommerce-solutions",
      icon: <FaShoppingCart className="text-orange-400 text-5xl mb-2" />,
      para: [
        "Build and manage online stores.",
        "Enable secure transactions.",
        "Optimize product listings for visibility.",
      ],
    },
    {
      heading: "Application Development",
      link: "/application-development",
      icon: <FaMobileAlt className="text-teal-400 text-5xl mb-2" />,
      para: [
        "Develop custom mobile and web apps.",
        "Ensure seamless user experiences.",
        "Incorporate advanced functionalities.",
      ],
    },
  ];

  return (
    <div className="text-white flex flex-col space-y- px-8 py-8">
      {/* Top Section */}
      {/* <InfiniteMarquee /> */}

      {/* Content Section */}
      <div className="flex  items-center space-y-4">
        <div className="w-1/2"></div>
        <div className="w-1/2">
          <p className="text-start underline text-base py-8">
            CREATING EXPERIENCES THROUGH
          </p>
          <p className="text-4xl font-semibold leading-snug ">
            Digital Services,{" "}
            <span className="text-[#FFD74B] font-semibold">
              a comprehensive <br /> approach
            </span>{" "}
            to the Digital Landscape.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {data.map((service, index) => (
          <div
            key={index}
            className=" rounded-lg p-6 shadow-md hover:shadow-base transition-all ease-in-out hover:shadow-[#3b3621]"
          >
            <div className="flex flex-col ">
              <p className="textxl">{service.icon}</p>
              <h3 className="text-4xl font-semibold  mb-4">
                {service.heading}
              </h3>
            </div>
            <ul className="space-y-2">
              {service.para.map((point, idx) => (
                <li key={idx} className="flex items-start">
                  <FaCheck className="text-yellow-500 mr-2 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewServices;
