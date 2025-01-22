import React from 'react'

const LetsTalk = () => {
  return (
    <div className="text-white bg-black py-20 max-w-8xl mx-auto px-4 sm:px-8 lg:px-16 flex">
      <div className="flex  items-center space-y-4">
        <div className="w-3/4 gap-8 flex flex-col">
          <p className="text-start underline text-base ">
            Let’s work together .
          </p>
          <p className="text-4xl font-semibold leading-snug ">
            Wanna get in touch?{" "}
            <span className="text-[#FFD74B] font-semibold">
              Let’s talk <br />
            </span>{" "}
          </p>
          <p>
            We offer exceptional services tailored to a wide range of businesses
            that want to improve the effectiveness of their digital marketing
            activities with discernible returns on investment. We aim to get
            back to all enquiries rapidly.
          </p>
          <p className="text-xl">
            Interested in working with us?{" "}
            <span className="font-semibold text-xl text-[#FFD74B]  ">
              Contact us
            </span>
          </p>
        </div>
        <div className="w-1/4 flex flex-col gap-4">
          <p>
            Fill in our simple quotation request form for an indication of just
            how cost-effective we can be. We aim to have pricing available to
            review within 24 hours.
          </p>
          <button className="text-left text-4xl font-semibold leading-tight transition-all duration-500  hover:text-[#ffd74b]">
            Start A Project
          </button>
        </div>
      </div>
    </div>
  );
}

export default LetsTalk