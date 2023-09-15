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
        '50px': '50px',
        '90%': '90%',
        '80%': '80%'
      },
      width: {
        '50px': '50px',
        '100vw': '100vw',
        '325px': '325px',
        '40%': '40%',
        '50%': '50%',
        '100%': '100%',
        '20%': '20%',
        '60%': '60%'
      },
      backgroundColor: {
        'dark': '#111111'
      },
      fontFamily: {
        'inter': 'Inter'
      },
      fontSize: {
        '64px': '64px',
        'test': '3vw'
      },
      dropShadow: {
        'text': [ '0 20px 8px rgb(0 0 0 / 0.04)',
                '0 4px 3px rgb(0 0 0 / 0.4)']
      }
    },
  },
  plugins: [],
}

