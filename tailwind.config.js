/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        others: "360px",
        iphoneSE: "375px",
        miNote: "390px",
        oneSamPixel: "412px",
        iphoneXR: "414px",
      },
      fontFamily: {
        poppins: "Poppins,sans-serif",
      },
    },
  },
  plugins: [],
};
