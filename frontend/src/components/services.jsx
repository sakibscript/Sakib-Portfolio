import { useState } from "react";
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaRobot,
  FaArrowRight,
  FaLaptopCode,
  FaCloud,
  FaBrain,
} from "react-icons/fa";

export function Services() {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: "01",
      title: "Frontend Development",
      desc: "Building responsive, modern, and optimized UIs using React, Tailwind, and modern tools.",
      icon: <FaCode className="text-2xl" />,
      features: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      gradient: "from-blue-500 to-cyan-500",
      bgGradient:
        "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
    },
    {
      id: "02",
      title: "Backend Development",
      desc: "Creating robust APIs and server-side logic with Node.js, Express, .NET, and secure databases.",
      icon: <FaServer className="text-2xl" />,
      features: ["Node.js", "Express", ".NET", "REST APIs"],
      gradient: "from-purple-500 to-pink-500",
      bgGradient:
        "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
    },
    {
      id: "03",
      title: "Database Design & Architecture",
      desc: "Efficient schema design, query optimization with MySQL, MongoDB, PostgreSQL, and PL/SQL.",
      icon: <FaDatabase className="text-2xl" />,
      features: ["MySQL", "MongoDB", "PostgreSQL", "oracle"],
      gradient: "from-green-500 to-emerald-500",
      bgGradient:
        "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
    },
    {
      id: "04",
      title: "AI & ML Solutions",
      desc: "Building smart apps with predictive models and automation using AI/ML solutions.",
      icon: <FaRobot className="text-2xl" />,
      features: ["Python", "TensorFlow", "Pandas", "Scikit-learn"],
      gradient: "from-orange-500 to-red-500",
      bgGradient:
        "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
    },
  ];

  return (
    <section className="animate-fadeIn py-20">
      {/* Heading Section */}
      <div className="text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full px-4 py-2 mb-4">
          <FaLaptopCode className="text-primary" />
          <span className="text-primary font-medium text-sm">What I Offer</span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          My{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Services
          </span>
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Comprehensive solutions to bring your digital ideas to life with
          cutting-edge technologies and modern development practices.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`group relative overflow-hidden rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl
              bg-gradient-to-br ${service.bgGradient} border border-gray-200/50 dark:border-gray-700/50
              backdrop-blur-sm cursor-pointer`}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
            style={{
              transform:
                hoveredService && hoveredService !== service.id
                  ? "scale(0.95)"
                  : "scale(1)",
              opacity:
                hoveredService && hoveredService !== service.id ? 0.8 : 1,
            }}
          >
            {/* Background Pattern */}
            <div
              className={`absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-r ${service.gradient}`}
            ></div>

            {/* Animated Border */}
            <div
              className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            >
              <div className="absolute inset-[2px] rounded-2xl bg-white dark:bg-gray-900"></div>
            </div>

            <div className="relative z-10">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg`}
                  >
                    {service.icon}
                  </div>
                  <span className="text-5xl font-black text-gray-300/50 group-hover:text-gray-400/70 transition-colors">
                    {service.id}
                  </span>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                  <div
                    className={`p-2 rounded-full bg-gradient-to-r ${service.gradient} text-white`}
                  >
                    <FaArrowRight className="text-sm" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent transition-all duration-500">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>

              {/* Features List */}
              <div className="flex flex-wrap gap-2 mb-6">
                {service.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs font-medium bg-white/50 dark:bg-gray-800/50 rounded-full 
                             text-gray-700 dark:text-gray-300 border border-gray-200/50 dark:border-gray-700/50
                             group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-primary/10 group-hover:to-accent/10
                             group-hover:text-primary dark:group-hover:text-accent transition-all duration-300"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              {/* <div className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                <span>Learn more</span>
                <FaArrowRight className="text-xs" />
              </div> */}
            </div>

            {/* Hover Effect */}
            <div
              className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
