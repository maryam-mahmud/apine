/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
      fontFamily: theme => ({
        'space': ['Space Grotesk', 'sans-serif'],
      }),
    },
  }