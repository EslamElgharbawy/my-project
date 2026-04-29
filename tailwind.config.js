/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fe4407",
        secondary: "#272B37",
        background:"#F4F4F4",
        accent: "#8CD42F",
        textMain: "#666666",
        border: "#cccccc",
        white: "#ffffff",
      },
      screens: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
