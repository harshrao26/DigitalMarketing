import React, { useEffect, useRef } from "react";
import c1 from "../assets/c1.jpg";
import c2 from "../assets/c2.jpg";
import c3 from "../assets/c3.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import globe from '../assets/globe.gif';
import globe1 from '../assets/globe1.gif';
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
        // end: "bottom center", // Animation ends when the text leaves the viewport
        scrub: true, // Makes the animation smooth and tied to the scroll position
      },
    });
  }, []);

  return (
    <div className="overflow-hidden py-16 gap-16 flex flex-col justify-around px-16 bg-black text-white">
      <div className="flex items-end">
        <div className="flex items-end">
          <h2
            ref={textRef}
            className="text-6xl font-semibold max-w-xl leading-tight transition-all duration-500 text-white"
          >
            Client-Centric Digital Marketing Solutions Tailored for <br />
            <span className="bg-yellow-300 font-semibold px-4">
              {" "}
              Global Success
            </span>
          </h2>
         
        </div>
        <div className="w-1/2 flex items-center justify-center">
            <img src={globe1} alt="" className="h-96" />
        </div>
      </div>
    
    </div>
  );
};

export default Marquee;
