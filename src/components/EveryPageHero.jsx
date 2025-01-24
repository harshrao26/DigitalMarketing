import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

const EveryPageHero = ({ text }) => {
  return (
    <div>
      <div className="h-80 bg-black pt20 w-full flex flex-col  justify-center pl-16 ">
        <h2>
          <Link to="/">
            <p className="text-base text-white flex items-center gap-1">
              {" "}
              <AiOutlineHome /> Home
            </p>
          </Link>
          <p className="font-bold text-4xl text-white">{text}</p>
        </h2>
      </div>
    </div>
  );
};

export default EveryPageHero;
