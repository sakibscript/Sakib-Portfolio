import { Icon } from "./icons";

const capabilities = [
  {
    id: "01",
    title: "Full-stack application development",
    description: "From the first interface to the API and database, I work across the layers needed to ship a cohesive web application.",
    stack: "React · Next.js · TypeScript · Node.js · NestJS",
    icon: "PanelsTopLeft",
  },
  {
    id: "02",
    title: "Business software & ERP workflows",
    description: "Building and refining the operational screens behind accounting, sales, purchasing, inventory, and reporting workflows.",
    stack: "ASP.NET Web Forms · C# · SQL Server · Crystal Reports",
    icon: "Workflow",
  },
  {
    id: "03",
    title: "Backend services & data",
    description: "Designing practical service logic, REST APIs, relational data structures, queries, and stored procedures.",
    stack: "Java · Spring Boot · .NET · PostgreSQL · MySQL · MongoDB",
    icon: "Database",
  },
  {
    id: "04",
    title: "Reporting & problem-solving",
    description: "Turning business rules and raw data into useful reports, predictable workflows, and understandable product experiences.",
    stack: "Crystal Reports · SQL · Python · Pandas · Scikit-learn",
    icon: "ChartNoAxesCombined",
  },
];

const principles = [
  ["Understand the workflow", "Start with the user, the business rule, and the real problem."],
  ["Build for clarity", "Prefer understandable code, consistent UI patterns, and explicit data flows."],
  ["Improve through feedback", "Test the edge cases, refine the interaction, and keep the system maintainable."],
];

export function Services() {
  return (
    <div className="focus-layout">
      <header className="section-heading section-heading-left">
        <p className="section-kicker">02 / CAPABILITIES</p>
        <h2 className="section-title">What I bring to a product team.</h2>
        <p className="section-description">
          I’m comfortable moving between interface details and backend logic. The common thread is building software that makes everyday work clearer and more reliable.
        </p>
      </header>

      <div className="capability-surface surface">
        {capabilities.map((item) => (
          <article className="capability-row" key={item.id}>
            <span className="capability-number">{item.id}</span>
            <div className="capability-icon"><Icon name={item.icon} size={21} /></div>
            <div className="capability-copy">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="capability-stack">{item.stack}</span>
            </div>
            <Icon name="ArrowUpRight" className="capability-arrow" size={18} />
          </article>
        ))}
      </div>

      <div className="principles-block">
        <div className="principles-heading">
          <p className="section-kicker">HOW I APPROACH THE WORK</p>
          <h3>A practical engineering mindset.</h3>
        </div>
        <div className="principles-list">
          {principles.map(([title, description], index) => (
            <div className="principle-row" key={title}>
              <span>0{index + 1}</span>
              <div><strong>{title}</strong><p>{description}</p></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
