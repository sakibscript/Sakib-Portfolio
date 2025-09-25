import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaArrowLeft,
  FaStar,
  FaCode,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";
import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.webp";
import project5 from "../assets/project-5.png";
import project6 from "../assets/project-6.webp";
import project7 from "../assets/project-7.webp";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "JobFinder Web App",
      tech: ["TypeScript", "Next.js", "NestJS", "Tailwind CSS", "PostgreSQL"],
      description:
        "A comprehensive job portal connecting seekers and recruiters, featuring job search, applications, premium subscriptions, and resume uploads.",
      github: "https://github.com/sakibscript/JobFinder-Web-Application",
      live: "",
      image: project1,
      category: "Full Stack",
      featured: true,
    },
    {
      id: 2,
      title: "Travel Planner Web API",
      tech: ["ASP .NET", "MSSQL", "C#"],
      description:
        "RESTful API for managing travel itineraries, bookings, and recommendations with secure authentication.",
      github: "https://github.com/sakibscript/Travel-Planner",
      live: "",
      image: project2,
      category: "Backend",
      featured: true,
    },
    {
      id: 3,
      title: "Discount Prediction in Shopping Trends",
      tech: ["Python", "Pandas", "Scikit-learn"],
      description:
        "Machine learning project predicting optimal discount strategies based on customer shopping trends and purchasing data.",
      github:
        "https://github.com/sakibscript/Discount-Prediction-in-Shopping-Trends",
      live: "",
      image: project3,
      category: "AI/ML",
      featured: false,
    },
    {
      id: 4,
      title: "Tech Retailer Web App",
      tech: ["PHP", "HTML", "CSS", "JavaScript"],
      description:
        "E-commerce platform for tech products, featuring product listings, cart functionality, and secure checkout.",
      github: "https://github.com/sakibscript/Tech-Retailer",
      live: "",
      image: project4,
      category: "Full Stack",
      featured: false,
    },
    {
      id: 5,
      title: "Myntra Website Clone",
      tech: ["HTML", "CSS", "JavaScript"],
      description:
        "Front-end clone of the Myntra e-commerce website, replicating product pages, navigation.",
      github: "https://github.com/sakibscript/Myntra_Website_Clone",
      live: "https://sakibscript.github.io/Myntra_Website_Clone/",
      image: project5,
      category: "Frontend",
      featured: true,
    },
    {
      id: 6,
      title: "Event Management Desktop App",
      tech: ["C#", "MSSQL"],
      description:
        "Desktop application to plan, schedule, and manage events efficiently with a user-friendly interface.",
      github: "https://github.com/sakibscript/Event-Management-Desktop-App",
      live: "",
      image: project6,
      category: "Desktop",
      featured: false,
    },
    {
      id: 7,
      title: "Traffic Solutions System",
      tech: ["C++", "OpenGL"],
      description:
        "Simulation system for traffic management, optimizing flow and reducing congestion using C++ and OpenGL visualizations.",
      github: "https://github.com/sakibscript/Traffic-Solutions-System",
      live: "",
      image: project7,
      category: "Simulation",
      featured: false,
    },
  ];

  const [current, setCurrent] = useState(0);
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const project = filteredProjects[current];

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
  };

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    {
      id: "Full Stack",
      name: "Full Stack",
      count: projects.filter((p) => p.category === "Full Stack").length,
    },
    {
      id: "Frontend",
      name: "Frontend",
      count: projects.filter((p) => p.category === "Frontend").length,
    },
    {
      id: "Backend",
      name: "Backend",
      count: projects.filter((p) => p.category === "Backend").length,
    },
    {
      id: "AI/ML",
      name: "AI/ML",
      count: projects.filter((p) => p.category === "AI/ML").length,
    },
  ];

  return (
    <section className="py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full px-4 py-2 mb-4">
          <FaCode className="text-primary" />
          <span className="text-primary font-medium text-sm">My Portfolio</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Featured{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A collection of my recent work showcasing full-stack development,
          AI/ML projects, and innovative solutions
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveFilter(category.id);
              setCurrent(0);
            }}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 group ${
              activeFilter === category.id
                ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10"
            }`}
          >
            <span>{category.name}</span>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                activeFilter === category.id
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              }`}
            >
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Project Showcase */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-8">
          {/* Project Image */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                  <FaStar className="text-xs" />
                  Featured
                </div>
              )}

              {/* Category Badge */}
              <div className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-900 dark:text-white px-3 py-1 rounded-full text-sm font-medium">
                {project.category}
              </div>
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={prevProject}
                className="p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 
                         text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white 
                         transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <FaArrowLeft />
              </button>
              <button
                onClick={nextProject}
                className="p-4 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 
                         text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white 
                         transition-all duration-300 transform hover:scale-110 shadow-lg"
              >
                <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Project Content */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-4 mb-2">
              <span className="text-6xl font-bold text-primary/20">
                {String(project.id).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-primary/10 to-accent/10 text-primary dark:text-accent 
                               text-sm rounded-full border border-primary/20 dark:border-accent/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {project.description}
            </p>

            {/* Project Links */}
            <div className="flex gap-4 mt-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-xl 
                           hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 
                           transform hover:scale-105 shadow-lg group"
                >
                  <FaGithub className="group-hover:scale-110 transition-transform" />
                  View Code
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl 
                           hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" />
                  Live Demo
                </a>
              )}
            </div>

            {/* Project Counter */}
            <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mt-6">
              <span>
                Project {current + 1} of {filteredProjects.length}
              </span>
              <div className="flex gap-1">
                {filteredProjects.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === current
                        ? "bg-gradient-to-r from-primary to-accent w-6"
                        : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 max-w-2xl mx-auto">
            <FaLayerGroup className="text-4xl text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Want to see more projects?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Check out my GitHub profile for complete source code and more
              innovative projects.
            </p>
            <a
              href="https://github.com/sakibscript"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl 
                       font-medium hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <FaRocket />
              Explore GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
