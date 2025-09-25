/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class", // enables class-based dark mode

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#6366F1", dark: "#4F46E5", light: "#818CF8" },
        accent: { DEFAULT: "#F59E0B", dark: "#D97706", light: "#FACC15" },
        background: {
          light: "#E6F4EA", // light background
          DEFAULT: "#f9fafb", // default (slightly gray)
          dark: "#111827", // dark background
          card: "#FCFDFB", // dark card
        },
        text: {
          light: "#4B4B4B", // almost black
          para_light: "#2F2F2F",
          dark: "#d1d5db", // gray-200 for dark text
          para_dark: "#F3F4F6", // gray-400 for dark text
        },
        // primary: { DEFAULT: "#6366F1", dark: "#4F46E5", light: "#A5B4FC" },
        // accent: { DEFAULT: "#F59E0B", dark: "#D97706", light: "#FBBF24" },
        // background: { DEFAULT: "#1e293b", light: "#0f172a", card: "#1e1e2e" },
        inputText: "#f3f4f6", // light gray
        bg_input_light: "#F9FAF9",
        bg_input_dark: "#1F2937",
        inputBorder_light: "#C9D6CC", // border color
        inputBorder_dark: "#374151",
        placeholder_light: "#6B7280",
        placeholder_dark: "#9CA3AF",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        heading: ["Poppins", "ui-sans-serif", "system-ui"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.1)",
        glow: "0 0 20px rgba(99,102,241,0.5)",
      },
      borderRadius: {
        xl: "0.65rem",
        "2xl": "1.25rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.6s ease-out forwards",
        float: "float 3s ease-in-out infinite",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.primary.DEFAULT"),
              "&:hover": { color: theme("colors.primary.dark") },
            },
            // h1: { fontFamily: theme("fontFamily.heading"), color: "#fff" },
            // h2: { fontFamily: theme("fontFamily.mono"), color: "#fff" },
            code: {
              fontFamily: theme("fontFamily.mono"),
              color: theme("colors.accent.light"),
            },
          },
        },
      }),
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    screens: {
      // Custom responsive breakpoints
      sm: "640px", // small devices (phones)
      md: "768px", // medium devices (tablets)
      lg: "1024px", // large devices (desktops)
      xl: "1280px", // extra large
      "2xl": "1536px", // ultra wide screens
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
