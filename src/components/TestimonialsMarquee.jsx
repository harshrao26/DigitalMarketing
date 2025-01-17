import React from "react";
import { FaStar } from "react-icons/fa";

const TestimonialsMarquee = () => {
  const testimonials = [
    {
      name: "Amit Sharma",
      stars: 5,
      message:
        "Amazing service! Truly remarkable work. Their team's attention to detail and customer-centric approach made all the difference for our project. Highly recommend them!",
    },
    {
      name: "Priya Patel",
      stars: 4,
      message:
        "Great experience! They know their digital marketing. They helped us boost our online presence and get results that exceeded our expectations.",
    },
    {
      name: "Ravi Kumar",
      stars: 5,
      message:
        "The best agency I've worked with. Highly recommend! Their strategy and execution are second to none. Our business growth since working with them has been phenomenal.",
    },
    {
      name: "Neha Gupta",
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
      name: "Amit Sharma",
      stars: 5,
      message:
        "Amazing service! Truly remarkable work. Their team's attention to detail and customer-centric approach made all the difference for our project. Highly recommend them!",
    },
    {
      name: "Priya Patel",
      stars: 4,
      message:
        "Great experience! They know their digital marketing. They helped us boost our online presence and get results that exceeded our expectations.",
    },
    {
      name: "Ravi Kumar",
      stars: 5,
      message:
        "The best agency I've worked with. Highly recommend! Their strategy and execution are second to none. Our business growth since working with them has been phenomenal.",
    },
    {
      name: "Neha Gupta",
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
      name: "Amit Sharma",
      stars: 5,
      message:
        "Amazing service! Truly remarkable work. Their team's attention to detail and customer-centric approach made all the difference for our project. Highly recommend them!",
    },
    {
      name: "Priya Patel",
      stars: 4,
      message:
        "Great experience! They know their digital marketing. They helped us boost our online presence and get results that exceeded our expectations.",
    },
    {
      name: "Ravi Kumar",
      stars: 5,
      message:
        "The best agency I've worked with. Highly recommend! Their strategy and execution are second to none. Our business growth since working with them has been phenomenal.",
    },
    {
      name: "Neha Gupta",
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
  ];

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-screen-xl mx-auto">
        <h2 className="text-3xl text-center font-bold text-gray-800 mb-6">
          What Our Clients Say
        </h2>
        <div className="overflow-hidden">
          <div className="whitespace-nowrap animate-marquee flex space-x-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-80 h- p-6 bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300 flex-shrink-0"
              >
                <div className="flex items-center mb-2">
                  {/* Name */}
                  <span className="text-lg font-semibold text-gray-800 mr-3">
                    {testimonial.name}
                  </span>
                  {/* Stars */}
                  <div className="flex text-yellow-400">
                    {Array.from({ length: testimonial.stars }).map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
                {/* Message */}
                <p className="text-sm text-gray-600 whitespace-normal break-words">
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
