// import {
//   FaCode,
//   FaGithub,
//   FaExternalLinkAlt,
//   FaArrowRight,
//   FaArrowLeft,
// } from "react-icons/fa";
// import project1 from "../assets/project-1.png";

// export function Projects() {
//   const projects = [
//     {
//       id: 1,
//       title: "JobFinder Web App",
//       tech: "Next.js, NestJS, Tailwind, PostgreSQL",
//       description:
//         "A job portal for seekers and recruiters with features like job search, applications, premium subscriptions, and resume upload.",
//       github: "https://github.com/yourusername/jobfinder",
//       live: "https://jobfinder-demo.vercel.app",
//     },
//     {
//       id: 2,
//       title: "Travel Planner API",
//       tech: "Node.js, Express, MongoDB",
//       description:
//         "API to manage travel itineraries, bookings, and recommendations with authentication and JWT security.",
//       github: "https://github.com/yourusername/travel-planner-api",
//       live: "",
//     },
//     {
//       id: 3,
//       title: "Customer Shopping Trend Prediction",
//       tech: "Python, Scikit-learn, Pandas",
//       description:
//         "Machine learning project analyzing customer shopping patterns to predict future buying trends.",
//       github: "https://github.com/yourusername/shopping-trends-ml",
//       live: "",
//     },
//   ];

//   return (
//     <section className="animate-fadeIn text-text-para_light dark:text-text-para_dark ">
//       {/* Heading */}
//       <div className="text-center mb-12 relative">
//         <h2 className="text-4xl md:text-5xl font-bold text-primary relative inline-block">
//           My <span className="text-accent">Projects</span>
//         </h2>

//         {/* Reflection Effect */}
//         <div className="absolute inset-x-0 top-full flex justify-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-primary/20 blur-sm select-none transform scale-y-[-1]">
//             My <span className="text-accent/20">Projects</span>
//           </h2>
//         </div>
//       </div>
//       <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
//         <div className="flex flex-col justify-enter items-start max-w-6xl mx-auto gap-8">
//           <h1 className="text-5xl font-bold">01</h1>
//           <h2>JobFinder Web Application</h2>
//           <p className="text-sm w-full">
//             A job portal for seekers and recruiters with features like job
//             search, applications, premium subscriptions, and resume upload.
//           </p>
//           <span className="text-primary border-b border-gray-800">
//             Node.js, NestJS, Tailwind, PostgreSQL
//           </span>
//           <div className="flex gap-4 mt-2">
//             <a
//               href="https://github.com/yourusername/jobfinder"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-2xl hover:text-primary"
//             >
//               <FaGithub />
//             </a>
//             <a
//               href="https://jobfinder-demo.vercel.app"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-2 text-2xl hover:text-primary"
//             >
//               <FaExternalLinkAlt />
//             </a>
//           </div>
//         </div>
//         <div className="flex flex-col justify-evenly items-start max-w-6xl mx-auto gap-8 ">
//           <img src={project1} alt="" className="w-full" />
//           <div className="flex justify-center items-end w-full">
//             <button>
//               <FaArrowLeft />
//             </button>
//             <button>
//               <FaArrowRight />
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
import { useState } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa";
import project1 from "../assets/project-1.png";

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "JobFinder Web App",
      tech: "Next.js, NestJS, Tailwind, PostgreSQL",
      description:
        "A job portal for seekers and recruiters with features like job search, applications, premium subscriptions, and resume upload.",
      github: "https://github.com/yourusername/jobfinder",
      live: "https://jobfinder-demo.vercel.app",
      image: project1,
    },
    {
      id: 2,
      title: "Travel Planner API",
      tech: "Node.js, Express, MongoDB",
      description:
        "API to manage travel itineraries, bookings, and recommendations with authentication and JWT security.",
      github: "https://github.com/yourusername/travel-planner-api",
      live: "",
      image: project1,
    },
    {
      id: 3,
      title: "Customer Shopping Trend Prediction",
      tech: "Python, Scikit-learn, Pandas",
      description:
        "Machine learning project analyzing customer shopping patterns to predict future buying trends.",
      github: "https://github.com/yourusername/shopping-trends-ml",
      live: "",
      image: project1,
    },
  ];

  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[current];

  return (
    <section className="animate-fadeIn text-text-para_light dark:text-text-para_dark">
      {/* Heading */}
      <div className="text-center mb-12 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-primary relative inline-block">
          My <span className="text-accent">Projects</span>
        </h2>
        <div className="absolute inset-x-0 top-full flex justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary/20 blur-sm select-none transform scale-y-[-1]">
            My <span className="text-accent/20">Projects</span>
          </h2>
        </div>
      </div>

      {/* Project Showcase */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-6xl font-bold text-gray-700 dark:text-gray-300">
            {String(project.id).padStart(2, "0")}
          </h1>
          <h2 className="text-2xl font-semibold">{project.title}</h2>
          <p className="text-sm leading-relaxed">{project.description}</p>
          <span className="text-primary border-b border-gray-800 pb-1 inline-block">
            {project.tech}
          </span>

          {/* Links */}
          <div className="flex gap-4 mt-4">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-primary transition"
              >
                <FaGithub /> Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white hover:bg-primary-dark transition"
              >
                <FaExternalLinkAlt /> Live
              </a>
            )}
          </div>
        </div>

        {/* Right Content - Image + Navigation */}
        <div className="flex flex-col gap-6 items-center">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-72 object-cover rounded-2xl shadow-lg border border-gray-800"
          />
          <div className="flex gap-4">
            <button
              onClick={prevProject}
              className="p-3 rounded-full bg-gray-800 hover:bg-primary text-white transition shadow-md"
            >
              <FaArrowLeft />
            </button>
            <button
              onClick={nextProject}
              className="p-3 rounded-full bg-gray-800 hover:bg-primary text-white transition shadow-md"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
