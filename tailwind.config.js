/**
 * @author Samim danesh amoz
 * @email samim.danesh@hotmail.com
 * @create date 2024-01-23 11:22:03
 * @modify date 2024-01-23 11:22:03
 * @desc [description]
 */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        IRANSansX: ["IRANSansX, sans-serif"],
      },

      animation: {
        fullspin: "fullspin 5s linear infinite",
      },
      keyframes: {
        fullspin: {
          "0%": { transform: "rotate(0deg)" },

          "100%": { transform: "rotate(-360deg)" },
        },
      },

    },
  },
  plugins: [],
};
