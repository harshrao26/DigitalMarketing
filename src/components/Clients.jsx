import React, { useEffect, useRef } from "react";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP ScrollTrigger animation for text color
    gsap.to(textRef.current, {
      color: "#000000", // Darken text color
      scrollTrigger: {
        trigger: textRef.current,
        start: "top center", // Animation starts when the text enters the viewport
        end: "bottom center", // Animation ends when the text leaves the viewport
        scrub: true, // Smooth animation tied to scroll
      },
    });
  }, []);

  return (
    <div className="overflow-hidden py-16 gap-16 flex flex-col justify-around px-4 md:px-8 lg:px-16 bg-white">
      {/* Text Section */}
      <div>
        <div className="flex flex-col md:flex-row items-start md:items-end">
          <h2
            ref={textRef}
            className="text-3xl md:text-5xl lg:text-6xl font-semibold max-w-xl leading-tight transition-all duration-500"
          >
            Client-Centric Digital Marketing Solutions Tailored for <br />
            <span className="bg-yellow-300 font-semibold px-4">
              Global Success
            </span>
          </h2>
          <p className="text-base md:text-lg lg:text-2xl uppercase border-b-2 border-[#FFD74B] hover:scale-110 transition-all ease-in-out mt-4 md:mt-0 md:ml-4">
            Learn More About Us
          </p>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="relative flex space-x-6 animate-marquee">
        {[c1, c2, c3, c1, c2, c3, c1, c2, c3].map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="  object-cover "
          />
        ))}
      </div>

      {/* Additional CSS for Marquee */}
      <style jsx>{`
        .animate-marquee {
          animation: marquee 10s linear infinite;
        }
        @keyframes marquee {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
};

export default Marquee;
