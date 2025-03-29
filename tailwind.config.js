/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-white",
    "bg-green-200",
    "bg-pink-200",
    "bg-blue-200",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
