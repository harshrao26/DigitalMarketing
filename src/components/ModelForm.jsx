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

export default function MarketingForm() {
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
      const now = new Date();
      const offset = 330; // 5 hours 30 mins in minutes
      const istDate = new Date(now.getTime() + offset * 60 * 1000);
      const timestamp = istDate.toISOString().replace("T", " ").split(".")[0];

      const dataToSend = {
        ...formData,
        timestamp,
      };

      const response = await fetch(
        "https://hook.eu2.make.com/ilw1pnibxprrp7myykfsy1ikekvuwvo7",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({ name: "", email: "", contact: "", service: "" });
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-950 py-10 px-6 min-h-screen flex items-center justify-center">
      <div className="flex flex-col lg:flex-row bg-white shadow-xl rounded-md max-w-5xl w-full my-10">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <img
            src={inq}
            alt="Marketing"
            className="h-72 lg:h-96 w-auto object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2 p-6 lg:p-10">
          <form onSubmit={handleSubmit} className="space-y-5">
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 text-center">
              Request a Service
            </h2>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 px-3 py-2 w-full rounded-md border border-gray-300 focus:ring-[#ffd74b] focus:border-[#ffd74b]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 px-3 py-2 w-full rounded-md border border-gray-300 focus:ring-[#ffd74b] focus:border-[#ffd74b]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Contact Number
              </label>
              <input
                type="tel"
                name="contact"
                placeholder="Enter your contact number"
                value={formData.contact}
                onChange={handleChange}
                required
                className="mt-1 px-3 py-2 w-full rounded-md border border-gray-300 focus:ring-[#ffd74b] focus:border-[#ffd74b]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Type of Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="mt-1 px-3 py-2 w-full rounded-md border border-gray-300 bg-white focus:ring-[#ffd74b] focus:border-[#ffd74b]"
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service, index) => (
                  <option key={index} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="submit"
              className="w-full py-2 rounded-md bg-black text-white font-semibold hover:bg-[#ffd74b] hover:text-black transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
