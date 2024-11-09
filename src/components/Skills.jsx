// src/components/Skills.js
import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaJava, FaNodeJs, FaGit } from "react-icons/fa";
import { SiSpringboot, SiMongodb, SiVisualstudiocode, SiJupyter, SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-blue-400" /> },
  { name: "Python", icon: <FaPython className="text-blue-300" /> },
  { name: "Java", icon: <FaJava className="text-red-600" /> },
  { name: "Spring Boot", icon: <SiSpringboot className="text-green-500" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-blue-300" /> },
];

const tools = [
  { name: "VS Code", icon: <SiVisualstudiocode className="text-blue-500" /> },
  { name: "Git", icon: <FaGit className="text-orange-500" /> },
  { name: "Jupyter Notebook", icon: <SiJupyter className="text-orange-400" /> },
];

const Skills = () => (
  <section id="skills" className="py-16 px-4 bg-gray-900 font-sans text-white">
    <div className="container mx-auto text-center">
      <h2 className="text-3xl font-bold text-blue-400 mb-6">Skills & Tools</h2>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-300 mb-4">Technical Skills</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div key={index} className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md gap-2 hover:bg-gray-700 transition">
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold text-blue-300 mb-4">Tools</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {tools.map((tool, index) => (
            <div key={index} className="flex items-center bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md gap-2 hover:bg-gray-700 transition">
              {tool.icon}
              <span>{tool.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Skills;
