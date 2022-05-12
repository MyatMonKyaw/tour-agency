module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      dropShadow: {
        'lg': '0 4px 4px rgba(163, 230, 53, 0.6)',
      },
      flex: {
        '1': '1 1 30rem',
        '2': '1 1 35rem',
        '3': '1 1 50rem',
        '4': '1 1 25rem',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
