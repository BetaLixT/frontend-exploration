/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui/**/*.{js,ts,jsx,tsx}",
    "./**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      bermuda: "#78dcca",

      //=======================================================================
      // - dark
      //=======================================================================
      dark: {
        bg: "#242424",
        fg: "#e2e8f0",

        // -- info
        info: {
          100: "#77b922",
          200: "#69a31e",
          300: "#5b8d1a",
          400: "#4d7816",
          500: "#3f6212",
          600: "#314c0e",
          700: "#23370a",
          800: "#152106",
          900: "#070b02",
        },
        infofg: {
          100: "#242424",
          200: "#242424",
          300: "#e2e8f0",
          400: "#e2e8f0",
          500: "#e2e8f0",
          600: "#e2e8f0",
          700: "#e2e8f0",
          800: "#e2e8f0",
          900: "#e2e8f0",
        },

        // -- warn
        warn: {
          100: "#f4842e",
          200: "#f37616",
          300: "#e5690b",
          400: "#cc5e0a",
          500: "#b45309",
          600: "#9c4808",
          700: "#843d07",
          800: "#6b3206",
          900: "#532604",
        },
        warnfg: {
          100: "#242424",
          200: "#242424",
          300: "#242424",
          400: "#e2e8f0",
          500: "#e2e8f0",
          600: "#e2e8f0",
          700: "#e2e8f0",
          800: "#e2e8f0",
          900: "#e2e8f0",
        },

        // -- danger
        danger: {
          100: "#dd3e3e",
          200: "#d92828",
          300: "#c42323",
          400: "#af1f1f",
          500: "#991b1b",
          600: "#831717",
          700: "#6e1313",
          800: "#581010",
          900: "#420c0c",
        },
        dangerfg: {
          100: "#e2e8f0",
          200: "#e2e8f0",
          300: "#e2e8f0",
          400: "#e2e8f0",
          500: "#e2e8f0",
          600: "#e2e8f0",
          700: "#e2e8f0",
          800: "#e2e8f0",
          900: "#e2e8f0",
        },

        // -- brand
        brand: {
          100: "#298fb7",
          200: "#247fa2",
          300: "#1f6f8d",
          400: "#1b5e78",
          500: "#164e63",
          600: "#113e4e",
          700: "#0d2d39",
          800: "#081d24",
          900: "#030c0f",
        },
        brandfg: {
          100: "#e2e8f0",
          200: "#e2e8f0",
          300: "#e2e8f0",
          400: "#e2e8f0",
          500: "#e2e8f0",
          600: "#e2e8f0",
          700: "#e2e8f0",
          800: "#e2e8f0",
          900: "#e2e8f0",
        },
      },

      // light
    },
    extend: {},
  },
  plugins: [],
};
