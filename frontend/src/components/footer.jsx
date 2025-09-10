import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export function Footer() {
  const socials = [
    { id: 1, icon: <FaGithub />, url: "https://github.com/sakibscript" },
    {
      id: 2,
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/sakibul-alam-6ab53b325/",
    },
    { id: 3, icon: <FaTwitter />, url: "https://twitter.com/sakibscript" },
  ];

  const links = [
    { id: 1, label: "Home", to: "home" },
    { id: 2, label: "Services", to: "services" },
    { id: 3, label: "Resume", to: "resume" },
    { id: 4, label: "Projects", to: "projects" },
    { id: 5, label: "Contact", to: "contact" },
  ];

  return (
    <footer className="bg-background-light dark:bg-background-dark text-text-para_light dark:text-text-para_dark py-8 border-t border-gray-300 dark:border-gray-700 transition-colors duration-500">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <h1 className="text-2xl font-bold">Sakib</h1>

        <div className="flex gap-6 flex-wrap justify-center">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.to}`}
              className="hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-4">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-primary transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>

      <p className="text-center text-sm mt-6 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Sakibul Alam
      </p>
    </footer>
  );
}
