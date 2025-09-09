import { useState, useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Services } from "./components/services";
import { Resume } from "./components/resume";
import { Projects } from "./components/projects";
import { Contact } from "./components/contacts";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode !== null) {
      setDarkMode(storedMode === "false");
    }

    AOS.init({
      duration: 1200, // smoother
      once: true, // play only once
      offset: 100, // trigger earlier
      easing: "ease-in-out-cubic", // premium easing
    });
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div
      className={`${
        darkMode ? "dark" : "light"
      } bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 scroll-smooth transition-colors duration-500`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center py-20 px-6"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Home />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen py-24 px-6 border-t border-gray-300 dark:border-gray-800"
        data-aos="fade-right"
      >
        <div className="max-w-6xl mx-auto">
          <Services />
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="min-h-screen py-24 px-6 border-t border-gray-300 dark:border-gray-800"
        data-aos="flip-left"
        data-aos-delay="300"
      >
        <div className="max-w-6xl mx-auto">
          <Resume />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen py-24 px-6 border-t border-gray-300 dark:border-gray-800"
        data-aos="zoom-in-up"
      >
        <div className="max-w-6xl mx-auto">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen py-24 px-6 border-t border-gray-300 dark:border-gray-800"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="max-w-6xl mx-auto">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <footer
        className="bg-transparent py-6 text-center text-gray-600 dark:text-gray-400 text-sm border-t border-gray-300 dark:border-gray-800 transition-colors duration-500"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        © {new Date().getFullYear()} Sakibul Alam. All rights reserved.
      </footer>
    </div>
  );
}
