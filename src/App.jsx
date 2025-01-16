import React from "react";
import Navbar from "./components/Navbar.jsx";
import Routing from "./Routing.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
