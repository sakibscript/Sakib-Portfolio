import { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaFigma,
  FaPython,
  FaPhp,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiCplusplus,
  SiOpengl,
  SiScikitlearn,
  SiPandas,
} from "react-icons/si";

export function Skills() {
  const skills = [
    { id: 1, icon: FaHtml5, name: "HTML5" },
    { id: 2, icon: FaCss3, name: "CSS3" },
    { id: 3, icon: FaJs, name: "JavaScript" },
    { id: 4, icon: FaReact, name: "React" },
    { id: 5, icon: SiTailwindcss, name: "Tailwind CSS" },
    { id: 6, icon: FaNodeJs, name: "Node.js" },
    { id: 7, icon: SiExpress, name: "Express.js" },
    { id: 8, icon: SiNestjs, name: "NestJS" },
    { id: 9, icon: FaPhp, name: "PHP" },
    { id: 10, icon: null, name: ".NET" },
    { id: 11, icon: SiPostgresql, name: "PostgreSQL" },
    { id: 12, icon: SiMysql, name: "MySQL" },
    { id: 13, icon: SiMongodb, name: "MongoDB" },
    { id: 14, icon: FaDatabase, name: "PL/SQL" },
    { id: 15, icon: FaPython, name: "Python" },
    { id: 16, icon: SiCplusplus, name: "C++" },
    { id: 17, icon: null, name: "C#" },
    { id: 18, icon: SiPandas, name: "Pandas" },
    { id: 19, icon: SiScikitlearn, name: "Scikit-learn" },
    { id: 20, icon: FaGit, name: "Git" },
    { id: 21, icon: FaFigma, name: "Figma" },
    { id: 22, icon: SiOpengl, name: "OpenGL" },
  ];

  const [visibleCount, setVisibleCount] = useState(10);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 10);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-start gap-4 max-w-6xl w-full px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          My Skills
        </h1>
        <p className="text-sm text-text-para_light dark:text-text-para_dark text-start">
          Here are some of the technologies and tools I work with. I’m
          constantly learning and expanding my skill set.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-6 w-full">
          {skills.slice(0, visibleCount).map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.id}
                className="relative flex justify-center items-center p-6 bg-slate-800 rounded-2xl shadow-md text-5xl text-white
                  hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 group overflow-hidden"
              >
                {IconComponent ? (
                  <IconComponent className="transition-all duration-300 group-hover:opacity-10" />
                ) : (
                  <span className="text-2xl font-bold transition-all duration-300 group-hover:opacity-10">
                    {skill.name}
                  </span>
                )}
                <span className="absolute text-lg font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 text-white">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>

        {visibleCount < skills.length && (
          <div className="flex justify-center w-full mt-6">
            <button
              onClick={loadMore}
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
