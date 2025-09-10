// import { useState } from "react";
// import {
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
//       tech: "Next.js, NestJS, Tailwind CSS, PostgreSQL",
//       description:
//         "A comprehensive job portal connecting seekers and recruiters, featuring job search, applications, premium subscriptions, and resume uploads.",
//       github: "https://github.com/sakibscript/JobFinder-Web-Application",
//       live: "https://jobfinder-demo.vercel.app",
//       image: project1,
//     },
//     {
//       id: 2,
//       title: "Travel Planner Web API",
//       tech: "ASP .NET, MSSQL, C#",
//       description:
//         "RESTful API for managing travel itineraries, bookings, and recommendations with secure authentication.",
//       github: "https://github.com/sakibscript/Travel-Planner",
//       live: "",
//       image: project1,
//     },
//     {
//       id: 3,
//       title: "Discount Prediction in Shopping Trends",
//       tech: "Python, Pandas, Scikit-learn",
//       description:
//         "Machine learning project predicting optimal discount strategies based on customer shopping trends and purchasing data.",
//       github:
//         "https://github.com/sakibscript/Discount-Prediction-in-Shopping-Trends",
//       live: "",
//       image: project1,
//     },
//     {
//       id: 4,
//       title: "Tech Retailer Web App",
//       tech: "PHP, HTML, CSS, JavaScript",
//       description:
//         "E-commerce platform for tech products, featuring product listings, cart functionality, and secure checkout.",
//       github: "https://github.com/sakibscript/Tech-Retailer",
//       live: "",
//       image: project1,
//     },
//     {
//       id: 5,
//       title: "Course Selling App",
//       tech: "Node.js, Express, MongoDB",
//       description:
//         "A mini E-commerce platform for instructors to sell courses online, featuring user authentication, course management",
//       github: "https://github.com/sakibscript/Course_Selling_App",
//       live: "",
//       image: project1,
//     },
//     {
//       id: 6,
//       title: "Myntra Website Clone",
//       tech: "HTML, CSS, JavaScript",
//       description:
//         "Front-end clone of the Myntra e-commerce website, replicating product pages, navigation.",
//       github: "https://github.com/sakibscript/Myntra_Website_Clone",
//       live: "",
//       image: project1,
//     },
//     {
//       id: 7,
//       title: "Event Management Desktop App",
//       tech: "C#, MSSQL",
//       description:
//         "Desktop application to plan, schedule, and manage events efficiently with a user-friendly interface.",
//       github: "https://github.com/sakibscript/Event-Management-Desktop-App",
//       live: "",
//       image: project1,
//     },

//     {
//       id: 8,
//       title: "Traffic Solutions System",
//       tech: "C++, OpenGL",
//       description:
//         "Simulation system for traffic management, optimizing flow and reducing congestion using C++ and OpenGL visualizations.",
//       github: "https://github.com/sakibscript/Traffic-Solutions-System",
//       live: "",
//       image: project1,
//     },
//   ];

//   const [current, setCurrent] = useState(0);

//   const prevProject = () => {
//     setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
//   };

//   const nextProject = () => {
//     setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
//   };

//   const project = projects[current];

//   return (
//     <section className="animate-fadeIn text-text-para_light dark:text-text-para_dark">
//       {/* Heading */}
//       <div className="text-center mb-12 relative">
//         <h2 className="text-4xl md:text-5xl font-bold text-primary relative inline-block">
//           My <span className="text-accent">Projects</span>
//         </h2>
//         <div className="absolute inset-x-0 top-full flex justify-center">
//           <h2 className="text-4xl md:text-5xl font-bold text-primary/20 blur-sm select-none transform scale-y-[-1]">
//             My <span className="text-accent/20">Projects</span>
//           </h2>
//         </div>
//       </div>

//       {/* Project Showcase */}
//       <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
//         {/* Left Content */}
//         <div className="flex flex-col gap-6">
//           <h1 className="text-6xl font-bold text-gray-700 dark:text-gray-300">
//             {String(project.id).padStart(2, "0")}
//           </h1>
//           <h2 className="text-2xl font-semibold">{project.title}</h2>
//           <p className="text-sm leading-relaxed">{project.description}</p>
//           <span className="text-primary border-b border-gray-800 pb-1 inline-block">
//             {project.tech}
//           </span>

