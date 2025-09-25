import {
  FaBriefcase,
  FaCalendar,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCode,
} from "react-icons/fa";

export function Experience() {
  const experience = [
    // {
    //   id: 1,
    //   title: "Full Stack Developer",
    //   company: "Tech Solutions Ltd.",
    //   location: "Dhaka, Bangladesh",
    //   startDate: "2022",
    //   endDate: "Present",
    //   duration: "2 years",
    //   description:
    //     "Building and maintaining scalable web applications with modern frameworks. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    //   technologies: ["React", "Node.js", "MongoDB", "AWS", "TypeScript"],
    //   type: "Full-time",
    //   achievements: [
    //     "Led development of 3 major client projects",
    //     "Improved application performance by 40%",
    //     "Mentored 2 junior developers",
    //   ],
    // },
    {
      id: 1,
      title: "Web Developer Intern",
      company: "XYZ Tech",
      location: "Dhaka, Bangladesh",
      startDate: "2021",
      endDate: "2022",
      duration: "Dummy",
      description:
        "Assisted in frontend and backend development tasks, optimized website performance, and implemented responsive designs for clients.",
      technologies: ["JavaScript", "Python", "MySQL", "Bootstrap"],
      type: "Internship",
      achievements: [
        "Developed 5+ client websites",
        "Reduced page load time by 30%",
        "Implemented responsive designs",
      ],
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
            <FaBriefcase className="text-white text-xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Work Experience
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          My professional journey and the roles I've embraced along the way.
          <span className="text-accent font-semibold">
            {" "}
            Currently open to new opportunities.
          </span>
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform translate-x-1"></div>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={exp.id} className="relative flex gap-6 group">
              {/* Timeline Dot */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <FaBriefcase className="text-white text-lg" />
                </div>
              </div>

              {/* Content Card */}
              <div
                className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 
                            border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl 
                            transition-all duration-500 group-hover:scale-[1.02]"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      {exp.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg font-semibold text-primary">
                        {exp.company}
                      </span>
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mt-2 lg:mt-0">
                    <span className="px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 text-green-600 dark:text-green-400 text-sm rounded-full border border-green-200 dark:border-green-800">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-primary" />
                    <span>
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <FaCode className="text-primary" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                                 text-xs rounded-full border border-gray-200 dark:border-gray-600
                                 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 
                                 hover:border-primary/30 hover:text-primary dark:hover:text-accent
                                 transition-all duration-300 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Achievements
                  </h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achievementIndex) => (
                      <li
                        key={achievementIndex}
                        className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                      >
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Future Opportunity Card */}
        <div className="relative flex gap-6 group mt-8">
          <div className="flex-shrink-0 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaArrowRight className="text-white text-lg" />
            </div>
          </div>

          <div
            className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 
                        rounded-2xl p-6 border-2 border-dashed border-gray-300 dark:border-gray-600
                        hover:border-primary/50 hover:shadow-lg transition-all duration-500 group-hover:scale-[1.02]"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Next Opportunity?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm always excited to take on new challenges and contribute to
              innovative projects.
            </p>
            <button
              className="bg-gradient-to-r from-primary to-accent text-white px-6 py-2 rounded-xl 
                             font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105
                             flex items-center gap-2 group"
            >
              Let's Connect
              <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
