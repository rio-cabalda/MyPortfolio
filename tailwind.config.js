/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      maxWidth: {
        custom: "1366px",
      },
      screens: {
        'lg-custom': '1366px',
      },
    },
  },
  plugins: [],
}

