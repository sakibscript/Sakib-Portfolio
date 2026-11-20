import { Icon } from "./icons";

const links = [
  { id: "home", label: "Home", description: "Introduction" },
  { id: "services", label: "What I do", description: "Capabilities" },
  { id: "resume", label: "Experience", description: "Work and education" },
  {
    id: "projects",
    label: "Selected work",
    description: "Projects and research",
  },
  { id: "contact", label: "Contact", description: "Get in touch" },
];

export const Navbar = ({
  darkMode,
  setDarkMode,
  activeSection,
  scrollToSection,
  menuOpen,
  setMenuOpen,
}) => (
  <header className="site-header">
    <div className="layout-container nav-inner">
      <button
        type="button"
        className="brand-link"
        onClick={() => scrollToSection("home")}
        aria-label="Sakibul Alam, home"
      >
        <span className="brand-name">
          SAKIBUL ALAM<span className="brand-period">.</span>
        </span>
        <span className="brand-role">SOFTWARE ENGINEER</span>
      </button>

      <nav className="nav-links" aria-label="Main navigation">
        {links.map((link) => (
          <button
            type="button"
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`nav-link ${activeSection === link.id ? "is-active" : ""}`}
            aria-current={activeSection === link.id ? "page" : undefined}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="nav-actions">
        <button
          type="button"
          className="icon-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={
            darkMode ? "Switch to light theme" : "Switch to dark theme"
          }
          title="Toggle theme"
        >
          <Icon name={darkMode ? "Sun" : "Moon"} size={18} />
        </button>
        <button
          type="button"
          className="btn-primary nav-cta"
          onClick={() => scrollToSection("contact")}
        >
          Start a conversation <Icon name="ArrowUpRight" size={16} />
        </button>
      </div>

      <div className="mobile-actions">
        <button
          type="button"
          className="icon-button"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={
            darkMode ? "Switch to light theme" : "Switch to dark theme"
          }
        >
          <Icon name={darkMode ? "Sun" : "Moon"} size={18} />
        </button>
        <button
          type="button"
          className="icon-button mobile-menu-toggle"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation-panel"
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={19} />
        </button>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation-panel"
          className="mobile-menu-panel"
          aria-label="Mobile navigation"
        >
          <div className="mobile-menu-heading">
            <span>Navigate</span>
            <span className="mobile-menu-caption">
              SOFTWARE ENGINEER · DHAKA
            </span>
          </div>
          {links.map((link, index) => (
            <button
              type="button"
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`mobile-menu-link ${activeSection === link.id ? "is-active" : ""}`}
              aria-current={activeSection === link.id ? "page" : undefined}
            >
              <span className="mobile-menu-number">0{index + 1}</span>
              <span className="mobile-menu-link-copy">
                <strong>{link.label}</strong>
                <small>{link.description}</small>
              </span>
              <Icon name="ArrowUpRight" size={17} />
            </button>
          ))}
          <button
            type="button"
            className="mobile-menu-contact"
            onClick={() => scrollToSection("contact")}
          >
            Let&apos;s talk <Icon name="ArrowUpRight" size={16} />
          </button>
        </nav>
      )}
    </div>
  </header>
);
