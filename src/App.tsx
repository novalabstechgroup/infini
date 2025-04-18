import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/nav/Navbar"; // Import Navbar
import HomePage from "./pages/homepage/HomePage"; // Example pages
import Footer from "./components/footer/Footer";
// import AboutPage from "./pages/AboutPage";
// import ContactPage from "./pages/ContactPage";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
        <Footer />
    </Router>
  );
};

export default App
