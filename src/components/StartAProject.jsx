import React, { useState } from "react";

const StartAProject = () => {
  const [circlePosition, setCirclePosition] = useState({ x: 0, y: 0 });
  const [showCircle, setShowCircle] = useState(false);

  const handleMouseMove = (e) => {
    setCirclePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = () => {
    setShowCircle(true);
  };

  const handleMouseLeave = () => {
    setShowCircle(false);
  };

  return (
    <div
      className="text-white px-4 md:px-16 h-96 md:h-[28rem] flex flex-col justify-center relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showCircle && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "80px", // Smaller size for mobile
            height: "80px", // Smaller size for mobile
            borderRadius: "50%",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            pointerEvents: "none",
            fontSize: "14px", // Smaller font size for mobile
            fontWeight: "bold",
            zIndex: 10,
            transform: `translate(${circlePosition.x - 40}px, ${
              circlePosition.y - 40
            }px)`, // Offset by half the circle's size
            transition: "transform 0.2s ease-out",
          }}
        >
          Start
        </div>
      )}
      <div>
        <button className="text-4xl md:text-6xl font-semibold max-w-full md:max-w-xl leading-tight transition-all duration-500 mb-4 hover:scale-105 hover:text-[#ffd74b]">
          Start A Project
        </button>
        <p className="max-w-full md:max-w-xl text-base md:text-xl">
          Do you have a digital marketing objective you’d like to achieve? Are
          you ready to find out how Bird can help to build your business online?
          If so, make contact with us today…
        </p>
      </div>
    </div>
  );
};

export default StartAProject;
