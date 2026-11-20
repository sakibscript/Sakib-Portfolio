import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/navbar";
import { Home } from "./components/home";
import { Services } from "./components/services";
import { Resume } from "./components/resume";
import { Projects } from "./components/projects";
import { Contact } from "./components/contacts";
import { Icon } from "./components/icons";
import { Footer } from "./components/footer";

const sections = [
  { id: "home", label: "Home" },
  { id: "services", label: "What I do" },
  { id: "resume", label: "Experience" },
  { id: "projects", label: "Selected work" },
  { id: "contact", label: "Contact" },
];

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" && window.matchMedia("(max-width: 760px)").matches
  );
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    try {
      setDarkMode(localStorage.getItem("darkMode") === "true");
    } catch {
      setDarkMode(false);
    }

    const media = window.matchMedia("(max-width: 760px)");
    const updateViewport = () => setIsMobile(media.matches);
    updateViewport();
    media.addEventListener?.("change", updateViewport);
    return () => media.removeEventListener?.("change", updateViewport);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    try {
      localStorage.setItem("darkMode", String(darkMode));
    } catch {
      // Theme switching remains available when storage is blocked.
    }
  }, [darkMode]);

  useEffect(() => {
    const observedSections = document.querySelectorAll(".page-section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { threshold: [0.2, 0.4, 0.6], rootMargin: "-72px 0px -48% 0px" }
    );

    observedSections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    if (!sections.some((section) => section.id === sectionId)) return;
    setActiveSection(sectionId);
    setMenuOpen(false);
    const destination = document.getElementById(sectionId);
    destination?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="site-shell">
      <Toaster
        position={isMobile ? "top-center" : "bottom-right"}
        toastOptions={{
          duration: 3500,
          style: {
            background: darkMode ? "#162233" : "#FFFFFF",
            color: darkMode ? "#F4F7FB" : "#142238",
            border: `1px solid ${darkMode ? "#3A4B61" : "#D8E1EC"}`,
            borderRadius: "10px",
            padding: "12px 16px",
            fontSize: "13px",
            boxShadow: "none",
          },
        }}
      />

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
      />

      <main className="desktop-main" aria-label="Portfolio sections">
        <section id="home" className="page-section page-section-home">
          <div className="layout-container"><Home scrollToSection={scrollToSection} /></div>
        </section>
        <section id="services" className="page-section">
          <div className="layout-container"><Services /></div>
        </section>
        <section id="resume" className="page-section">
          <div className="layout-container"><Resume /></div>
        </section>
        <section id="projects" className="page-section">
          <div className="layout-container"><Projects /></div>
        </section>
        <section id="contact" className="page-section">
          <div className="layout-container"><Contact /></div>
        </section>
      </main>

      <Footer scrollToSection={scrollToSection} />
      <button
        type="button"
        onClick={() => scrollToSection("home")}
        className="back-to-top"
        aria-label="Back to top"
        title="Back to top"
      >
        <Icon name="ArrowUp" size={18} />
      </button>
    </div>
  );
}
