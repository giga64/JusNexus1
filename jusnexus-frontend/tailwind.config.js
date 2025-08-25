/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nexus-dark': '#0a0a0f', // Um preto quase absoluto
        'nexus-primary': '#0D0D1A', // Azul muito escuro
        'nexus-secondary': '#1A1A2E', // Azul escuro
        'nexus-accent': '#00ffff', // Cyan Neon
        'nexus-purple': '#9f7aea', // Roxo Neon
        'nexus-green': '#39ff14', // Verde Neon
      },
      fontFamily: {
        'sans': ['"Orbitron"', 'sans-serif'], // Uma fonte com tema espacial/futurista
      }
    },
  },
  plugins: [],
}

