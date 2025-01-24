import React, { useEffect, useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import Hero from "../assets/hero.gif";
import herovideo from "../assets/herovideo.mp4";

const HeroSection = () => {
  const headingRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRefs = useRef([]);

  useEffect(() => {
    // Animate heading words
    const headingWords = headingRef.current.querySelectorAll("span");
    gsap.fromTo(
      headingWords,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.6,
        ease: "power2.out",
      }
    );

    // Animate paragraph
    gsap.fromTo(
      paragraphRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, delay: 1, duration: 0.8, ease: "power2.out" }
    );

    // Animate buttons
    gsap.fromTo(
      buttonRefs.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        stagger: 0.3,
        delay: 1.5,
        duration: 0.6,
        ease: "elastic.out(1, 0.75)",
      }
    );
  }, []);

  return (
    <section
      className="bg-gradient-to-l h-screen pt-10 to-black from-[#ffc8022f] flex items-center justify-center text-white overflow-x-hidden"
      // style={{
      //   backgroundImage: `url(${Hero})`,
      //   backgroundSize: "contain",
      //   backgroundRepeat: "no-repeat",
      //   backgroundPosition: " center",
      // }}
    >
          <video
        className="absolute top-0 left-0 w-full h-full object-cover "
        src={herovideo}
        autoPlay
        loop
        muted
        playsInline
      />

      <div
        className="absolute top-0 left-0 w-full h-full object-cover bg-[#000000d8] "
      
      >

      </div>
      
      {/* Content */}
      <div className="container mx-auto flex flex-col items-center justify-center px-6 lg:px-16">
        {/* Main Heading */}
        <h1
          ref={headingRef}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-8xl font-semibold text-center max-w-6xl mb-6"
        >
          {`Global Digital Website Marketing Services - SEO, PPC, & Social Media`
            .split(" ")
            .map((word, index) => (
              <span key={index} className="inline-block mr-2">
                {word}
              </span>
            ))}
        </h1>

        {/* Paragraph */}
        <p
          ref={paragraphRef}
          className="text-xs sm:text-sm md:text-lg mb-6 text-center max-w-8xl"
        >
          Your trusted partner in global digital marketing. Expert in SEO, PPC,
          social media management, and content marketing. Elevate your brand
          worldwide!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            ref={(el) => (buttonRefs.current[0] = el)}
            className="bg-[#FFD74B] text-black px-6 py-3 rounded-full font-semibold shadow-md hover:scale-105 transition-transform duration-300"
          >
            Get Started
          </button>
          <button
            ref={(el) => (buttonRefs.current[1] = el)}
            className="bg-transparent border-2 border-[#FFD74B] px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-[#FFD74B] hover:text-black transition-all duration-300"
          >
            Learn More <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
