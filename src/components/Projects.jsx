// src/components/Projects.js
import React from "react";

const projects = [
  {
    category: "Web Development",
    title: "Travel Management Software",
    description: "A comprehensive solution for managing travel bookings and itineraries.",
    techStack: ["Java", "Spring Boot"],
    githubLink: "https://github.com/username/travel-management",
  },
  {
    category: "Web Development",
    title: "Fullstack Real Estate Listing Website",
    description: "A dynamic web app for listing real estate properties with robust MERN stack and Firebase authentication.",
    techStack: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Node.js", "Express.js", "Redux", "MongoDB", "JWT", "Firebase"],
    githubLink: "https://github.com/SatyamSisodiya/Fullstack-Real-Estate-Application",
  },
  {
    category: "AI/ML",
    title: "Exploratory Data Analysis of Geolocational Data",
    description: "An analytical project using Python and machine learning libraries to explore geographic data trends and insights.",
    techStack: ["Python", "Numpy", "Pandas", "Keras", "Scikit Learn", "Seaborn", "Matplotlib", "RESTful APIs"],
    githubLink: "https://github.com/SatyamSisodiya/Exploratory-Data-Analysis-of-Geolocation-Data",
  },
  {
    category: "AI/ML",
    title: "Image Forgery Detection Model",
    description: "A machine learning model developed to detect forged images using deep learning and data visualization.",
    techStack: ["Python", "Seaborn", "Matplotlib", "Keras"],
    githubLink: "https://github.com/Shreyashh09/HackerX-5.0",
  },
  {
    category: "Algorithm",
    title: "Sudoku Solver using Backtracking",
    description: "A C++ program implementing backtracking algorithms to solve Sudoku puzzles efficiently.",
    techStack: ["C++"],
    githubLink: "https://github.com/SatyamSisodiya/Sodoku",
  },
];

const Projects = () => {
  const groupedProjects = projects.reduce((acc, project) => {
    (acc[project.category] = acc[project.category] || []).push(project);
    return acc;
  }, {});

  return (
    <section id="projects" className="py-16 px-4 bg-gray-800 font-sans">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-400 mb-6">Projects</h2>
        {Object.keys(groupedProjects).map((category) => (
          <div key={category} className="mb-8">
            <h3 className="text-2xl font-semibold text-blue-300 mb-4">{category}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {groupedProjects[category].map((project, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                  <h4 className="text-xl font-semibold text-blue-300">{project.title}</h4>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <div className="mt-4">
                    <span className="font-semibold text-gray-400">Tech Stack: </span>
                    {project.techStack.join(", ")}
                  </div>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-400 hover:underline"
                  >
                    View on GitHub
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
