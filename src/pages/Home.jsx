import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import AboutSection from "../components/AboutSection.jsx";
import HeroServices from "../components/HeroServices.jsx";
import DifferentiatorsSection from "../components/DifferentiatorsSection.jsx";
import DigitalServices from "../components/DigitalServices.jsx";
import PRAgencySection from "../components/PRAgencySection.jsx";
import HeroBlog from "../components/HeroBlog.jsx";
import TestimonialsMarquee from "../components/TestimonialsMarquee.jsx";
import HeroFooter from "../components/HeroFooter.jsx";
import AdvertisingSection from "../components/AdvertisingSection.jsx";
import DigitalMarketingTraining from "../components/DigitalMarketingTraining.jsx";
import Clients from "../components/Clients.jsx";
const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <HeroServices />
      <DifferentiatorsSection />
      <DigitalServices />
      <PRAgencySection />
      <DigitalMarketingTraining />
      <AdvertisingSection />

      <HeroFooter />
      <TestimonialsMarquee />
      <HeroBlog />

      <Clients />
    </div>
  );
};

export default Home;
