import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3882F6",
          dark: "#2563EB",
          light: "#60A5FA",
        },
        secondary: {
          DEFAULT: "#06B6D4",
          dark: "#0891B2",
          light: "#67E8F9",
        },
        accent: {
          DEFAULT: "#06B6D4",
          dark: "#0891B2",
          light: "#67E8F9",
        },
        background: {
          light: "#F8FAFC",
          DEFAULT: "#FFFFFF",
          dark: "#0F172A",
          card: "#111827",
        },
        text: {
          light: "#0F172A",
          para_light: "#475569",
          dark: "#E2E8F0",
          para_dark: "#94A3B8",
        },
        inputText: "#F1F5F9",
        bg_input_light: "#FFFFFF",
        bg_input_dark: "#111827",
        inputBorder_light: "#E2E8F0",
        inputBorder_dark: "#334155",
        placeholder_light: "#64748B",
        placeholder_dark: "#94A3B8",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        soft: "0 8px 28px rgba(15, 23, 42, 0.06)",
        glow: "0 0 20px rgba(56, 130, 246, 0.14)",
      },
      borderRadius: {
        xl: "0.75rem",
        "2xl": "1.15rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-5px)" },
        },
        pulse: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.7" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out both",
        float: "float 4s ease-in-out infinite",
        "pulse-slow": "pulse 5s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },
  plugins: [forms, typography],
};
