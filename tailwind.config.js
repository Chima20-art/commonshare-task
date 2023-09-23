/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        //bgs
        primaryBg: "#F6F7F9",

        //colors
        primary: {
          0: "#FFF",

          500: "#3563E9",
        },

        secondary: {
          300: "#90A3BF",
          400: "#596780",
          500: "#1A202C",
        },

        information: {
          500: "#54A6FF",
        },

        isfavorite: "#ED3F3F",

        //borders
        primaryBorder: "#C3D4E9",
      },
      fontFamily: {
        primary: ["Plus Jakarta Sans", "sans-serif"],
      },
      screens: {
        xl: "1312px",
      },
    },
  },
  plugins: [],
  mode: "jit",
};
