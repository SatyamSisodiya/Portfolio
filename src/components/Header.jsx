// src/components/Header.js
import React from "react";

const Header = () => (
  <header className="bg-gray-800 p-4 shadow-md fixed w-full top-0 z-50">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-400">Satyam Singh</h1>
      <nav className="space-x-4">
        <a href="#about" className="hover:text-blue-300">About</a>
        <a href="#skills" className="hover:text-blue-300">Skills</a>
        <a href="#projects" className="hover:text-blue-300">Projects</a>
        <a href="#contact" className="hover:text-blue-300">Contact</a>
      </nav>
    </div>
  </header>
);

export default Header;
