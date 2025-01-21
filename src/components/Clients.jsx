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
        scrub: true, // Makes the animation smooth and tied to the scroll position
      },
    });
  }, []);

  return (
    <div className="overflow-hidden py-16 gap-16 flex flex-col justify-around px-8 bg-white">
      <div>
        <div className="flex items-end">
          <h2
            ref={textRef}
            className="text-6xl font-semibold max-w-xl leading-tight transition-all duration-500"
          >
            Client-Centric Digital Marketing Solutions Tailored for{" "} <br />
            <span className="bg-yellow-300 font-semibold px-4">
              {" "}
              Global Success
            </span>
          </h2>
          <p className="text-2xl uppercase border-b-2  border-[#FFD74B] hover:scale-110 transition-all ease-in-out ml-4">
            Learn More About Us
          </p>
        </div>
      </div>
      <div className="relative flex animate-marquee space-x-6">
        <img src={c1} alt="Image 1" className="" />
        <img src={c2} alt="Image 2" className="" />
        <img src={c3} alt="Image 3" className="" />
        <img src={c1} alt="Image 1" className="" />
        <img src={c2} alt="Image 2" className="" />
        <img src={c3} alt="Image 3" className="" />
        <img src={c1} alt="Image 1" className="" />
        <img src={c2} alt="Image 2" className="" />
        <img src={c3} alt="Image 3" className="" />
        <img src={c1} alt="Image 1" className="" />
        <img src={c2} alt="Image 2" className="" />
        <img src={c3} alt="Image 3" className="" />
      </div>
    </div>
  );
};

export default Marquee;
