import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const EveryPageHero = ({ text, para }) => {
  return (
    <div>
      <div className="h-96 bg-black pt20 w-full flex flex-col  justify-center pl-16 ">
        <h2>
          <Link to="/">
            <p className="text-base text-white flex items-center gap-1">
              {" "}
              <AiOutlineHome /> Home
            </p>
          </Link>
          <p className="font-bold text-5xl text-white">{text}</p>
          <p className="max-w-2xl my-4 text-white">{para}</p>
          <p className="text-white text-2xl">
            Wanna get in touch?{" "}
            <Link to="/contact" className="underline text-[#FFD74B] scale-105">Let’s talk</Link>
          </p>
        </h2>
      </div>
    </div>
  );
};

export default EveryPageHero;
