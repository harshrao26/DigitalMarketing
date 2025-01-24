import React, { useEffect } from "react";
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
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray(".service-card").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 75,
        duration: 1,
        scrollTrigger: {
          trigger: card,
          start: "top 90%",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="text-white flex flex-col px-4 md:px-16 py-8">
      {/* Top Section */}
      <div className="flex flex-col-reverse md:flex-row items-center space-y-8 md:space-y-0">
        <div className="w-full md:w-1/2">
          <p className="text-start underline text-base py-4">
            CREATING EXPERIENCES THROUGH
          </p>
          <p className="text-3xl md:text-4xl font-semibold leading-snug">
            Digital Services,{" "}
            <span className="text-[#FFD74B] font-semibold">
              a comprehensive <br /> approach
            </span>{" "}
            to the Digital Landscape.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data.map((service, index) => (
          <div
            key={index}
            className="service-card rounded-[20px] py-6 shadow-md hover:shadow-lg transition-all ease-in-out hover:shadow-[#3b362163] "
          >
            <div className="flex flex-col">
              <p className="text-xl">{service.icon}</p>
              <h3 className="text-2xl font-semibold mb-4">{service.heading}</h3>
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
