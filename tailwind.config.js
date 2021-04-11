module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#FFF5F0",
          reg: "#CC9276",
          med: "#BF876E",
          dark: "#fff",
        },
        bg: {
          ligher: "rgba(194, 142, 125, 0.75)",
          light: "rgba(194, 142, 125, 0.75)",
          reg: "rgba(0, 0, 0, 0.22)",
        },
        boxShadow: {
          lg: "0px 4px 4px 0px rgba(0,0,0,0.25)",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
