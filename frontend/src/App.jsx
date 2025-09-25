import { useState, useEffect, useRef } from "react";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Services } from "./components/services";
import { Resume } from "./components/resume";
import { Projects } from "./components/projects";
import { Contact } from "./components/contacts";
import AOS from "aos";
import "aos/dist/aos.css";
import { Footer } from "./components/footer";
import toast, { Toaster } from "react-hot-toast";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRef = useRef(null);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode !== null) {
      setDarkMode(storedMode === "true");
    }

    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: "ease-out-cubic",
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

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="bg-background-light dark:bg-background-dark text-gray-900 dark:text-gray-100 scroll-smooth transition-all duration-500">
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "rgba(17, 25, 40, 0.95)",
            color: "#fff",
            backdropFilter: "blur(20px)",
            borderRadius: "16px",
            padding: "16px 20px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.1)",
            marginTop: "90px",
          },
          success: {
            style: {
              background: "linear-gradient(135deg, #00b09b, #96c93d)",
            },
            iconTheme: { primary: "white", secondary: "#00b09b" },
          },
          error: {
            style: {
              background: "linear-gradient(135deg, #ff416c, #ff4b2b)",
            },
            iconTheme: { primary: "white", secondary: "#ff416c" },
          },
        }}
      />
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 dark:bg-secondary/5 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 dark:bg-accent/5 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
      </div>

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
      />

      {/* Progress Indicator */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 flex flex-col gap-3 lg:flex">
        {["home", "services", "resume", "projects", "contact"].map(
          (section) => (
            <button
              key={section}
              onClick={() => scrollToSection(section)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                activeSection === section
                  ? "bg-primary dark:bg-primary-light scale-150"
                  : "bg-gray-400 dark:bg-gray-600 hover:bg-gray-500 dark:hover:bg-gray-500"
              }`}
              title={section.charAt(0).toUpperCase() + section.slice(1)}
            />
          )
        )}
      </div>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-32 pb-16 px-6 scroll-mt-24"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto w-full">
          <Home />
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="min-h-[calc(100vh-80px)] py-16 px-6 scroll-mt-24 relative"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent dark:via-gray-900/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <Services />
        </div>
      </section>

      {/* Resume Section */}
      <section
        id="resume"
        className="min-h-[calc(100vh-80px)] py-16 px-6 scroll-mt-24 relative"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-light/20 to-transparent dark:via-background-dark/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <Resume />
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-[calc(100vh-80px)] py-16 px-6 scroll-mt-24 relative"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/30 to-transparent dark:via-gray-900/10"></div>
        <div className="max-w-7xl mx-auto relative">
          <Projects />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-[calc(100vh-80px)] py-16 px-6 scroll-mt-24 relative"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <div className="max-w-7xl mx-auto">
          <Contact />
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection("home")}
        className="fixed bottom-6 right-6 bg-primary dark:bg-primary-dark text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-40 hidden lg:block"
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>

      {/* Footer */}
      <footer
        className="relative bg-gradient-to-t from-background-light/80 to-background-light dark:from-background-dark/80 dark:to-background-dark backdrop-blur-sm"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <Footer />
      </footer>
    </div>
  );
}
