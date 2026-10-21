import { useState } from "react";
import { Experience } from "./experience";
import { Education } from "./education";
import { Skills } from "./skills";
import resumePdf from "../assets/Resume-Sakib.pdf";
import { FaDownload, FaUserTie, FaGraduationCap, FaCode, FaStar } from "react-icons/fa";

const resumeTabs = [
  { id: "experience", label: "Experience", icon: FaUserTie },
  { id: "education", label: "Education", icon: FaGraduationCap },
  { id: "skills", label: "Skills", icon: FaCode },
];

export function Resume() {
  const [active, setActive] = useState("experience");

  return (
    <div className="animate-fadeIn py-10 sm:py-14">
      <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary dark:border-[#334155] dark:bg-[#1E3A5F] dark:text-[#dbeafe]">
          <FaStar aria-hidden="true" /> My Journey
        </div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl lg:text-5xl">
          My <span className="text-primary dark:text-[#93C5FD]">Resume</span>
        </h2>
        <p className="mx-auto max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-300 sm:text-base">
          A clear overview of my professional experience, education, and technical skills.
        </p>
        <a
          href={resumePdf}
          download
          className="mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
        >
          <FaDownload aria-hidden="true" /> Download Resume
        </a>
      </header>

      <div className="mx-auto max-w-5xl">
        <div
          role="tablist"
          aria-label="Resume sections"
          className="grid grid-cols-3 gap-2 rounded-2xl border border-gray-200 bg-white p-2 shadow-sm dark:border-[#334155] dark:bg-[#111827] sm:gap-3 sm:p-3"
        >
          {resumeTabs.map(({ id, label, icon: Icon }) => {
            const selected = active === id;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                id={`resume-tab-${id}`}
                aria-selected={selected}
                aria-controls={`resume-panel-${id}`}
                onClick={() => setActive(id)}
                className={`flex min-w-0 items-center justify-center gap-2 rounded-xl px-2 py-3 text-xs font-semibold transition-colors sm:px-4 sm:text-sm ${
                  selected
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:bg-[#EFF6FF] hover:text-primary dark:text-gray-300 dark:hover:bg-[#1E293B] dark:hover:text-[#BFDBFE]"
                }`}
              >
                <Icon aria-hidden="true" className="shrink-0" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>

        <div
          id={`resume-panel-${active}`}
          role="tabpanel"
          aria-labelledby={`resume-tab-${active}`}
          className="mt-4 min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm dark:border-[#334155] dark:bg-[#111827] sm:mt-6 sm:p-6 lg:p-8"
        >
          {active === "experience" && <Experience />}
          {active === "education" && <Education />}
          {active === "skills" && <Skills />}
        </div>
      </div>
    </div>
  );
}
