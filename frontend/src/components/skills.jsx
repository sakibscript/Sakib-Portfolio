import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGit,
  FaFigma,
} from "react-icons/fa6";
import { SiTailwindcss } from "react-icons/si";

export function Skills() {
  const skills = [
    { id: 1, icon: FaHtml5, name: "HTML5" },
    { id: 2, icon: FaCss3, name: "CSS3" },
    { id: 3, icon: FaJs, name: "JavaScript" },
    { id: 4, icon: FaReact, name: "React" },
    { id: 5, icon: SiTailwindcss, name: "Tailwind CSS" },
    { id: 6, icon: FaNodeJs, name: "Node.js" },
    { id: 7, icon: FaGit, name: "Git" },
    { id: 8, icon: FaFigma, name: "Figma" },
  ];

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-start gap-4 max-w-6xl w-full px-4">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          My Skills
        </h1>
        <p className="text-sm text-text-para_light dark:text-text-para_dark max-w-3xl">
          Here are some of the technologies and tools I work with. I’m
          constantly learning and expanding my skill set.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 w-full">
          {skills.map((skill) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={skill.id}
                className="relative flex justify-center items-center p-6 bg-slate-800 rounded-2xl shadow-soft text-5xl text-white
                  hover:bg-gradient-to-br hover:from-indigo-500 hover:to-purple-500 hover:scale-110 transition-all duration-300 group overflow-hidden"
              >
                <IconComponent className="transition-opacity duration-300 group-hover:opacity-20" />

                <span className="absolute text-lg font-semibold text-text-para_dark opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
