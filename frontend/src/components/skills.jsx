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
  FaStar,
  FaRocket,
  FaLayerGroup,
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
  SiDotnet,
  SiNextdotjs,
} from "react-icons/si";

export function Skills() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleCount, setVisibleCount] = useState(12);

  const skillCategories = [
    { id: "all", name: "All Skills", icon: <FaLayerGroup />, count: 23 },
    { id: "frontend", name: "Frontend", icon: <FaReact />, count: 6 },
    { id: "backend", name: "Backend", icon: <FaNodeJs />, count: 5 },
    { id: "database", name: "Database", icon: <FaDatabase />, count: 4 },
    { id: "ai-ml", name: "AI/ML", icon: <FaRocket />, count: 3 },
    { id: "tools", name: "Tools", icon: <FaGit />, count: 2 },
  ];

  const skills = [
    {
      id: 1,
      icon: FaHtml5,
      name: "HTML5",
      category: "frontend",
      level: 95,
      color: "from-orange-500 to-orange-600",
    },
    {
      id: 2,
      icon: FaCss3,
      name: "CSS3",
      category: "frontend",
      level: 90,
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 3,
      icon: FaJs,
      name: "JavaScript",
      category: "frontend",
      level: 88,
      color: "from-yellow-500 to-yellow-600",
    },
    {
      id: 4,
      icon: FaReact,
      name: "React",
      category: "frontend",
      level: 85,
      color: "from-cyan-500 to-cyan-600",
    },
    {
      id: 5,
      icon: SiTailwindcss,
      name: "Tailwind CSS",
      category: "frontend",
      level: 92,
      color: "from-teal-500 to-teal-600",
    },

    {
      id: 6,
      icon: FaNodeJs,
      name: "Node.js",
      category: "backend",
      level: 82,
      color: "from-green-500 to-green-600",
    },
    {
      id: 7,
      icon: SiExpress,
      name: "Express.js",
      category: "backend",
      level: 80,
      color: "from-gray-500 to-gray-600",
    },
    {
      id: 8,
      icon: SiNestjs,
      name: "NestJS",
      category: "backend",
      level: 75,
      color: "from-red-500 to-red-600",
    },
    {
      id: 9,
      icon: FaPhp,
      name: "PHP",
      category: "backend",
      level: 78,
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 10,
      icon: SiDotnet,
      name: ".NET",
      category: "backend",
      level: 70,
      color: "from-purple-600 to-purple-700",
    },

    {
      id: 11,
      icon: SiPostgresql,
      name: "PostgreSQL",
      category: "database",
      level: 85,
      color: "from-blue-600 to-blue-700",
    },
    {
      id: 12,
      icon: SiMysql,
      name: "MySQL",
      category: "database",
      level: 88,
      color: "from-orange-600 to-orange-700",
    },
    {
      id: 13,
      icon: SiMongodb,
      name: "MongoDB",
      category: "database",
      level: 80,
      color: "from-green-600 to-green-700",
    },
    {
      id: 14,
      icon: FaDatabase,
      name: "PL/SQL",
      category: "database",
      level: 82,
      color: "from-red-600 to-red-700",
    },

    {
      id: 15,
      icon: FaPython,
      name: "Python",
      category: "ai-ml",
      level: 85,
      color: "from-yellow-600 to-yellow-700",
    },
    {
      id: 16,
      icon: SiCplusplus,
      name: "C++",
      category: "",
      level: 78,
      color: "from-blue-700 to-blue-800",
    },
    {
      id: 17,
      icon: null,
      name: "C#",
      category: "",
      level: 75,
      color: "from-purple-700 to-purple-800",
    },
    {
      id: 18,
      icon: SiPandas,
      name: "Pandas",
      category: "ai-ml",
      level: 80,
      color: "from-red-700 to-red-800",
    },
    {
      id: 19,
      icon: SiScikitlearn,
      name: "Scikit-learn",
      category: "ai-ml",
      level: 72,
      color: "from-orange-700 to-orange-800",
    },

    {
      id: 20,
      icon: FaGit,
      name: "Git",
      category: "tools",
      level: 90,
      color: "from-orange-800 to-orange-900",
    },
    {
      id: 21,
      icon: FaFigma,
      name: "Figma",
      category: "tools",
      level: 85,
      color: "from-pink-500 to-pink-600",
    },
    {
      id: 22,
      icon: SiOpengl,
      name: "OpenGL",
      category: "",
      level: 70,
      color: "from-gray-700 to-gray-800",
    },
    {
      id: 23,
      icon: SiNextdotjs,
      name: "Next.js",
      category: "frontend",
      level: 85,
      color: "from-gray-800 to-gray-900",
    },
  ];

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  const visibleSkills = filteredSkills.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

  const getCategorySkills = (categoryId) => {
    return skills.filter((skill) => skill.category === categoryId);
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full px-4 py-2 mb-4">
          <FaStar className="text-primary" />
          <span className="text-primary font-medium text-sm">
            Technical Expertise
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Skills
          </span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I work with. I'm constantly learning and
          expanding my skill set to stay ahead in the tech industry.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {skillCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => {
              setActiveCategory(category.id);
              setVisibleCount(12);
            }}
            className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 group ${
              activeCategory === category.id
                ? "bg-gradient-to-r from-primary to-accent text-white shadow-lg scale-105"
                : "bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 hover:text-primary dark:hover:text-accent"
            }`}
          >
            <span className="text-lg">{category.icon}</span>
            <span>{category.name}</span>
            <span
              className={`px-2 py-1 text-xs rounded-full ${
                activeCategory === category.id
                  ? "bg-white/20 text-white"
                  : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
              }`}
            >
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 mb-8">
        {visibleSkills.map((skill) => {
          const IconComponent = skill.icon;
          return (
            <div
              key={skill.id}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 
                         border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl 
                         transition-all duration-500 hover:scale-105 cursor-pointer"
            >
              {/* Skill Icon */}
              <div className="flex flex-col items-center gap-4">
                <div
                  className={`p-4 rounded-2xl bg-gradient-to-r ${skill.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {IconComponent ? (
                    <IconComponent className="text-3xl" />
                  ) : (
                    <span className="text-xl font-bold">{skill.name}</span>
                  )}
                </div>

                {/* Skill Name */}
                <span className="font-semibold text-gray-900 dark:text-white text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                  {skill.name}
                </span>

                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>

                <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                  {skill.level}%
                </span>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          );
        })}
      </div>

      {/* Load More Button */}
      {visibleCount < filteredSkills.length && (
        <div className="text-center">
          <button
            onClick={loadMore}
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl 
                       font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105
                       flex items-center gap-2 mx-auto"
          >
            <FaRocket className="animate-pulse" />
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
