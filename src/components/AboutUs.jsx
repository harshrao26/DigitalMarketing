import React, {useEffect} from 'react'
import EveryPageHero from "./EveryPageHero";
import { FaChartLine, FaClipboardCheck, FaCogs, FaLeaf } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const teamMembers = [
    { name: "Member 1", image: "/path/to/image1.jpg" },
    { name: "Member 2", image: "/path/to/image2.jpg" },
    { name: "Member 1", image: "/path/to/image1.jpg" },
    { name: "Member 2", image: "/path/to/image2.jpg" },
    { name: "Member 1", image: "/path/to/image1.jpg" },
    { name: "Member 2", image: "/path/to/image2.jpg" },
    // ... add more members
  ];
      useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="">
      <EveryPageHero
        text="About Our Team"
        para="Our priority is to deliver an exceptional service and our main focus is on your ROI and subsequently our success is based upon your success."
      />

      <div className="px-16   bg-white py-16">
        <p className="text-4xl">
          Fueling Your Brand's <br /> with{" "}
          <span className="font-semibold">Digital Revolution!</span>
        </p>
        <p>The best business consultancy in India</p>
        <br />
        <p>
          We are a dynamic digital marketing agency focused on delivering
          innovative solutions to elevate your online presence. With a passion
          for driving results, we specialize in SEO, social media marketing,
          paid advertising, content creation, and more. Our team is committed to
          providing tailored strategies that help your business grow and succeed
          in the digital world.
        </p>
      </div>
      <div className="flex px-16 text-white">
        {/* Header */}
        <div className="flex items-ceter justify-center flex-col">
          <h4 className="text-sm  uppercase mb-1">Our Ethos</h4>
          <h1 className="text-5xl capitalize font-bold mb-2">
            Our <span className="text-yellow-500">unique</span> operating
            philosophy
          </h1>
          <p className=" my-8">
            As an extremely principled company, we stand by the following core
            principles.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-4 my-16">
          {/* ROI Focused */}
          <div>
            <div className="flex items-center mb-2 space-x-2 justify-between">
              <h2 className="text-3xl font-semibold">ROI Focused</h2>
              <FaChartLine className="text-yellow-500" size={60} />
            </div>
            <p>We succeed if you succeed—ROI is our top priority.</p>
          </div>

          <hr className="border-yellow-300" />

          {/* Best Practices */}
          <div>
            <div className="flex items-center mb-2 space-x-2 justify-between">
              <h2 className="text-3xl font-semibold">Best Practices</h2>
              <FaClipboardCheck className="text-yellow-500" size={60} />
            </div>
            <p>
              We standardize best practices, ensuring consistent, high-quality
              service.
            </p>
          </div>

          <hr className="border-yellow-300" />

          {/* Efficient */}
          <div>
            <div className="flex items-center mb-2 space-x-2 justify-between">
              <h2 className="text-3xl font-semibold">Efficient</h2>
              <FaCogs className="text-yellow-500" size={60} />
            </div>
            <p>
              Our tested formulas deliver more value without compromising
              quality.
            </p>
          </div>

          <hr className="border-yellow-300" />

          {/* Conscious */}
          <div>
            <div className="flex items-center justify-between mb-2 space-x-2">
              <h2 className="text-3xl font-semibold">Conscious</h2>
              <FaLeaf className="text-yellow-500" size={60} />
            </div>
            <p>
              We use green infrastructure and constantly review processes to
              minimize impact.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-white text-black py-12 px-16">
        <div className=" mx-auto">
          <h4 className="uppercase text-base text-yellow-500 tracking-wider mb-2">
            Meet the Team
          </h4>
          <h2 className="text-5xl font-bold mb-2">
            Our Team, We call ourselves{" "}
            <span className="text-yellow-500">The Flock</span>
          </h2>
          <p className=" text-gray-800">
            A deliberately small but effective team, bonded by a powerful
            output.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 py-16">
            {teamMembers.map((member, i) => (
              <div key={i} className="flex flex-col items-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full mb-2 w-32 h-32 object-cover"
                />
                <p className="text-sm">{member.name}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-2">
          Join the Team 
          <span className="text-yellow-500"> The Flock</span>
        </h2>
        <p className="mb-8 text-gray-800">
          We are always looking for talented people to join the team. Scan our
          careers page to find out about working for us and see if there is an
          opportunity to become part of the flock.
        </p>
        <p className="text- text-2xl">
          Wanna get in touch?{" "}
          <Link to="/career" className="underline text-[#] scale-105">
            See Career
          </Link>
        </p>
      </section>
    </div>
  );
}

export default AboutUs