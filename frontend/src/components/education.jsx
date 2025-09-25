import {
  FaGraduationCap,
  FaCalendar,
  FaMapMarkerAlt,
  FaAward,
  FaBook,
} from "react-icons/fa";

export function Education() {
  const education = [
    {
      id: 1,
      title: "Bachelor of Computer Science & Engineering",
      institute: "American International University-Bangladesh",
      location: "Dhaka, Bangladesh",
      startDate: "2022",
      endDate: "2025",
      duration: "Expected 2025",
      description:
        "Pursuing an undergraduate degree focused on software development, algorithms, database systems, artificial intelligence, and modern web technologies. Engaged in projects that apply theoretical knowledge to real-world applications.",
      grade: "CGPA: 3.7/4.0",
      status: "In Progress",
      courses: [
        "Data Structures",
        "Algorithms",
        "Database Systems",
        "Web Technologies",
        "AI & ML",
      ],
      achievements: [
        "Dean's List",
        "Project Excellence Award",
        "Technical Fest Participant",
      ],
      icon: <FaGraduationCap />,
    },
    {
      id: 2,
      title: "Higher Secondary Certificate (HSC)",
      institute: "Chittagong Cantonment High School",
      location: "Chittagong, Bangladesh",
      startDate: "2018",
      endDate: "2020",
      duration: "2 years",
      description:
        "Completed Higher Secondary education in the Science stream with concentration on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills through rigorous coursework.",
      grade: "GPA: 5.0/5.0",
      status: "Completed",
      courses: ["Mathematics", "Physics", "Chemistry", "Biology"],
      achievements: [
        "Science Olympiad Participant",
        "Academic Excellence Award",
      ],
      icon: <FaBook />,
    },
    {
      id: 3,
      title: "Secondary School Certificate (SSC)",
      institute: "Ispahani Ideal High School",
      location: "Chittagong, Bangladesh",
      startDate: "2007",
      endDate: "2018",
      duration: "11 years",
      description:
        "Achieved a solid academic foundation in general education with distinction in core subjects. Built leadership and teamwork abilities through participation in extracurricular activities.",
      grade: "GPA: 5.0/5.0",
      status: "Completed",
      courses: ["Science", "Mathematics", "English", "Bangla"],
      achievements: ["Science Fair Winner", "Sports Captain", "Debate Team"],
      icon: <FaAward />,
    },
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 bg-gradient-to-r from-primary to-accent rounded-lg">
            <FaGraduationCap className="text-white text-xl" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Education Journey
          </h1>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          My academic qualifications and learning path that shaped my technical
          expertise
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-secondary transform translate-x-1"></div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={edu.id} className="relative flex gap-6 group">
              {/* Timeline Dot */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {edu.icon}
                </div>
              </div>

              {/* Content Card */}
              <div
                className="flex-1 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 
                            border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl 
                            transition-all duration-500 group-hover:scale-[1.02]"
              >
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4 gap-4">
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-300">
                      {edu.title}
                    </h2>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-lg font-semibold text-primary">
                        {edu.institute}
                      </span>
                      <span
                        className={`px-2 py-1 text-xs rounded-full font-medium text-center ${
                          edu.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400"
                            : "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400"
                        }`}
                      >
                        {edu.status}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-1">
                    <span className="px-3 py-1 bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 text-blue-600 dark:text-blue-400 text-sm rounded-full border border-blue-200 dark:border-blue-800">
                      {edu.duration}
                    </span>
                    <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                {/* Meta Information */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-primary" />
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaCalendar className="text-primary" />
                    <span>
                      {edu.startDate} - {edu.endDate}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {edu.description}
                </p>

                {/* Courses & Achievements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Relevant Courses */}
                  {/* <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <FaBook className="text-primary" />
                      Relevant Courses
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => (
                        <span
                          key={courseIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 
                                   text-xs rounded-lg border border-gray-200 dark:border-gray-600
                                   hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 
                                   hover:border-primary/30 hover:text-primary dark:hover:text-accent
                                   transition-all duration-300 cursor-default"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div> */}

                  {/* Achievements */}
                  {/* <div>
                    <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                      <FaAward className="text-primary" />
                      Achievements
                    </h4>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, achievementIndex) => (
                        <li
                          key={achievementIndex}
                          className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400"
                        >
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary to-accent rounded-full mt-1.5 flex-shrink-0"></div>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Ongoing Learning Card */}
        <div className="relative flex gap-6 group mt-8">
          <div className="flex-shrink-0 relative z-10">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <FaBook className="text-white text-lg" />
            </div>
          </div>

          <div
            className="flex-1 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 
                        rounded-2xl p-6 border border-green-200 dark:border-green-800
                        hover:shadow-lg transition-all duration-500 group-hover:scale-[1.02]"
          >
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Continuous Learning
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Currently expanding my skills in advanced topics including Cloud
              Computing, DevOps practices, and Machine Learning applications.
            </p>
            <div className="flex flex-wrap gap-2">
              {["AWS", "Docker", "Kubernetes", "TensorFlow", "GraphQL"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/50 dark:bg-gray-800/50 text-green-700 dark:text-green-300 text-xs rounded-full border border-green-200 dark:border-green-700"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
