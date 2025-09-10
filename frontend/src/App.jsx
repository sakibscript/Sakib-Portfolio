import { useState, useEffect } from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Services } from "./components/services";
import { Resume } from "./components/resume";
import { Projects } from "./components/projects";
import { Contact } from "./components/contacts";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components/footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode !== null) {
      setDarkMode(storedMode === "true");
    }

    AOS.init({
      duration: 1200,
      once: true,
      offset: 100,
      easing: "ease-in-out-cubic",
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
      className={`bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 scroll-smooth transition-colors duration-500`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center py-20 px-6 scroll-mt-24"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Home />
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-screen py-24 px-6 border-t border-gray-300 dark:border-gray-800 scroll-mt-24"
        data-aos="fade-right"
      >
        <div className="max-w-6xl mx-auto">
          <Services />
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="min-h-screen py-24 px-6 border-t border-gray-300 dark:border-gray-800 scroll-mt-24"
        data-aos="fade-down"
        data-aos-delay="300"
      >
        <div className="max-w-6xl mx-auto">
          <Resume />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen py-24 px-6 border-t border-gray-300 dark:border-gray-800 scroll-mt-24 scroll-smooth"
        data-aos="zoom-in-up"
      >
        <div className="max-w-6xl mx-auto">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen py-24 px-6 border-t border-gray-300 dark:border-gray-800 scroll-mt-24"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="max-w-6xl mx-auto">
          <Contact />
        </div>
      </section>

      {/* Footer */}
      <section
        className="transition-colors duration-500"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <Footer />
      </section>
    </div>
  );
}
