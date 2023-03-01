/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      height: {
        fmh: "calc(100vh - 7rem)",
        fmhf: "calc(100vh - 14rem)",
      },
    },
  },
};
