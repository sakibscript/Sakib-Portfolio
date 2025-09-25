import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaClock,
} from "react-icons/fa6";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const contactInfo = [
    {
      id: 1,
      value: "+880 1866-188084",
      icon: <FaPhone className="text-xl" />,
      label: "Phone",
      link: "tel:+8801866188084",
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      value: "sakibulalam557@gmail.com",
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      link: "mailto:sakibulalam557@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      value: "Bashundhara R/A, Dhaka, Bangladesh",
      icon: <FaLocationDot className="text-xl" />,
      label: "Location",
      link: "https://maps.google.com/?q=Bashundhara+R/A,Dhaka,Bangladesh",
      color: "from-red-500 to-pink-500",
    },
    {
      id: 4,
      value: "Available for projects",
      icon: <FaClock className="text-xl" />,
      label: "Status",
      link: "#",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const socialLinks = [
    {
      id: 1,
      icon: <FaWhatsapp className="text-xl" />,
      label: "WhatsApp",
      url: "https://wa.me/8801866188084",
      color: "from-green-400 to-green-600",
    },
    {
      id: 2,
      icon: <FaLinkedin className="text-xl" />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/sakibul-alam-6ab53b325/",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 3,
      icon: <FaGithub className="text-xl" />,
      label: "GitHub",
      url: "https://github.com/sakibscript",
      color: "from-gray-400 to-gray-600",
    },
    {
      id: 4,
      icon: <FaEnvelope className="text-xl" />,
      label: "Email",
      url: "mailto:sakibulalam557@gmail.com",
      color: "from-red-400 to-red-600",
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://sakib-portfolio-psui.onrender.com/message/message",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        toast.error(
          data.errors?.join(", ") || data.message || "Failed to send message"
        );
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20">
      <Toaster />

      {/* Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-primary/10 dark:bg-primary/20 border border-primary/20 rounded-full px-4 py-2 mb-4">
          <FaPaperPlane className="text-primary" />
          <span className="text-primary font-medium text-sm">
            Let's Connect
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Get In{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Touch
          </span>
        </h2>

        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Ready to bring your ideas to life? Let's discuss your project and
          create something amazing together.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                I'm always excited to connect, collaborate, or discuss new
                opportunities. Whether you have a project in mind, a question,
                or just want to say hello - feel free to reach out!
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((item) => (
                <a
                  key={item.id}
                  href={item.link}
                  target={item.link.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    item.link.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 
                             border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl 
                             transition-all duration-500 hover:scale-105 cursor-pointer 
                             min-w-0"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-r ${item.color} text-white shadow-lg`}
                    >
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      {" "}
                      {/* Added min-w-0 */}
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {item.label}
                      </p>
                      <p
                        className="font-semibold text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent 
                        break-words overflow-hidden"
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Follow Me On
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl bg-gradient-to-r ${social.color} text-white shadow-lg 
                             hover:shadow-xl transition-all duration-300 transform hover:scale-110 
                             hover:rotate-3 group`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 
                        border border-gray-200/50 dark:border-gray-700/50 shadow-xl overflow-hidden"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Send Me a Message
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Let's discuss your project requirements
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2 min-w-0">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="E.g., John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 
                             border border-gray-200/50 dark:border-gray-700/50 
                             placeholder-gray-400 dark:placeholder-gray-500
                             focus:ring-2 focus:ring-primary/50 focus:border-transparent
                             transition-all duration-300 backdrop-blur-sm box-border min-w-0"
                  />
                </div>

                <div className="space-y-2 min-w-0">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="E.g., johndoe@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 
                             border border-gray-200/50 dark:border-gray-700/50 
                             placeholder-gray-400 dark:placeholder-gray-500
                             focus:ring-2 focus:ring-primary/50 focus:border-transparent
                             transition-all duration-300 backdrop-blur-sm box-border min-w-0"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-gray-900/50 
                           border border-gray-200/50 dark:border-gray-700/50 
                           placeholder-gray-400 dark:placeholder-gray-500
                           focus:ring-2 focus:ring-primary/50 focus:border-transparent
                           transition-all duration-300 backdrop-blur-sm resize-none box-border"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 rounded-xl 
                         font-semibold shadow-lg hover:shadow-xl transition-all duration-300 
                         transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed
                         disabled:hover:scale-100 flex items-center justify-center gap-3 group"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending Message...
                  </>
                ) : (
                  <>
                    Send Message
                    <FaPaperPlane className="group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Quick Response Info */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 dark:text-green-400 font-medium">
                Quick Response Guaranteed
              </span>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              I typically respond to messages within a few hours. For urgent
              inquiries, feel free to call or message me on WhatsApp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
