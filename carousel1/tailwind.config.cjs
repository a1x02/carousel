/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'arrow-left': "url('src/img/icon-arrow-left.svg')",
        'arrow-right': "url('src/img/icon-arrow-right.svg')"
      },
      height: {
        '854px': '854px',
        '9px': '9px',
        '50px': '50px'
      },
      width: {
        '50px': '50px',
        '100vw': '100vw'
      },
      backgroundColor: {
        'dark': '#111111'
      }
    },
  },
  plugins: [],
}

