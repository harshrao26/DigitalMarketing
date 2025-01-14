import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import HeroServices from "../components/HeroServices.jsx";
import DifferentiatorsSection from "../components/DifferentiatorsSection.jsx";
import DigitalServices from "../components/DigitalServices.jsx";
import PRAgencySection from "../components/PRAgencySection.jsx";
import BlogSection from "../components/BlogSection.jsx";
import AdvertisingSection from "../components/AdvertisingSection.jsx";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HeroServices />
      <DifferentiatorsSection />
      <DigitalServices />
      <PRAgencySection />
      <AdvertisingSection />

      <BlogSection />
    </div>
  );
};

export default Home;
