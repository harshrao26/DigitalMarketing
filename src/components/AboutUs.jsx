import React, {useEffect} from 'react'
import EveryPageHero from "./EveryPageHero";

const AboutUs = () => {
      useEffect(() => {
    // Ensure scrolling to the top of the document when the component is mounted
    window.scrollTo({
      top: 0,
      behavior: "smooth", // You can use "auto" for instant scroll
    });

    // As a fallback, scroll the root element
    document.documentElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <EveryPageHero text="About Us" />

        <div className="px-16   mt- bg-white py-16">

        <p className="text-4xl">
         Fueling Your Brand's  <br /> with{" "}
          <span className="font-semibold">Digital Revolution!</span>
        </p>
        <p>The best business consultancy in India</p>
        <br />
        <p>
 We are a dynamic digital marketing agency focused on delivering innovative solutions to elevate your online presence. With a passion for driving results, we specialize in SEO, social media marketing, paid advertising, content creation, and more. Our team is committed to providing tailored strategies that help your business grow and succeed in the digital world.
        </p>
      </div>
    </div>
  )
}

export default AboutUs