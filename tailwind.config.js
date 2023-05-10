module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      container: {
        // you can configure the container to be centered
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '8.75rem',
        },
        screens: {
          sm: '600px',
          md: '728px',
          lg: '1440px',
          xl: '1920px',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary': "#00A4FC",
        'themeBlack': '#1B233A',
        'gray': "#999B9F",
        'purple' : '#D633B4'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}