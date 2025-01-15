import React from "react";
import Home from "./pages/Home.jsx";
import HeroBlog from "./components/HeroBlog.jsx"; // Adjust the import path
import BlogDetail from "./components/BlogDetail.jsx"; // Create BlogDetail component
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/blog/digital-marketing-strategies"
          element={<BlogDetail title="Digital Marketing Strategies" />}
        />
        <Route
          path="/blog/growth-hackers-playbook"
          element={<BlogDetail title="Growth Hacker's Playbook" />}
        />
        <Route
          path="/blog/seo-best-practices"
          element={<BlogDetail title="SEO Best Practices" />}
        />
        <Route
          path="/blog/social-media-marketing-guide"
          element={<BlogDetail title="Social Media Marketing Guide" />}
        />
        <Route path="/blogs" element={<div>All Blogs Page</div>} />
      </Routes>
    </div>
  );
}

export default App;
