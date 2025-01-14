import React from "react";

const blogs = ["Blog 1", "Blog 2", "Blog 3"];

const BlogSection = () => {
  return (
    <section className="py-16 bg-white">
      <h6 className="text-3xl font-bold text-center mb-8">Our Blog</h6>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {blogs.map((blog, index) => (
          <div
            key={index}
            className="p-6 bg-gray-50 shadow-lg hover:bg-gray-100 rounded"
          >
            <h6 className="font-bold">{blog}</h6>
            <p className="text-gray-600 mt-2">
              Learn more about the latest trends in digital marketing.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
