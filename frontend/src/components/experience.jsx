import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCode,
  FaCheck,
} from "react-icons/fa";

export function Experience() {
  const experience = [
    {
      id: 1,
      title: "Junior Programmer",
      company: "Generation-Next IT Solutions Ltd.",
      location: "Dhaka, Bangladesh",
      startDate: "Feb 2025",
      endDate: "Present",
      duration: "Feb 2025 – Present",
      type: "Full-time",
      description:
        "Develop and maintain GPAC ERP SaaS features across business workflows, focusing on reliable transaction screens, reporting, and day-to-day usability.",
      technologies: [
        "ASP.NET Web Forms",
        "C#",
        "SQL Server",
        "ASMX Web Services",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "Crystal Reports",
      ],
      achievements: [
        "Contribute to Accounting, Sales, Purchase, Stock, and POS Reporting modules in the GPAC ERP platform.",
        "Build and improve transaction forms, dashboards, and reporting pages with ASP.NET, JavaScript, jQuery, and Bootstrap.",
        "Develop and maintain SQL Server stored procedures and Crystal Reports for operational and financial reporting.",
        "Support VAT-related workflows and report updates across voucher and transaction pages.",
      ],
    },
  ];

  const goToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-w-0">
      <header className="mb-7 sm:mb-9">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
            <FaBriefcase aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white sm:text-3xl">
            Work Experience
          </h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 sm:text-base">
          My professional journey and the work I contribute to. I am currently
          open to relevant opportunities.
        </p>
      </header>

      <div className="experience-list space-y-5">
        {experience.map((exp) => (
          <div key={exp.id} className="experience-item">
            <span className="experience-marker" aria-hidden="true">
              <FaBriefcase className="text-xs" />
            </span>

            <article className="min-w-0 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-md dark:border-[#334155] dark:bg-[#111827] sm:p-6">
              <div className="mb-4 flex min-w-0 flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="min-w-0">
                  <h3 className="text-xl font-bold leading-snug text-gray-900 dark:text-white sm:text-2xl">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-base font-semibold leading-6 text-primary dark:text-[#93C5FD] sm:text-lg">
                    {exp.company}
                  </p>
                  <span className="mt-2 inline-flex rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary dark:border-[#334155] dark:bg-[#1E3A5F] dark:text-[#dbeafe]">
                    {exp.type}
                  </span>
                </div>
                <span className="inline-flex max-w-full self-start rounded-full border border-[#BFDBFE] bg-[#DBEAFE] px-3 py-1.5 text-xs font-semibold leading-5 text-[#1D4ED8] dark:border-[#334155] dark:bg-[#1E3A5F] dark:text-[#BFDBFE] sm:text-sm">
                  {exp.duration}
                </span>
              </div>

              <div className="mb-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-gray-600 dark:text-gray-300">
                <span className="inline-flex min-w-0 items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 shrink-0 text-primary dark:text-[#93C5FD]" aria-hidden="true" />
                  <span>{exp.location}</span>
                </span>
              </div>

              <p className="mb-5 text-sm leading-7 text-gray-700 dark:text-gray-300 sm:text-base">
                {exp.description}
              </p>

              <div className="mb-5">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white">
                  <FaCode className="text-primary dark:text-[#93C5FD]" aria-hidden="true" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="max-w-full rounded-lg border border-gray-200 bg-[#F1F5F9] px-2.5 py-1.5 text-xs leading-5 text-gray-700 dark:border-[#334155] dark:bg-[#1E293B] dark:text-gray-200 sm:text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="mb-3 text-sm font-semibold text-gray-900 dark:text-white">
                  Key Contributions
                </h4>
                <ul className="space-y-3">
                  {exp.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="flex min-w-0 items-start gap-2.5 text-sm leading-6 text-gray-600 dark:text-gray-300"
                    >
                      <FaCheck className="mt-1.5 shrink-0 text-xs text-primary dark:text-[#93C5FD]" aria-hidden="true" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        ))}
      </div>

      <div className="mt-6 flex min-w-0 flex-col gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 dark:border-[#334155] dark:bg-[#111827] sm:flex-row sm:items-center sm:justify-between sm:p-5">
        <div className="min-w-0">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white sm:text-lg">
            Interested in working together?
          </h3>
          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-300">
            I welcome opportunities to build practical, reliable software.
          </p>
        </div>
        <button
          type="button"
          onClick={goToContact}
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark sm:w-auto"
        >
          Let&apos;s Connect <FaArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
