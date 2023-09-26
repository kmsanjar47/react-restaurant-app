import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./views/Menu";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";

const Body = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default Body;
