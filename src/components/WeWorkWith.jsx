import React from "react";

const WeWorkWith = () => {
  const data = [
    "Financial Services",
    "Manufacturing",
    "Construction & Building Services",
    "Retail & E-commerce",
    "Fashion",
    "Adult",
    "Automotive",
    "Casino & Gambling",
    "Energy",
    "Technology & IT",
    "Cryptocurrency",
    "Insurance",
    "Public Sector",
    "Hospitality, Travel & Tourism",
    "SaaS & Software",
    "Small Business",
    "Transportation",
    "Education",
    "Law & Legal",
    "Pharmaceutical",
    "Dentist",
    "Property & Real Estate",
    "Healthcare",
    "Accounts & CPA",
  ];

  return (
    <div className="h-auto bg-white flex flex-col px-4 sm:px-8 lg:px-16 justify-center max-w-8xl mx-auto py-16">
      <div className="mb-6">
        <h2 className="text-4xl font-bold mb-2">Industries We Work With</h2>
        <p className="text-gray-600">
          At Bird, we extend our digital marketing expertise across a diverse
          range of industries, tailoring strategies to meet the unique demands
          and opportunities each sector presents.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        {data.map((item, index) => (
          <div key={index} className="">
            <p className="text-gray-800">● {item}</p>
          </div>
        ))}
      </div>
      <p className="text-gray-600">
        We can also cater for a range of other industries too, contact us to
        find out more.
      </p>
    </div>
  );
};

export default WeWorkWith;