//           {/* Links */}
//           <div className="flex gap-4 mt-4">
//             {project.github && (
//               <a
//                 href={project.github}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-primary transition"
//               >
//                 <FaGithub /> Code
//               </a>
//             )}
//             {project.live && (
//               <a
//                 href={project.live}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent text-white hover:bg-primary-dark transition"
//               >
//                 <FaExternalLinkAlt /> Live
//               </a>
//             )}
//           </div>
//         </div>

//         {/* Right Content - Image + Navigation */}
//         <div className="flex flex-col gap-6 items-center">
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full h-72 object-cover rounded-2xl shadow-lg border border-gray-800"
//           />
//           <div className="flex gap-4">
//             <button
//               onClick={prevProject}
//               className="p-3 rounded-full bg-gray-800 hover:bg-primary text-white transition shadow-md"
//             >
//               <FaArrowLeft />
//             </button>
//             <button
//               onClick={nextProject}
//               className="p-3 rounded-full bg-gray-800 hover:bg-primary text-white transition shadow-md"
//             >
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

export function Projects() {
  const projects = [
    {
      id: 1,
      title: "JobFinder Web App",
      tech: "Next.js, NestJS, Tailwind CSS, PostgreSQL",
      description:
        "A comprehensive job portal connecting seekers and recruiters, featuring job search, applications, premium subscriptions, and resume uploads.",
      github: "https://github.com/sakibscript/JobFinder-Web-Application",
      live: "https://jobfinder-demo.vercel.app",
    },
    {
      id: 2,
      title: "Travel Planner Web API",
      tech: "ASP .NET, MSSQL, C#",
      description:
        "RESTful API for managing travel itineraries, bookings, and recommendations with secure authentication.",
      github: "https://github.com/sakibscript/Travel-Planner",
    },
    {
      id: 3,
      title: "Discount Prediction in Shopping Trends",
      tech: "Python, Pandas, Scikit-learn",
      description:
        "ML project predicting optimal discount strategies based on customer shopping trends and purchasing data.",
      github:
        "https://github.com/sakibscript/Discount-Prediction-in-Shopping-Trends",
    },
    {
      id: 4,
      title: "Tech Retailer Web App",
      tech: "PHP, HTML, CSS, JavaScript",
      description:
        "E-commerce platform for tech products, featuring product listings, cart functionality, and secure checkout.",
      github: "https://github.com/sakibscript/Tech-Retailer",
    },
    {
      id: 5,
      title: "Course Selling App",
      tech: "Node.js, Express, MongoDB",
      description:
        "A mini E-commerce platform for instructors to sell courses online, featuring user authentication and course management.",
      github: "https://github.com/sakibscript/Course_Selling_App",
    },
    {
      id: 6,
      title: "Myntra Website Clone",
      tech: "HTML, CSS, JavaScript",
      description:
        "Front-end clone of the Myntra e-commerce website, replicating product pages and navigation.",
      github: "https://github.com/sakibscript/Myntra_Website_Clone",
    },
    {
      id: 7,
      title: "Event Management Desktop App",
      tech: "C#, MSSQL",
      description:
        "Desktop application to plan, schedule, and manage events efficiently with a user-friendly interface.",
      github: "https://github.com/sakibscript/Event-Management-Desktop-App",
    },
    {
      id: 8,
      title: "Traffic Solutions System",
      tech: "C++, OpenGL",
      description:
        "Simulation system for traffic management, optimizing flow and reducing congestion using C++ and OpenGL.",
      github: "https://github.com/sakibscript/Traffic-Solutions-System",
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
    <section className="animate-fadeIn text-text-para_dark">
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

      {/* Project Card */}
      <div className="max-w-4xl mx-auto bg-gray-900 dark:bg-gray-800 p-8 rounded-2xl shadow-lg">
        <h1 className="text-6xl font-bold text-gray-300">
          {String(project.id).padStart(2, "0")}
        </h1>
        <h2 className="text-3xl font-semibold mt-2">{project.title}</h2>
        <p className="mt-4 text-sm leading-relaxed">{project.description}</p>
        <span className="inline-block mt-2 text-primary border-b border-gray-700 pb-1">
          {project.tech}
        </span>

        {/* Links */}
        <div className="flex gap-4 mt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-700 hover:bg-primary transition"
            >
              <FaGithub /> Code
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-primary-dark transition"
            >
              <FaExternalLinkAlt /> Live
            </a>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={prevProject}
            className="p-3 rounded-full bg-gray-700 hover:bg-primary text-white transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextProject}
            className="p-3 rounded-full bg-gray-700 hover:bg-primary text-white transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
