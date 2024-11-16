/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kumbhSans: ['"Kumbh Sans"', "sans-serif"],
      },
      colors: {
        primary: {
          orange: "hsl(26, 100%, 55%)",
          paleOrange: "hsl(25, 100%, 94%)",
        },
        neutral: {
          veryDarkBlue: "hsl(220, 13%, 13%)",
          darkGrayishBlue: "hsl(219, 9%, 45%)",
          grayishBlue: "hsl(220, 14%, 75%)",
          lightGrayishBlue: "hsl(223, 64%, 98%)",
          white: "hsl(0, 0%, 100%)",
          blackOpacity: "rgba(0, 0, 0, 0.75)", // Black with 75% opacity for lightbox background
        },
      },
    },
  },
  plugins: [],
};
