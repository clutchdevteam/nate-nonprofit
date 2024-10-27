module.exports = {
  mode: "jit",
  content: [
    "storyblok/**/*.{vue,js}",
    "components/**/*.{vue,js}",
    "pages/**/*.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        // blue
        primary: {
          light: "#6FCFC9",
          dark: "#345A88",
          darker: "#274468",
        },
        //green
        secondary: {
          light: "#3A8358",
          dark: "#2C6343",
          darker: "#41624F",
        },
        gray: {
          light: "#f8f8f8",
        },
      },
    },
  },
};
