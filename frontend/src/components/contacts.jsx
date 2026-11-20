import { useState } from "react";
import toast from "react-hot-toast";
import { Icon } from "./icons";

const contactInfo = [
  { label: "Email", value: "sakibulalam557@gmail.com", href: "mailto:sakibulalam557@gmail.com", icon: "Mail" },
  { label: "Phone", value: "+880 1866-188084", href: "tel:+8801866188084", icon: "Phone" },
  { label: "Location", value: "Dhaka, Bangladesh", href: "https://maps.google.com/?q=Dhaka,Bangladesh", icon: "MapPin" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/sakibscript", icon: "Github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sakibul-alam-6ab53b325/", icon: "Linkedin" },
  { label: "WhatsApp", href: "https://wa.me/8801866188084", icon: "Message" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("https://sakib-portfolio-psui.onrender.com/message/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.errors?.join(", ") || data.message || "Unable to send your message.");
      toast.success(data.message || "Message sent successfully.");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-layout">
      <header className="section-heading section-heading-left contact-heading">
        <p className="section-kicker">05 / GET IN TOUCH</p>
        <h2 className="section-title">Have a problem worth solving?</h2>
        <p className="section-description">I’m open to thoughtful conversations about software engineering roles, product work, and collaboration.</p>
      </header>

      <div className="surface contact-surface">
        <div className="contact-details">
          <p className="contact-overline">LET’S MAKE SOMETHING USEFUL</p>
          <h3>Tell me what you’re working on.</h3>
          <p className="contact-intro">For a role, a product idea, or a technical conversation, the best place to start is a short message.</p>

          <ul className="contact-list">
            {contactInfo.map((item) => (
              <li className="contact-item" key={item.label}>
                <span className="contact-item-icon"><Icon name={item.icon} size={18} /></span>
                <div><span className="contact-label">{item.label}</span><a className="contact-value" href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}>{item.value}</a></div>
              </li>
            ))}
          </ul>

          <div className="contact-socials" aria-label="Social profiles">
            {socials.map((social) => (
              <a key={social.label} className="social-link" href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label} title={social.label}>
                <Icon name={social.icon} size={17} /><span>{social.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="contact-form-column">
          <div className="form-heading"><h3>Send a message</h3><span>REPLY BY EMAIL</span></div>
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-field"><label htmlFor="name">Your name</label><input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Name" autoComplete="name" required /></div>
              <div className="form-field"><label htmlFor="email">Email address</label><input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="name@example.com" autoComplete="email" required /></div>
            </div>
            <div className="form-field"><label htmlFor="message">What would you like to discuss?</label><textarea id="message" name="message" value={form.message} onChange={handleChange} placeholder="A little context about your message..." rows={5} required /></div>
            <button type="submit" className="btn-primary form-submit" disabled={loading}>{loading ? "Sending…" : "Send message"}<Icon name="ArrowUpRight" size={16} /></button>
          </form>
        </div>
      </div>
      <p className="contact-closing">Thanks for taking the time to visit. <span>— Sakib</span></p>
    </div>
  );
}
