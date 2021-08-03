const plugin = require("tailwindcss/plugin");
module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro","ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono","ui-monospace", "SFMono-Regular"]
      },
      colors: {
        "skills": "#F7F7FC",
        "yellow": {
          "50": "#ff10110e",
          "100": "#fffdf0",
          "200": "#fff7b3",
          "300": "#fff27a",
          "400": "#ffec3d",
          "500": "#ffe600",
          "600": "#ccb800",
          "700": "#998a00",
          "800": "#665c00",
          "900": "#332e00"
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addUtilities }){
      const utilities = {
        ".bg-hero" : {
          "background-image": "url(/hero.png)",
          "background-size": "cover",
          "background-position": "bottom",
          "background-repeat": "no-repeat"
        },
        ".bg-contact": {
          "background": "linear-gradient(103.7deg, rgba(79, 63, 245, 0.92) 0%, #7821E6 97.36%)"
        },
        ".shadow-skills": {
          "box-shadow": "0px 15px 30px rgba(0, 0, 0, 0.1)"
        }
      };
      addUtilities(utilities);
    })
  ],
}
