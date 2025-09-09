import { FaBriefcase, FaCalendar, FaMapMarkerAlt } from "react-icons/fa";

export function Experience() {
  const experience = [
    {
      id: 1,
      title: "Software Developer",
      company: "Tech Solutions Ltd.",
      location: "Dhaka, Bangladesh",
      startDate: "2022",
      endDate: "Present",
      description:
        "Building and maintaining scalable web applications with modern frameworks. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    },
    {
      id: 2,
      title: "Web Developer Intern",
      company: "XYZ Tech",
      location: "Dhaka, Bangladesh",
      startDate: "2021",
      endDate: "2022",
      description:
        "Assisted in frontend and backend development tasks, optimized website performance, and implemented responsive designs for clients.",
    },
  ];

  return (
    <div className="flex justify-center items-center max-w-5xl mx-auto">
      <div className="flex flex-col justify-center items-start gap-6 w-full">
        <h1 className="text-3xl font-bold text-text-para_light dark:text-text-para_dark">
          Experience
        </h1>
        <p className="text-sm text-text-para_light dark:text-text-para_dark">
          A summary of my professional journey and roles I’ve taken.{" "}
          <span className="text-accent font-bold">*</span>This are the dummy
          data for now and will be replaced with actual data.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col gap-4 bg-black/20 p-6 rounded-xl shadow-soft hover:shadow-glow transition-all duration-300"
            >
              {/* Job Title & Company */}
              <div className="flex items-center gap-3">
                <FaBriefcase className="text-primary text-xl" />
                <div>
                  <h2 className="text-lg font-semibold text-primary dark:text-text-para_dark">
                    {exp.title}
                  </h2>
                  <span className="text-text-para_light dark:text-text-para_dark text-sm font-semibold">
                    {exp.company}
                  </span>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-text-para_light dark:text-text-para_dark text-sm">
                <FaMapMarkerAlt className="text-primary" />
                <span>{exp.location}</span>
              </div>

              {/* Dates */}
              <div className="flex items-center gap-3 text-text-para_light dark:text-text-para_dark text-sm">
                <FaCalendar className="text-primary" />
                <span>
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>

              {/* Description */}
              <p className="text-text-para_light dark:text-text-para_dark text-sm leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
