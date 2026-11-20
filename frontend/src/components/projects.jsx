import { useMemo, useState } from "react";
import { Icon } from "./icons";
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
    category: "Professional work",
    kind: "Business software",
    tech: ["ASP.NET Web Forms", "C#", "SQL Server", "ASMX", "Crystal Reports"],
    description: "A multi-module ERP platform for business operations. My contribution spans Accounting, Sales, Purchase, Stock, and POS Reporting, with a focus on transaction workflows, dashboards, stored procedures, and reporting.",
    contribution: "Transaction screens · Voucher workflows · VAT reporting · SQL procedures",
    live: "https://saas.gpacerp.com",
    image: gpacImage,
    imageAlt: "GPAC ERP platform preview",
    featured: true,
  },
  {
    id: 2,
    title: "JobFinder Web Application",
    category: "Personal project",
    kind: "Full-stack product",
    tech: ["Next.js", "TypeScript", "NestJS", "PostgreSQL", "TypeORM", "JWT"],
    description: "A job platform concept connecting candidates and recruiters through job discovery, account access, and application workflows. Built to explore a structured full-stack architecture and practical product flows.",
    contribution: "Frontend and API integration · Authentication · Relational data",
    github: "https://github.com/sakibscript/JobFinder-Web-Application",
    image: jobFinderImage,
    imageAlt: "JobFinder application preview",
    featured: true,
  },
  {
    id: 3,
    title: "CamSense — Camera Access Research",
    category: "Research project",
    kind: "Android · Machine learning",
    tech: ["Android", "Kotlin", "Jetpack Compose", "Python", "Scikit-learn"],
    description: "A confidence-driven filtering framework for identifying potentially unauthorized camera access on Android devices. The research combines camera activity logging, feature engineering, and classification to distinguish normal, suspicious, and unauthorized behavior.",
    contribution: "Android logging app · Dataset preparation · Model evaluation",
    artwork: true,
    featured: true,
  },
  {
    id: 4,
    title: "Travel Planner Web API",
    category: "Academic project",
    kind: "Backend API",
    tech: ["ASP.NET", "C#", "SQL Server"],
    description: "A .NET-based API for managing travel plans and itinerary information, with SQL Server as the data store. The project focuses on organizing application data through backend endpoints.",
    contribution: "API implementation · Database-backed workflows",
    github: "https://github.com/sakibscript/Travel-Planner",
    image: travelImage,
    imageAlt: "Travel Planner project preview",
  },
  {
    id: 5,
    title: "Discount Prediction in Shopping Trends",
    category: "Data project",
    kind: "Machine learning",
    tech: ["Python", "Pandas", "Scikit-learn"],
    description: "A predictive modelling project exploring shopping data and discount patterns. It applies data preparation and machine-learning techniques to investigate retail trends.",
    contribution: "Data analysis · Feature preparation · Model experimentation",
    github: "https://github.com/sakibscript/Discount-Prediction-in-Shopping-Trends",
    image: discountImage,
    imageAlt: "Discount prediction project preview",
  },
  {
    id: 6,
    title: "Event Management Desktop App",
    category: "Academic project",
    kind: "Desktop application",
    tech: ["C#", "SQL Server"],
    description: "A desktop application for organizing event-related information, built with C# and a SQL Server database.",
    contribution: "Desktop UI · Data persistence",
    github: "https://github.com/sakibscript/Event-Management-Desktop-App",
    image: eventImage,
    imageAlt: "Event Management application preview",
  },
  {
    id: 7,
    title: "Tech Retailer Web App",
    category: "Personal project",
    kind: "E-commerce concept",
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    description: "An e-commerce website concept for technology products, exploring product presentation and essential shopping interactions.",
    contribution: "Product catalogue · Storefront UI",
    github: "https://github.com/sakibscript/Tech-Retailer",
    image: retailerImage,
    imageAlt: "Tech Retailer project preview",
  },
  {
    id: 8,
    title: "Myntra Website Clone",
    category: "Frontend project",
    kind: "Frontend implementation",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "A frontend recreation of a fashion retail storefront, focusing on product presentation and familiar shopping navigation patterns.",
    contribution: "Responsive layout · Product presentation",
    github: "https://github.com/sakibscript/Myntra_Website_Clone",
    live: "https://sakibscript.github.io/Myntra_Website_Clone/",
    image: myntraImage,
    imageAlt: "Fashion storefront clone preview",
  },
  {
    id: 9,
    title: "Traffic Solutions System",
    category: "Academic project",
    kind: "Simulation",
    tech: ["C++", "OpenGL"],
    description: "A visual simulation project exploring traffic flow and intersection management using C++ and OpenGL.",
    contribution: "Simulation logic · Visual rendering",
    github: "https://github.com/sakibscript/Traffic-Solutions-System",
    image: trafficImage,
    imageAlt: "Traffic Solutions project preview",
  },
];

