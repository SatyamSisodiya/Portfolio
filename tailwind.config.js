// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Fira Code"', 'monospace'], // Set Fira Code as the main font
      },
    },
  },
  plugins: [],
};
