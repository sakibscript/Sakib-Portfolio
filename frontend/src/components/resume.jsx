import { useState } from "react";
import resumePdf from "../assets/Resume-Sakib.pdf";
import { Experience } from "./experience";
import { Education } from "./education";
import { Skills } from "./skills";
import { Icon } from "./icons";

const tabs = [
  { id: "experience", label: "Experience", icon: "Briefcase" },
  { id: "education", label: "Education", icon: "GraduationCap" },
  { id: "skills", label: "Skills", icon: "Code" },
];

export function Resume() {
  const [active, setActive] = useState("experience");

  return (
    <div className="journey-layout">
      <header className="section-heading section-heading-left journey-heading">
        <p className="section-kicker">03 / THE JOURNEY</p>
        <h2 className="section-title">The work behind the work.</h2>
        <p className="section-description">
          Professional experience, education, and the tools I use to move an idea from requirements to a working product.
        </p>
        <a href={resumePdf} download className="text-action">
          Download full résumé <Icon name="Download" size={16} />
        </a>
      </header>

      <div className="resume-surface surface">
        <div className="resume-tabs" role="tablist" aria-label="Resume sections">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              id={`resume-tab-${tab.id}`}
              aria-controls={`resume-panel-${tab.id}`}
              aria-selected={active === tab.id}
              className="tab-button"
              onClick={() => setActive(tab.id)}
            >
              <Icon name={tab.icon} size={17} /> <span>{tab.label}</span>
            </button>
          ))}
        </div>
        <div className="resume-panel" id={`resume-panel-${active}`} role="tabpanel" aria-labelledby={`resume-tab-${active}`}>
          {active === "experience" && <Experience />}
          {active === "education" && <Education />}
          {active === "skills" && <Skills />}
        </div>
      </div>
    </div>
  );
}
