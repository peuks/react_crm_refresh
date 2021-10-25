module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      opacity: ["disabled"],
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
