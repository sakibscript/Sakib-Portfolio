import { Icon } from "./icons";

const experience = [
  {
    id: 1,
    title: "Junior Programmer",
    company: "Generation-Next IT Solutions Ltd.",
    location: "Dhaka, Bangladesh",
    duration: "Feb 2025 – Present",
    type: "Full-time",
    summary:
      "Contributing to GPAC ERP SaaS, a business platform that supports financial and operational workflows for organizations. My work focuses on turning business requirements into dependable screens, services, data operations, and reports.",
    contributions: [
      "Contribute across Accounting, Sales, Purchase, Stock, and POS Reporting modules, supporting connected day-to-day business processes.",
      "Build and refine transaction pages, voucher workflows, dashboards, and reporting screens using ASP.NET Web Forms, C#, JavaScript, and jQuery.",
      "Develop and maintain SQL Server stored procedures and Crystal Reports, including VAT-related workflows and financial reporting updates.",
      "Investigate application issues, improve existing flows, and coordinate changes across frontend pages, ASMX services, and database operations.",
    ],
    technologies: [
      "ASP.NET Web Forms",
      "C#",
      "SQL Server",
      "ASMX Web Services",
      "JavaScript",
      "jQuery",
      "Crystal Reports",
    ],
  },
];

export function Experience() {
  return (
    <div className="experience-list">
      {experience.map((item) => (
        <article className="experience-item" key={item.id}>
          <div className="experience-topline">
            <div className="experience-heading">
              <span className="experience-index">0{item.id}</span>
              <div>
                <h3 className="row-title">{item.title}</h3>
                <p className="row-subtitle">{item.company}</p>
              </div>
            </div>
            <div className="experience-date">{item.duration}</div>
          </div>
          <div className="row-meta experience-meta">
            <span><Icon name="MapPin" size={15} /> {item.location}</span>
            <span><Icon name="Briefcase" size={15} /> {item.type}</span>
          </div>
          <p className="row-description experience-summary">{item.summary}</p>
          <ul className="contribution-list">
            {item.contributions.map((contribution) => (
              <li key={contribution}>
                <Icon name="ArrowUpRight" size={15} />
                <span>{contribution}</span>
              </li>
            ))}
          </ul>
          <p className="tech-line"><strong>Tools:</strong> {item.technologies.join(" · ")}</p>
        </article>
      ))}
    </div>
  );
}
