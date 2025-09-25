import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaHeart,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-scroll";

export function Footer() {
  const socials = [
    {
      id: 1,
      icon: <FaGithub />,
      url: "https://github.com/sakibscript",
      label: "GitHub",
      color: "hover:text-gray-400",
    },
    {
      id: 2,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sakibul-alam-6ab53b325/",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      id: 3,
      icon: <FaTwitter />,
      url: "https://twitter.com/sakibscript",
      label: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      id: 4,
      icon: <FaEnvelope />,
      url: "mailto:sakibulalam557@gmail.com",
      label: "Email",
      color: "hover:text-red-400",
    },
  ];

  const links = [
    { id: 1, label: "Home", to: "home" },
    { id: 2, label: "Services", to: "services" },
    { id: 3, label: "Resume", to: "resume" },
    { id: 4, label: "Projects", to: "projects" },
    { id: 5, label: "Contact", to: "contact" },
  ];

  const quickLinks = [
    { id: 1, label: "Privacy Policy", url: "#" },
    { id: 2, label: "Terms of Service", url: "#" },
    { id: 3, label: "Sitemap", url: "#" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 border-t border-gray-200/50 dark:border-gray-700/50 transition-colors duration-500 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                Sakibul Alam
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer passionate about creating innovative web
              solutions and delivering exceptional user experiences.
            </p>
            <div className="flex gap-3">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl 
                           border border-gray-200/50 dark:border-gray-700/50 text-gray-600 dark:text-gray-400 
                           ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  aria-label={social.label}
                >
                  <span className="text-lg">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Navigation
            </h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    spy={true}
                    offset={-80}
                    className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 
                             hover:text-primary dark:hover:text-accent transition-all duration-300 
                             cursor-pointer hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    className="group flex items-center gap-2 text-gray-600 dark:text-gray-400 
                             hover:text-primary dark:hover:text-accent transition-all duration-300 
                             hover:translate-x-1"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FaEnvelope className="text-primary" />
                <a
                  href="mailto:sakibulalam557@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  sakibulalam557@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FaGithub className="text-primary" />
                <a
                  href="https://github.com/sakibscript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/sakibscript
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
                <FaLinkedin className="text-primary" />
                <a
                  href="https://www.linkedin.com/in/sakibul-alam-6ab53b325/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/sakibul-alam
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200/50 dark:border-gray-700/50 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} Sakibul Alam. </span>
          </div>

          <div className="flex items-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <span>All rights reserved</span>
            <span>•</span>
            <span>Designed & Developed by Sakibul Alam</span>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-accent 
                     text-white rounded-xl hover:shadow-lg transition-all duration-300 transform 
                     hover:scale-105"
            aria-label="Back to top"
          >
            <span className="text-sm">Back to Top</span>
            <FaArrowUp className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Floating CTA */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="mailto:sakibulalam557@gmail.com"
            className="group flex items-center gap-3 bg-gradient-to-r from-primary to-accent 
                     text-white px-6 py-3 rounded-full shadow-2xl hover:shadow-3xl 
                     transition-all duration-300 transform hover:scale-105"
          >
            <FaEnvelope className="group-hover:animate-bounce" />
            <span className="font-medium">Hire Me</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
