import React from "react";
import c1 from '../assets/c1.jpg'
import c2 from '../assets/c2.jpg'
import c3 from '../assets/c3.jpg'
const Marquee = () => {
  return (
    <div className="overflow-hidden  py-10">
      <div className="relative flex animate-marquee space-x-6">
        <img
          src={c1}
          alt="Image 1"
          className=""
        />
        <img
          src={c2}
          alt="Image 2"
          className=""
        />
        <img
          src={c3}
          alt="Image 3"
          className=""
        />
        <img
          src={c1}
          alt="Image 1"
          className=""
        />
        <img
          src={c2}
          alt="Image 2"
          className=""
        />
        <img
          src={c3}
          alt="Image 3"
          className=""
        />
        <img
          src={c1}
          alt="Image 1"
          className=""
        />
        <img
          src={c2}
          alt="Image 2"
          className=""
        />
        <img
          src={c3}
          alt="Image 3"
          className=""
        />
        <img
          src={c1}
          alt="Image 1"
          className=""
        />
        <img
          src={c2}
          alt="Image 2"
          className=""
        />
        <img
          src={c3}
          alt="Image 3"
          className=""
        />
       
      </div>
    </div>
  );
};

export default Marquee;
