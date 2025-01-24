import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import globe1 from "../assets/globe1.gif";

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
        scrub: true, // Makes the animation smooth and tied to the scroll position
      },
    });
  }, []);

  return (
    <div className="overflow-hidden py-16 gap-8 flex flex-col md:flex-row items-center justify-between px-6 md:px-16 bg-black text-white">
      {/* Left Section: Text */}
      <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
        <h2
          ref={textRef}
          className="text-3xl md:text-6xl font-semibold leading-tight transition-all duration-500 text-white"
        >
          Client-Centric Digital Marketing Solutions Tailored for <br />
          <span className="bg-yellow-300 font-semibold px-2 md:px-4">
            Global Success
          </span>
        </h2>
      </div>

      {/* Right Section: Image */}
      <div className="md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
        <img src={globe1} alt="Globe" className="h-48 md:h-96 object-contain" />
      </div>
    </div>
  );
};

export default Marquee;
