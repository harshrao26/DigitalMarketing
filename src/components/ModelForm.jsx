import React, { useState } from "react";
import inq from "../assets/inq.png";

const services = [
  "Application Development",
  "Yellow Tick Verification",
  "Brand Identity",
  "Branding Videos",
  "Customized Software",
  "Digital Marketing",
  "Digital Media Election Campaign Management",
  "Digital PR",
  "E-Commerce Store Management",
  "E-commerce Solutions",
  "Graphic Designing",
  "Image Branding",
  "Influencer Marketing",
  "Lead Generation",
  "Metaverse",
  "Outdoor Marketing",
  "PPC/CPC Advertising",
  "PR Activity",
  "Search Engine Optimization",
  "Social Media Management",
  "Social Media Marketing",
  "Virtual Reality/Augmented Reality",
  "Web Development",
  "WhatsApp Chatbot",
  "Whiteboard Animation",
  "Wikipedia Page Creation",
  "YouTube Marketing",
].sort();

const MarketingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    service: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send form data to the webhook
      const response = await fetch(
        "https://hook.eu2.make.com/ilw1pnibxprrp7myykfsy1ikekvuwvo7",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        console.log("Form data sent:", formData);
        setFormData({ name: "", email: "", contact: "", service: "" }); // Reset form
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="flex flex-col lg:flex-row  bg-white">
      {/* Left Side Image */}
      <div className="w-full lg:w-1/2 bg-gray-50 flex items-center justify-center px-4 ">
        <img
          src={inq}
          alt="Marketing Illustration"
          className="h-72 lg:h-96 max-w-full object-contain"
        />
      </div>

      {/* Right Side Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center px-4 lg:px-12 ">
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center">
            Request a Service
          </h2>

          {/* Name Input */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#ffd74b] focus:border-[#ffd74b] sm:text-sm"
            />
          </div>

          {/* Email Input */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#ffd74b] focus:border-[#ffd74b] sm:text-sm"
            />
          </div>

          {/* Contact Number Input */}
          <div>
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              placeholder="Enter your contact number"
              value={formData.contact}
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#ffd74b] focus:border-[#ffd74b] sm:text-sm"
            />
          </div>

          {/* Service Dropdown */}
          <div>
            <label
              htmlFor="service"
              className="block text-sm font-medium text-gray-700"
            >
              Type of Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="mt-1 px-3 py-2 block w-full rounded-md border-gray-300 shadow-sm focus:ring-[#ffd74b] focus:border-[#ffd74b] sm:text-sm"
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((service, index) => (
                <option key={index} value={service}  className="text-black">
                  {service}
                </option>
              ))}
            </select>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 px-4 rounded-md shadow-sm hover:bg-[#ffd74b] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd74b]"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MarketingForm;
