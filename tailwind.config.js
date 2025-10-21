/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b58b7d",
        dark: "#1a1a1a",
      },
    },
  },
  plugins: [],
};
