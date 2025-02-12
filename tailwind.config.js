module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1F3B73',    // Defina explicitamente
          DEFAULT: '#1453A6',
          dark: '#0F3A6D'
        },
        accent: '#F59E0B'      // Laranja
      },
      backgroundImage: {
        'industrial-pattern': "url('public/images/bg-pattern.svg')",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        title: ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}