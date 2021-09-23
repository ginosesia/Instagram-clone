// tailwind.config.js
module.exports = {
   purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media',
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
        require('tailwind-scrollbar-hide')
  ],
}