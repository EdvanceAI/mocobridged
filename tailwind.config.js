module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#E6F0F9',
          100: '#CCE1F4',
          200: '#99C3E9',
          300: '#67A4DE',
          400: '#3486D3',
          500: '#1E5A8D', // Main background blue
          600: '#184A75',
          700: '#12395C',
          800: '#0C2944',
          900: '#061A2C',
        },
        // Light blue shades for the icons/figures
        lightblue: {
          100: '#D6E6F2', // Lightest figure
          200: '#B8D1E5', // Medium figure
          300: '#9ABCD8', // Darkest figure
        }
      },
    },
  },
  plugins: [],
}