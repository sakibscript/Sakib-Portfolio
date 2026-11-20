import { Icon } from "./icons";

const footerSocials = [
  { label: "GitHub", href: "https://github.com/sakibscript", icon: "Github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sakibul-alam-6ab53b325/", icon: "Linkedin" },
  { label: "Email", href: "mailto:sakibulalam557@gmail.com", icon: "Mail" },
];

const footerLinks = [
  { id: "home", label: "Home" },
  { id: "services", label: "What I do" },
  { id: "resume", label: "Experience" },
  { id: "projects", label: "Selected work" },
  { id: "contact", label: "Contact" },
];

export function Footer({ scrollToSection }) {
  return (
    <footer className="site-footer">
      <div className="layout-container">
        <div className="footer-main">
          <div>
            <button type="button" className="footer-wordmark" onClick={() => scrollToSection("home")}>SAKIBUL ALAM<span>.</span></button>
            <p className="footer-brand-copy">Software Engineer focused on building useful web applications, dependable backend systems, and clear product experiences.</p>
          </div>
          <div className="footer-right">
            <nav aria-label="Footer navigation" className="footer-links">
              {footerLinks.map((link) => <button type="button" key={link.id} onClick={() => scrollToSection(link.id)}>{link.label}</button>)}
            </nav>
            <div className="footer-socials" aria-label="Social profiles">
              {footerSocials.map((social) => <a key={social.label} href={social.href} target={social.href.startsWith("http") ? "_blank" : undefined} rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={social.label} title={social.label}><Icon name={social.icon} size={17} /></a>)}
            </div>
          </div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Sakibul Alam</span><span>Designed & built with care.</span></div>
      </div>
    </footer>
  );
}
