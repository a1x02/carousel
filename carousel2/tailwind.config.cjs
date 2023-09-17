/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{svelte,html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'arrow-left': "url('src/img/icon-arrow-left.svg')",
        'arrow-right': "url('src/img/icon-arrow-right.svg')",
        '0': "url('src/img/Escapists2_0.png')",
        '1': "url('src/img/Escapists2_1.png')",
        '2': "url('src/img/Escapists2_2.png')",
        '3': "url('src/img/Escapists2_3.png')",
        '4': "url('src/img/Escapists2_4.png')",
        '5': "url('src/img/Escapists2_5.png')",
        '6': "url('src/img/Escapists2_6.png')",
        '7': "url('src/img/Escapists2_7.png')"
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
        '70vw': '80vh',
        't': '5vw',
        '50vh': '50vh',
        'p': '6vw',
        '4vw': '4vw'
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
        '2vw': '2vw',
        '5vw': '10vw',
        'p': '11vw',
        '4vw': '4vw'
      },
      minWidth: {
        '50px': '50px'
      },
      backgroundColor: {
        'dark': '#111111',
        'navy': '#192E54',
        'btn': '#3B4251'
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
      },
      borderColor: {
        'btn': '#3B4251',
        'curr': '#3196DF'
      },
      borderWidth: {
        'width': '0.7vw'
      }
    },
  },
  plugins: [],
}

