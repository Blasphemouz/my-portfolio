module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      borderRadius: {
        'hf': '300px'
      },
      keyframes: {
        'slide': {
            '0%': {
              opacity: '0',
              transform: 'translateY(100%)'
            },
            '70%': {
              transform: 'translateY(-2%)'
            },
            '100%': {
              opacity: '1',
              transform: 'translateY(0)'
            },
          'fade-in': {
              '0%': {
                opacity: '0'
              },
              '90%' : {
                opacity: '0'
              },
              '100%': {
                opacity: '1'
              }
          }
        },
      },
      animation: {
        'slide': 'slide 1.5s ease-in-out',
        'slide-fast': 'slide 1s ease-in-out',
        'fade-in': 'fade-in 3s ease-in'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}