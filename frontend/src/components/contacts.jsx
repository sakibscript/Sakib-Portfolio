import {
  FaPhone,
  FaEnvelope,
  FaLocationDot,
  FaPaperPlane,
} from "react-icons/fa6";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const contact = [
    {
      cId: 1,
      value: "+880 1866-188084",
      icon: <FaPhone className="text-primary" />,
    },
    {
      cId: 2,
      value: "sakibulalam557@gmail.com",
      icon: <FaEnvelope className="text-primary" />,
    },
    {
      cId: 3,
      value: "Bashundhara R/A, Dhaka, Bangladesh",
      icon: <FaLocationDot className="text-primary" />,
    },
  ];

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:3000/message/message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Message sent successfully!");
        setForm({ name: "", email: "", message: "" }); // clear form
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
    <section className="animate-fadeIn text-text-para_light dark:text-text-para_dark">
      import toast, {Toaster} from "react-hot-toast";
      <Toaster
        position="top-right"
        toastOptions={{
          // Default styles for all toasts
          style: {
            background: "rgba(17, 25, 40, 0.75)", // glass background
            color: "#fff",
            backdropFilter: "blur(10px)",
            borderRadius: "12px",
            padding: "12px 16px",
            fontSize: "14px",
            fontWeight: "500",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
          },
          success: {
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)", // green gradient
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "green",
            },
          },
          error: {
            style: {
              background: "linear-gradient(to right, #ff416c, #ff4b2b)", // red gradient
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          },
        }}
      />
      {/* Heading */}
      <div className="text-center mb-12 relative ">
        <h2 className="text-4xl md:text-5xl font-bold text-primary relative inline-block">
          Get In <span className="text-accent">Touch</span>
        </h2>
        <div className="absolute inset-x-0 top-full flex justify-center">
          <h2 className="text-4xl md:text-5xl font-bold text-primary/20 blur-sm select-none transform scale-y-[-1]">
            Get In <span className="text-accent/20">Touch</span>
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center w-full mx-auto">
        {/* Left side */}
        <div className="flex flex-col justify-center items-start gap-6">
          <h1 className="text-3xl font-semibold">Contact Information</h1>
          <p className="text-sm">
            I’m always excited to connect, collaborate, or discuss new
            opportunities. Whether you have a project in mind, a question, feel
            free to reach out!
          </p>
          {contact.map((con) => (
            <div key={con.cId} className="flex items-center gap-2">
              <div className="text-2xl p-2">{con.icon}</div>
              <div className="flex flex-col ">
                <span>{con.value}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right side - Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-start gap-6 w-full"
        >
          <h1 className="text-3xl font-semibold">Let's connect</h1>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="p-3 w-full rounded-xl bg-bg_input_light/70 dark:bg-bg_input_dark/70
             border border-inputBorder_light dark:border-inputBorder_dark
             placeholder-placeholder_light dark:placeholder-placeholder_dark
             shadow-sm backdrop-blur-sm focus:ring-2 focus:ring-primary
             focus:border-primary transition-all duration-300"
          />

          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="p-3 w-full rounded-xl bg-bg_input_light/70 dark:bg-bg_input_dark/70
             border border-inputBorder_light dark:border-inputBorder_dark
             placeholder-placeholder_light dark:placeholder-placeholder_dark
             shadow-sm backdrop-blur-sm focus:ring-2 focus:ring-primary
             focus:border-primary transition-all duration-300"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Type your message here"
            className="p-3 w-full rounded-xl bg-bg_input_light/70 dark:bg-bg_input_dark/70
             border border-inputBorder_light dark:border-inputBorder_dark
             placeholder-placeholder_light dark:placeholder-placeholder_dark
             shadow-sm backdrop-blur-sm focus:ring-2 focus:ring-primary
             focus:border-primary transition-all duration-300 h-40 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl font-semibold text-white
                       bg-gradient-to-r from-primary to-accent
                       shadow-md hover:shadow-xl hover:scale-105
                       transition-all duration-300 flex items-center gap-2
                       focus:outline-none focus:ring-2 focus:ring-primary/50 disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message"}
            <FaPaperPlane className="animate-pulse" />
          </button>
        </form>
      </div>
    </section>
  );
}
