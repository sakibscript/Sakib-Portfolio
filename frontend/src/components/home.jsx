import {
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaArrowRight,
} from "react-icons/fa6";
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
      label: "GitHub",
    },
    {
      id: 2,
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/sakibul-alam-6ab53b325/",
      label: "LinkedIn",
    },
    {
      id: 3,
      icon: <FaTwitter />,
      url: "https://twitter.com/sakibscript",
      label: "Twitter",
    },
  ];

  const stats = [
    {
      id: 1,
      statTitle: "Years of Experience",
      statValue: "1",
      suffix: "+",
    },
    {
      id: 2,
      statTitle: "Projects Completed",
      statValue: "12",
      suffix: "+",
    },
    {
      id: 3,
      statTitle: "Technologies Mastered",
      statValue: "20",
      suffix: "+",
    },
    {
      id: 4,
      statTitle: "Code Commits",
      statValue: "100",
      suffix: "+",
    },
  ];

  function useCountUp(to, duration = 2000) {
    const [count, setCount] = useState(0);
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
    <div className="flex justify-center flex-col animate-fadeIn gap-16 lg:gap-24">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-8 w-full max-w-7xl mx-auto">
        <div className="flex flex-col justify-center items-start gap-6 max-w-2xl text-center lg:text-left order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full px-4 py-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-primary font-medium text-sm">
              Software Developer
            </span>
          </div>

          {/* Headings */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Hi,I'm <br />
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Sakibul Alam
              </span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 dark:text-gray-300">
              Building Digital Experiences That Matter
            </h2>
          </div>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl">
            Passionate full-stack developer specializing in creating modern,
            scalable, and responsive web applications. I transform ideas into
            seamless digital experiences using cutting-edge technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <a
              href={resume}
              download={true}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-xl font-medium 
                         transition-all duration-300 transform hover:scale-105 hover:shadow-lg 
                         flex items-center gap-2 text-base shadow-md"
            >
              Download Resume
              <FaDownload className="h-4 w-4 group-hover:animate-bounce" />
            </a>

            <a
              href="#projects"
              className="group border-2 border-primary text-primary hover:bg-primary hover:text-white 
                         px-8 py-3 rounded-xl font-medium transition-all duration-300 transform 
                         hover:scale-105 flex items-center gap-2 text-base"
            >
              View My Work
              <FaArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-4 mt-6">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Follow me on
            </p>
            <div className="flex gap-3">
              {links.map((link) => (
                <Link
                  key={link.id}
                  to={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 
                             rounded-xl p-3 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary 
                             hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:scale-110
                             relative tooltip"
                  aria-label={link.label}
                >
                  {link.icon}
                  <span
                    className="tooltip-text absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                                 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 
                                 transition-opacity duration-300 whitespace-nowrap"
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 mx-auto">
          <div
            className="absolute inset-0 rounded-full
    bg-gradient-to-tr from-sky-500 via-slate-400 to-teal-600
    dark:from-sky-600 dark:via-slate-500 dark:to-teal-700
    animate-spin-slow blur-3xl opacity-50 z-0"
          ></div>

          <div className="absolute inset-1 rounded-full border-4 border-white/30 backdrop-blur-sm z-10"></div>

          <img
            src={Me}
            alt="Sakibul Alam"
            className="relative w-full h-full object-cover rounded-full z-20 shadow-2xl
      transition-transform duration-500 hover:scale-110 "
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 w-full max-w-5xl mx-auto">
        {stats.map((stat) => {
          const count = useCountUp(stat.statValue);
          return (
            <div
              key={stat.id}
              className="group bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 
                         rounded-2xl p-6 text-center hover:shadow-xl hover:border-primary/30 transition-all duration-300 
                         transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="relative">
                  <h1
                    className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent 
                               text-transparent bg-clip-text"
                  >
                    {count}
                    <span className="text-accent">{stat.suffix}</span>
                  </h1>
                </div>
                <p
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-900 
                            dark:group-hover:text-white transition-colors"
                >
                  {stat.statTitle}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-8">
        <div className="animate-bounce flex flex-col items-center gap-2 text-gray-400">
          <span className="text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
