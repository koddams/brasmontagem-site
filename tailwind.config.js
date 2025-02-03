// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: { // ✅ Correção crucial
      colors: {
        primary: {
          light: '#1F3B73',
          dark: '#1453A6',
          accent: '#F2A71B'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'] // Fonte mais moderna
      },
      animation: {
        gradient: 'gradient 15s ease infinite'
      }
    }
  }
}