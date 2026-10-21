import { useMemo, useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaArrowRight } from "react-icons/fa";
import gpacImage from "../assets/gpac-erp.svg";
import jobFinderImage from "../assets/project-1(!).png";
import travelImage from "../assets/project-2.png";
import discountImage from "../assets/project-3.jpg";
import retailerImage from "../assets/project-4.webp";
import myntraImage from "../assets/project-5.png";
import eventImage from "../assets/project-6.webp";
import trafficImage from "../assets/project-7.webp";

const projects = [
  {
    id: 1,
    title: "GPAC ERP — SaaS Platform",
    tech: ["ASP.NET Web Forms", "C#", "SQL Server", "ASMX", "Crystal Reports"],
    description:
      "A business ERP and POS platform. Contributed to Accounting, Sales, Purchase, Stock, and POS Reporting modules, including transaction screens, dashboards, SQL stored procedures, and VAT-related reporting workflows.",
    github: "",
    live: "https://saas.gpacerp.com",
    image: gpacImage,
    category: "Full Stack",
    featured: true,
  },
  {
    id: 2,
    title: "JobFinder Web Application",
    tech: ["TypeScript", "Next.js", "NestJS", "PostgreSQL", "Tailwind CSS"],
    description:
      "A job portal connecting candidates and recruiters with job discovery, applications, account features, and resume uploads.",
    github: "https://github.com/sakibscript/JobFinder-Web-Application",
    live: "",
    image: jobFinderImage,
    category: "Full Stack",
    featured: true,
  },
  {
    id: 3,
    title: "Travel Planner Web API",
    tech: ["ASP.NET", "C#", "SQL Server"],
    description:
      "A REST API for managing travel plans and related itinerary information, built with a .NET backend and SQL Server.",
    github: "https://github.com/sakibscript/Travel-Planner",
    live: "",
    image: travelImage,
    category: "Backend",
    featured: false,
  },
  {
    id: 4,
    title: "Discount Prediction in Shopping Trends",
    tech: ["Python", "Pandas", "Scikit-learn"],
    description:
      "A machine-learning project exploring shopping data to predict discount patterns and support data-informed retail decisions.",
    github: "https://github.com/sakibscript/Discount-Prediction-in-Shopping-Trends",
    live: "",
    image: discountImage,
    category: "AI/ML",
    featured: false,
  },
  {
    id: 5,
    title: "Tech Retailer Web App",
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    description:
      "An e-commerce website concept for technology products, with product listings and core shopping interactions.",
    github: "https://github.com/sakibscript/Tech-Retailer",
    live: "",
    image: retailerImage,
    category: "Full Stack",
    featured: false,
  },
  {
    id: 6,
    title: "Myntra Website Clone",
    tech: ["HTML", "CSS", "JavaScript"],
    description:
      "A frontend recreation of a fashion retail storefront featuring product presentation and familiar shopping navigation.",
    github: "https://github.com/sakibscript/Myntra_Website_Clone",
    live: "https://sakibscript.github.io/Myntra_Website_Clone/",
    image: myntraImage,
    category: "Frontend",
    featured: false,
  },
  {
    id: 7,
    title: "Event Management Desktop App",
    tech: ["C#", "SQL Server"],
    description:
      "A desktop application concept for planning and organizing events, using a C# interface with a SQL Server database.",
    github: "https://github.com/sakibscript/Event-Management-Desktop-App",
    live: "",
    image: eventImage,
    category: "Desktop",
    featured: false,
  },
  {
    id: 8,
    title: "Traffic Solutions System",
    tech: ["C++", "OpenGL"],
    description:
      "A visual simulation project exploring traffic flow and intersection management with C++ and OpenGL.",
    github: "https://github.com/sakibscript/Traffic-Solutions-System",
    live: "",
    image: trafficImage,
    category: "Simulation",
    featured: false,
  },
];

const filters = ["All Projects", "Full Stack", "Backend", "Frontend", "AI/ML", "Desktop", "Simulation"];

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = useMemo(
    () => activeFilter === "All Projects"
      ? projects
      : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );

  return (
    <div className="py-10 sm:py-14">
      <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-12">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary dark:border-[#334155] dark:bg-[#1E3A5F] dark:text-[#dbeafe]">
          <FaCode aria-hidden="true" /> Selected Work
        </div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          Projects & <span className="text-primary dark:text-[#93C5FD]">Experience</span>
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
          Selected professional and personal projects, from ERP workflows to full-stack web applications.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-10 sm:gap-3" aria-label="Filter projects">
        {filters.map((filter) => {
          const isActive = filter === activeFilter;
          const count = filter === "All Projects"
            ? projects.length
            : projects.filter((project) => project.category === filter).length;
          if (filter !== "All Projects" && count === 0) return null;

          return (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={isActive}
              className={`inline-flex min-w-0 items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                isActive
                  ? "border-primary bg-primary text-white"
                  : "border-gray-200 bg-white text-gray-700 hover:border-primary/40 hover:text-primary dark:border-[#334155] dark:bg-[#111827] dark:text-gray-200 dark:hover:border-[#60A5FA]"
              }`}
            >
              <span>{filter}</span>
              <span className={`rounded-full px-1.5 py-0.5 text-[10px] sm:text-xs ${isActive ? "bg-white/15 text-white" : "bg-gray-100 text-gray-600 dark:bg-[#334155] dark:text-gray-300"}`}>
                {count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <article
            key={project.id}
            className="group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-200 hover:shadow-lg dark:border-[#334155] dark:bg-[#111827]"
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-[#F1F5F9] dark:bg-[#111827]">
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
              />
              <span className="absolute left-3 top-3 rounded-full border border-white/70 bg-white/90 px-3 py-1 text-xs font-semibold text-gray-800 backdrop-blur-sm dark:border-white/10 dark:bg-[#0F172A]/90 dark:text-gray-100">
                {project.category}
              </span>
              {project.featured && (
                <span className="absolute right-3 top-3 rounded-full bg-[#DBEAFE] px-3 py-1 text-xs font-semibold text-[#1D4ED8] dark:bg-[#1E3A5F] dark:text-[#BFDBFE]">
                  Featured
                </span>
              )}
            </div>

            <div className="flex flex-1 flex-col p-4 sm:p-5">
              <h3 className="mb-3 text-lg font-bold leading-snug text-gray-900 dark:text-white sm:text-xl">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
                {project.description}
              </p>

              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-gray-200 bg-[#F1F5F9] px-2 py-1 text-[11px] leading-4 text-gray-700 dark:border-[#334155] dark:bg-[#1E293B] dark:text-gray-200 sm:text-xs"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-gray-100 pt-4 dark:border-[#334155]">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary dark:text-gray-200 dark:hover:bg-[#1E293B] dark:hover:text-[#BFDBFE]"
                  >
                    <FaGithub aria-hidden="true" /> Source Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
                  >
                    Live Site <FaExternalLinkAlt aria-hidden="true" className="text-xs" />
                  </a>
                )}
                {!project.github && !project.live && (
                  <span className="inline-flex items-center gap-2 px-3 py-2 text-sm text-gray-500 dark:text-gray-400">
                    Details available on request <FaArrowRight aria-hidden="true" />
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
