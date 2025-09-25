import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { FaSun, FaMoon, FaBars, FaTimes, FaPaperPlane } from "react-icons/fa";

export const Navbar = ({
  darkMode,
  setDarkMode,
  activeSection,
  scrollToSection,
}) => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(activeSection || "home");
  const NAVBAR_HEIGHT = 80;

  const links = [
    { id: 1, path: "home", label: "Home" },
    { id: 2, path: "services", label: "Services" },
    { id: 3, path: "resume", label: "Resume" },
    { id: 4, path: "projects", label: "Projects" },
    { id: 5, path: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleSetActive = (to) => {
      setActiveLink(to);
      if (scrollToSection) scrollToSection(to);
    };

    setActiveLink(activeSection || "home");
  }, [activeSection, scrollToSection]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link
            to="home"
            smooth={true}
            duration={700}
            spy={true}
            offset={-NAVBAR_HEIGHT}
            onSetActive={() => setActiveLink("home")}
            className="group relative cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                  Sakib
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 -mt-1">
                  Software Developer
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                smooth={true}
                duration={700}
                spy={true}
                offset={-NAVBAR_HEIGHT}
                activeClass="text-primary"
                onSetActive={() => setActiveLink(link.path)}
                className={`relative px-3 py-2 font-medium transition-all duration-300 cursor-pointer
                  ${
                    activeLink === link.path
                      ? "text-primary"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary"
                  }`}
              >
                {link.label}
                {activeLink === link.path && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
                )}
              </Link>
            ))}

            {/* Action Buttons */}
            <div className="flex items-center gap-4 ml-4 pl-4 border-l border-gray-200 dark:border-gray-700">
              {/* Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="relative w-12 h-6 bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
                    darkMode
                      ? "transform translate-x-6"
                      : "transform translate-x-0"
                  }`}
                >
                  {darkMode ? (
                    <FaSun className="text-yellow-400 w-3 h-3 mx-auto" />
                  ) : (
                    <FaMoon className="text-gray-800 w-3 h-3 mx-auto" />
                  )}
                </div>
              </button>

              {/* Contact Button */}
              <Link
                to="contact"
                smooth={true}
                duration={700}
                spy={true}
                offset={-NAVBAR_HEIGHT}
                className="group bg-gradient-to-r from-primary to-accent text-white px-6 py-2.5 rounded-xl 
                         font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 
                         cursor-pointer flex items-center gap-2"
              >
                <FaPaperPlane className="group-hover:animate-pulse" />
                Let's Talk
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {darkMode ? (
                <FaSun className="text-yellow-400" />
              ) : (
                <FaMoon className="text-gray-800" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 transition-all duration-300 hover:scale-110"
              aria-label="Toggle menu"
            >
              {open ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg 
                     shadow-xl border-t border-gray-200 dark:border-gray-800 transition-all duration-300 ${
                       open
                         ? "max-h-96 opacity-100"
                         : "max-h-0 opacity-0 overflow-hidden"
                     }`}
        >
          <div className="px-4 py-6 space-y-4">
            {links.map((link) => (
              <Link
                key={link.id}
                to={link.path}
                smooth={true}
                duration={700}
                spy={true}
                offset={-NAVBAR_HEIGHT}
                activeClass="text-primary bg-primary/10"
                onSetActive={() => setActiveLink(link.path)}
                className={`block px-4 py-3 rounded-xl font-medium transition-all duration-300 cursor-pointer
                  ${
                    activeLink === link.path
                      ? "text-primary bg-primary/10"
                      : "text-gray-700 dark:text-gray-300 hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800"
                  }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Contact Button */}
            <Link
              to="contact"
              smooth={true}
              duration={700}
              spy={true}
              offset={-NAVBAR_HEIGHT}
              className="block bg-gradient-to-r from-primary to-accent text-white px-4 py-3 rounded-xl 
                       font-medium text-center hover:shadow-lg transition-all duration-300 cursor-pointer
                       flex items-center justify-center gap-2"
              onClick={() => setOpen(false)}
            >
              <FaPaperPlane />
              Let's Talk
            </Link>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gray-200 dark:bg-gray-800">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300"
          style={{
            width: `${
              ((links.findIndex((link) => link.path === activeLink) + 1) /
                links.length) *
              100
            }%`,
          }}
        />
      </div>
    </header>
  );
};
