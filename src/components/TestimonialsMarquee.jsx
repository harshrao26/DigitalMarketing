import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsMarquee = () => {
  const testimonials = [
    {
      name: "Harper Adams",
      stars: 4,
      message:
        "Great experience! They know their digital marketing. They helped us boost our online presence and get results that exceeded our expectations.",
    },
    {
      name: "Arya Oberoi",
      stars: 5,
      message:
        "The best agency I've worked with. Highly recommend! Their strategy and execution are second to none. Our business growth since working with them has been phenomenal.",
    },
    {
      name: "Olivia Harris",
      stars: 4,
      message:
        "Professional and efficient. Satisfied with their work. They ensured timely delivery and excellent quality, making the whole process seamless.",
    },
    {
      name: "Zahra Al-Hashemi",
      stars: 5,
      message:
        "Advert Furos helped our brand grow exponentially. They provide comprehensive digital marketing solutions that made a huge impact on our overall brand strategy.",
    },
    {
      name: "Sneha Iyer",
      stars: 4,
      message:
        "Fantastic team with great knowledge of digital marketing. They delivered results beyond our expectations and always kept us informed every step of the way.",
    },
    {
      name: "Amelia Hall",
      stars: 5,
      message:
        "Amazing service! Truly remarkable work. Their team's attention to detail and customer-centric approach made all the difference for our project. Highly recommend them!",
    },
    {
      name: "Harper Adams",
      stars: 4,
      message:
        "Great experience! They know their digital marketing. They helped us boost our online presence and get results that exceeded our expectations.",
    },
    {
      name: "Arham Sheikh",
      stars: 5,
      message:
        "The best agency I've worked with. Highly recommend! Their strategy and execution are second to none. Our business growth since working with them has been phenomenal.",
    },
    {
      name: "Olivia Harris",
      stars: 4,
      message:
        "Professional and efficient. Satisfied with their work. They ensured timely delivery and excellent quality, making the whole process seamless.",
    },
    {
      name: "Rajesh Yadav",
      stars: 5,
      message:
        "Advert Furos helped our brand grow exponentially. They provide comprehensive digital marketing solutions that made a huge impact on our overall brand strategy.",
    },
    {
      name: "Sneha Iyer",
      stars: 4,
      message:
        "Fantastic team with great knowledge of digital marketing. They delivered results beyond our expectations and always kept us informed every step of the way.",
    },
    {
      name: "Amelia Hall",
      stars: 5,
      message:
        "Amazing service! Truly remarkable work. Their team's attention to detail and customer-centric approach made all the difference for our project. Highly recommend them!",
    },
    {
      name: "Harper Adams",
      stars: 4,
      message:
        "Great experience! They know their digital marketing. They helped us boost our online presence and get results that exceeded our expectations.",
    },
    {
      name: "Noah Carter",
      stars: 5,
      message:
        "The best agency I've worked with. Highly recommend! Their strategy and execution are second to none. Our business growth since working with them has been phenomenal.",
    },
    {
      name: "Aya Al-Khatib",
      stars: 4,
      message:
        "Professional and efficient. Satisfied with their work. They ensured timely delivery and excellent quality, making the whole process seamless.",
    },
    {
      name: "Riaan Sethi",
      stars: 5,
      message:
        "Amazing service! Truly remarkable work. Their team's attention to detail and customer-centric approach made all the difference for our project. Highly recommend them!",
    },
    {
      name: "Layla Al-Fahad",
      stars: 5,
      message:
        "Advert Furos helped our brand grow exponentially. They provide comprehensive digital marketing solutions that made a huge impact on our overall brand strategy.",
    },
    {
      name: "Ira Reddy",
      stars: 4,
      message:
        "Fantastic team with great knowledge of digital marketing. They delivered results beyond our expectations and always kept us informed every step of the way.",
    },
  ];

  return (
    <div className="bg-white py-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-4xl text-center font-bold text-gray-800 mb-6">
          What Our Clients Say
        </h2>
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-marquee flex space-x-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-80 h- py-4 px-8 bg-white border-[1px] border-zinc-200 rounded-2xl transform hover:scale-105 transition-transform duration-300 flex-shrink-0"
              >
                <div className="flex items-center mb-2">
                  {/* Name */}
                  <span className="text-lg font-semibold text-gray-800 mr-3">
                    {testimonial.name}
                  </span>
                  {/* Stars */}
                  <div className="flex text-[#ffd74b]">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                {/* Message */}
                <p className="text-xs text-gray-600 whitespace-normal break-words">
                  {testimonial.message}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsMarquee;
