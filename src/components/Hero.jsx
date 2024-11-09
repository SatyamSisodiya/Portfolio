// src/components/Hero.js
import React from "react";

const Hero = () => (
  <section id="hero" className="flex items-center justify-center h-screen bg-gray-900 text-white font-mono">
    <div className="text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4 whitespace-nowrap">
        Hi, I am Satyam...
      </h1>
      <p className="text-lg md:text-xl text-gray-400 mb-6">a Web Developer & Data Analyst</p>
      <div className="flex justify-center gap-4">
        <a href="#projects" className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          View Projects
        </a>
        <a href="#contact" className="bg-transparent border-2 border-blue-500 text-blue-500 py-2 px-4 rounded-lg hover:bg-blue-500 hover:text-white transition">
          Get in Touch
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
