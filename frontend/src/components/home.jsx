import { FaDownload, FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Me from "../assets/me.png";
import resume from "../assets/Resume-Sakib.pdf";
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
      statValue: "8",
    },
    {
      id: 3,
      statTitle: "Technologies Mastered",
      statValue: "14",
    },
    {
      id: 4,
      statTitle: "Code Commits",
      statValue: "80",
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
          <h2 className="text-5xl md:text-6xl font-bold text-primary-dark">
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
              href={resume}
              download={true}
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
        <div className="rounded-full p-1 bg-gradient-to-b from-primary/60 to-accent/50 shadow-accent/40 shadow-2xl">
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
                className="text-4xl md:text-5xl font-bold  bg-gradient-to-r from-primary to-accent 
                     text-transparent bg-clip-text"
              >
                {count}
              </h1>
              <p className="text-sm w-16 text-text-para_light/80 dark:text-text-para_dark/80">
                {stat.statTitle}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
