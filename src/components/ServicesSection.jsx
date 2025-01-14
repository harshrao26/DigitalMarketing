import React from "react";
import Card from "./Card";

// Sample data from JSON
const services = [
  {
    title: "WhatsApp Chatbot",
    description:
      "Businesses may use Digital Jugglers WhatsApp chatbot services to improve customer experiences.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Digital Marketing",
    description:
      "Provides businesses collaboration friendly environment to attract new possible prospects.",
    image:
      "https://digitaljugglers.com/wp-content/uploads/2020/11/Outdoor-Slide.png",
  },
  {
    title: "Outdoor Marketing",
    description:
      "Take advantage of OOH Media to take spread message quickly to specific audience on the move.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Social Media Management",
    description:
      "Relevant tools facilitate authenticity, encourage audience engagement, generate media coverage.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Search Engine Optimization",
    description:
      "Majority internet users’ click on the first five links on Google, be one of them.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Lead Generation",
    description:
      "Generating lead on digital media is a fast and effective tool with high conversion rates which brings new customers.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Image Branding",
    description:
      "A strong brand image equals to more customers recognizing your brand.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Graphic Designing",
    description: "With graphic designing create impressive marketing material.",
    image: "https://digitaljugglers.com/wp-content/uploads/2020/03/PPC-CPC.jpg",
  },
  {
    title: "PPC/CPC Advertising",
    description:
      "Want to boost your growth? Pay-per-click (PPC) is your best choice.",
    image: "https://digitaljugglers.com/wp-content/uploads/2020/03/PPC-CPC.jpg",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Sound marketing strategies can help build brand awareness, drive customer loyalty.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Branding Videos",
    description:
      "Videos are a passive and reliable way to build your brand in digital era.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "YouTube Marketing",
    description:
      "Video marketing has become a growing and dominating trend, globally.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Wikipedia Page Creation",
    description:
      "Online encyclopedia accessed by 500 million unique visitors in 250 languages.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Blue Tick Verification",
    description:
      "Now you can get the blue tick in front of your brand name on social media.",
    image:
      "https://digitaljugglers.com/wp-content/uploads/2020/03/Blue-tick.jpg",
  },
  {
    title: "Brand Identity",
    description:
      "Consistency is the key in creating and maintaining your brand identity.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Whiteboard Animation",
    description:
      "With animation, swiftly explain complicated stuff without losing mass appeal and attract potential customers towards your brand.",
    image:
      "https://digitaljugglers.com/wp-content/uploads/2020/03/Whiteboard.jpg",
  },
  {
    title: "Web Development",
    description:
      "A one-stop solution for increasing audience reach and grow your business by reaching new demographics.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Virtual Reality/Augmented Reality",
    description:
      "Maintain the pace of your brand with new advances in consumer gratification.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Application Development",
    description:
      "User-friendly android and iOS applications to outreach your brand to demographics.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Customized Software",
    description:
      "Explore Enterprise Resource Planning, Customer Relationship Management with us.",
    image:
      "https://digitaljugglers.com/wp-content/uploads/2020/03/Customized.jpg",
  },
  {
    title: "PR Activity",
    description:
      "Engage and build relationship with your audience by telling your business story.",
    image:
      "https://digitaljugglers.com/wp-content/uploads/2020/03/PR-Activity.jpg",
  },
  {
    title: "Social Media Marketing",
    description:
      "Better interpret your marketplace awareness and possible mode that lead to traffic generation.",
    image: "https://via.placeholder.com/400x300",
  },
  {
    title: "Digital PR",
    description:
      "Digital PR is proficiently maintaining an approbatory online illustration by the organization. A Digital PR Agency nourishes a company via online blogs, websites, and Social Media.",
    image: "https://digitaljugglers.com/wp-content/uploads/2022/06/diigt.jpg",
  },
  {
    title: "Metaverse",
    description:
      "Imagine a virtual world where people can live, work, shop, and socialise all from the comfort of their own home. This is referred to as the metaverse.",
    image:
      "https://digitaljugglers.com/wp-content/uploads/2022/06/metaverse-l.jpg",
  },
  {
    title: "E-Commerce Store Management",
    description:
      "It takes a lot of effort to run an online store and provide an outstanding customer experience.",
    image:
      "https://digitaljugglers.com/wp-content/uploads/2022/06/e-commerce.jpg",
  },
  {
    title: "Digital Media Election Campaign Management",
    description:
      "The digital media campaign operation is one of the enormously efficacious and puissant tools.",
    image:
      "https://digitaljugglers.com/wp-content/uploads/2022/06/election.jpg",
  },
  {
    title: "Influencer Marketing",
    description:
      "Influencer marketing is a type of social media marketing that relies on endorsements and product mentions from influencers–people who have a significant social following and are thought to be experts in their field.",
    image:
      "https://digitaljugglers.com/wp-content/uploads/2022/06/influencer-ma.jpg",
  },
];

const Services = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">
      {services.map((service, index) => (
        <Card
          key={index}
          title={service.title}
          description={service.description}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default Services;
