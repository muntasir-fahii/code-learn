import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Categories from "../components/Categories";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Categories />
    </div>
  );
};

export default HomePage;
