// // export function Education() {
// //   const education = [
// //     {
// //       id: 1,
// //       title: "Bachelor of Computer Science & Engineering",
// //       institute: "American International University-Bangladesh",
// //       startDate: "2022",
// //       endDate: "2025",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //     },
// //     {
// //       id: 2,
// //       title: "Higher Secondary Certificate",
// //       institute: "Chittagong Cantonment High School",
// //       startDate: "2018",
// //       endDate: "2020",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //     },
// //     {
// //       id: 3,
// //       title: "Bachelor of Computer Science & Engineering",
// //       institute: "American International University-Bangladesh",
// //       startDate: "2022",
// //       endDate: "2025",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //     },
// //     {
// //       id: 4,
// //       title: "Higher Secondary Certificate",
// //       institute: "Chittagong Cantonment High School",
// //       startDate: "2018",
// //       endDate: "2020",
// //       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
// //     },
// //   ];

// //   return (
// //     <div className="flex justify-center items-center max-w-6xl mx-auto max-h-2xl">
// //       <div className="flex flex-col gap-8 w-full">
// //         <div className="mb-6">
// //           <h1 className="text-3xl font-bold text-white">Education</h1>
// //           <span className="text-sm text-gray-400">
// //             Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
// //             voluptatibus!
// //           </span>
// //         </div>

// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //           {education.map((edu) => (
// //             <div
// //               key={edu.id}
// //               className="flex flex-col p-6 rounded-xl bg-background-light shadow-soft hover:shadow-glow transition-shadow duration-300"
// //             >
// //               <span className="text-sm text-accent font-semibold">
// //                 {edu.startDate} - {edu.endDate}
// //               </span>
// //               <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
// //                 {edu.title}
// //               </h2>
// //               <span className="text-gray-300 mt-1">{edu.institute}</span>
// //               <p className="text-gray-400 mt-2 text-sm">{edu.description}</p>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// export function Education() {
//   const education = [
//     {
//       id: 1,
//       title: "Bachelor of Computer Science & Engineering",
//       institute: "American International University-Bangladesh",
//       startDate: "2022",
//       endDate: "2025",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       id: 2,
//       title: "Higher Secondary Certificate",
//       institute: "Chittagong Cantonment High School",
//       startDate: "2018",
//       endDate: "2020",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       id: 3,
//       title: "Secondary School Certificate",
//       institute: "Chittagong Cantonment High School",
//       startDate: "2016",
//       endDate: "2018",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//     {
//       id: 4,
//       title: "Other Certification",
//       institute: "Some Institute",
//       startDate: "2015",
//       endDate: "2016",
//       description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
//     },
//   ];

//   return (
//     <div className="flex flex-col gap-6">
//       <h1 className="text-3xl font-bold text-white">Education</h1>
//       <span className="text-sm text-gray-400">
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
//         voluptatibus!
//       </span>

//       {/* Scrollable container */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-h-[36rem] overflow-y-auto pr-2">
//         {education.map((edu) => (
//           <div
//             key={edu.id}
//             className="flex flex-col p-6 rounded-xl bg-background-light shadow-soft hover:shadow-glow transition-shadow duration-300"
//           >
//             <span className="text-sm text-accent font-semibold">
//               {edu.startDate} - {edu.endDate}
//             </span>
//             <h2 className="text-xl md:text-2xl font-bold text-white mt-2">
//               {edu.title}
//             </h2>
//             <span className="text-gray-300 mt-1">{edu.institute}</span>
//             <p className="text-gray-400 mt-2 text-sm">{edu.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
export function Education() {
  const education = [
    {
      id: 1,
      title: "Bachelor of Computer Science & Engineering",
      institute: "American International University-Bangladesh",
      startDate: "2022",
      endDate: "2025",
      description:
        "Pursuing an undergraduate degree focused on software development, algorithms, database systems, artificial intelligence, and modern web technologies. Engaged in projects that apply theoretical knowledge to real-world applications.",
    },
    {
      id: 2,
      title: "Higher Secondary Certificate (HSC)",
      institute: "Chittagong Cantonment High School",
      startDate: "2018",
      endDate: "2020",
      description:
        "Completed Higher Secondary education in the Science stream with concentration on Mathematics, Physics, and Chemistry. Developed strong analytical and problem-solving skills through rigorous coursework.",
    },
    {
      id: 3,
      title: "Secondary School Certificate (SSC)",
      institute: "Ispahani Ideal High School",
      startDate: "2007",
      endDate: "2018",
      description:
        "Achieved a solid academic foundation in general education with distinction in core subjects. Built leadership and teamwork abilities through participation in extracurricular activities.",
    },
  ];

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold text-text-para_light dark:text-text-para_dark">
        Education
      </h1>
      <p className="text-sm text-text-para_light dark:text-text-para_dark">
        A summary of my academic qualifications
      </p>

      {/* Scrollable container showing 2 cards height */}
      <div
        className="flex flex-col gap-6 max-h-[22rem] overflow-y-auto pr-2 [&::-webkit-scrollbar]:w-2
    [&::-webkit-scrollbar-track]:bg-slate-800
    [&::-webkit-scrollbar-track]:rounded-full
    [&::-webkit-scrollbar-thumb]:bg-indigo-500
    [&::-webkit-scrollbar-thumb]:rounded-full
    [&::-webkit-scrollbar-thumb:hover]:bg-indigo-600
  "
      >
        {education.map((edu) => (
          <div
            key={edu.id}
            className="flex flex-col p-6 rounded-xl bg-black/20 shadow-soft hover:shadow-glow hover:scale-100 transition-shadow  duration-300"
          >
            <span className="text-sm">
              {edu.startDate} - {edu.endDate}
            </span>
            <h2 className="text-lg font-bold text-primary mt-2">{edu.title}</h2>
            <span className="text-text-para_light dark:text-text-para_dark text-sm font-semibold">
              {edu.institute}
            </span>
            <p className="text-text-para_light dark:text-text-para_dark mt-2 text-sm">
              {edu.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
