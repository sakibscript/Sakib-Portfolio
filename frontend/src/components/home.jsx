import Me from "../assets/me-cutout.png";
import resume from "../assets/Resume-Sakib.pdf";
import { Icon } from "./icons";

const socialLinks = [
  { label: "GitHub", icon: "Github", url: "https://github.com/sakibscript" },
  { label: "LinkedIn", icon: "Linkedin", url: "https://www.linkedin.com/in/sakibul-alam-6ab53b325/" },
  { label: "Email", icon: "Mail", url: "mailto:sakibulalam557@gmail.com" },
];

const proofPoints = [
  {
    value: "2+",
    label: "Years of experience",
    detail: "Building and improving real-world software since 2024.",
  },
  {
    value: "05",
    label: "ERP business areas",
    detail: "Accounting, sales, purchasing, stock, and reporting.",
  },
  {
    value: "08+",
    label: "Projects & studies",
    detail: "Product work, full-stack applications, and research.",
  },
];

export function Home({ scrollToSection }) {
  return (
    <div className="home-layout">
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">
            <span className="eyebrow-line" />
            SOFTWARE ENGINEER
            <span className="eyebrow-divider">/</span>
            DHAKA, BANGLADESH
          </p>

          <h1 className="hero-title">
            I turn complex work into <span className="accent-text">useful software.</span>
          </h1>
          <p className="hero-subtitle">Hello, I’m Sakibul Alam.</p>
          <p className="hero-description">
            I build web applications, APIs, and business systems with a focus on dependable backend logic, clear interfaces, and maintainable code. My experience spans ERP workflows, full-stack products, and data-driven projects.
          </p>

          <div className="hero-focus-line">
            <span className="focus-label">CURRENTLY</span>
            <p>Contributing to <strong>GPAC ERP SaaS</strong> at Generation-Next IT Solutions Ltd.</p>
          </div>

          <div className="hero-actions">
            <button type="button" className="btn-primary" onClick={() => scrollToSection("projects")}>
              Explore selected work <Icon name="ArrowUpRight" size={16} />
            </button>
            <a href={resume} download className="btn-secondary">
              Resume <Icon name="Download" size={16} />
            </a>
          </div>

          <div className="social-links" aria-label="Social profiles">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target={item.url.startsWith("http") ? "_blank" : undefined}
                rel={item.url.startsWith("http") ? "noopener noreferrer" : undefined}
                className="social-link"
                aria-label={item.label}
                title={item.label}
              >
                <Icon name={item.icon} size={18} />
                <span>{item.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-photo-scene">
            <img src={Me} alt="Portrait of Sakibul Alam" className="profile-photo" />
          </div>
          <div className="portrait-caption">
            <span className="caption-index">01 / PROFILE</span>
            <span>Engineer by practice. Problem-solver by habit.</span>
          </div>
        </div>
      </div>

      <div className="hero-proof" aria-label="Professional overview">
        {proofPoints.map((point) => (
          <div className="proof-item" key={point.label}>
            <strong className="proof-value">{point.value}</strong>
            <div className="proof-copy">
              <span className="proof-label">{point.label}</span>
              <span className="proof-detail">{point.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
