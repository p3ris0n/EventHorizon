/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'stellar-purple': '#4e148c',
        'stellar-blue': '#0018a8',
      }
    },
  },
  plugins: [],
}
