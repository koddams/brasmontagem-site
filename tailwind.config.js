/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cores da identidade visual da Brasmontagem
        primary: "#074FF0", // Azul principal
        secondary: "#EFA600", // Laranja secundário
      },
    },
  },
  plugins: [],
}

