/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  plugins: [require("flowbite/plugin")],
  content: [
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        about1:
          "url('https://cinetop.com.br/wp-content/uploads/2020/06/memoriasdeontem.jpg')",
        about2:
          "url('https://assets.b9.com.br/wp-content/uploads/2020/09/chichi.jpg')",
      },
      height: {
        fmh: "calc(100vh - 7rem)",
        fmhf: "calc(100vh - 14rem)",
      },
      colors: {
        cor1: "#EFE6DD",
        cor2: "#75B8C8",
        cor3: "#95A3B3",
        cor4: { 100: "#F3DFA2", 300: "#ECCD6F" },
        cor5: "#A3333D",
      },
      fontFamily: {
        nippo: "Nippo, sans-serif",
        redslit: "Redslit, sans-serif",
      },
      aspectRatio: {
        grid: "12/6",
      },
      maxHeight: {
        fmh: "calc(100vh - 7rem)",
      },
      maxWidth:{
        card: "250px"
      },
      minHeight: {
        "screen/2": "50vh",
      },
    },
  },
};
