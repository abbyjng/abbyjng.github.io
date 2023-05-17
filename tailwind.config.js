/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./public/projects/*.html",
  ],
  theme: {
    screens: {
      sm: "480px",
      // => @media (min-width: 480px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
    },
    extend: {
      boxShadow: {
        pixelPortrait: "10px 0 #1F1E25, -10px 0 #7761E8",
      },
      colors: {
        brightPurple: "#7761E8",
        blueWhite: "#F1F7FC",
        darkPurple: "#1F1E25",
        grey: "#94979A",
        lightPurple: "#AF9EFF",
      },
    },
  },
  plugins: [],
};
