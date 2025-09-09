// export function Services() {
//   const services = [
//     {
//       id: "01",
//       title: "Frontend Development",
//       desc: "Building responsive, modern, and optimized UIs using React, Tailwind, and modern tools.",
//     },
//     {
//       id: "02",
//       title: "Backend Development",
//       desc: "Creating robust APIs and server-side logic with Node.js, Express, and secure databases.",
//     },
//     {
//       id: "03",
//       title: "Database Design & Architecture",
//       desc: "Designing efficient database schemas, optimizing queries, and managing data with MySQL, MongoDB, and PostgreSQL.",
//     },
//     {
//       id: "04",
//       title: "Full Stack Solutions",
//       desc: "Delivering end-to-end web applications with seamless frontend and backend integration.",
//     },
//   ];

//   return (
//     <section className="animate-fadeIn">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-5xl mx-auto">
//         {services.map((service) => (
//           <div
//             key={service.id}
//             className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-soft
//                        hover:shadow-glow hover:scale-105 transition duration-300
//                        bg-black/20 dark:bg-background-dark group"
//           >
//             <h1
//               className="text-4xl font-bold text-primary mb-2
//                            group-hover:text-primary transition-colors"
//             >
//               {service.id}
//             </h1>
//             <h2
//               className="text-2xl font-semibold mb-3
//                            text-primary transition-colors"
//             >
//               {service.title}
//             </h2>
//             <p className="text-sm text-text-para_light dark:text-text-para_dark">
//               {service.desc}
//             </p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
export function Services() {
  const services = [
    {
      id: "01",
      title: "Frontend Development",
      desc: "Building responsive, modern, and optimized UIs using React, Tailwind, and modern tools.",
    },
    {
      id: "02",
      title: "Backend Development",
      desc: "Creating robust APIs and server-side logic with Node.js, Express, and secure databases.",
    },
    {
      id: "03",
      title: "Database Design & Architecture",
      desc: "Designing efficient database schemas, optimizing queries, and managing data with MySQL, MongoDB, and PostgreSQL.",
    },
    {
      id: "04",
      title: "Full Stack Solutions",
      desc: "Delivering end-to-end web applications with seamless frontend and backend integration.",
    },
  ];

  return (
    <section className="animate-fadeIn">
      {/* Heading */}
      <div className="text-center mb-12 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-primary relative inline-block">
          My <span className="text-accent">Services</span>
        </h2>

        {/* Reflection Effect */}
        <div className="absolute inset-x-0 top-full flex justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary/20 blur-sm select-none transform scale-y-[-1]">
            My <span className="text-accent/20">Services </span>
          </h2>
        </div>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center max-w-5xl mx-auto">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col border border-gray-300 dark:border-gray-700 rounded-xl p-6 shadow-soft
                       hover:shadow-glow hover:scale-105 transition duration-300
                       bg-black/20 dark:bg-background-dark group"
          >
            <h1
              className="text-4xl font-bold text-primary mb-2
                           group-hover:text-accent transition-colors"
            >
              {service.id}
            </h1>
            <h2 className="text-2xl font-semibold mb-3 text-primary group-hover:text-accent transition-colors">
              {service.title}
            </h2>
            <p className="text-sm text-text-para_light dark:text-text-para_dark">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
