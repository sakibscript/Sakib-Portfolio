import { useMemo, useState } from "react";

const skills = [
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "HTML & CSS", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express.js", category: "Backend" },
  { name: "NestJS", category: "Backend" },
  { name: "Java", category: "Backend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "C# / .NET", category: "Backend" },
  { name: "ASP.NET Web Forms", category: "Backend" },
  { name: "PostgreSQL", category: "Data" },
  { name: "MySQL", category: "Data" },
  { name: "MongoDB", category: "Data" },
  { name: "SQL Server", category: "Data" },
  { name: "Stored Procedures", category: "Data" },
  { name: "Crystal Reports", category: "Data" },
  { name: "Python", category: "Other" },
  { name: "Pandas & Scikit-learn", category: "Other" },
  { name: "Git & GitHub", category: "Other" },
  { name: "REST APIs", category: "Other" },
];

const categories = ["All", "Frontend", "Backend", "Data", "Other"];

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filteredSkills = useMemo(
    () => activeCategory === "All" ? skills : skills.filter((skill) => skill.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="skills-panel-content">
      <p className="skills-intro">A practical toolkit across frontend interfaces, backend services, relational data, and reporting.</p>
      <div className="skill-filters" role="group" aria-label="Filter skills by category">
        {categories.map((category) => (
          <button type="button" key={category} className={`filter-button ${activeCategory === category ? "is-active" : ""}`} aria-pressed={activeCategory === category} onClick={() => setActiveCategory(category)}>
            {category}
          </button>
        ))}
      </div>
      <div className="skills-list">
        {filteredSkills.map((skill) => (
          <div className="skill-row" key={skill.name}>
            <span className="skill-name">{skill.name}</span>
            <span className="skill-category">{skill.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
