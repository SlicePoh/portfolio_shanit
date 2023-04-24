/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    
    extend: {
      colors: {
        'hot-pink': '#ff1493',
        'cold-pink': '#f1c1e2',
        'trans': 'rgba(255, 255, 255, 0.2)'
      },
    },
  },
  plugins: [],
}