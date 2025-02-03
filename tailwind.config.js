// tailwind.config.js
module.exports = {
  theme: {
    extend: {
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