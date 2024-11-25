/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'], // Add Roboto as a custom font
      },
      boxShadow: {
        'custom': '0px 4px 4px 0px rgba(106, 116, 242, 0.35)', // Custom shadow
      },
    },
  },
  plugins: [],
}

