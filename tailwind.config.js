/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        kalam: ["Kalam", ...defaultTheme.fontFamily.sans],
        mirza: ["Mirza", ...defaultTheme.fontFamily.sans],
        libre: ["Libre Franklin", ...defaultTheme.fontFamily.sans],
        lobster: ["Lobster Two", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bodyColor: "#F2F2F2",
        primeColor: "#168C61",
        greenLight: "#24A681",
        darkGreen: "#06403D",
        purpleColor: "#5c1e8e",
        midnigh: "#292828",
        btnyel: "#f9d248",
      },
      backgroundImage: {
        hero: "url('/assets/payment.png')",
        contact: "url('/contact.jpg')",
        // "hero-pattern": "url('/public/svg1.svg)",
      },
    },
  },
  plugins: [],
};
