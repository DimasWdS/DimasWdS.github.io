/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['"./public/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        popin: "poppins",
      },
      colors: {
        birumuda: "#00A9FF",
        birugelap: "#3D30A2",
        pucat: "#C2D9FF",
        sehat: "#8E8FFA",
      },
    },
  },
  plugins: [],
};
