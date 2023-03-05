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
        cor1: "#1E3040",
        cor2: "#435C73",
        cor3: "#E94F37",
        cor4: "#EEB868",
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
