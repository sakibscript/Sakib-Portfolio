import { useState } from "react";
import { Experience } from "./experience";
import { Education } from "./education";
import { Skills } from "./skills";

export function Resume() {
  const resume = [
    { id: 1, title: "Experience", url: "experience" },
    { id: 2, title: "Education", url: "education" },
    { id: 3, title: "Skills", url: "skills" },
  ];

  const [active, setActive] = useState("experience");

  return (
    <section className="animate-fadeIn">
      {/* Heading */}
      <div className="text-center mb-12 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-primary relative inline-block">
          My <span className="text-accent">Resume</span>
        </h2>

        {/* Reflection Effect */}
        <div className="absolute inset-x-0 top-full flex justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary/20 blur-sm select-none transform scale-y-[-1]">
            My <span className="text-accent/20">Resume</span>
          </h2>
        </div>
      </div>
      <div className="flex flex-col max-w-6xl mx-auto md:flex-row gap-10">
        {/* <div className="flex flex-col max-w-6xl mx-auto mt-20 mb-20 p-6 md:flex-row gap-10"> */}
        {/* Sidebar / Buttons */}

        <div className="flex flex-col gap-4 md:w-1/4">
          <h1 className="text-3xl font-bold text-text-para_light dark:text-text-para_dark">
            Why hire me?
          </h1>
          <p className="text-sm text-text-para_light dark:text-text-para_dark">
            Experienced, skilled, and educated to deliver efficient,
            user-friendly, and innovative applications
          </p>
          {resume.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.url)}
              className={`
      w-full py-3 rounded-2xl text-center font-medium transition-all duration-300 
      relative overflow-hidden
      ${
        active === item.url
          ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
          : "bg-gray-800 text-gray-200 hover:bg-gradient-to-r hover:from-primary hover:to-accent hover:text-white hover:shadow-md"
      }
    `}
            >
              {/* Optional subtle underline animation */}
              <span
                className={`
        absolute left-0 bottom-0 h-1 w-0 bg-white transition-all duration-300
        ${active === item.url ? "w-full" : "group-hover:w-full"}
      `}
              ></span>
              {item.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="flex-1">
          {active === "experience" && <Experience />}
          {active === "education" && <Education />}
          {active === "skills" && <Skills />}
        </div>
      </div>
    </section>
  );
}
