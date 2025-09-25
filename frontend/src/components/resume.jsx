import { useState } from "react";
import { Experience } from "./experience";
import { Education } from "./education";
import { Skills } from "./skills";
import resumePdf from "../assets/Resume-Sakib.pdf";

import {
  FaDownload,
  FaUserTie,
  FaGraduationCap,
  FaCode,
  FaStar,
} from "react-icons/fa";

export function Resume() {
  const resumeStats = [
    {
      id: 1,
      title: "Experience",
      url: "experience",
      icon: <FaUserTie className="text-lg" />,
      count: "1",
      description: "Years of professional experience",
    },
    {
      id: 2,
      title: "Education",
      url: "education",
      icon: <FaGraduationCap className="text-lg" />,
      count: "3",
      description: "Academic degrees",
    },
    {
      id: 3,
      title: "Skills",
      url: "skills",
      icon: <FaCode className="text-lg" />,
      count: "20+",
      description: "Technologies mastered",
    },
  ];

  const [active, setActive] = useState("experience");

  return (
    <section className="animate-fadeIn py-20">
      {/* Heading Section */}
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full px-4 py-2 mb-4">
          <FaStar className="text-primary" />
          <span className="text-primary font-medium text-sm">My Journey</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Resume
          </span>
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          A comprehensive overview of my professional journey, education, and
          technical expertise
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {resumeStats.map((item) => (
            <div
              key={item.id}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 
                         rounded-2xl p-6 text-center border border-gray-200/50 dark:border-gray-700/50
                         hover:shadow-lg transition-all duration-300 cursor-pointer group"
              onClick={() => setActive(item.url)}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary to-accent rounded-xl mx-auto mb-3 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                {item.count}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/4">
            <div
              className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 
                          backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50
                          sticky top-24"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Why Choose Me?
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Experienced, skilled, and educated to deliver efficient,
                  user-friendly, and innovative applications
                </p>
              </div>

              <div className="space-y-3">
                {resumeStats.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActive(item.url)}
                    className={`
                      w-full flex items-center gap-4 p-4 rounded-xl text-left transition-all duration-300 
                      relative overflow-hidden group
                      ${
                        active === item.url
                          ? "bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 shadow-lg"
                          : "bg-gray-100/50 dark:bg-gray-700/50 border border-transparent hover:bg-gray-200/50 dark:hover:bg-gray-600/50"
                      }
                    `}
                  >
                    {/* Active Indicator */}
                    <div
                      className={`flex-shrink-0 w-2 h-2 rounded-full transition-all duration-300 ${
                        active === item.url
                          ? "bg-gradient-to-r from-primary to-accent scale-150"
                          : "bg-gray-400 group-hover:bg-primary"
                      }`}
                    ></div>

                    <div
                      className={`p-2 rounded-lg transition-colors duration-300 ${
                        active === item.url
                          ? "bg-gradient-to-r from-primary to-accent text-white"
                          : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {item.icon}
                    </div>

                    <div className="flex-1">
                      <span
                        className={`font-semibold transition-colors duration-300 ${
                          active === item.url
                            ? "text-primary dark:text-accent"
                            : "text-gray-700 dark:text-gray-300"
                        }`}
                      >
                        {item.title}
                      </span>
                    </div>

                    {/* Hover Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl ${
                        active === item.url ? "opacity-10" : ""
                      }`}
                    ></div>
                  </button>
                ))}
              </div>

              {/* Download Resume Button */}
              <a
                href={resumePdf}
                download={true}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full mt-6 bg-gradient-to-r from-primary to-accent text-white py-3 rounded-xl 
                               font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105
                               flex items-center justify-center gap-2 group"
              >
                Download Resume
                <FaDownload className="h-4 w-4 group-hover:animate-bounce" />
              </a>
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:w-3/4">
            <div
              className="bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-800/80 dark:to-gray-900/80 
                          backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50
                          min-h-[600px]"
            >
              {active === "experience" && <Experience />}
              {active === "education" && <Education />}
              {active === "skills" && <Skills />}
            </div>

            {/* Additional Info Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div
                className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 
                            rounded-xl p-4 text-center border border-green-200 dark:border-green-800"
              >
                <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                  100%
                </div>
                <div className="text-sm text-green-700 dark:text-green-300">
                  Client Satisfaction
                </div>
              </div>
              <div
                className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 
                            rounded-xl p-4 text-center border border-blue-200 dark:border-blue-800"
              >
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  24/7
                </div>
                <div className="text-sm text-blue-700 dark:text-blue-300">
                  Support Available
                </div>
              </div>
              <div
                className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 
                            rounded-xl p-4 text-center border border-purple-200 dark:border-purple-800"
              >
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  10+
                </div>
                <div className="text-sm text-purple-700 dark:text-purple-300">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
