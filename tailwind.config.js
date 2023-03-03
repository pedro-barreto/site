/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {
        fmh: "calc(100vh - 7rem)",
        fmhf: "calc(100vh - 14rem)",
      },
      colors: {
        cor1: "#1E3040",
        cor2: "#435C73",
        cor3: "#FFE9F3",
        cor4: "#EEB868",
        cor5: "#A3333D",
      },
    },
  },
};
