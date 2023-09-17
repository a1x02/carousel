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
        '40px': '40px',
        '90%': '90%',
        '80%': '80%',
        '0.5vw': '0.5vw',
        '1vw': '1vw',
        '70vw': '70vh'
      },
      width: {
        '50px': '50px',
        '40px': '40px',
        '100vw': '100vw',
        '325px': '325px',
        '40%': '40%',
        '50%': '50%',
        '100%': '100%',
        '20%': '20%',
        '60%': '60%',
        '2%': '2%',
        '2.5vw': '2.5vw',
        '1vw': '1vw',
        '15vw': '15vw',
        '2vw': '2vw'
      },
      minWidth: {
        '50px': '50px'
      },
      backgroundColor: {
        'dark': '#111111'
      },
      fontFamily: {
        'inter': 'Inter'
      },
      fontSize: {
        '64px': '64px',
        'test': '3vw',
        '1.5vw': '1.5vw',
        '1vw': '1vw'
      },
      dropShadow: {
        'text': [ '0 20px 8px rgb(0 0 0 / 0.04)',
                '0 4px 3px rgb(0 0 0 / 0.4)']
      },
      inset: {
        '(-)20px': '-20px',
        '(-)1/2': '-50%',
        '2vw': '6vh',
        '1vw': '1vw',
        '1.5vw': '1.5vw',
        '5vw': '5vw'
      },
      translate: {
        '(-)50%': '-50%'
      },
      keyframes: {
        fadeOut: {
          '0%': {opacity: 1},
          '100%': {opacity: 0}
        },
        fadeIn: {
          '0%': {opacity: 0},
          '100%': {opacity: 1}
        },
      },
      animation: {
        fadeOut: 'fadeOut 0.1s ease forwards',
        fadeIn: 'fadeIn 0.1s ease forwards'
      },
      margin: {
        '0.5vw': '0.5vw',
        '2vw': '2vw'
      }
    },
  },
  plugins: [],
}

