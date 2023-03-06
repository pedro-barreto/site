/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("flowbite/plugin")],
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      height: {
        fmh: "calc(100vh - 7rem)",
        fmhf: "calc(100vh - 14rem)",
      },
      colors: {
        cor1: "#EFE6DD",
        cor2: "#75B8C8",
        cor3: "#D1B3C4",
        cor4: "#F3DFA2",
        cor5: "#A3333D",
      },
      fontFamily: {
        nippo: "Nippo, sans-serif",
      },
      aspectRatio: {
        grid: "12/6",
      },
      maxHeight: {
        fmh: "calc(100vh - 7rem)",
      },
    },
  },
};
