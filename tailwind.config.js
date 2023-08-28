/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        neutral: {
          100: "#000112",
          200: "#20212c",
          300: "#2b2c37",
          400: "#3e3f4e",
          500: "#828fa3",
          600: "#e4ebfa",
          700: "#f4f7fd",
          800: "#fff",
        },
        primary: "#635fc7",
        "primary-light": "#a8a4ff",
        warning: "#ea5555",
        "warning-light": "#ff9898",
        inputBorder: "rgba(130, 143, 163, 0.25)",
        placeholderDark: "rgba(255, 255, 255, 0.25)",
        placeholderLight: "rgba(0, 1, 18, 0.25)",
        palePurpleBtn: "rgba(99, 95, 199, 0.10)",
      },
      boxShadow: {
        boardsModalLight: "0 10px 20px 0px rgba(0, 0, 0, 0.5)",
        boardsModalDark: "0 10px 20px 0px rgba(54, 78, 126, 0.25)",
      },
      backgroundImage: {
        cross: "url('/assets/icon-cross.svg')",
      },
    },
  },
  plugins: [],
};
