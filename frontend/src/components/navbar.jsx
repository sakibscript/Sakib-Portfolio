import { Link } from "react-scroll";
import { useState } from "react";
import { FaSun, FaMoon, FaBars, FaTimes } from "react-icons/fa";

export const Navbar = ({ darkMode, setDarkMode }) => {
  const [open, setOpen] = useState(false);
  const links = [
    { id: 1, path: "home", label: "Home" },
    { id: 2, path: "services", label: "Services" },
    { id: 3, path: "resume", label: "Resume" },
    { id: 4, path: "projects", label: "Projects" },
    { id: 5, path: "contact", label: "Contact" },
  ];

  return (
    <header
      className="p-3 flex justify-between md:justify-evenly items-center 
                       bg-background-light dark:bg-background-dark 
                       text-text-para_light dark:text-text-para_dark text-sm sticky top-0 z-50
                       transition-colors duration-500 shadow-sm"
    >
      {/* Logo */}
      <div className="relative cursor-pointer group">
        <Link
          to="home"
          smooth={true}
          duration={600}
          spy={true}
          offset={-80}
          className="text-3xl font-extrabold bg-gradient-to-r from-primary to-accent 
                     bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300"
        >
          Sa<span className="text-accent">kiB</span>
        </Link>

        {/* Reflection Effect */}
        <div className="absolute inset-x-0 top-full flex justify-start opacity-50">
          <span
            className="text-2xl font-bold bg-gradient-to-r from-primary/30 to-accent/30 
                           bg-clip-text text-transparent blur-sm select-none transform scale-y-[-1]"
          >
            SakiB
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <nav className="hidden md:flex gap-8 items-center">
        {links.map((link) => (
          <Link
            key={link.id}
            to={link.path}
            smooth={true}
            duration={600}
            spy={true}
            offset={-35}
            activeClass="text-primary font-semibold"
            className="relative cursor-pointer transition-colors duration-300 
                       hover:text-primary after:content-[''] after:absolute after:left-0 
                       after:-bottom-1 after:w-0 after:h-[2px] after:bg-primary 
                       hover:after:w-full after:transition-all after:duration-300"
          >
            {link.label}
          </Link>
        ))}

        {/* Hire Me */}
        <Link
          to="contact"
          smooth={true}
          duration={600}
          spy={true}
          offset={-30}
          className="bg-primary text-white px-3 py-1.5 rounded-xl shadow-md
                     hover:bg-primary-dark hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          Let's connect
        </Link>

        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="ml-14 p-2 text-lg rounded-full bg-gray-200 dark:bg-gray-700 
                     hover:scale-110 transition-transform duration-300"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-4">
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-800 dark:text-gray-300 focus:outline-none"
        >
          {open ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
        >
          {darkMode ? (
            <FaSun className="text-yellow-400" />
          ) : (
            <FaMoon className="text-gray-800" />
          )}
        </button>
      </div>

      {/* Mobile Menu Links */}
      {open && (
        <div
          className="absolute top-full right-0 w-2xl bg-background-light/10 dark:bg-background-dark/10 
                        flex items-center flex-col gap-4 p-6 md:hidden backdrop-blur-md transition-colors duration-500"
        >
          {links.map((link) => (
            <Link
              key={link.id}
              to={link.path}
              smooth={true}
              duration={600}
              spy={true}
              offset={-80}
              activeClass="text-primary font-semibold"
              className="hover:text-primary cursor-pointer transition-colors duration-300"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="contact"
            smooth={true}
            duration={600}
            spy={true}
            offset={-80}
            className="bg-primary text-white px-4 py-1.5 rounded-xl shadow-md 
                       hover:bg-primary-dark hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => setOpen(false)}
          >
            Let's connect
          </Link>
        </div>
      )}
    </header>
  );
};
