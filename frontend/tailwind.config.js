import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        portfolio: {
          page: "#F4F5F8",
          surface: "#FFFFFF",
          accent: "#24496F",
          text: "#142238",
          muted: "#64748B",
          border: "#DCE3EC",
        },
      },
      fontFamily: {
        sans: ["DM Sans", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["Manrope", "DM Sans", "sans-serif"],
      },
      transitionDuration: {
        180: "180ms",
      },
    },
  },
  plugins: [forms, typography],
};
