/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#257F49',
        background: '#FFFFFF',
        text: '#121111',
      },
    },
  },
  plugins: [],
}

