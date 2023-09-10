/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBg: '#4A154B',
        hoverBg : 'rgba(30, 30, 30, 0.4)'
      }
    },
  },
  plugins: [],
}

