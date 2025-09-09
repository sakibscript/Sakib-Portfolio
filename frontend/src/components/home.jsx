// import { FaGithub, FaLinkedinIn, FaTwitter, FaDownload } from "react-icons/fa6";
// import { Link } from "react-router-dom";
// import Me from "../assets/me.jpg";

// export function Home() {
//   const links = [
//     {
//       id: 1,
//       icon: <FaGithub />,
//       url: "https://github.com/sakibscript",
//     },
//     {
//       id: 2,
//       icon: <FaLinkedinIn />,
//       url: "https://www.linkedin.com/in/sakibul-alam-6ab53b325/",
//     },
//     {
//       id: 3,
//       icon: <FaTwitter />,
//       url: "https://twitter.com/sakibscript",
//     },
//   ];
//   return (
//     <div className="flex justify-center animate-fadeIn">
//       <div>
//         <div className="flex justify-around items-center gap-14">
//           <div className="flex flex-col justify-center items-start gap-4 max-w-4xl p-6 ">
//             {/* <div className="flex justify-around items-start gap-6 w-full"> */}
//             <span>Software Developer</span>
//             <h1 className="text-3xl">Hello I'm</h1>
//             <h2 className="text-6xl text-bold text-primary">Sakibul Alam</h2>
//             <p className="text-sm max-w-md">
//               Passionate about building modern, scalable, and responsive web
//               applications. Always eager to learn and explore the latest
//               technologies in web development.
//             </p>
//             <div className="flex justify-evenly items-center gap-6 mt-2 text-xs">
//               <div
//                 className={
//                   "border border-primary-dark rounded-2xl px-4 py-1 text-gray-300 cursor-pointer hover:text-primary hover:border-primary hover:shadow-glow flex items-center gap-2 w-max"
//                 }
//               >
//                 <div className="flex items-center gap-2">
//                   RESUME
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke-width="1.5"
//                     stroke="currentColor"
//                     class="size-6"
//                     className="h-4 w-4"
//                   >
//                     <path
//                       stroke-linecap="round"
//                       stroke-linejoin="round"
//                       d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
//                     />
//                   </svg>
//                 </div>
//               </div>
//               {/* social links */}
//               <div className="flex justify-around items-center gap-4">
//                 {links.map((link) => (
//                   <Link
//                     key={link.id}
//                     className="border border-primary-dark rounded-2xl px-2 py-1 text-sm text-gray-300 cursor-pointer hover:text-primary hover:border-primary hover:shadow-glow"
//                     to={link.url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     {link.icon}
//                   </Link>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="rounded-full p-1 bg-gradient-to-tr from-primary to-accent">
//             <img
//               src={Me}
//               alt="Sakibul Alam"
//               className="rounded-full w-80 h-80 object-cover border-4 border-background shadow-2xl hover:scale-105 transition-transform duration-300"
//             />
//           </div>
//         </div>
//         <div className="flex justify-around items-center gap-14 mt-20 text-xs w-full">
//           {/* experience */}
//           <div className="flex justify-end gap-3">
//             <h1 className="text-4xl font-bold">1</h1>
//             <div className="text-sm flex flex-col">
//               Years of <div>experience</div>
//             </div>
//           </div>
//           {/* projects */}
//           <div className="flex justify-end gap-3">
//             <h1 className="text-4xl font-bold">26</h1>
//             <div className="text-sm flex flex-col">
//               projects<div>completed</div>
//             </div>
//           </div>
//           {/* technologies */}
//           <div className="flex justify-end gap-3">
//             <h1 className="text-4xl font-bold">8</h1>
//             <div className="text-sm flex flex-col">
//               Technologies <div>mastered</div>
//             </div>
//           </div>
//           {/* code commits */}
//           <div className="flex justify-end gap-3">
//             <h1 className="text-4xl font-bold">87</h1>
//             <div className="text-sm flex flex-col">
//               Code <div>commits</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { FaDownload, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Me from "../assets/me.jpg";
import { useEffect, useRef, useState } from "react";

export function Home() {
  const links = [
    {
      id: 1,
      icon: <FaGithub />,
      url: "https://github.com/sakibscript",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/sakibul-alam-6ab53b325/",
    },
    {
      id: 3,
      icon: <FaTwitter />,
      url: "https://twitter.com/sakibscript",
    },
  ];

  const stats = [
    {
      id: 1,
      statTitle: "Years of Experience",
      statValue: "1",
    },
    {
      id: 2,
      statTitle: "Projects Completed",
      statValue: "26",
    },
    {
      id: 3,
      statTitle: "Technologies Mastered",
      statValue: "8",
    },
    {
      id: 4,
      statTitle: "Code Commits",
      statValue: "87",
    },
  ];

  // Helper for animated counting

  function useCountUp(to, duration = 2000) {
    const [count, setCount] = useState(1);
    const raf = useRef();

    useEffect(() => {
      let start = null;
      const from = 0;
      const end = parseInt(to, 10);

      function animate(ts) {
        if (!start) start = ts;
        const progress = Math.min((ts - start) / duration, 1);
        const value = Math.floor(progress * (end - from) + from);
        setCount(value);
        if (progress < 1) {
          raf.current = requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      }
      raf.current = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(raf.current);
    }, [to, duration]);

    return count;
  }

  return (
    <div className="flex justify-center flex-col animate-fadeIn gap-20">
      <div className="flex flex-col lg:flex-row justify-around items-center gap-14 w-full max-w-7xl">
        {/* Text Content */}
        <div className="flex flex-col justify-center items-start gap-4 max-w-2xl text-start lg:text-left">
          <span className="text-primary font-medium">Software Developer</span>
          <h1 className="text-2xl md:text-3xl font-semibold text-text-para_light dark:text-text-para_dark">
            Hello I'm
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-primary-dark">
            Sakibul Alam
          </h2>
          <p className="text-sm md:text-base text-text-para_light dark:text-text-para_dark leading-relaxed">
            Passionate about building modern, scalable, and responsive web
            applications. Always eager to learn and explore the latest
            technologies in web development.
          </p>

          {/* Resume & Social Links */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 mt-4">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-primary rounded-2xl px-4 py-2 text-text-para_light dark:text-text-para_dark cursor-pointer 
                         hover:text-primary dark:hover:text-primary hover:border-primary hover:shadow-glow flex items-center gap-2 text-sm transition-all duration-300"
            >
              RESUME
              <FaDownload className="h-4 w-4" />
            </a>

            {/* Social links */}
            <div className="flex gap-4">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-primary rounded-2xl px-3 py-2 text-text-para_light dark:text-text-para_dark 
                             cursor-pointer hover:text-primary  dark:hover:text-primary hover:border-primary hover:shadow-glow transition-all duration-300"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Profile Image */}
        <div className="rounded-full p-1 bg-gradient-to-tr from-primary to-accent">
          <img
            src={Me}
            alt="Sakibul Alam"
            className="rounded-full w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 object-cover border-4 border-background-light dark:border-background-dark shadow-2xl 
                       hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full mx-auto">
        {stats.map((stat) => {
          const count = useCountUp(stat.statValue);
          return (
            <div
              key={stat.id}
              className="flex items-center justify-center gap-4"
            >
              <h1
                className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-primary to-accent 
                     text-transparent bg-clip-text"
              >
                {count}
              </h1>
              <p className="text-sm w-16 text-text-para_light dark:text-text-para_dark">
                {stat.statTitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