function ProjectArtwork({ project, compact = false }) {
  if (project.artwork) {
    return (
      <div className={`project-artwork ${compact ? "is-compact" : ""}`} aria-label="CamSense research project artwork">
        <div className="artwork-orbit" />
        <Icon name="ShieldCheck" size={compact ? 30 : 42} />
        <span>CamSense</span>
        <small>CAMERA ACCESS RESEARCH</small>
      </div>
    );
  }
  return <img className={`project-image ${compact ? "is-compact" : ""}`} src={project.image} alt={project.imageAlt} loading="lazy" />;
}

function ProjectLinks({ project }) {
  return (
    <div className="project-links">
      {project.live && (
        <a className="plain-link" href={project.live} target="_blank" rel="noopener noreferrer">
          <Icon name="ExternalLink" size={15} /> Live product
        </a>
      )}
      {project.github && (
        <a className="plain-link" href={project.github} target="_blank" rel="noopener noreferrer">
          <Icon name="Github" size={15} /> Source code
        </a>
      )}
    </div>
  );
}

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(0);
  const filters = ["All", "Professional work", "Personal project", "Academic project", "Research project", "Data project", "Frontend project"];
  const filteredProjects = useMemo(
    () => activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter),
    [activeFilter]
  );
  const currentProject = projects[activeProject];

  const changeProject = (direction) => {
    setActiveProject((current) => (current + direction + projects.length) % projects.length);
  };

  return (
    <div className="projects-layout">
      <header className="section-heading section-heading-left projects-heading">
        <p className="section-kicker">04 / SELECTED WORK</p>
        <h2 className="section-title">A closer look at what I build.</h2>
        <p className="section-description">
          Product work, full-stack applications, backend systems, and research. Each project reflects a different part of how I approach software engineering.
        </p>
      </header>

      <div className="project-desktop-view">
        <div className="project-filter-row" role="group" aria-label="Filter projects">
          <span className="filter-count">{filteredProjects.length} PROJECTS</span>
          <div className="project-filters">
            {filters.map((filter) => (
              <button type="button" key={filter} className={`filter-button ${activeFilter === filter ? "is-active" : ""}`} aria-pressed={activeFilter === filter} onClick={() => setActiveFilter(filter)}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="project-grid">
          {filteredProjects.map((project, index) => (
            <article className={`project-card surface ${project.featured ? "is-featured" : ""}`} key={project.id}>
              <div className="project-card-top">
                <span className="project-serial">{String(project.id).padStart(2, "0")}</span>
                <span className="project-kind">{project.kind}</span>
                <div className="project-card-actions"><ProjectLinks project={project} /></div>
              </div>
              <div className="project-cover"><ProjectArtwork project={project} /></div>
              <div className="project-card-copy">
                <p className="project-category">{project.category}</p>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <p className="project-contribution"><strong>Focus</strong><span>{project.contribution}</span></p>
                <p className="project-tech">{project.tech.join(" · ")}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="project-mobile-view surface" aria-label="Project showcase">
        <div className="mobile-project-counter"><span>PROJECT / {String(activeProject + 1).padStart(2, "0")}</span><span>{String(projects.length).padStart(2, "0")}</span></div>
        <ProjectArtwork project={currentProject} compact />
        <div className="mobile-project-copy">
          <p className="project-category">{currentProject.category} · {currentProject.kind}</p>
          <h3 className="project-title">{currentProject.title}</h3>
          <p className="project-description">{currentProject.description}</p>
          <p className="project-contribution"><strong>Focus</strong><span>{currentProject.contribution}</span></p>
          <p className="project-tech">{currentProject.tech.join(" · ")}</p>
          <ProjectLinks project={currentProject} />
        </div>
        <div className="mobile-project-controls">
          <button type="button" className="icon-button" onClick={() => changeProject(-1)} aria-label="Previous project"><Icon name="ChevronLeft" size={18} /></button>
          <div className="project-progress" aria-label={`Project ${activeProject + 1} of ${projects.length}`}>
            {projects.map((project, index) => <button key={project.id} type="button" aria-label={`Go to ${project.title}`} aria-current={activeProject === index ? "step" : undefined} className={activeProject === index ? "is-active" : ""} onClick={() => setActiveProject(index)} />)}
          </div>
          <button type="button" className="icon-button" onClick={() => changeProject(1)} aria-label="Next project"><Icon name="ChevronRight" size={18} /></button>
        </div>
      </div>
      <p className="projects-footnote">A selection of professional, academic, and independent work. Some professional work is presented as a contribution summary rather than a public source repository.</p>
    </div>
  );
}
