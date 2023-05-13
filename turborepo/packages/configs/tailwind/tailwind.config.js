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
        "bg": "#242424",
        "fg": "#e2e8f0",

        // -- info
        info: {

        },
        "info-fade-dark": "#365314",
        "info-fade-fg-dark": "#e2e8f0",
        "info-dark": "#3f6212",
        "info-fg-dark": "#e2e8f0",
        "info-pop-dark": "#4d7c0f",
        "info-pop-fg-dark": "#365314",

        // -- warn
        "warning-fade-dark": "##713f12",
        "warning-fade-fg-dark": "#e2e8f0",
        "warning-dark": "##854d0e",
        "warning-fg-dark": "#e2e8f0",
        "warning-pop-dark": "#a16207",
        "warning-pop-fg-dark": "#e2e8f0",

        // -- danger
        "danger-fade-dark": "##7f1d1d",
        "danger-fade-fg-dark": "#e2e8f0",
        "danger-dark": "#991b1b",
        "danger-fg-dark": "#e2e8f0",
        "danger-pop-dark": "##b91c1c",
        "danger-pop-fg-dark": "#e2e8f0",

        // -- brand
        "brand-fade-dark": "##083344",
        "brand-fade-fg-dark": "#e2e8f0",
        "brand-dark": "#164e63",
        "brand-fg-dark": "#e2e8f0",
        "brand-pop-dark": "##155e75",
        "brand-pop-fg-dark": "#e2e8f0",
      }

      // light

    },
    extend: {},
  },
  plugins: [],
};
